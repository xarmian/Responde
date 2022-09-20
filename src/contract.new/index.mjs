import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

const createAccount = async (who) => {
  const startingBalance = stdlib.parseCurrency(100);

  const acc = await stdlib.newTestAccount(startingBalance);
  const addr = stdlib.formatAddress(acc.getAddress());
  
  console.log(`A new account (${who}) has been generated with ${await getBalance(acc)} tokens and address ${addr}`);
  return acc;
}

const createAttendee = async (who, ctcInfo) => {
  console.log('');

  const acc = await createAccount(who);
  console.log(`${who} is joining the contract...`);
  const ctcAttacher = acc.contract(backend, ctcInfo);

  const organizerAddress = stdlib.formatAddress((await ctcAttacher.v.organizerAddress())[1]);
  console.log(`${who} sees that ${organizerAddress} is the Organizer`);

  // read view of current attachers array
  let networkTokenFee = (await ctcAttacher.v.networkTokenFee())[1];
  let numAttendees = (await ctcAttacher.v.numAttendees())[1];
  let maxAttendees = (await ctcAttacher.v.maxAttendees())[1];

  console.log(`The ticket price is ${stdlib.formatCurrency(networkTokenFee)}, and there are ${maxAttendees - numAttendees} tickets available.`);

  const didBuyTicket = await ctcAttacher.a.AttendeeAPI.buyTicket();
  if (didBuyTicket) {
    console.log(`${who} purchased a ticket successfully`);
  }
}

const interactive = (async () => {
  const isDeployer = await ask.ask(`Are you deploying the contract?`,ask.yesno);

  if (isDeployer) {
    const acc = await createAccount('Alice');
    console.log('Alice is Deploying the contract...');
    const ctcDeployer = await acc.contract(backend);

    await Promise.all([
      backend.Deployer(ctcDeployer, {
        notifyDeployed: async () => {
          const ctcInfoD = JSON.stringify(await ctcDeployer.getInfo());
          console.log(`Alice is ready to accept attachers...`);
          console.log(`The contract has deployed as: ${ctcInfoD}`);
        },
        seeAttachment: (addr) => {
          console.log(`Alice sees address ${stdlib.formatAddress(addr)} has attached to the contract.`);
        },
        seeAttachmentFail: (addr) => {
          console.log(`Alice sees that ${stdlib.formatAddress(addr)} tried but was unable to join the contract.`);
        }
      }),
    ]);

  }
  else {
    const ctcInfoA = await ask.ask(`Enter the contract string:`,JSON.parse);

    for(let i = 1; i <= 3; i++) {
      await createAttendee(`Bob${i}`,ctcInfoA);
    }

  }

  process.exit();
});

const noninteractive = (async () => {
  const acc = await createAccount('Alice');
  console.log('The Host is Deploying the contract...');
  const ctc = await acc.contract(backend);

  const tmptoken = await stdlib.launchToken(acc, "temptok", "TMP");
  acc.tokenAccept(tmptoken.id);

  await Promise.all([
    backend.Deployer(ctc, {
      ready: async () => {
        const ctcInfo = await ctc.getInfo();
        console.log(`The contract has deployed as: ${JSON.stringify(ctcInfo)}`);
        console.log('');

        ctc.events.seeTicketPurchase.monitor(function({when, what}) {
          let addr = stdlib.formatAddress(what[0]);
          console.log(`${parseInt(when)}: Ticket Purchase by ${addr} for ${stdlib.formatCurrency(what[1])}`);

          if (Math.random() < 0.5) {
            console.log(`${addr} is being checked in.`);
            ctc.a.OrganizerAPI.doCheckin(stdlib.formatAddress(addr));
          }
          else {
            console.log(`${addr} has missed the event.`);
          }
        });
            
        let x = false;
        ctc.events.seeCheckin.monitor(function({when, what}) {
          console.log(`${parseInt(when)}: Checkin of ${stdlib.formatAddress(what[0])} by ${stdlib.formatAddress(what[1])}`);
          if (!x) {
            ctc.a.OrganizerAPI.closeTicketSales();
            ctc.a.OrganizerAPI.closeEvent();
            x = true;
          }
        });

        for(let i = 1; i <= 3; i++) {
          await createAttendee(`Attendee${i}`,ctcInfo);
        }

      },
      platformFee: 1,
      organizerAddress: acc.getAddress(),
      networkTokenFee: stdlib.parseCurrency(25),
      nonnetToken: tmptoken.id,
      nonnetTokenFee: 0,
      rewardType: 0,
      maxAttendees: 20,
    }),
  ]);

  process.exit();
});

const doInteractive = await ask.ask('Do you want to run in Interactive Mode?',ask.yesno);
if (doInteractive) {
  console.log('');
  console.log('Running in interactive mode...');
  console.log('');
  interactive();
}
else {
  console.log('');
  console.log('Running in non-interactive mode...');
  console.log('');
  noninteractive();
}
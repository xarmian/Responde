'reach 0.1';
'use strict';

/* eslint-disable */
const [ isRewardType, IS_POOL, IS_REFUND, IS_FLAT ] = makeEnum(3);

export const main = Reach.App(() => {

  setOptions({ connectors: [ ALGO ], untrustworthyMaps: true });

  const Deployer = Participant('Deployer', {
    ready: Fun([], Null),
    platformFee: UInt,
    organizerAddress: Address,
    networkTokenFee: UInt,
    nonnetToken: Token,
    nonnetTokenFee: UInt,
    rewardType: UInt,
    maxAttendees: UInt,
  });

  const OrganizerAPI = API('OrganizerAPI', {
    doCheckin: Fun([Address], Bool),
    closeTicketSales: Fun([], Null),
    closeEvent: Fun([], Null),
  });

  const AttendeeAPI = API('AttendeeAPI', {
    buyTicket: Fun([], Bool), // return true if ticket purchased
    doCheckin: Fun([], Bool), // return true if checked in
    claimRewards: Fun([], Null),
  });

  const V = View({
    platformFee: UInt,
    organizerAddress: Address,
    networkTokenFee: UInt,
    nonnetToken: Token,
    nonnetTokenFee: UInt,
    rewardType: UInt,
    maxAttendees: UInt,
    numAttendees: UInt,
    totalStaked: Tuple(UInt, UInt), // network and non-network tokens
    numCheckedin: UInt,
    numClaimed: UInt,
    isCheckedIn: Fun([Address], Bool),
    isAttendee: Fun([Address], Bool),
    hasClaimedReward: Fun([Address], Bool),
    salesOpen: Bool,
    eventEnded: Bool,
  });

  const E = Events({
    seeTicketPurchase: [Address, UInt, UInt], // address buying ticket, amount paid (network tokens), amount paid (non-network tokens)
    seeCheckin: [Address, Address], // address being checked in, address doing checkin (organizer or self)
    seeClaimReward: [Address],
  });

  init();

  Deployer.only(() => {
    const platformFee = declassify(interact.platformFee);
    const organizerAddress = declassify(interact.organizerAddress);
    const networkTokenFee = declassify(interact.networkTokenFee);
    const nonnetToken = declassify(interact.nonnetToken);
    const nonnetTokenFee = declassify(interact.nonnetTokenFee);
    const rewardType = declassify(interact.rewardType);
    const maxAttendees = declassify(interact.maxAttendees);
  });
  Deployer.publish(platformFee, organizerAddress, networkTokenFee, nonnetToken, nonnetTokenFee, rewardType, maxAttendees);
  Deployer.interact.ready();

  V.platformFee.set(platformFee);
  V.organizerAddress.set(organizerAddress);
  V.networkTokenFee.set(networkTokenFee);
  V.nonnetToken.set(nonnetToken);
  V.nonnetTokenFee.set(nonnetTokenFee);
  V.rewardType.set(rewardType);
  V.maxAttendees.set(maxAttendees);

  const Attendees = new Set();
  const CheckinList = new Set();
  const ClaimList = new Set();

  V.isAttendee.set((addr) => Attendees.member(addr));
  V.isCheckedIn.set((addr) => CheckinList.member(addr));
  V.hasClaimedReward.set((addr) => ClaimList.member(addr));

  const [ done, numAttendees, numCheckedin, numClaimed, totalStakedNetwork, totalStakedNonnetwork, salesOpen, eventEnded ] = parallelReduce([ false, 0, 0, 0, 0, 0, true, false ])
      .define(() => { 
        V.numAttendees.set(numAttendees);
        V.numCheckedin.set(numCheckedin);
        V.numClaimed.set(numClaimed);
        V.totalStaked.set([totalStakedNetwork, totalStakedNonnetwork]);
        V.salesOpen.set(salesOpen);
        V.eventEnded.set(eventEnded);
      })
      .invariant(numAttendees <= maxAttendees)
      .while(!done)
      .api_(
        AttendeeAPI.buyTicket, () => {
          check(this != organizerAddress, 'The organizer cannot buy a ticket');
          check(!Attendees.member(this),'You already bought a ticket');
          check(numAttendees < maxAttendees, 'Tickets are sold out');
          check(salesOpen, 'Ticket sales have been closed');

          return [ [ networkTokenFee, [ nonnetTokenFee, nonnetToken ] ], (k) => {
            k(true);
            E.seeTicketPurchase(this, networkTokenFee, nonnetTokenFee);
            Attendees.insert(this);
            return [ done, numAttendees + 1, numCheckedin, numClaimed, totalStakedNetwork + networkTokenFee, totalStakedNonnetwork + nonnetTokenFee, salesOpen, eventEnded ];
          }];
        }
      )
      .api_(
        AttendeeAPI.doCheckin, () => {
          check(this != organizerAddress, 'The organizer cannot check in using this API call');
          check(!Attendees.member(this), 'You do not have a ticket');
          check(!CheckinList.member(this), 'You have already checked in');
          check(!eventEnded, 'The event has ended, no more checkins are allowed');
          
          return [ [ 0, [ 0, nonnetToken ] ], (k) => {
            k(true);
            E.seeCheckin(this, this);
            CheckinList.insert(this);
            return [ done, numAttendees, numCheckedin + 1, numClaimed, totalStakedNetwork, totalStakedNonnetwork, salesOpen, eventEnded ];
          }];
        }
      )
      .api_(
        AttendeeAPI.claimRewards, () => {
          check(eventEnded, 'The event has not yet ended.');
          check(Attendees.member(this), 'You do not have a ticket');
          check(CheckinList.member(this), 'You were not checked in for the event');
          check(!ClaimList.member(this), 'You have already claimed your reward');

          return [ [ 0, [ 0, nonnetToken ] ], (k) => {
            k(null);
            E.seeClaimReward(this);
            ClaimList.insert(this);
            const isDone = (numCheckedin == (numClaimed + 1));
            return [ isDone, numAttendees, numCheckedin, numClaimed + 1, totalStakedNetwork, totalStakedNonnetwork, salesOpen, eventEnded ];
          }];
        }
      )
      .api_(
        OrganizerAPI.doCheckin, (addr) => {
          check(this == organizerAddress, 'Only the organizer may use this API call');
          check(Attendees.member(addr), 'The provided address is not an Attendee');
          check(!CheckinList.member(addr), 'The provided address is already checked in');
          check(!eventEnded, 'The event has ended, no more checkins are allowed');

          return [ [ 0, [ 0, nonnetToken ] ], (k) => {
            k(true);
            E.seeCheckin(addr, this);
            CheckinList.insert(addr);
            return [ done, numAttendees, numCheckedin + 1, numClaimed, totalStakedNetwork, totalStakedNonnetwork, salesOpen, eventEnded ];
          }];
        }
      )
      .api_(
        OrganizerAPI.closeTicketSales, () => {
          check(this == organizerAddress, 'Only the organizer may use this API call');

          return [ [ 0, [ 0, nonnetToken ] ], (k) => {
            k(null);
            return [ done, numAttendees, numCheckedin, numClaimed, totalStakedNetwork, totalStakedNonnetwork, false, eventEnded ]
          }]
        }
      )
      .api_(
        OrganizerAPI.closeEvent, () => {
          check(this == organizerAddress, 'Only the organizer may use this API call');

          return [ [ 0, [ 0, nonnetToken ] ], (k) => {
            k(null);
            return [ done, numAttendees, numCheckedin, numClaimed, totalStakedNetwork, totalStakedNonnetwork, false, true ]
          }]
        }
      );

  transfer(balance()).to(organizerAddress);
  transfer(balance(nonnetToken), nonnetToken).to(organizerAddress);
  commit();

  exit();
});

// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  return {
    seeCheckin: [ctc0, ctc0],
    seeClaimReward: [ctc0],
    seeTicketPurchase: [ctc0, ctc1, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc8
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc9;
  
  const map2_ctc = ctc9;
  
  
  const _eventEnded = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4705;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasClaimedReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async (_v4700 ) => {
          const v4700 = stdlib.protect(ctc1, _v4700, null);
        
        const v4701 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, v4700), null);
        const v4702 = {
          None: 0,
          Some: 1
          }[v4701[0]];
        const v4703 = stdlib.eq(v4702, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4703;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isAttendee = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async (_v4692 ) => {
          const v4692 = stdlib.protect(ctc1, _v4692, null);
        
        const v4693 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v4692), null);
        const v4694 = {
          None: 0,
          Some: 1
          }[v4693[0]];
        const v4695 = stdlib.eq(v4694, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4695;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isCheckedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async (_v4696 ) => {
          const v4696 = stdlib.protect(ctc1, _v4696, null);
        
        const v4697 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v4696), null);
        const v4698 = {
          None: 0,
          Some: 1
          }[v4697[0]];
        const v4699 = stdlib.eq(v4698, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v4699;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _maxAttendees = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4684;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _networkTokenFee = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4680;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _nonnetToken = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4681;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _nonnetTokenFee = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4682;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _numAttendees = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4706;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _numCheckedin = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4707;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _numClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4708;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _organizerAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4679;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _platformFee = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4678;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _rewardType = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4683;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _salesOpen = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        
        return v4709;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _totalStaked = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = svs;
      return (await ((async () => {
        
        const v4718 = [v4710, v4711];
        
        return v4718;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      eventEnded: {
        decode: _eventEnded,
        ty: ctc4
        },
      hasClaimedReward: {
        decode: _hasClaimedReward,
        ty: ctc4
        },
      isAttendee: {
        decode: _isAttendee,
        ty: ctc4
        },
      isCheckedIn: {
        decode: _isCheckedIn,
        ty: ctc4
        },
      maxAttendees: {
        decode: _maxAttendees,
        ty: ctc0
        },
      networkTokenFee: {
        decode: _networkTokenFee,
        ty: ctc0
        },
      nonnetToken: {
        decode: _nonnetToken,
        ty: ctc2
        },
      nonnetTokenFee: {
        decode: _nonnetTokenFee,
        ty: ctc0
        },
      numAttendees: {
        decode: _numAttendees,
        ty: ctc0
        },
      numCheckedin: {
        decode: _numCheckedin,
        ty: ctc0
        },
      numClaimed: {
        decode: _numClaimed,
        ty: ctc0
        },
      organizerAddress: {
        decode: _organizerAddress,
        ty: ctc1
        },
      platformFee: {
        decode: _platformFee,
        ty: ctc0
        },
      rewardType: {
        decode: _rewardType,
        ty: ctc0
        },
      salesOpen: {
        decode: _salesOpen,
        ty: ctc4
        },
      totalStaked: {
        decode: _totalStaked,
        ty: ctc7
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc0, ctc0, ctc3, ctc4, ctc4, ctc0, ctc0, ctc0, ctc4, ctc0, ctc0, ctc6, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _AttendeeAPI_buyTicket3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_buyTicket3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_buyTicket3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc9,
    AttendeeAPI_claimRewards0_91: ctc9,
    AttendeeAPI_doCheckin0_91: ctc9,
    OrganizerAPI_closeEvent0_91: ctc9,
    OrganizerAPI_closeTicketSales0_91: ctc9,
    OrganizerAPI_doCheckin0_91: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4719 = ctc.selfAddress();
  const v4721 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_buyTicket0_91" (defined at: ./index.rsh:100:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'AttendeeAPI_buyTicket'
    });
  const v4722 = stdlib.addressEq(v4719, v4679);
  const v4723 = v4722 ? false : true;
  stdlib.assert(v4723, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:102:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_buyTicket0_91" (defined at: ./index.rsh:100:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The organizer cannot buy a ticket',
    who: 'AttendeeAPI_buyTicket'
    });
  const v4725 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4719), null);
  const v4726 = {
    None: 0,
    Some: 1
    }[v4725[0]];
  const v4727 = stdlib.eq(v4726, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4728 = v4727 ? false : true;
  stdlib.assert(v4728, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_buyTicket0_91" (defined at: ./index.rsh:100:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You already bought a ticket',
    who: 'AttendeeAPI_buyTicket'
    });
  const v4730 = stdlib.lt(v4706, v4684);
  stdlib.assert(v4730, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:104:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_buyTicket0_91" (defined at: ./index.rsh:100:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'Tickets are sold out',
    who: 'AttendeeAPI_buyTicket'
    });
  stdlib.assert(v4709, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_buyTicket0_91" (defined at: ./index.rsh:100:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'Ticket sales have been closed',
    who: 'AttendeeAPI_buyTicket'
    });
  const v4736 = ['AttendeeAPI_buyTicket0_91', v4721];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4736],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v4680, [[v4682, v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AttendeeAPI_buyTicket"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4928), null);
          const v5041 = stdlib.safeAdd(v4715, v4680);
          sim_r.txns.push({
            amt: v4680,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6550 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6556 = stdlib.tokenEq(v6550, v4681);
          const v6559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6561 = v6556 ? v6560 : v6559;
          const v5055 = v6561[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v5057 = v4714[v5055];
          const v5058 = v5057[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v5059 = stdlib.safeAdd(v5058, v4682);
          const v5076 = stdlib.Array_set(v5057, '0', v5059);
          const v5077 = stdlib.Array_set(v4714, v5055, v5076);
          sim_r.txns.push({
            amt: v4682,
            kind: 'to',
            tok: v4681
            });
          const v5090 = true;
          const v5091 = await txn1.getOutput('AttendeeAPI_buyTicket', 'v5090', ctc6, v5090);
          
          null;
          await stdlib.simMapSet(sim_r, 0, v4928, null);
          const v5097 = stdlib.safeAdd(v4706, stdlib.checkedBigNumberify('./index.rsh:111:43:decimal', stdlib.UInt_max, '1'));
          const v5098 = stdlib.safeAdd(v4710, v4680);
          const v5099 = stdlib.safeAdd(v4711, v4682);
          const v8167 = v4704;
          const v8168 = v4705;
          const v8169 = v5097;
          const v8170 = v4707;
          const v8171 = v4708;
          const v8172 = true;
          const v8173 = v5098;
          const v8174 = v5099;
          const v8176 = v5077;
          const v8177 = v5041;
          if (v4704) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8179 = v5077[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8180 = v8179[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      undefined /* setApiDetails */;
      const v4937 = stdlib.addressEq(v4928, v4679);
      const v4938 = v4937 ? false : true;
      stdlib.assert(v4938, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:102:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The organizer cannot buy a ticket',
        who: 'AttendeeAPI_buyTicket'
        });
      const v4940 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
      const v4941 = {
        None: 0,
        Some: 1
        }[v4940[0]];
      const v4942 = stdlib.eq(v4941, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v4943 = v4942 ? false : true;
      stdlib.assert(v4943, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:103:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You already bought a ticket',
        who: 'AttendeeAPI_buyTicket'
        });
      const v4945 = stdlib.lt(v4706, v4684);
      stdlib.assert(v4945, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:104:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'Tickets are sold out',
        who: 'AttendeeAPI_buyTicket'
        });
      stdlib.assert(v4709, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'Ticket sales have been closed',
        who: 'AttendeeAPI_buyTicket'
        });
      const v5041 = stdlib.safeAdd(v4715, v4680);
      ;
      const v6550 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6556 = stdlib.tokenEq(v6550, v4681);
      const v6559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6561 = v6556 ? v6560 : v6559;
      const v5055 = v6561[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v5057 = v4714[v5055];
      const v5058 = v5057[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v5059 = stdlib.safeAdd(v5058, v4682);
      const v5076 = stdlib.Array_set(v5057, '0', v5059);
      const v5077 = stdlib.Array_set(v4714, v5055, v5076);
      ;
      const v5090 = true;
      const v5091 = await txn1.getOutput('AttendeeAPI_buyTicket', 'v5090', ctc6, v5090);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v4932, v5091), {
          at: './index.rsh:101:9:application',
          fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:9:function exp)', 'at ./index.rsh:108:14:application call to "k" (defined at: ./index.rsh:107:78:function exp)', 'at ./index.rsh:107:78:application call to [unknown function] (defined at: ./index.rsh:107:78:function exp)'],
          msg: 'out',
          who: 'AttendeeAPI_buyTicket'
          });
        }
      else {
        }
      
      null;
      await stdlib.mapSet(map0, v4928, null);
      const v5097 = stdlib.safeAdd(v4706, stdlib.checkedBigNumberify('./index.rsh:111:43:decimal', stdlib.UInt_max, '1'));
      const v5098 = stdlib.safeAdd(v4710, v4680);
      const v5099 = stdlib.safeAdd(v4711, v4682);
      const v8167 = v4704;
      const v8168 = v4705;
      const v8169 = v5097;
      const v8170 = v4707;
      const v8171 = v4708;
      const v8172 = true;
      const v8173 = v5098;
      const v8174 = v5099;
      const v8176 = v5077;
      const v8177 = v5041;
      if (v4704) {
        ;
        const v8179 = v5077[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8180 = v8179[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AttendeeAPI_claimRewards3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_claimRewards3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_claimRewards3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc9,
    AttendeeAPI_claimRewards0_91: ctc9,
    AttendeeAPI_doCheckin0_91: ctc9,
    OrganizerAPI_closeEvent0_91: ctc9,
    OrganizerAPI_closeTicketSales0_91: ctc9,
    OrganizerAPI_doCheckin0_91: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4761 = ctc.selfAddress();
  const v4763 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_claimRewards0_91" (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'AttendeeAPI_claimRewards'
    });
  stdlib.assert(v4705, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:132:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_claimRewards0_91" (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The event has not yet ended.',
    who: 'AttendeeAPI_claimRewards'
    });
  const v4765 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4761), null);
  const v4766 = {
    None: 0,
    Some: 1
    }[v4765[0]];
  const v4767 = stdlib.eq(v4766, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_claimRewards0_91" (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You do not have a ticket',
    who: 'AttendeeAPI_claimRewards'
    });
  const v4769 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4761), null);
  const v4770 = {
    None: 0,
    Some: 1
    }[v4769[0]];
  const v4771 = stdlib.eq(v4770, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4771, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_claimRewards0_91" (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You were not checked in for the event',
    who: 'AttendeeAPI_claimRewards'
    });
  const v4773 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v4761), null);
  const v4774 = {
    None: 0,
    Some: 1
    }[v4773[0]];
  const v4775 = stdlib.eq(v4774, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4776 = v4775 ? false : true;
  stdlib.assert(v4776, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_claimRewards0_91" (defined at: ./index.rsh:130:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You have already claimed your reward',
    who: 'AttendeeAPI_claimRewards'
    });
  const v4781 = ['AttendeeAPI_claimRewards0_91', v4763];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4781],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:137:27:decimal', stdlib.UInt_max, '0'), v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AttendeeAPI_claimRewards"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4928), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v4928), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v4928), null);
          ;
          const v6574 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6580 = stdlib.tokenEq(v6574, v4681);
          const v6583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6585 = v6580 ? v6584 : v6583;
          const v5321 = v6585[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v5323 = v4714[v5321];
          const v5324 = v5323[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v5342 = stdlib.Array_set(v5323, '0', v5324);
          const v5343 = stdlib.Array_set(v4714, v5321, v5342);
          ;
          const v5382 = null;
          const v5383 = await txn1.getOutput('AttendeeAPI_claimRewards', 'v5382', ctc0, v5382);
          
          null;
          await stdlib.simMapSet(sim_r, 2, v4928, null);
          const v5389 = stdlib.safeAdd(v4708, stdlib.checkedBigNumberify('./index.rsh:141:59:decimal', stdlib.UInt_max, '1'));
          const v5390 = stdlib.eq(v4707, v5389);
          const v8265 = v5390;
          const v8266 = true;
          const v8267 = v4706;
          const v8268 = v4707;
          const v8269 = v5389;
          const v8270 = v4709;
          const v8271 = v4710;
          const v8272 = v4711;
          const v8274 = v5343;
          const v8275 = v4715;
          if (v5390) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8277 = v5343[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8278 = v8277[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      undefined /* setApiDetails */;
      stdlib.assert(v4705, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:132:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The event has not yet ended.',
        who: 'AttendeeAPI_claimRewards'
        });
      const v5222 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
      const v5223 = {
        None: 0,
        Some: 1
        }[v5222[0]];
      const v5224 = stdlib.eq(v5223, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5224, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:133:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You do not have a ticket',
        who: 'AttendeeAPI_claimRewards'
        });
      const v5226 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4928), null);
      const v5227 = {
        None: 0,
        Some: 1
        }[v5226[0]];
      const v5228 = stdlib.eq(v5227, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5228, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:134:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You were not checked in for the event',
        who: 'AttendeeAPI_claimRewards'
        });
      const v5230 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v4928), null);
      const v5231 = {
        None: 0,
        Some: 1
        }[v5230[0]];
      const v5232 = stdlib.eq(v5231, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5233 = v5232 ? false : true;
      stdlib.assert(v5233, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:135:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You have already claimed your reward',
        who: 'AttendeeAPI_claimRewards'
        });
      ;
      const v6574 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6580 = stdlib.tokenEq(v6574, v4681);
      const v6583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6585 = v6580 ? v6584 : v6583;
      const v5321 = v6585[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v5323 = v4714[v5321];
      const v5324 = v5323[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v5342 = stdlib.Array_set(v5323, '0', v5324);
      const v5343 = stdlib.Array_set(v4714, v5321, v5342);
      ;
      const v5382 = null;
      const v5383 = await txn1.getOutput('AttendeeAPI_claimRewards', 'v5382', ctc0, v5382);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v5198, v5383), {
          at: './index.rsh:131:9:application',
          fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:9:function exp)', 'at ./index.rsh:138:14:application call to "k" (defined at: ./index.rsh:137:51:function exp)', 'at ./index.rsh:137:51:application call to [unknown function] (defined at: ./index.rsh:137:51:function exp)'],
          msg: 'out',
          who: 'AttendeeAPI_claimRewards'
          });
        }
      else {
        }
      
      null;
      await stdlib.mapSet(map2, v4928, null);
      const v5389 = stdlib.safeAdd(v4708, stdlib.checkedBigNumberify('./index.rsh:141:59:decimal', stdlib.UInt_max, '1'));
      const v5390 = stdlib.eq(v4707, v5389);
      const v8265 = v5390;
      const v8266 = true;
      const v8267 = v4706;
      const v8268 = v4707;
      const v8269 = v5389;
      const v8270 = v4709;
      const v8271 = v4710;
      const v8272 = v4711;
      const v8274 = v5343;
      const v8275 = v4715;
      if (v5390) {
        ;
        const v8277 = v5343[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8278 = v8277[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AttendeeAPI_doCheckin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_doCheckin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AttendeeAPI_doCheckin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc9,
    AttendeeAPI_claimRewards0_91: ctc9,
    AttendeeAPI_doCheckin0_91: ctc9,
    OrganizerAPI_closeEvent0_91: ctc9,
    OrganizerAPI_closeTicketSales0_91: ctc9,
    OrganizerAPI_doCheckin0_91: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4738 = ctc.selfAddress();
  const v4740 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_doCheckin0_91" (defined at: ./index.rsh:115:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'AttendeeAPI_doCheckin'
    });
  const v4741 = stdlib.addressEq(v4738, v4679);
  const v4742 = v4741 ? false : true;
  stdlib.assert(v4742, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_doCheckin0_91" (defined at: ./index.rsh:115:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The organizer cannot check in using this API call',
    who: 'AttendeeAPI_doCheckin'
    });
  const v4744 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4738), null);
  const v4745 = {
    None: 0,
    Some: 1
    }[v4744[0]];
  const v4746 = stdlib.eq(v4745, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4747 = v4746 ? false : true;
  stdlib.assert(v4747, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_doCheckin0_91" (defined at: ./index.rsh:115:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You do not have a ticket',
    who: 'AttendeeAPI_doCheckin'
    });
  const v4749 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4738), null);
  const v4750 = {
    None: 0,
    Some: 1
    }[v4749[0]];
  const v4751 = stdlib.eq(v4750, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4752 = v4751 ? false : true;
  stdlib.assert(v4752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_doCheckin0_91" (defined at: ./index.rsh:115:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'You have already checked in',
    who: 'AttendeeAPI_doCheckin'
    });
  const v4754 = v4705 ? false : true;
  stdlib.assert(v4754, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:120:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to "runAttendeeAPI_doCheckin0_91" (defined at: ./index.rsh:115:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The event has ended, no more checkins are allowed',
    who: 'AttendeeAPI_doCheckin'
    });
  const v4759 = ['AttendeeAPI_doCheckin0_91', v4740];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4759],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:122:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:122:27:decimal', stdlib.UInt_max, '0'), v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AttendeeAPI_doCheckin"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4928), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v4928), null);
          ;
          const v6598 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6604 = stdlib.tokenEq(v6598, v4681);
          const v6607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6609 = v6604 ? v6608 : v6607;
          const v5587 = v6609[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v5589 = v4714[v5587];
          const v5590 = v5589[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v5608 = stdlib.Array_set(v5589, '0', v5590);
          const v5609 = stdlib.Array_set(v4714, v5587, v5608);
          ;
          const v5675 = true;
          const v5676 = await txn1.getOutput('AttendeeAPI_doCheckin', 'v5675', ctc6, v5675);
          
          null;
          await stdlib.simMapSet(sim_r, 1, v4928, null);
          const v5682 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, '1'));
          const v8363 = v4704;
          const v8364 = v4705;
          const v8365 = v4706;
          const v8366 = v5682;
          const v8367 = v4708;
          const v8368 = v4709;
          const v8369 = v4710;
          const v8370 = v4711;
          const v8372 = v5609;
          const v8373 = v4715;
          if (v4704) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8375 = v5609[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8376 = v8375[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      undefined /* setApiDetails */;
      const v5508 = stdlib.addressEq(v4928, v4679);
      const v5509 = v5508 ? false : true;
      stdlib.assert(v5509, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The organizer cannot check in using this API call',
        who: 'AttendeeAPI_doCheckin'
        });
      const v5511 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
      const v5512 = {
        None: 0,
        Some: 1
        }[v5511[0]];
      const v5513 = stdlib.eq(v5512, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5514 = v5513 ? false : true;
      stdlib.assert(v5514, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You do not have a ticket',
        who: 'AttendeeAPI_doCheckin'
        });
      const v5516 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4928), null);
      const v5517 = {
        None: 0,
        Some: 1
        }[v5516[0]];
      const v5518 = stdlib.eq(v5517, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5519 = v5518 ? false : true;
      stdlib.assert(v5519, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'You have already checked in',
        who: 'AttendeeAPI_doCheckin'
        });
      const v5521 = v4705 ? false : true;
      stdlib.assert(v5521, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:120:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The event has ended, no more checkins are allowed',
        who: 'AttendeeAPI_doCheckin'
        });
      ;
      const v6598 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6604 = stdlib.tokenEq(v6598, v4681);
      const v6607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6609 = v6604 ? v6608 : v6607;
      const v5587 = v6609[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v5589 = v4714[v5587];
      const v5590 = v5589[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v5608 = stdlib.Array_set(v5589, '0', v5590);
      const v5609 = stdlib.Array_set(v4714, v5587, v5608);
      ;
      const v5675 = true;
      const v5676 = await txn1.getOutput('AttendeeAPI_doCheckin', 'v5675', ctc6, v5675);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v5464, v5676), {
          at: './index.rsh:116:9:application',
          fs: ['at ./index.rsh:116:9:application call to [unknown function] (defined at: ./index.rsh:116:9:function exp)', 'at ./index.rsh:123:14:application call to "k" (defined at: ./index.rsh:122:51:function exp)', 'at ./index.rsh:122:51:application call to [unknown function] (defined at: ./index.rsh:122:51:function exp)'],
          msg: 'out',
          who: 'AttendeeAPI_doCheckin'
          });
        }
      else {
        }
      
      null;
      await stdlib.mapSet(map1, v4928, null);
      const v5682 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, '1'));
      const v8363 = v4704;
      const v8364 = v4705;
      const v8365 = v4706;
      const v8366 = v5682;
      const v8367 = v4708;
      const v8368 = v4709;
      const v8369 = v4710;
      const v8370 = v4711;
      const v8372 = v5609;
      const v8373 = v4715;
      if (v4704) {
        ;
        const v8375 = v5609[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8376 = v8375[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc5,
    AttendeeAPI_claimRewards0_91: ctc5,
    AttendeeAPI_doCheckin0_91: ctc5,
    OrganizerAPI_closeEvent0_91: ctc5,
    OrganizerAPI_closeTicketSales0_91: ctc5,
    OrganizerAPI_doCheckin0_91: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v4663 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v4664 = [v4663];
  const v4665 = [stdlib.Token_zero];
  const v4668 = stdlib.protect(ctc2, interact.maxAttendees, 'for Deployer\'s interact field maxAttendees');
  const v4669 = stdlib.protect(ctc2, interact.networkTokenFee, 'for Deployer\'s interact field networkTokenFee');
  const v4670 = stdlib.protect(ctc3, interact.nonnetToken, 'for Deployer\'s interact field nonnetToken');
  const v4671 = stdlib.protect(ctc2, interact.nonnetTokenFee, 'for Deployer\'s interact field nonnetTokenFee');
  const v4672 = stdlib.protect(ctc4, interact.organizerAddress, 'for Deployer\'s interact field organizerAddress');
  const v4673 = stdlib.protect(ctc2, interact.platformFee, 'for Deployer\'s interact field platformFee');
  const v4674 = stdlib.protect(ctc2, interact.rewardType, 'for Deployer\'s interact field rewardType');
  
  const txn1 = await (ctc.sendrecv({
    args: [v4673, v4672, v4669, v4670, v4671, v4674, v4668],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc4, ctc2, ctc3, ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4678, v4679, v4680, v4681, v4682, v4683, v4684], secs: v4686, time: v4685, didSend: v39, from: v4677 } = txn1;
      
      const v4687 = v4664[stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0')];
      const v4688 = stdlib.Array_set(v4687, '0', stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'));
      const v4689 = stdlib.Array_set(v4664, stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'), v4688);
      const v4690 = stdlib.Array_set(v4665, stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'), v4681);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v4681
        });
      ;
      
      const v4704 = false;
      const v4705 = false;
      const v4706 = stdlib.checkedBigNumberify('./index.rsh:89:150:decimal', stdlib.UInt_max, '0');
      const v4707 = stdlib.checkedBigNumberify('./index.rsh:89:153:decimal', stdlib.UInt_max, '0');
      const v4708 = stdlib.checkedBigNumberify('./index.rsh:89:156:decimal', stdlib.UInt_max, '0');
      const v4709 = true;
      const v4710 = stdlib.checkedBigNumberify('./index.rsh:89:159:decimal', stdlib.UInt_max, '0');
      const v4711 = stdlib.checkedBigNumberify('./index.rsh:89:162:decimal', stdlib.UInt_max, '0');
      const v4712 = v4685;
      const v4714 = v4689;
      const v4715 = stdlib.checkedBigNumberify('./index.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v4717 = v4704 ? false : true;
        
        return v4717;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v4679,
          tok: undefined /* Nothing */
          });
        const v6534 = v4714[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v6535 = v6534[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v4679,
          tok: v4681
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v4681
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc4, ctc2, ctc3, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v4678, v4679, v4680, v4681, v4682, v4683, v4684], secs: v4686, time: v4685, didSend: v39, from: v4677 } = txn1;
  const v4687 = v4664[stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0')];
  const v4688 = stdlib.Array_set(v4687, '0', stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'));
  const v4689 = stdlib.Array_set(v4664, stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'), v4688);
  const v4690 = stdlib.Array_set(v4665, stdlib.checkedBigNumberify('./index.rsh:70:12:dot', stdlib.UInt_max, '0'), v4681);
  ;
  ;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:71:26:application',
    fs: ['at ./index.rsh:71:26:application call to [unknown function] (defined at: ./index.rsh:71:26:function exp)', 'at ./index.rsh:71:26:application call to "liftedInteract" (defined at: ./index.rsh:71:26:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  let v4704 = false;
  let v4705 = false;
  let v4706 = stdlib.checkedBigNumberify('./index.rsh:89:150:decimal', stdlib.UInt_max, '0');
  let v4707 = stdlib.checkedBigNumberify('./index.rsh:89:153:decimal', stdlib.UInt_max, '0');
  let v4708 = stdlib.checkedBigNumberify('./index.rsh:89:156:decimal', stdlib.UInt_max, '0');
  let v4709 = true;
  let v4710 = stdlib.checkedBigNumberify('./index.rsh:89:159:decimal', stdlib.UInt_max, '0');
  let v4711 = stdlib.checkedBigNumberify('./index.rsh:89:162:decimal', stdlib.UInt_max, '0');
  let v4712 = v4685;
  let v4714 = v4689;
  let v4715 = stdlib.checkedBigNumberify('./index.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v4717 = v4704 ? false : true;
    
    return v4717;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn2;
    switch (v4929[0]) {
      case 'AttendeeAPI_buyTicket0_91': {
        const v4932 = v4929[1];
        undefined /* setApiDetails */;
        const v4937 = stdlib.addressEq(v4928, v4679);
        const v4938 = v4937 ? false : true;
        stdlib.assert(v4938, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:102:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The organizer cannot buy a ticket',
          who: 'Deployer'
          });
        const v4940 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
        const v4941 = {
          None: 0,
          Some: 1
          }[v4940[0]];
        const v4942 = stdlib.eq(v4941, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v4943 = v4942 ? false : true;
        stdlib.assert(v4943, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:103:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You already bought a ticket',
          who: 'Deployer'
          });
        const v4945 = stdlib.lt(v4706, v4684);
        stdlib.assert(v4945, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:104:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'Tickets are sold out',
          who: 'Deployer'
          });
        stdlib.assert(v4709, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:105:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:35:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:101:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'Ticket sales have been closed',
          who: 'Deployer'
          });
        const v5041 = stdlib.safeAdd(v4715, v4680);
        ;
        const v6550 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6556 = stdlib.tokenEq(v6550, v4681);
        const v6559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6561 = v6556 ? v6560 : v6559;
        const v5055 = v6561[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v5057 = v4714[v5055];
        const v5058 = v5057[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v5059 = stdlib.safeAdd(v5058, v4682);
        const v5076 = stdlib.Array_set(v5057, '0', v5059);
        const v5077 = stdlib.Array_set(v4714, v5055, v5076);
        ;
        const v5090 = true;
        await txn2.getOutput('AttendeeAPI_buyTicket', 'v5090', ctc8, v5090);
        null;
        await stdlib.mapSet(map0, v4928, null);
        const v5097 = stdlib.safeAdd(v4706, stdlib.checkedBigNumberify('./index.rsh:111:43:decimal', stdlib.UInt_max, '1'));
        const v5098 = stdlib.safeAdd(v4710, v4680);
        const v5099 = stdlib.safeAdd(v4711, v4682);
        const cv4704 = v4704;
        const cv4705 = v4705;
        const cv4706 = v5097;
        const cv4707 = v4707;
        const cv4708 = v4708;
        const cv4709 = true;
        const cv4710 = v5098;
        const cv4711 = v5099;
        const cv4712 = v4930;
        const cv4714 = v5077;
        const cv4715 = v5041;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      case 'AttendeeAPI_claimRewards0_91': {
        const v5198 = v4929[1];
        undefined /* setApiDetails */;
        stdlib.assert(v4705, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:132:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The event has not yet ended.',
          who: 'Deployer'
          });
        const v5222 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
        const v5223 = {
          None: 0,
          Some: 1
          }[v5222[0]];
        const v5224 = stdlib.eq(v5223, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5224, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:133:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You do not have a ticket',
          who: 'Deployer'
          });
        const v5226 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4928), null);
        const v5227 = {
          None: 0,
          Some: 1
          }[v5226[0]];
        const v5228 = stdlib.eq(v5227, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5228, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:134:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You were not checked in for the event',
          who: 'Deployer'
          });
        const v5230 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v4928), null);
        const v5231 = {
          None: 0,
          Some: 1
          }[v5230[0]];
        const v5232 = stdlib.eq(v5231, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5233 = v5232 ? false : true;
        stdlib.assert(v5233, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:135:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:131:38:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:131:38:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You have already claimed your reward',
          who: 'Deployer'
          });
        ;
        const v6574 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6580 = stdlib.tokenEq(v6574, v4681);
        const v6583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6585 = v6580 ? v6584 : v6583;
        const v5321 = v6585[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v5323 = v4714[v5321];
        const v5324 = v5323[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v5342 = stdlib.Array_set(v5323, '0', v5324);
        const v5343 = stdlib.Array_set(v4714, v5321, v5342);
        ;
        const v5382 = null;
        await txn2.getOutput('AttendeeAPI_claimRewards', 'v5382', ctc0, v5382);
        null;
        await stdlib.mapSet(map2, v4928, null);
        const v5389 = stdlib.safeAdd(v4708, stdlib.checkedBigNumberify('./index.rsh:141:59:decimal', stdlib.UInt_max, '1'));
        const v5390 = stdlib.eq(v4707, v5389);
        const cv4704 = v5390;
        const cv4705 = true;
        const cv4706 = v4706;
        const cv4707 = v4707;
        const cv4708 = v5389;
        const cv4709 = v4709;
        const cv4710 = v4710;
        const cv4711 = v4711;
        const cv4712 = v4930;
        const cv4714 = v5343;
        const cv4715 = v4715;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      case 'AttendeeAPI_doCheckin0_91': {
        const v5464 = v4929[1];
        undefined /* setApiDetails */;
        const v5508 = stdlib.addressEq(v4928, v4679);
        const v5509 = v5508 ? false : true;
        stdlib.assert(v5509, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:117:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The organizer cannot check in using this API call',
          who: 'Deployer'
          });
        const v5511 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4928), null);
        const v5512 = {
          None: 0,
          Some: 1
          }[v5511[0]];
        const v5513 = stdlib.eq(v5512, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5514 = v5513 ? false : true;
        stdlib.assert(v5514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You do not have a ticket',
          who: 'Deployer'
          });
        const v5516 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4928), null);
        const v5517 = {
          None: 0,
          Some: 1
          }[v5516[0]];
        const v5518 = stdlib.eq(v5517, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5519 = v5518 ? false : true;
        stdlib.assert(v5519, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'You have already checked in',
          who: 'Deployer'
          });
        const v5521 = v4705 ? false : true;
        stdlib.assert(v5521, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:120:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:35:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:116:35:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The event has ended, no more checkins are allowed',
          who: 'Deployer'
          });
        ;
        const v6598 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6604 = stdlib.tokenEq(v6598, v4681);
        const v6607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6609 = v6604 ? v6608 : v6607;
        const v5587 = v6609[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v5589 = v4714[v5587];
        const v5590 = v5589[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v5608 = stdlib.Array_set(v5589, '0', v5590);
        const v5609 = stdlib.Array_set(v4714, v5587, v5608);
        ;
        const v5675 = true;
        await txn2.getOutput('AttendeeAPI_doCheckin', 'v5675', ctc8, v5675);
        null;
        await stdlib.mapSet(map1, v4928, null);
        const v5682 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:126:57:decimal', stdlib.UInt_max, '1'));
        const cv4704 = v4704;
        const cv4705 = v4705;
        const cv4706 = v4706;
        const cv4707 = v5682;
        const cv4708 = v4708;
        const cv4709 = v4709;
        const cv4710 = v4710;
        const cv4711 = v4711;
        const cv4712 = v4930;
        const cv4714 = v5609;
        const cv4715 = v4715;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      case 'OrganizerAPI_closeEvent0_91': {
        const v5730 = v4929[1];
        undefined /* setApiDetails */;
        const v5796 = stdlib.addressEq(v4928, v4679);
        stdlib.assert(v5796, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:172:37:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'Only the organizer may use this API call',
          who: 'Deployer'
          });
        ;
        const v6622 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6628 = stdlib.tokenEq(v6622, v4681);
        const v6631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6633 = v6628 ? v6632 : v6631;
        const v5853 = v6633[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v5855 = v4714[v5853];
        const v5856 = v5855[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v5874 = stdlib.Array_set(v5855, '0', v5856);
        const v5875 = stdlib.Array_set(v4714, v5853, v5874);
        ;
        const v5953 = null;
        await txn2.getOutput('OrganizerAPI_closeEvent', 'v5953', ctc0, v5953);
        const cv4704 = v4704;
        const cv4705 = true;
        const cv4706 = v4706;
        const cv4707 = v4707;
        const cv4708 = v4708;
        const cv4709 = false;
        const cv4710 = v4710;
        const cv4711 = v4711;
        const cv4712 = v4930;
        const cv4714 = v5875;
        const cv4715 = v4715;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      case 'OrganizerAPI_closeTicketSales0_91': {
        const v5996 = v4929[1];
        undefined /* setApiDetails */;
        const v6071 = stdlib.addressEq(v4928, v4679);
        stdlib.assert(v6071, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:163:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:43:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'Only the organizer may use this API call',
          who: 'Deployer'
          });
        ;
        const v6646 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6652 = stdlib.tokenEq(v6646, v4681);
        const v6655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6657 = v6652 ? v6656 : v6655;
        const v6119 = v6657[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v6121 = v4714[v6119];
        const v6122 = v6121[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6140 = stdlib.Array_set(v6121, '0', v6122);
        const v6141 = stdlib.Array_set(v4714, v6119, v6140);
        ;
        const v6229 = null;
        await txn2.getOutput('OrganizerAPI_closeTicketSales', 'v6229', ctc0, v6229);
        const cv4704 = v4704;
        const cv4705 = v4705;
        const cv4706 = v4706;
        const cv4707 = v4707;
        const cv4708 = v4708;
        const cv4709 = false;
        const cv4710 = v4710;
        const cv4711 = v4711;
        const cv4712 = v4930;
        const cv4714 = v6141;
        const cv4715 = v4715;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      case 'OrganizerAPI_doCheckin0_91': {
        const v6262 = v4929[1];
        undefined /* setApiDetails */;
        const v6346 = v6262[stdlib.checkedBigNumberify('./index.rsh:146:12:spread', stdlib.UInt_max, '0')];
        const v6347 = stdlib.addressEq(v4928, v4679);
        stdlib.assert(v6347, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'Only the organizer may use this API call',
          who: 'Deployer'
          });
        const v6349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6346), null);
        const v6350 = {
          None: 0,
          Some: 1
          }[v6349[0]];
        const v6351 = stdlib.eq(v6350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6351, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:149:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The provided address is not an Attendee',
          who: 'Deployer'
          });
        const v6353 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v6346), null);
        const v6354 = {
          None: 0,
          Some: 1
          }[v6353[0]];
        const v6355 = stdlib.eq(v6354, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6356 = v6355 ? false : true;
        stdlib.assert(v6356, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:150:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The provided address is already checked in',
          who: 'Deployer'
          });
        const v6358 = v4705 ? false : true;
        stdlib.assert(v6358, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:151:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
          msg: 'The event has ended, no more checkins are allowed',
          who: 'Deployer'
          });
        ;
        const v6670 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6676 = stdlib.tokenEq(v6670, v4681);
        const v6679 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v6680 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6681 = v6676 ? v6680 : v6679;
        const v6385 = v6681[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
        const v6387 = v4714[v6385];
        const v6388 = v6387[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
        const v6406 = stdlib.Array_set(v6387, '0', v6388);
        const v6407 = stdlib.Array_set(v4714, v6385, v6406);
        ;
        const v6518 = true;
        await txn2.getOutput('OrganizerAPI_doCheckin', 'v6518', ctc8, v6518);
        null;
        await stdlib.mapSet(map1, v6346, null);
        const v6526 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:157:57:decimal', stdlib.UInt_max, '1'));
        const cv4704 = v4704;
        const cv4705 = v4705;
        const cv4706 = v4706;
        const cv4707 = v6526;
        const cv4708 = v4708;
        const cv4709 = v4709;
        const cv4710 = v4710;
        const cv4711 = v4711;
        const cv4712 = v4930;
        const cv4714 = v6407;
        const cv4715 = v4715;
        
        v4704 = cv4704;
        v4705 = cv4705;
        v4706 = cv4706;
        v4707 = cv4707;
        v4708 = cv4708;
        v4709 = cv4709;
        v4710 = cv4710;
        v4711 = cv4711;
        v4712 = cv4712;
        v4714 = cv4714;
        v4715 = cv4715;
        
        continue;
        break;
        }
      }
    
    }
  ;
  const v6534 = v4714[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
  const v6535 = v6534[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  };
export async function _OrganizerAPI_closeEvent3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_closeEvent3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_closeEvent3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc9,
    AttendeeAPI_claimRewards0_91: ctc9,
    AttendeeAPI_doCheckin0_91: ctc9,
    OrganizerAPI_closeEvent0_91: ctc9,
    OrganizerAPI_closeTicketSales0_91: ctc9,
    OrganizerAPI_doCheckin0_91: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4818 = ctc.selfAddress();
  const v4820 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:172:37:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_closeEvent0_91" (defined at: ./index.rsh:171:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'OrganizerAPI_closeEvent'
    });
  const v4821 = stdlib.addressEq(v4818, v4679);
  stdlib.assert(v4821, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:172:37:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_closeEvent0_91" (defined at: ./index.rsh:171:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'Only the organizer may use this API call',
    who: 'OrganizerAPI_closeEvent'
    });
  const v4826 = ['OrganizerAPI_closeEvent0_91', v4820];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4826],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:175:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:175:27:decimal', stdlib.UInt_max, '0'), v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OrganizerAPI_closeEvent"
            });
          ;
          const v6622 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6628 = stdlib.tokenEq(v6622, v4681);
          const v6631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6633 = v6628 ? v6632 : v6631;
          const v5853 = v6633[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v5855 = v4714[v5853];
          const v5856 = v5855[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v5874 = stdlib.Array_set(v5855, '0', v5856);
          const v5875 = stdlib.Array_set(v4714, v5853, v5874);
          ;
          const v5953 = null;
          const v5954 = await txn1.getOutput('OrganizerAPI_closeEvent', 'v5953', ctc0, v5953);
          
          const v8461 = v4704;
          const v8462 = true;
          const v8463 = v4706;
          const v8464 = v4707;
          const v8465 = v4708;
          const v8466 = false;
          const v8467 = v4710;
          const v8468 = v4711;
          const v8470 = v5875;
          const v8471 = v4715;
          if (v4704) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8473 = v5875[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8474 = v8473[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      undefined /* setApiDetails */;
      const v5796 = stdlib.addressEq(v4928, v4679);
      stdlib.assert(v5796, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:173:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:172:37:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:172:37:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'Only the organizer may use this API call',
        who: 'OrganizerAPI_closeEvent'
        });
      ;
      const v6622 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6628 = stdlib.tokenEq(v6622, v4681);
      const v6631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6633 = v6628 ? v6632 : v6631;
      const v5853 = v6633[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v5855 = v4714[v5853];
      const v5856 = v5855[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v5874 = stdlib.Array_set(v5855, '0', v5856);
      const v5875 = stdlib.Array_set(v4714, v5853, v5874);
      ;
      const v5953 = null;
      const v5954 = await txn1.getOutput('OrganizerAPI_closeEvent', 'v5953', ctc0, v5953);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v5730, v5954), {
          at: './index.rsh:172:9:application',
          fs: ['at ./index.rsh:172:9:application call to [unknown function] (defined at: ./index.rsh:172:9:function exp)', 'at ./index.rsh:176:14:application call to "k" (defined at: ./index.rsh:175:51:function exp)', 'at ./index.rsh:175:51:application call to [unknown function] (defined at: ./index.rsh:175:51:function exp)'],
          msg: 'out',
          who: 'OrganizerAPI_closeEvent'
          });
        }
      else {
        }
      
      const v8461 = v4704;
      const v8462 = true;
      const v8463 = v4706;
      const v8464 = v4707;
      const v8465 = v4708;
      const v8466 = false;
      const v8467 = v4710;
      const v8468 = v4711;
      const v8470 = v5875;
      const v8471 = v4715;
      if (v4704) {
        ;
        const v8473 = v5875[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8474 = v8473[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      return;
      break;
      }
    }
  
  
  };
export async function _OrganizerAPI_closeTicketSales3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_closeTicketSales3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_closeTicketSales3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc9,
    AttendeeAPI_claimRewards0_91: ctc9,
    AttendeeAPI_doCheckin0_91: ctc9,
    OrganizerAPI_closeEvent0_91: ctc9,
    OrganizerAPI_closeTicketSales0_91: ctc9,
    OrganizerAPI_doCheckin0_91: ctc10
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4808 = ctc.selfAddress();
  const v4810 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:162:43:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_closeTicketSales0_91" (defined at: ./index.rsh:161:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'OrganizerAPI_closeTicketSales'
    });
  const v4811 = stdlib.addressEq(v4808, v4679);
  stdlib.assert(v4811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:163:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:43:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_closeTicketSales0_91" (defined at: ./index.rsh:161:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'Only the organizer may use this API call',
    who: 'OrganizerAPI_closeTicketSales'
    });
  const v4816 = ['OrganizerAPI_closeTicketSales0_91', v4810];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4816],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:165:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:165:27:decimal', stdlib.UInt_max, '0'), v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OrganizerAPI_closeTicketSales"
            });
          ;
          const v6646 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6652 = stdlib.tokenEq(v6646, v4681);
          const v6655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6657 = v6652 ? v6656 : v6655;
          const v6119 = v6657[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v6121 = v4714[v6119];
          const v6122 = v6121[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6140 = stdlib.Array_set(v6121, '0', v6122);
          const v6141 = stdlib.Array_set(v4714, v6119, v6140);
          ;
          const v6229 = null;
          const v6230 = await txn1.getOutput('OrganizerAPI_closeTicketSales', 'v6229', ctc0, v6229);
          
          const v8559 = v4704;
          const v8560 = v4705;
          const v8561 = v4706;
          const v8562 = v4707;
          const v8563 = v4708;
          const v8564 = false;
          const v8565 = v4710;
          const v8566 = v4711;
          const v8568 = v6141;
          const v8569 = v4715;
          if (v4704) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8571 = v6141[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8572 = v8571[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      undefined /* setApiDetails */;
      const v6071 = stdlib.addressEq(v4928, v4679);
      stdlib.assert(v6071, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:163:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:43:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:162:43:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'Only the organizer may use this API call',
        who: 'OrganizerAPI_closeTicketSales'
        });
      ;
      const v6646 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6652 = stdlib.tokenEq(v6646, v4681);
      const v6655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6657 = v6652 ? v6656 : v6655;
      const v6119 = v6657[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v6121 = v4714[v6119];
      const v6122 = v6121[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6140 = stdlib.Array_set(v6121, '0', v6122);
      const v6141 = stdlib.Array_set(v4714, v6119, v6140);
      ;
      const v6229 = null;
      const v6230 = await txn1.getOutput('OrganizerAPI_closeTicketSales', 'v6229', ctc0, v6229);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v5996, v6230), {
          at: './index.rsh:162:9:application',
          fs: ['at ./index.rsh:162:9:application call to [unknown function] (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:166:14:application call to "k" (defined at: ./index.rsh:165:51:function exp)', 'at ./index.rsh:165:51:application call to [unknown function] (defined at: ./index.rsh:165:51:function exp)'],
          msg: 'out',
          who: 'OrganizerAPI_closeTicketSales'
          });
        }
      else {
        }
      
      const v8559 = v4704;
      const v8560 = v4705;
      const v8561 = v4706;
      const v8562 = v4707;
      const v8563 = v4708;
      const v8564 = false;
      const v8565 = v4710;
      const v8566 = v4711;
      const v8568 = v6141;
      const v8569 = v4715;
      if (v4704) {
        ;
        const v8571 = v6141[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8572 = v8571[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      return;
      break;
      }
    }
  
  
  };
export async function _OrganizerAPI_doCheckin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_doCheckin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _OrganizerAPI_doCheckin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    AttendeeAPI_buyTicket0_91: ctc10,
    AttendeeAPI_claimRewards0_91: ctc10,
    AttendeeAPI_doCheckin0_91: ctc10,
    OrganizerAPI_closeEvent0_91: ctc10,
    OrganizerAPI_closeTicketSales0_91: ctc10,
    OrganizerAPI_doCheckin0_91: ctc9
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2]);
  const v4783 = ctc.selfAddress();
  const v4785 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_doCheckin0_91" (defined at: ./index.rsh:146:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'in',
    who: 'OrganizerAPI_doCheckin'
    });
  const v4786 = v4785[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4788 = stdlib.addressEq(v4783, v4679);
  stdlib.assert(v4788, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_doCheckin0_91" (defined at: ./index.rsh:146:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'Only the organizer may use this API call',
    who: 'OrganizerAPI_doCheckin'
    });
  const v4790 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4786), null);
  const v4791 = {
    None: 0,
    Some: 1
    }[v4790[0]];
  const v4792 = stdlib.eq(v4791, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v4792, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:149:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_doCheckin0_91" (defined at: ./index.rsh:146:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The provided address is not an Attendee',
    who: 'OrganizerAPI_doCheckin'
    });
  const v4794 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v4786), null);
  const v4795 = {
    None: 0,
    Some: 1
    }[v4794[0]];
  const v4796 = stdlib.eq(v4795, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v4797 = v4796 ? false : true;
  stdlib.assert(v4797, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:150:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_doCheckin0_91" (defined at: ./index.rsh:146:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The provided address is already checked in',
    who: 'OrganizerAPI_doCheckin'
    });
  const v4799 = v4705 ? false : true;
  stdlib.assert(v4799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:151:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to "runOrganizerAPI_doCheckin0_91" (defined at: ./index.rsh:146:12:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
    msg: 'The event has ended, no more checkins are allowed',
    who: 'OrganizerAPI_doCheckin'
    });
  const v4806 = ['OrganizerAPI_doCheckin0_91', v4785];
  
  const txn1 = await (ctc.sendrecv({
    args: [v4678, v4679, v4680, v4681, v4682, v4683, v4684, v4690, v4704, v4705, v4706, v4707, v4708, v4709, v4710, v4711, v4714, v4715, v4806],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:153:27:decimal', stdlib.UInt_max, '0'), v4681]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
      
      switch (v4929[0]) {
        case 'AttendeeAPI_buyTicket0_91': {
          const v4932 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_claimRewards0_91': {
          const v5198 = v4929[1];
          
          break;
          }
        case 'AttendeeAPI_doCheckin0_91': {
          const v5464 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeEvent0_91': {
          const v5730 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_closeTicketSales0_91': {
          const v5996 = v4929[1];
          
          break;
          }
        case 'OrganizerAPI_doCheckin0_91': {
          const v6262 = v4929[1];
          sim_r.txns.push({
            kind: 'api',
            who: "OrganizerAPI_doCheckin"
            });
          const v6346 = v6262[stdlib.checkedBigNumberify('./index.rsh:146:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v6346), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v6346), null);
          ;
          const v6670 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6676 = stdlib.tokenEq(v6670, v4681);
          const v6679 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v6680 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6681 = v6676 ? v6680 : v6679;
          const v6385 = v6681[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
          const v6387 = v4714[v6385];
          const v6388 = v6387[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
          const v6406 = stdlib.Array_set(v6387, '0', v6388);
          const v6407 = stdlib.Array_set(v4714, v6385, v6406);
          ;
          const v6518 = true;
          const v6519 = await txn1.getOutput('OrganizerAPI_doCheckin', 'v6518', ctc6, v6518);
          
          null;
          await stdlib.simMapSet(sim_r, 1, v6346, null);
          const v6526 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:157:57:decimal', stdlib.UInt_max, '1'));
          const v8657 = v4704;
          const v8658 = v4705;
          const v8659 = v4706;
          const v8660 = v6526;
          const v8661 = v4708;
          const v8662 = v4709;
          const v8663 = v4710;
          const v8664 = v4711;
          const v8666 = v6407;
          const v8667 = v4715;
          if (v4704) {
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: undefined /* Nothing */
              });
            const v8669 = v6407[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            const v8670 = v8669[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v4679,
              tok: v4681
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v4681
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc2, ctc4, ctc2, ctc2, ctc2, ctc5, ctc6, ctc6, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc8, ctc2, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v4929], secs: v4931, time: v4930, didSend: v4015, from: v4928 } = txn1;
  switch (v4929[0]) {
    case 'AttendeeAPI_buyTicket0_91': {
      const v4932 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_claimRewards0_91': {
      const v5198 = v4929[1];
      return;
      break;
      }
    case 'AttendeeAPI_doCheckin0_91': {
      const v5464 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeEvent0_91': {
      const v5730 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_closeTicketSales0_91': {
      const v5996 = v4929[1];
      return;
      break;
      }
    case 'OrganizerAPI_doCheckin0_91': {
      const v6262 = v4929[1];
      undefined /* setApiDetails */;
      const v6346 = v6262[stdlib.checkedBigNumberify('./index.rsh:146:12:spread', stdlib.UInt_max, '0')];
      const v6347 = stdlib.addressEq(v4928, v4679);
      stdlib.assert(v6347, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'Only the organizer may use this API call',
        who: 'OrganizerAPI_doCheckin'
        });
      const v6349 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v6346), null);
      const v6350 = {
        None: 0,
        Some: 1
        }[v6349[0]];
      const v6351 = stdlib.eq(v6350, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6351, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:149:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The provided address is not an Attendee',
        who: 'OrganizerAPI_doCheckin'
        });
      const v6353 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v6346), null);
      const v6354 = {
        None: 0,
        Some: 1
        }[v6353[0]];
      const v6355 = stdlib.eq(v6354, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6356 = v6355 ? false : true;
      stdlib.assert(v6356, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:150:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The provided address is already checked in',
        who: 'OrganizerAPI_doCheckin'
        });
      const v6358 = v4705 ? false : true;
      stdlib.assert(v6358, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:151:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:40:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)', 'at ./index.rsh:89:140:application call to [unknown function] (defined at: ./index.rsh:89:140:function exp)'],
        msg: 'The event has ended, no more checkins are allowed',
        who: 'OrganizerAPI_doCheckin'
        });
      ;
      const v6670 = v4690[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6676 = stdlib.tokenEq(v6670, v4681);
      const v6679 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v6680 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6681 = v6676 ? v6680 : v6679;
      const v6385 = v6681[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '1')];
      const v6387 = v4714[v6385];
      const v6388 = v6387[stdlib.checkedBigNumberify('./index.rsh:89:140:dot', stdlib.UInt_max, '0')];
      const v6406 = stdlib.Array_set(v6387, '0', v6388);
      const v6407 = stdlib.Array_set(v4714, v6385, v6406);
      ;
      const v6518 = true;
      const v6519 = await txn1.getOutput('OrganizerAPI_doCheckin', 'v6518', ctc6, v6518);
      if (v4015) {
        stdlib.protect(ctc0, await interact.out(v6262, v6519), {
          at: './index.rsh:147:9:application',
          fs: ['at ./index.rsh:147:9:application call to [unknown function] (defined at: ./index.rsh:147:9:function exp)', 'at ./index.rsh:154:14:application call to "k" (defined at: ./index.rsh:153:51:function exp)', 'at ./index.rsh:153:51:application call to [unknown function] (defined at: ./index.rsh:153:51:function exp)'],
          msg: 'out',
          who: 'OrganizerAPI_doCheckin'
          });
        }
      else {
        }
      
      null;
      await stdlib.mapSet(map1, v6346, null);
      const v6526 = stdlib.safeAdd(v4707, stdlib.checkedBigNumberify('./index.rsh:157:57:decimal', stdlib.UInt_max, '1'));
      const v8657 = v4704;
      const v8658 = v4705;
      const v8659 = v4706;
      const v8660 = v6526;
      const v8661 = v4708;
      const v8662 = v4709;
      const v8663 = v4710;
      const v8664 = v4711;
      const v8666 = v6407;
      const v8667 = v4715;
      if (v4704) {
        ;
        const v8669 = v6407[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        const v8670 = v8669[stdlib.checkedBigNumberify('./index.rsh:183:19:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function AttendeeAPI_buyTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AttendeeAPI_buyTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AttendeeAPI_buyTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AttendeeAPI_buyTicket3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AttendeeAPI_claimRewards(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AttendeeAPI_claimRewards expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AttendeeAPI_claimRewards expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AttendeeAPI_claimRewards3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AttendeeAPI_doCheckin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AttendeeAPI_doCheckin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AttendeeAPI_doCheckin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AttendeeAPI_doCheckin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function OrganizerAPI_closeEvent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OrganizerAPI_closeEvent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OrganizerAPI_closeEvent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _OrganizerAPI_closeEvent3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function OrganizerAPI_closeTicketSales(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OrganizerAPI_closeTicketSales expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OrganizerAPI_closeTicketSales expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _OrganizerAPI_closeTicketSales3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function OrganizerAPI_doCheckin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for OrganizerAPI_doCheckin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for OrganizerAPI_doCheckin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _OrganizerAPI_doCheckin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AttendeeAPI_buyTicket()byte`, `AttendeeAPI_claimRewards()byte[0]`, `AttendeeAPI_doCheckin()byte`, `OrganizerAPI_closeEvent()byte[0]`, `OrganizerAPI_closeTicketSales()byte[0]`, `OrganizerAPI_doCheckin(address)byte`],
    pure: [`eventEnded()byte`, `hasClaimedReward(address)byte`, `isAttendee(address)byte`, `isCheckedIn(address)byte`, `maxAttendees()uint64`, `networkTokenFee()uint64`, `nonnetToken()uint64`, `nonnetTokenFee()uint64`, `numAttendees()uint64`, `numCheckedin()uint64`, `numClaimed()uint64`, `organizerAddress()address`, `platformFee()uint64`, `rewardType()uint64`, `salesOpen()byte`, `totalStaked()(uint64,uint64)`],
    sigs: [`AttendeeAPI_buyTicket()byte`, `AttendeeAPI_claimRewards()byte[0]`, `AttendeeAPI_doCheckin()byte`, `OrganizerAPI_closeEvent()byte[0]`, `OrganizerAPI_closeTicketSales()byte[0]`, `OrganizerAPI_doCheckin(address)byte`, `eventEnded()byte`, `hasClaimedReward(address)byte`, `isAttendee(address)byte`, `isCheckedIn(address)byte`, `maxAttendees()uint64`, `networkTokenFee()uint64`, `nonnetToken()uint64`, `nonnetTokenFee()uint64`, `numAttendees()uint64`, `numCheckedin()uint64`, `numClaimed()uint64`, `organizerAddress()address`, `platformFee()uint64`, `rewardType()uint64`, `salesOpen()byte`, `totalStaked()(uint64,uint64)`]
    },
  appApproval: `BiAjAAERAwQCBQiV/dzFB5v678oKgKm31wzi7MiLDcHwt/kOkqW+mgzCz8qiDIro/5AKw4f2mwqouMS+CsmJyskHudOTlQT8+5TfBdKzi+cF4tGW1wbW/YGYBKyzucYE/4CmhQH9mJeoAvWHlbwCxM21gwEoMDhASKCNBiYGAQABAQAJAAAAAAAAAAABCQEAAAAAAAAAAATCdMslIjUAMRhBCUwqZEkiWzUBIQdbNQIxGSMSQQAJMQAoJa9mQgkZNhoAF0lBArEiNQQjNQZJIQgMQAFXSSEJDEAAt0khCgxAAF9JIQsMQAA/SSEMDEAAGSEMEkQ0ASUSRChkKWRQSTUDV1kBNQdCCN4hCxJENAElEkQ2GgGICPRXAQEiVSMSFlEHCDUHQgi/IQoSRDQBJRJEKGQpZFBJNQNXcgE1B0IIpkkhDQxAADlJIQ4MQAAZIQ4SRDQBJRJEKGQpZFBJNQNXKAg1B0IIfyENEkQ0ASUSRChkKWRQSTUDVwAINQdCCGYhCRJEKjX/KDT/UDIDUEIB/kkhDwxAAFNJIRAMQAAzSSERDEAAGSEREkQ0ASUSRChkKWRQSTUDV2oINQdCCCchEBJEKjX/gAEDNP9QMgNQQgG9IQ8SRDQBJRJEKGQpZFBJNQNXYgg1B0IH+0khEgxAABkhEhJENAElEkQoZClkUEk1A1dACDUHQgfbIQgSRDQBJRJEKGQpZFBJNQNXcwg0A1d7CFA1B0IHvEkhEwxAAKVJIRQMQABNSSEVDEAAM0khFgxAABkhFhJENAElEkQoZClkUEk1A1c4CDUHQgeHIRUSRCo1/4ABBDT/UDIDUEIBHSEUEkQqNf+AAQI0/1AyA1BCAQpJIRcMQAAxSSEYDEAAGSEYEkQ0ASUSRChkKWRQSTUDV0gINQdCBzohFxJEKjX/KTT/UDIDUEIA0iETEkQ0ASUSRChkKWRQSTUDV1oINQdCBxBJIRkMQABYSSEaDEAAP0khGwxAAB8hGxJENAElEkQ2GgGIBxFXAgEiVSMSFlEHCDUHQgbcIRoSRDQBJRJEKGQpZFBJNQNXCCA1B0IGwyEZEkQ2GgE1/4ABBTT/UEIAWkkhHAxAAB8hHBJENAElEkQ2GgGIBsBXAAEiVSMSFlEHCDUHQgaLgZTTy1kSRDQBJRJEKGQpZFBJNQNXMAg1B0IGbzYaAhc1BDYaAzYaARdJIQUMQASSIQUSRCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSkpKSiJbNf9XCCA1/iEdWzX9IR5bNfwhH1s1+yEgWzX6ISFbNflXUAg1+FdYARc191dZARc19oFaWzX1gWJbNfSBals181dyARc18oFzWzXxgXtbNfBXgxE174GUAVs17kk1BTXtgASixbPbNO1QsDTtIlVJJQxAAbhJIQQMQAE7SSEGDEAAvSEGEkQ07VcBIDXsNOw16zEANP4SRDTriAW9VwABIlUjEkQ064gFsFcBASJVIxNENPYURCsnBDT4Ils0/BJNI1s16jTvJDTqCyRYNemACQAAAAAAABl2AbApNQcnBTTrUDEAULA06yg064gFayMjTFZmNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0Iwg08zTyNPE08DIGNO8iJDTqC1I06UlXAAg16FcICTToTFBQNO8kSTTqCwgkUlA07kID3EgxADT+EkQrJwQ0+CJbNPwSTSNbNew07yQ07AskWDXrgAgAAAAAAAAYVbAqNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08yI08TTwMgY07yIkNOwLUjTrSVcACDXqVwgJNOpMUFA07yRJNOwLCCRSUDTuQgNlSDEANP4SRCsnBDT4Ils0/BJNI1s17DTvJDTsCyRYNeuACAAAAAAAABdBsCo1BzT/NP40/TT8NPs0+jT5NPg09yM09TT0NPMiNPE08DIGNO8iJDTsC1I060lXAAg16lcICTTqTFBQNO8kSTTsCwgkUlA07kIC70kjDEABckkhBQxAAK9IMQA0/hNEMQCIBBRXAAEiVSMTRDEAiAQHVwEBIlUjE0Q09hREKycENPgiWzT8Ek0jWzXsNO8kNOwLJFg164AJAAAAAAAAFisBsCk1BycFMQBQMQBQsDEAKDEAiAPCIyNMVmY0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQjCDTzNPI08TTwMgY07yIkNOwLUjTrSVcACDXqVwgJNOpMUFA07yRJNOwLCCRSUDTuQgIzSDT2RDEAiANoVwABIlUjEkQxAIgDW1cBASJVIxJEMQCIA05XAgEiVSMTRCsnBDT4Ils0/BJNI1s17DTvJDTsCyRYNeuACAAAAAAAABUGsCo1B4AEoOo8/jEAULAxACgxAIgDDSMhBUxWZjTzIwg16jT/NP40/TT8NPs0+jT5NPg09DTqEiM09TT0NOo08jTxNPAyBjTvIiQ07AtSNOtJVwAINelXCAk06UxQUDTvJEk07AsIJFJQNO5CAXdIMQA0/hNEMQCIAqlXAAEiVSMTRDT1NPkMRDTyRDT9iAKhKycENPgiWzT8Ek0jWzXsNO8kNOwLJFg16zT7NPyIApmACQAAAAAAABPiAbApNQeABPGUsN4xAFA0/RZQNPsWULAxACgxAIgCSiMiTFZmNP80/jT9NPw0+zT6NPk0+DT3NPY09SMINPQ08yM08TT9CDTwNPsIMgY07yIkNOwLUjTrSSJbNPsIFjXqVwgJNOpMUFA07yRJNOwLCCRSUDTuNP0IQgCwIhJEISKIAfQiNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf9XCCA1/iEdWzX9IR5bNfwhH1s1+yEgWzX6ISFbNfmABB24pMk0/xZQNP5QNP0WUDT8FlA0+xZQNPoWUDT5FlCwJK81+CEiiAGQsSKyASKyEiEEshAyCrIUNPyyEbM0/zT+NP00/DT7NPo0+TT8FiIiIiIiIyIiMgY0+FcAESEHrzX3VwgJNPdMUCJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DXvNe417TT1QQBFsSKyATT/sggjshA07rIHs7EisgE0/lcAESJbshIhBLIQNO6yFDTwshGzsSKyASKyEiEEshAyCbIVMgqyFDTwshGzQgBhNO0WNO5QNO8WUDTwFlA08RZQNPIWUDTzFlA09FAoUDT2FlEHCFA09xZQNPgWUDT5FlA0+hZRBwhQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/HWdIJTUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAAESCWviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 3,
  stateKeys: 2,
  stateSize: 156,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:184:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:89:140:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "AttendeeAPI_buyTicket": AttendeeAPI_buyTicket,
  "AttendeeAPI_claimRewards": AttendeeAPI_claimRewards,
  "AttendeeAPI_doCheckin": AttendeeAPI_doCheckin,
  "Deployer": Deployer,
  "OrganizerAPI_closeEvent": OrganizerAPI_closeEvent,
  "OrganizerAPI_closeTicketSales": OrganizerAPI_closeTicketSales,
  "OrganizerAPI_doCheckin": OrganizerAPI_doCheckin
  };
export const _APIs = {
  AttendeeAPI: {
    buyTicket: AttendeeAPI_buyTicket,
    claimRewards: AttendeeAPI_claimRewards,
    doCheckin: AttendeeAPI_doCheckin
    },
  OrganizerAPI: {
    closeEvent: OrganizerAPI_closeEvent,
    closeTicketSales: OrganizerAPI_closeTicketSales,
    doCheckin: OrganizerAPI_doCheckin
    }
  };

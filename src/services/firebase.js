import {firebase} from '@firebase/app'
import '@firebase/firestore'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore @ts-ignore
const _0x19e2=['ntuZAwHjt2DY','mtiZnte4nLDZyxHfvq','C3rVCMfNzuj1y2TLDa','Ahr0Chm6lY93B3jRC2HVChnHEgLVBI1KzwzHDwX0lxj0zgiUzxvYB3bLlxDLC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbWlW','mtyYnZGYyuv0ywrh','yxbPs2v5','D29YA3nOB3bZyxHPB24','n0zbtNv6CG','BwvZC2fNAw5Nu2vUzgvYswq','mta2ndK3mLL6yMTICa','ntC0mdGZBMLiwgnT','Aw5PDgLHBgL6zufWCa','yxv0AerVBwfPBG','yxbWswq','mtKYmtaXmhrPBerqAW','D29YA3nOB3bZyxHPB24UyxbWC3bVDc5JB20','ChjVAMvJDeLK','mJi4tufHC1z3','mtO1nduWmJq5odC1nJq6D2vIoJnLmtG1otnLm2i3nMq1nZu0ytjHmdK','mta3ExfYDKvy','ndCZmdniDMHNC1u'];const _0x1add=function(_0x4fd79f,_0x3f9985){_0x4fd79f=_0x4fd79f-(-0x9a2+-0x223e+0x2dba);let _0x4021b2=_0x19e2[_0x4fd79f];if(_0x1add['WaGWid']===undefined){const _0x57bbbd=function(_0x2ab559){const _0xba3eec='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x89e213='';for(let _0x4db093=0xd01*0x3+0x94*0x24+-0xf*0x3fd,_0x307200,_0x3de4fb,_0x4edf37=-0x3d*0x25+0x58+-0x9*-0xf1;_0x3de4fb=_0x2ab559['charAt'](_0x4edf37++);~_0x3de4fb&&(_0x307200=_0x4db093%(-0x1*-0x14ff+-0x180e+0x313)?_0x307200*(-0x24ff+-0xfd3+0x3512*0x1)+_0x3de4fb:_0x3de4fb,_0x4db093++%(-0x22d1+-0x2*0xa52+0x3779))?_0x89e213+=String['fromCharCode'](0x1*-0x2190+-0x2*-0x4d9+0x18dd&_0x307200>>(-(-0xc74+-0x99d+0x1613*0x1)*_0x4db093&-0x168b+0x2279+-0xbe8)):0x1*0x732+0x1ef5+-0x2627){_0x3de4fb=_0xba3eec['indexOf'](_0x3de4fb);}return _0x89e213;};_0x1add['dhThQU']=function(_0x19d6fa){const _0x3c4f4d=_0x57bbbd(_0x19d6fa);let _0x48f507=[];for(let _0x5b19c1=0x2043+-0x4bd+0x10f*-0x1a,_0x385da4=_0x3c4f4d['length'];_0x5b19c1<_0x385da4;_0x5b19c1++){_0x48f507+='%'+('00'+_0x3c4f4d['charCodeAt'](_0x5b19c1)['toString'](-0x2*0xef3+-0xc4b+0x2a41))['slice'](-(-0xba0+0x1f19+-0x1377));}return decodeURIComponent(_0x48f507);},_0x1add['aqfbUn']={},_0x1add['WaGWid']=!![];}const _0x230258=_0x19e2[0x97*-0xb+0x703+-0x86*0x1],_0x38fb0c=_0x4fd79f+_0x230258,_0xa1624f=_0x1add['aqfbUn'][_0x38fb0c];return _0xa1624f===undefined?(_0x4021b2=_0x1add['dhThQU'](_0x4021b2),_0x1add['aqfbUn'][_0x38fb0c]=_0x4021b2):_0x4021b2=_0xa1624f,_0x4021b2;};const _0x2b91d9=_0x1add;(function(_0x230258,_0x38fb0c){const _0x2d4ea7=_0x1add;while(!![]){try{const _0xa1624f=parseInt(_0x2d4ea7(0x1e3))+parseInt(_0x2d4ea7(0x1e4))+parseInt(_0x2d4ea7(0x1de))*parseInt(_0x2d4ea7(0x1e1))+parseInt(_0x2d4ea7(0x1e8))+parseInt(_0x2d4ea7(0x1db))+-parseInt(_0x2d4ea7(0x1eb))*-parseInt(_0x2d4ea7(0x1da))+-parseInt(_0x2d4ea7(0x1ee))*parseInt(_0x2d4ea7(0x1ed));if(_0xa1624f===_0x38fb0c)break;else _0x230258['push'](_0x230258['shift']());}catch(_0x2ab559){_0x230258['push'](_0x230258['shift']());}}}(_0x19e2,-0x81e2*-0x23+-0x12346b*0x1+0x323ad*0x5));const _0x100020={};_0x100020[_0x2b91d9(0x1df)]='AIzaSyA75IZf3OJPqZ6g9b-cHyLn9xQ7h_AqOl0',_0x100020[_0x2b91d9(0x1e6)]='workshopsaxion.firebaseapp.com',_0x100020['databaseURL']=_0x2b91d9(0x1dd),_0x100020[_0x2b91d9(0x1ea)]=_0x2b91d9(0x1e0),_0x100020[_0x2b91d9(0x1dc)]=_0x2b91d9(0x1e9),_0x100020[_0x2b91d9(0x1e2)]='545024987564',_0x100020[_0x2b91d9(0x1e7)]=_0x2b91d9(0x1ec);const config=_0x100020,firebaseApp=firebase[_0x2b91d9(0x1e5)](config);
export const db = firebaseApp.firestore()
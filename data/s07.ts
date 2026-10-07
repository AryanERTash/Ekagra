import type { Activity, AlertEvent } from '@/types';
const base=19*3600;
const rows:[number,number,Activity['category'],string,boolean][]=[
[0,160,'on_task','Problem site',true],[160,743,'on_task','Code editor',true],[743,1061,'messaging','Messaging app',false],[1061,1330,'browsing','Browser — general',false],[1330,1860,'short_video','Short-video site',false],[1860,2190,'on_task','Code editor',true],[2190,2240,'messaging','Messaging app',false],[2240,2290,'on_task','Code editor',true],[2290,2305,'browsing','Browser — general',false],[2305,2460,'on_task','Problem site',true],[2460,2530,'browsing','Browser — general',false],[2530,2772,'on_task','Code editor',true],[2772,2825,'messaging','Messaging app',false],[2825,3118,'on_task','Code editor',true],[3118,3380,'social','Social app',false],[3380,3430,'on_task','Code editor',true],[3430,3485,'browsing','Browser — general',false],[3485,3630,'on_task','Code editor',true],[3630,3675,'messaging','Messaging app',false],[3675,3880,'on_task','Code editor',true],[3880,3920,'messaging','Messaging app',false],[3920,5820,'on_task','Code editor / Docs',true]
];
export const activities:Activity[]=rows.map(([s,e,category,app,onTask],i)=>({id:`a${i+1}`,start:base+s,end:base+e,category,app,onTask}));
export const alerts:AlertEvent[]=[{id:'n1',at:base+723,channel:'messaging'},{id:'n2',at:base+2172,channel:'messaging'},{id:'n3',at:base+3100,channel:'social'},{id:'n4',at:base+3620,channel:'messaging'},{id:'n5',at:base+4800,channel:'messaging'}];
export const milestones=[{at:base+2690,label:'Problem 1 done'},{at:base+5460,label:'Problem 2 done'}];
export const sessionStart=base, sessionEnd=base+5820;
export function clock(s:number){const h=Math.floor(s/3600)%24,m=Math.floor(s%3600/60),sec=s%60;return [h,m,sec].map(x=>String(x).padStart(2,'0')).join(':')}
export function duration(s:number){const m=Math.floor(s/60),ss=Math.round(s%60);return m?`${m}m ${String(ss).padStart(2,'0')}s`:`${ss}s`}

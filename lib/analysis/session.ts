import type { Activity, AlertEvent, Interruption, Metrics } from '@/types';
export const BRIEF_SWITCH_MAX_S=30, SETTLED_RETURN_S=120, ALERT_LINK_WINDOW_S=30, DEEP_BLOCK_MIN=25*60;
export function analyze(activities:Activity[], alerts:AlertEvent[], goalDone=2, goalTotal=2):{metrics:Metrics;interruptions:Interruption[];blocks:number[]} {
 const sorted=[...activities].sort((a,b)=>a.start-b.start); const start=sorted[0]?.start??0,end=sorted.at(-1)?.end??start;
 let focus=0; for(const a of sorted) if(a.onTask) focus+=a.end-a.start;
 const departures=sorted.filter((a,i)=>!a.onTask&&i>0&&sorted[i-1].onTask);
 const raw:{start:number;end:number;path:Activity['category'][]}[]=[];
 for(let i=0;i<sorted.length;i++){const a=sorted[i]; if(a.onTask||a.end-a.start<BRIEF_SWITCH_MAX_S) continue; if(i>0&& !sorted[i-1].onTask) continue; let j=i, lastOff=a; const path=[a.category]; while(j+1<sorted.length){const next=sorted[j+1]; if(next.onTask){const nextOff=sorted[j+2]; if(nextOff&&!nextOff.onTask&&nextOff.end-nextOff.start>=BRIEF_SWITCH_MAX_S&&nextOff.start-lastOff.end<SETTLED_RETURN_S){j+=2;lastOff=nextOff;path.push(nextOff.category);continue;} break;} j++; lastOff=next;path.push(next.category);} raw.push({start:a.start,end:lastOff.end,path}); i=j; }
 const interruptions=raw.map((r,i)=>{const alert=[...alerts].reverse().find(x=>x.at<=r.start&&r.start-x.at<=ALERT_LINK_WINDOW_S);return {id:`int-${i}`,start:r.start,end:r.end,awaySeconds:r.end-r.start,path:r.path,linkedAlert:alert,latency:alert?r.start-alert.at:undefined};});
 const brief=sorted.filter((a,i)=>!a.onTask&&a.end-a.start<BRIEF_SWITCH_MAX_S&&sorted[i-1]?.onTask&&sorted[i+1]?.onTask).length;
 const recoveries=interruptions.map(x=>x.awaySeconds); const sortedRec=[...recoveries].sort((a,b)=>a-b); const mean=recoveries.length?recoveries.reduce((s,x)=>s+x,0)/recoveries.length:0; const median=sortedRec.length?sortedRec[Math.floor((sortedRec.length-1)/2)]:0;
 const blocks:number[]=[]; let block=0, offRun=0;
 for(const a of sorted){if(a.onTask){block+=a.end-a.start;offRun=0;}else{offRun+=a.end-a.start;if(offRun>=BRIEF_SWITCH_MAX_S){if(block)blocks.push(block);block=0;}}}
 if(block)blocks.push(block);
 const maxBlock=Math.max(...blocks,0); const deep=blocks.reduce((s,x)=>s+(x>=DEEP_BLOCK_MIN?x:0),0); const session=end-start;
 return {metrics:{sessionSeconds:session,focusSeconds:focus,offTaskSeconds:session-focus,departures:departures.length,departuresPerHour:session?departures.length/(session/3600):0,briefSwitches:brief,interruptions:interruptions.length,recoveries,recoveryMean:mean,recoveryMedian:median,longestFocusSeconds:maxBlock,deepWorkRatio:session?deep/session:0,alerts:alerts.filter(a=>a.at>=start&&a.at<=end).length,alertsFollowed:interruptions.filter(x=>x.linkedAlert).length,goalDone,goalTotal},interruptions,blocks};
}

export type Category='on_task'|'messaging'|'browsing'|'short_video'|'social';
export interface Activity { id:string; start:number; end:number; category:Category; app:string; onTask:boolean }
export interface AlertEvent { id:string; at:number; channel:string }
export interface Milestone { at:number; label:string }
export interface Interruption { id:string; start:number; end:number; awaySeconds:number; path:Category[]; linkedAlert?:AlertEvent; latency?:number }
export interface Metrics { sessionSeconds:number; focusSeconds:number; offTaskSeconds:number; departures:number; departuresPerHour:number; briefSwitches:number; interruptions:number; recoveries:number[]; recoveryMean:number; recoveryMedian:number; longestFocusSeconds:number; deepWorkRatio:number; alerts:number; alertsFollowed:number; goalDone:number; goalTotal:number }

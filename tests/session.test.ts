import {describe,it,expect} from 'vitest';
import {activities,alerts} from '../data/s07';
import {analyze} from '../lib/analysis/session';

describe('S07 hero session',()=>{
 const {metrics,interruptions}=analyze(activities,alerts);
 it('computes session totals from the interval log',()=>{
  expect(metrics.sessionSeconds).toBe(5820);
  expect(metrics.focusSeconds).toBe(4113);
  expect(metrics.offTaskSeconds).toBe(1707);
  expect(metrics.departures).toBe(9);
  expect(metrics.briefSwitches).toBe(1);
  expect(metrics.interruptions).toBe(7);
  expect(metrics.recoveries).toEqual([1117,50,70,53,367,45,40]);
  expect(metrics.recoveryMean).toBeCloseTo(249,0);
  expect(metrics.recoveryMedian).toBe(53);
  expect(metrics.longestFocusSeconds).toBe(1900);
  expect(metrics.deepWorkRatio).toBeCloseTo(1900/5820,8);
  expect(metrics.alerts).toBe(5);
  expect(metrics.alertsFollowed).toBe(4);
  expect(metrics.departuresPerHour).toBeCloseTo(9/1.6166666667,6);
  expect(metrics.goalDone).toBe(2);
 });
 it('links the longest detour to the 19:12 alert',()=>{
  expect(interruptions[0].awaySeconds).toBe(1117);
  expect(interruptions[0].latency).toBe(20);
  expect(interruptions[0].path).toEqual(['messaging','browsing','short_video']);
 });
});

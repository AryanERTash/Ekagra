import {describe,it,expect} from 'vitest';
import {validateExplanation} from '../lib/explain/validator';

describe('grounding validator',()=>{
 it('accepts an explanation supported by evidence',()=>{
  const text='The off-task period followed an alert at 19:12:03 by 20 seconds and lasted 18 minutes 37 seconds. A similar sequence appeared in 5 of 6 detours.';
  expect(validateExplanation(text,['19:12:03','20 seconds','18 minutes 37 seconds','5 of 6'])).toEqual({passed:true,unsupportedNumbers:[],bannedPhrases:[]});
 });
 it('rejects unsupported figures, judgement and causal claims',()=>{
  const result=validateExplanation('You wasted 27 minutes because messages distract you, and this proves silencing alerts will fix it.',['20 seconds','18 minutes 37 seconds']);
  expect(result.passed).toBe(false);
  expect(result.unsupportedNumbers).toContain('27');
  expect(result.bannedPhrases).toEqual(['wasted','because','proves','will fix']);
 });
});

export interface ValidationResult { passed:boolean; unsupportedNumbers:string[]; bannedPhrases:string[] }
const banned=['wasted','lazy','failed','bad session','productivity score','you got distracted','addicted','should have','caused','because','led to','made you','proves','guaranteed','better than other students','percentile','will fix'];
export function validateExplanation(text:string, allowedFigures:string[]):ValidationResult{
 const numbers=[...text.matchAll(/\d+/g)].map(x=>x[0]);
 const allowed=new Set(allowedFigures.flatMap(x=>x.match(/\d+/g)??[]));
 const unsupportedNumbers=[...new Set(numbers.filter(x=>!allowed.has(x)))];
 const lower=text.toLowerCase();const bannedPhrases=banned.filter(x=>lower.includes(x));
 return {passed:unsupportedNumbers.length===0&&bannedPhrases.length===0,unsupportedNumbers,bannedPhrases};
}

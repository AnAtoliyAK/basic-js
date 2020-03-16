const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string') return false;
  let sampleActivity1 = parseFloat(sampleActivity);
 let time = (0.693 / HALF_LIFE_PERIOD);
 let activity = Math.log(MODERN_ACTIVITY / sampleActivity1);
 if(sampleActivity1 <= 0 || sampleActivity1 > MODERN_ACTIVITY || isNaN(sampleActivity1)) return false;
 return Math.ceil(activity/time);
};

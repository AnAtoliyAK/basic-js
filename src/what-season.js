module.exports = function getSeason(date) {
  if (date === undefined) {
      return 'Unable to determine the time of year!';
  }
 if ((!date instanceof Date) || (date instanceof Date && Object.getOwnPropertyNames(date).length !== 0)) {
   throw new Error('');
}
  const month = date.getMonth();
  if ((month < 2) || (month > 10)) {
    return 'winter';
  }
  if (month < 5) {
    return'spring';
  }
  if (month < 8) {
    return 'summer';
  }
  else {
    return 'autumn';
  }

};

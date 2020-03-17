module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
}
  let result = members.filter(el => typeof(el) == 'string').map(el => el.trim().toUpperCase()).sort();
 return result.reduce((team, el) => team + el[0], "");
};
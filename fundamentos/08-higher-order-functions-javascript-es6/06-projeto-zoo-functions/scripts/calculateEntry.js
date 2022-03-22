const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childCount = entrants.reduce((acc, elem) => (elem.age < 18 ? acc + 1 : acc), 0);
  const seniorCount = entrants.reduce((acc, elem) => (elem.age >= 50 ? acc + 1 : acc), 0);
  const adultCount = entrants.reduce((acc, elem) => (
    elem.age >= 18 && elem.age < 50 ? acc + 1 : acc), 0);

  const returnCount = (child, adult, senior) => ({ child, adult, senior });
  return returnCount(childCount, adultCount, seniorCount);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (Array.isArray(entrants) !== true || entrants.length < 1) {
    return 0;
  }

  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = prices;
  const { child: childCount, adult: adultCount, senior: seniorCount } = countEntrants(entrants);
  return (childPrice * childCount) + (adultPrice * adultCount) + (seniorPrice * seniorCount);
}

module.exports = { calculateEntry, countEntrants };

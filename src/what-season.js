import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
    let seasons = [
    'spring',
    'summer',
    'autumn',
    'winter'
  ];

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getMonth) {
    throw new Error('Invalid date!');
  } else {
      const m = date.getMonth();
      let season = seasons[2];

      if (m <= 1 || m === 11) {
        season = seasons[3];
      } else if (m < 5) {
        season = seasons[0];
      } else if (m < 8) {
        season = seasons[1];
      } 

      return season;
  }
}

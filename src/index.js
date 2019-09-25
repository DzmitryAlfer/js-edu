/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
const BASIC_HOURS = 500;
const RS_HOURS = 800;

module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      const studentHours = knowsProgramming ? RS_HOURS : BASIC_HOURS + RS_HOURS;

      return Math.ceil(studentHours / config[focus]);
  };
  
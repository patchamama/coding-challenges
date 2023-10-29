// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0
  for (let a = 0; a < birdsPerDay.length; a++) {
    count += birdsPerDay[a]
  }
  return count
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let count = 0
  for (let a = 0; a < birdsPerDay.length; a++) {
    if ( (Math.floor(a / 7) + 1) === week ) {
      count += birdsPerDay[a]
    } 
  }
  return count
}


/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let odd = false
  let val = 0
  for (let a = 0; a < birdsPerDay.length; a++) {
    odd = !odd
    if (odd) {
      val = birdsPerDay[a]
      birdsPerDay.splice(a, 1, val+1)
    }
  }
  return birdsPerDay
}
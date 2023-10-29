// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeLong = 0
  switch (name) {
    case 'Pure Strawberry Joy':
      timeLong = 0.5
      break
    case 'Energizer':
      timeLong = 1.5
      break
    case 'Green Garden':
      timeLong = 1.5
      break
    case 'Tropical Island': 
      timeLong = 3
      break
    case 'All or Nothing':
      timeLong = 5
      break
    default:
      timeLong = 2.5 
  }
  
  return timeLong
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0
  let sum_wedges = 0
  for (let lime of limes) {
    if (sum_wedges >= wedgesNeeded) {
      return count
    }
    switch (lime) {
      case 'small':
        sum_wedges += 6
        count++
        break;
      case 'medium':
        sum_wedges += 8
        count++
        break;
      case 'large':
        sum_wedges += 10
        count++
        break;
    }
  }
  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeNeed = 0
  let pending = []
  for (let order of orders) {
    if (timeNeed >= timeLeft) {
      pending.push(order)
    }
    timeNeed += timeToMixJuice(order)
  }
  return pending
}

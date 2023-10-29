//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECONDS = 1e9 * 1000;

export const gigasecond = (gs) => {
  const startDateMs = gs.getTime();
  
  const endDateMs = startDateMs + GIGASECONDS

  const endDate = new Date(endDateMs);

  return endDate;
};

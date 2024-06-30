// 1. Declare the variable returnFirstTwoDrivers with an anonymous function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. Declare the variable returnLastTwoDrivers with an anonymous function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Create an array selectingDrivers containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Create a higher-order function createFareMultiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // 5. Declare fareDoubler by invoking createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // 6. Declare fareTripler by invoking createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // 7. Create the function selectDifferentDrivers
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  };
  
  // Exporting the functions to be used in the tests
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
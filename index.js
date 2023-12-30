// Code your solution in this file!

//solution 1//
const returnFirstTwoDrivers = function(drivers) 
 {
    return drivers.slice(0, 2);
 };

//solution 2// 

const returnLastTwoDrivers = function(drivers)
{
    return drivers.slice(-2);

};

//solution 3//

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//solution 4//

function createFareMultiplier(multiplier)
 {
    return function(fare) {
      return fare * multiplier;
    };
 }

 //solution 5// 

 function createFareMultiplier(multiplier)
  {
    return function(fare) {
      return fare * multiplier;
    };
  }

  //solution 6//

  const fareDoubler = createFareMultiplier(2);

  //solution 7//

  const fareTripler = createFareMultiplier(3);

  //solution 8//

  function selectDifferentDrivers(drivers, driverSelectionFunction)
  {
    return driverSelectionFunction(drivers);
  }

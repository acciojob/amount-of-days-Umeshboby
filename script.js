function daysOfAYear(year) {
  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Define the number of days in a regular and leap year
  const daysInRegularYear = 365;
  const daysInLeapYear = 366;

  // Return the appropriate number of days based on whether it's a leap year or not
  return isLeapYear ? daysInLeapYear : daysInRegularYear;
}

// Example usage:
const inputYear = prompt("Enter a year:");
const result = daysOfAYear(parseInt(inputYear));

alert(`The number of days in ${inputYear} is: ${result}`);
function doubleIt(number) {
  return (number *= 2);
}

var myNumbers = [1, 2, 3, 4, 5];

var myDoubles = myNumbers.map(doubleIt);

myNumbers.forEach(function(number) {
  console.log("My array contains", number);
});

doubleIt = number => (number *= 2);

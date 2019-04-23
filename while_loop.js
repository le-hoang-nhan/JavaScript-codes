// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// same thing as a while loop
var i = 0;
while (i < 10) {
  console.log(i + "... This will go until we hit 10");
  i += 1;
}

var myArray = [true, true, true, false, true, true];

var myItem = null;

while (myItem !== false) {
  console.log(
    "myArray has " +
      myArray.length +
      " items now. This loop will go until we pop a false."
  );
  myItem = myArray.pop();
}

var counter = 1;
while (true) {
  console.log(counter);
  counter++;
  break; 
}

var myArray = [true, true, true, false, true, true];

var myItem = false;
do {
  console.log(
    "myArray has " +
      myArray.length +
      " items now. This loop will go until we pop a false."
  );
  myItem = myArray.pop();
} while (myItem !== false);

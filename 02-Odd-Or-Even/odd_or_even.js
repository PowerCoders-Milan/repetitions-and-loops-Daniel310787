// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen


for (var i = 0; i <= 20; i++) {
  if (i%2 == 0)
  console.log("Number " +i+ " This is a even number")
  else
  console.log("Number " +i+ " This is not a even number")
}

//2nd method

var i = 0;

while (i <= 20) {
  if (i%2 == 0)
  console.log("Number " +i+ " This is a even number")
  else
  console.log("Number " +i+ " This is not a even number")
  i++;
}

//3rd method
var i = 0;

do {
  if (i%2 == 0)
  console.log("Number " +i+ " This is a even number")
  else
  console.log("Number " +i+ " This is not a even number")
  i++;
} while (i <= 20)
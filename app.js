function fizzBuzz() {
  var inputNumber = document.getElementById("input").value;
  var error = document.getElementById("error-section");
  var print = document.getElementById("print");

  if (isNaN(inputNumber) || inputNumber.length == 0) {
    error.innerHTML = "<h3>Enter a Number</h3>"
  } 
  
  print.innerHTML = '';
  
  for (var i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      print.innerHTML += "<p>Fizz-Buzz!</p>";
    } else if (i % 3 === 0) {
      print.innerHTML += "<p>Fizz</p>";
    } else if (i % 5 === 0) {
      print.innerHTML += "<p>Buzz</p>";
    } else  
      print.innerHTML += "<p>" + i + "</p>";
  };
};

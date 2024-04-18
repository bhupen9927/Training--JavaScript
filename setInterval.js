function sayHello() {
    console.log('Hello!');
  }
  
  // Call sayHello every 2 seconds
  //setInterval(sayHello, 2000);

  //Countdown Timer

  let seconds = 10;

function countdown() {
  if (seconds > 0) {
    console.log(seconds);
    seconds--;
  } else {
    console.log("Time's up!");
    clearInterval(timer);
  }
}
let timer = setInterval(countdown, 1000);

//Updating clock

function updateClock() {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}

// Update the clock every second
// setInterval(updateClock, 1000);

// let position = 0;
// let box = document.getElementById('box');

// function animate() {
//   position += 1;
//   box.style.left = position + 'px';
// }

// // Move the box to the right every 10 milliseconds
// setInterval(animate, 10);

  
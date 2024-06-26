setTimeout(function () {
    console.log("Timer");
}, 1000) // first argument is callback function and second is timer.

setTimeout(function () {
    console.log("timer");
  }, 5000);
  function x(y) {
    console.log("x");
    y();
  }
  x(function y() {
    console.log("y");
  });
  // x y timer

  // Another Example of callback
function printStr(str, cb) {
    setTimeout(() => {
        console.log(str);
        cb();
    }, Math.floor(Math.random() * 100) + 1)
}
function printAll() {
    printStr("A", () => {
        printStr("B", () => {
            printStr("C", () => {})
        })
    })
}
printAll() // A B C // in order
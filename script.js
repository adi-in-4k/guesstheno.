window.onload = function () {
  document.querySelector(".guess").focus();
};

document.querySelector(".guess").addEventListener("input", function () {
  if (this.value > 20) {
    this.value = 20;
  }
});

const random = Math.floor(Math.random() * 21) + 1;
console.log(random);

const num = document.querySelector(".number");
// numVal = num.innerHTML;
// console.log(numVal);

// document.querySelector();

document.querySelector(".btncheck").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  if (guess === random) {
    // alert("Congratulations! You guessed the correct number.");
    num.innerHTML = random;
    console.log(num.innerHTML);
    document.body.style.backgroundColor = "green";
  } else if (guess < random) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
});

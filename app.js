const age = parseInt(prompt("How old are you?"));


if (isNaN(age)) {
  prompt("Please write a number");
}
else {
  alert("Thank you for writing your age");
}
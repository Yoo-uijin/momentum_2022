// 계산기 만들기 실습!

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  division: function (a, b) {
    console.log(a / b);
  },
  multiple: function (a, b) {
    console.log(a ** b);
  }
};

calculator.add(1, 2);
calculator.minus(2, 1);
calculator.division(4, 2);
calculator.multiple(2, 2);


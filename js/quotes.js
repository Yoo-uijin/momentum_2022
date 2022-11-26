const quotes = [
  {
    quote: "자유는 빛이 조금 더 있는 카오스일 뿐이다.",
    author: "Alan Dean Foster",
  },
  {
    quote: "미래의 제국은 마음의 제국이다.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
    author: "Albert Einstein",
  },
  {
    quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "제대로 배우기 위해서는 거창하고 교양 있는 전통이나 돈이 필요하지 않다. 스스로를 개선하고자 하는 열망이 있는 사람들이 필요할 뿐이다.",
    author: "Adam Cooper",
  },
  {
    quote: "강력한 이유는 강력한 행동을 낳는다.",
    author: "William Shakespeare",
  },
  {
    quote: "당신의 노력을 존중하라. 당신 자신을 존중하라. 자존감은 자제력을 낳는다. 이 둘을 모두 겸비하면, 진정한 힘을 갖게 된다.",
    author: "Clint Eastwood",
  },
  {
    quote: "세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.",
    author: "Dale Carnegie",
  },
  {
    quote: "다이아몬드를 찾는 사람이 진흙과 수렁에서 분투해야하는 이유는 이미 다듬어진 돌 속에서는 찾을 수 없기 때문이다. 다이아몬드는 만들어지는 것이다.",
    author: "Henry B. Wilson",
  },
  {
    quote: "꺼지지 않을 불길로 타올라라.",
    author: "Luisa Sigea",
  },
  {
    quote: "괴물과 싸우는 사람은 그 과정에서 자신마저 괴물이 되지 않도록 주의해야 한다. 그리고 그대가 오랫동안 심연을 들여다 볼 때 심연 역시 그대를 들여다 본다.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "우리는 자신을 이김으로써 스스로를 향상시킨다. (자신과의) 싸움은 반드시 존재하고, 거기에서 이겨야 한다.",
    author: "Edward Gibbon",
  },
  {
    quote: "나는 성공의 열쇠는 모른다. 그러나 실패의 열쇠는 모두의 비위를 맞추려 하는 것이다.",
    author: "Bill Cosby",
  },
  {
    quote: "성공하기까지는 항상 실패를 거친다.",
    author: "Mickey Rooney",
  },
  {
    quote: "인생의 최대 역설은 살아서 빠져나오는 사람이 거의 없다는 점이다.",
    author: "Robert Heinlein",
  },
  {
    quote: "인생은 하나의 치명적 통증이며 아주 전염성이 강한 통증이다.",
    author: "Oliver Wendell Holmes",
  },
  {
    quote: "오늘이 무슨 요일인지 몰라요. 날짜도 모르고요. 전 그저 수영만 해요.",
    author: "Michael Phelps",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
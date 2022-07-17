const quotes = [
  {
      quote : "The way to get started is to quit talking and begin doing.",
      author : 'Walt Disney'
  },
  {
      quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma",
      author : 'Steve Jobs'
  },
  {
      quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author : 'Nelson Mandela'
  },
  {
      quote : "If life were predictable it would cease to be life, and be without flavor.",
      author : 'Eleanor Roosevelt'
  },
  {
      quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author : 'Oprah Winfrey'
  },
  {
      quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author : 'James Cameron'
  },
  {
      quote : "Life is what happens when you're busy making other plans.",
      author : 'John Lennon'
  },
  {
      quote : "That which does not kill us makes us stronger.",
      author : 'Friedrich Nietzsche'
  },
  {
      quote : "When the going gets tough, the tough get going.",
      author : 'Joe Kennedy'
  },
  {
      quote : "You only live once, but if you do it right, once is enough.",
      author : 'Mae West'
  }
]

const $quote = document.querySelector('#quote');
const $author = document.querySelector('#author');
const $quotesContainer = document.querySelector('#quotesContainer');

$quote.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote;
$author.innerText = quotes[Math.floor(Math.random()*quotes.length)].author;

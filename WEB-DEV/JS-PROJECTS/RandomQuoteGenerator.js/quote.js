const author=document.querySelector('.author')
const quote=document.querySelector('.quote')
const btn=document.querySelector('#new-quote')

const quoteArray=[
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { quote: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "I never dreamed about success. I worked for it.", author: "Estee Lauder" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" }
  ];

  btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*quoteArray.length)
    author.innerText=quoteArray[random].author
    quote.innerText=quoteArray[random].quote
  })
const quote = document.querySelector('#quote');

const quoteAuthor = document.querySelector('#quoteAuthor');

const quoteBtn = document.querySelector('#quoteBtn');

const arr =[
    {
        quote:'I think, therefore I am',
        quoteAuthor: 'René Descartes'
    },
    {
        quote: 'When life gives you lemons, make lemonade',
        quoteAuthor: 'Elbert Hubbard'
    },
    {
        quote: 'Practice makes perfect',
        quoteAuthor: 'Vince Lombardi'
    },
    {
        quote:'When you reach the end of your rope, tie a knot in it and hang on.',
        quoteAuthor:'Franklin D. Roosevelt'
    },
    {
        quote:'It always seems impossible until it is done',
        quoteAuthor:'Nelson Mandela'
    },
    {
        quote:'Be yourself; everyone else is already taken',
        quoteAuthor:'Oscar Wilde'
    },
    {
        quote:'So many books, so little time',
        quoteAuthor:'Frank Zappa'
    },
    {
        quote:'Knowledge is power',
        quoteAuthor:'Sir Francis Bacon'
    },
]
var content = Math.floor(Math.random() * arr.length)
var random = arr[content]
// console.log(random)


quoteBtn.addEventListener('click', sendQuote);

function sendQuote(){
    let final = random
    {
        quote.innerHTML = final.quote
        quoteAuthor.innerHTML = final.quoteAuthor
    }
}


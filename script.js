const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author')
const xBtn = document.getElementById('x')
const newQuoteBtn = document.getElementById('new-quote')

// let apiQuotes = [];

// Show New Quote
function newQuote() {
      // Pick a random quote from apiQuotes array
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      authorText.textContent = quote.author
      quoteText.textContent = quote.text
}

// Get Quotes From API
// async function getQuotes() {
//       const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
//       try {
//             const response = await fetch(apiUrl)
//             apiQuotes = await response.json();
//             newQuote();
//       } catch (error) {
//             // handle your error
//       }
// }

// On Load
// getQuotes();
newQuote();
const quoteBox = document.getElementById('quote-box')
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author')
const xBtn = document.getElementById('x')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Show Loading
function loading() {
      loader.hidden = false;
      quoteBox.hidden = true;
}

// Hide Loading
function complete() {
      quoteBox.hidden = false;
      loader.hidden = true;
}
// Show New Quote
function newQuote() {
      loading();
      // Pick a random quote from localQuotes file
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      authorText.textContent = quote.author

      // Check quote length and determine the styling
      if (quote.text.length > 110) {
            quoteText.classList.add('long-quote')
      } else {
            quoteText.classList.remove('long-quote')
      }
      quoteText.textContent = quote.text
      complete();
}

// Tweet a Quote
function tweetQuote() {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
      window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
xBtn.addEventListener('click', tweetQuote)

newQuote();

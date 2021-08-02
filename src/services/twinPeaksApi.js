export const fetchQuote = async () => {
  const res = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random');
  
  const json = await res.json();
  const quote = json.quoteText;
  console.log(quote);
  return quote;
};
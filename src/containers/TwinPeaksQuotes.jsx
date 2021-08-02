import React, { useState } from 'react';
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote';
import { fetchQuote } from '../services/twinPeaksApi';

const TwinPeaksQuotes = () => {
  const [quote, setQuote] = useState({ 'quote': 'Want a quote? Click the button!' });

  const handleClick = async () => {
    const res = await fetchQuote();
    const quote = JSON.stringify(res);
    setQuote({ quote });
  };

  return (
    <>
      <Quote quote={quote} />
      <Load onClick={handleClick} />
    </>
  );
  
};

export default TwinPeaksQuotes;

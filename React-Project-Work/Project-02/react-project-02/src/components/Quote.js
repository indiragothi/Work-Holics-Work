import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState(null);

    function getRandomQuote(quotes){
        return quotes[Math.floor(Math.random()*quotes.length)];
    }

    function getNewQuote(){
        setQuote(getRandomQuote(quotes));
    }

    useEffect(()=>{
        fetch("https://type.fit/api/quotes").then((res)=>res.json())
        .then((json)=>{
            setQuotes(json);
            setQuote(json[0]);
        });
    }, []);

  return (
    <>
       <div className='container text-center my-5 p-3 pb-5 bg-light bg-gradient shadow-lg rounded-4'>
            <h1 className='p-3 fw-bold'>Quote-Generator-App</h1>
            <section>
                <button type='button' className='btn btn-info p-3 mb-3' onClick={getNewQuote}>Click Me</button>
                <div className='text-center my-3 fw-medium fs-3 text-info-emphasis'>
                    <span>“</span>
                    {quote?.text}
                    <span>”</span>
                </div>
                <i className='text-bold text-dark'>- {quote?.author}</i>
            </section>
       </div>
    </>
  )
}

export default Quote

import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter();

    //const numero = 1;

    console.log(counter);

    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {quote, author} = !!data && data[0];

    //console.log(data, isLoading, hasError);

    //console.log({initialValue});

  return ( 
    <>
        <h1>BreakingBad Quotes</h1>
        <h2>Cont Val: {counter}</h2>
        <hr />    

        {
            isLoading
                ? (
                    <div className='alert alert-info text-center'>
                        Cargando...
                    </div>
               )
                : (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-2'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
             )

        }

        <button className='btn btn-primary' 
                onClick={decrement}
                disabled={isLoading}> 
            Back Quote
        </button>

        <button className='btn btn-primary' 
                onClick={increment}
                disabled={isLoading}> 
            Next Quote
        </button>
    </>
  )
}

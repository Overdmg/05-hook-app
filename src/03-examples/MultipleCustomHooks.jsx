
import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1); 

    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
     
    const {quote, author} = !!data && data[0];

  return ( 
    <>
        <h1>BreakingBad Quotes</h1>
        <h2>Cont Val: {counter}</h2>
        <hr />    

        {
         /*   
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
            */
        } 

        {          
            isLoading
                ? (
                    <LoadingQuote />
               )
                : (
                    <Quote author={author} quote={quote} />
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

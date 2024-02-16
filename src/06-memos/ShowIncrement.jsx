import React from 'react'

export const ShowIncrement = React.memo( ({ increment }) => {
   

    console.log('Me re-dibuje');

    return (
      <button
        className="btn btn-primary"
        onClick={ () => {
            increment();
             }
        }
        >
        Increment
      </button>
  )
})



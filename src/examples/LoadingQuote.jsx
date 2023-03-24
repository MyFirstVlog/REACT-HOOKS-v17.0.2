import React from 'react'

export const LoadingQuote = ({message = "loading"}) => {
  return (
    <div className="alert alert-info text-center"> {message} </div>
  )
}

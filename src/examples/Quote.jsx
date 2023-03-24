import React from 'react'

export const Quote = ({species, status, name}) => {
  return (
    <blockquote className="blockquote text-end">
        <p className="mb-1">{species}-{status} </p>
        <footer className="blockquote-footer mt-1">{name}</footer>
    </blockquote>
  )
}
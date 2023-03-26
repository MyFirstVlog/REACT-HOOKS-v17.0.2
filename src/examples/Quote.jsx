import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({species, status, name}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width:0, height:0
  });

  useLayoutEffect(() => {
    const dimensions = pRef.current.getBoundingClientRect();
    const {width, height} = !!dimensions && dimensions;
    setBoxSize({width,height});
  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{display: 'flex'}}>
          <p ref={pRef} className="mb-1">{species}-{status} </p>
          <footer className="blockquote-footer mt-1">{name}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
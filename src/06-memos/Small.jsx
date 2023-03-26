import React from "react";

export const Small = React.memo(({value}) => {

    console.log("me volvi a dibujar siuuu");

  return (
    <small>{value}</small>
  );
});

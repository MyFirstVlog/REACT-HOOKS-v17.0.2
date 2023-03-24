import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

  const {increment,counter} = useCounter(1);

  console.log("el counter ", counter);

  const {isLoading, data, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  const {species, status, name} = !!data && data;
  console.log("log en multipleCustomHooks", {data, isLoading, hasError, species, status, name});
  // const array  = !!data && data.results;

  // const mapRegisters = ()  => {
  //   if(array){
  //     array.map(each => {
  //       console.log({each});
  //       return <blockquote className="blockquote text-end">
  //         <p className="mb-1">{each.species}-{each.status} </p>
  //         <footer className="blockquote-footer mt-1">{each.name}</footer>
  //     </blockquote>
  //     });
  //   }
  //   return "";
  // }     
  



  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      {
        isLoading 
          ? (
              <LoadingQuote message={"Cargandooooo"} />
          ):
          (
            <> 
              <Quote 
                species={species}
                status={status}
                name={name}
              />

              <button
                disabled={isLoading}
                className="btn btn-primary"
                onClick={() => increment()}
              >next quote</button>
            </>
          )  

            // mapRegisters()

      }
    </>
  );
};

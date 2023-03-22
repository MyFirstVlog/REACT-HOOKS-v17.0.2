import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const {} = useFetch("https://rickandmortyapi.com/api/character/1");

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
    </>
  );
};

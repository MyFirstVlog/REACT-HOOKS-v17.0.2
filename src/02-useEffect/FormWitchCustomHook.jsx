import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { onResetChange, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: ""
  });

  // const { username, email, password } = formState;

  console.log({
    username,
    email,
    password
  });

  // useEffect(() => {
  //   //   console.log("form is changing and I can detect it at least at first nesting level");
  // }, [formState]);

  // useEffect(() => {
  //   //   console.log("form is changing and I can detect it at least at first nesting level");
  // }, [email]);

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetChange}>
        Reset
      </button>
    </>
  );
};

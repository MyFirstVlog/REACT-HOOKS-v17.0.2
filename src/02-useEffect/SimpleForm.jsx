import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider",
        email: "alejoestradam@gmail.com"
    });

    const {username, email} = formState;


    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
        console.log(formState);
    }

    useEffect(() => {
      console.log("form is changing and I can detect it at least at first nesting level");
    }, [formState]); 

    useEffect(() => {
      console.log("form is changing and I can detect it at least at first nesting level");
    }, [email]); 
    

  return (
    <>
        <h1>
            Formulario Simple
        </h1>
        <hr/>

        <input  
            type='text'
            className="form-control"
            placeholder="Username"
            name = "username"
            value={username}
            onChange={onInputChange}
        />        

        <input  
            type='text'
            className="form-control mt-2"
            placeholder="Email"
            name = "email"
            value={email}
            onChange={onInputChange}
        />        
    </>
  )
}

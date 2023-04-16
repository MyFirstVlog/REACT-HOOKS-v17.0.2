import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider",
        email: "alejoestradam@gmail.com",
        flexRadioDefault1: '0',
        flexRadioDefault2: '0'
    });

    const {username, email, flexRadioDefault1, flexRadioDefault2} = formState;


    const onInputChange = ({target}) => {
        const {name, value} = target;
        console.log({name,value});
        setFormState({
            ...formState,
            [name]: value
        })
        console.log({formState});
    }

    const onClick = ({target}) => {
        const {value, name} = target;
        console.log(value,name, "ajam", formState[name]);
        const currentState = formState[name] === '1' ? '2' : formState[name] === 0 ? '0' : '2';
        const event = {
            target: {
                name,
                value: currentState ? 'on' : ''
            }
        }

        console.log({event});
        onInputChange(event);
    }

    useEffect(() => {
      console.log("form is changing and I can detect it at least at first nesting level", {formState});
    }, [formState]); 

    useEffect(() => {
    //   console.log("form is changing and I can detect it at least at first nesting level");
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

        {
            username === "strider2" && <Message />
        }

        <input  
            type='text'
            className="form-control mt-2"
            placeholder="Email"
            name = "email"
            value={email}
            onChange={onInputChange}
        /> 

        <div className="form-control mt-1">
            <input className="form-check-input" value={1} type="radio" name="flexRadioDefault1" id="flexRadioDefault1" onChange={onInputChange}  onClick={onClick}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Default radio
            </label>
            <input className="form-check-input ml-1" value={2} type="radio" name="flexRadioDefault2" id="flexRadioDefault2"  onChange={onInputChange}  />
            <label className="form-check-label ml-1" htmlFor="flexRadioDefault1">
                Default radio
            </label>
        </div>

    </>
  )
}

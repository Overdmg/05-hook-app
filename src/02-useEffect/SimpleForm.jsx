import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username: 'Overdmg',
    email: 'overdmg@correo.com.do'

});

  const {username, email} = formState;

  const onImputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
        ...formState,
        [name]: value
      })
  }

  /*
  useEffect( () => {
    console.log("se llamo el useEffect!")
  },[] );

  useEffect( () => {
    console.log("Cambio el formState!")
  },[formState] );

  useEffect( () => {
    console.log("se llamo el useEffect!")
  },[ email ] );
*/




  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Favor colocar el usuario"
            name="username"
            value={ username }
            onChange={ onImputChange }
    />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="Favor colocar el email"
            name="email"
            value={ email }
            onChange={ onImputChange }
        />

        {
          (username === 'strider2') && <Message/>
          
          }
    </>
  )
}

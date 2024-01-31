import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {formState, onImputChange, onResetForm, username, password, email } = useForm({
      username: '',
      password: '',
      email: ''

    });

    //const { username, password, email } = formState;

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
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

        <button onClick={ onResetForm } className="btn btn-primary mt-3"> Borrar </button>

    </>
  )
}

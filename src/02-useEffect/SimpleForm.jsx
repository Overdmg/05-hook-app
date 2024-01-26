import { useState } from "react";

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
    </>
  )
}

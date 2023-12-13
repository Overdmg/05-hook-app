
export const SimpleForm = () => {

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="Favor colocar el usuario"
            name="username"
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="Favor colocar el email"
            name="email"
        />



    </>
  )
}

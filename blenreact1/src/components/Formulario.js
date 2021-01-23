const Formulario = () => {
  return (
    <div>
      <form action="">
        <FormInput
          title="nombre"
          type="text"
          name="name"
          placeholder="Nombre de usuario"
        />
        <FormInput
          title="password"
          type="password"
          name="password"
          placeholder="*******"
        />
        <br />
        <FormButtonSend title="enviar" />
      </form>
    </div>
  );
};

export default Formulario;

export const FormInput = ({ title, type, name, placeholder }) => {
  return (
    <div>
      <label htmlFor="">{title}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
const FormButtonSend = ({ title }) => {
  return (
    <div>
      <button>{title}</button>
    </div>
  );
};

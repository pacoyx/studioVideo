import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import { registerRequest } from "../actions";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValues] = useState({ email: "", name: "", password: "" });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
            />
            <input
              onChange={handleInput}
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
            />
            <input
              onChange={handleInput}
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

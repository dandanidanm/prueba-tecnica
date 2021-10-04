import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../../actions/authActions";
import { useDispatch } from "react-redux";



const Register = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange, reset] = useForm({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const { nombre, email, password, password2 } = formValue;

  const formValid = () => {
    if (nombre.trim().length === 0 || nombre.trim().length < 3) {
      alert("error")
      return false;
    } else if (email === "") {
        alert("error")
      return false;
    } else if (password !== password2 || password < 5) {
      alert("error")
      return false;
    }

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, nombre));
    }
    reset();
  };

  return (
    <div className="registro py-5 container text-center">
      <form className="form-signin" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          ¡Registrate en nuestro sistema!
        </h1>
        {
        formValid === false
        ? (<div className="alert alert-danger">
          {alert}
        </div>)
        :null
        }
        <label htmlFor="inputemailaddress" className="sr-only">
     
        </label>

        <input
          type="text"
          placeholder="Name"
          name="nombre"
          className="form-control"
          autoComplete="off"
          value={nombre}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          autoComplete="off"
          required=""
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          name="password2"
          id="inputPassword2"
          className="form-control"
          placeholder="Confirm password"
          required=""
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-1">
          Register
        </button>
        <br />
        <Link to="/auth/login"className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default Register;

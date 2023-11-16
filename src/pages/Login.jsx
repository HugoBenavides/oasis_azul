import React from "react";
import "./login.css";

import { Link } from "react-router-dom";

const Login = () => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{6,12}$)"
  );

  const handleRegisterBtn = ()=>{
    const container = document.getElementById("container")
    const registerBtn = document.getElementById("register")
    registerBtn.addEventListener("click",()=>{
      container.classList.add("active")
    })
  }

  const handleLoginBtn = ()=>{
    const container = document.getElementById("conatiner");
    const loginBtn = document.getElementById("login")
    loginBtn.addEventListener("click", ()=>{
      container.classList.remove("active")
    })
  }


  return (
    <div className="body bg-white">
      <Link to="/">
        <h1 className="text-center text-4xl text-[#512da8] mb-4">
          Albercas Oasis Azul
        </h1>
      </Link>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Crear Cuenta</h1>
            <span>Contacte a ADMIN para liberar su usuario y contraseña</span>
            <input
              className="focus:outline-none"
              type="email"
              max={40}
              placeholder="E-mail"
            />
            <input
              className="focus:outline-none"
              type="password"
              minLength={6}
              maxLength={12}
              pattern={regex}
              placeholder="Contraseña"
              title="Debe tener entre 6 y 12 caracteres, al menos un numero, un caracter especial !@#$%^&*_ y una letra mayúscula"
            />
            <button onClick={(e) => e.preventDefault()}>CREAR</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Acceder</h1>
            <span>Acceda a su información de compras</span>
            <input
              className="focus:outline-none"
              type="email"
              maxLength={40}
              placeholder="E-mail"
            />
            <input
              className="focus:outline-none"
              type="password"
              minLength={6}
              maxLength={12}
              placeholder="Contraseña"
            />
            <button onClick={(e)=>e.preventDefault()}>ACCEDER</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Bienvenido!</h2>
              <p>
                Ingrese para obtener la información de sus facturas, compras y
                cotizaciones
              </p>
              <button className="alt" id="login" onClick={handleLoginBtn}>ACCEDER</button>
            </div>
          </div>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h2>Hola</h2>
              <p>
                Cree una cuenta para administrar sus compras, facturas y
                cotizaciones
              </p>
              <button className="alt" id="register" onClick={handleRegisterBtn}>
                CREAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

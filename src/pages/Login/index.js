import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import './styles.css';

const Login = () => (
  <div className="login-container">
    <section className="form">
      <form>
        <img className="logo" src={logoImg} alt="Heroes"/>
        <h1>Faça seu Login</h1>
          <input type="text" placeholder="ONG ID"/>
          <button className="button" type="submit">Entrar</button>
        <a href="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </a>
      </form>
    </section>
    <img src={heroesImg} alt="Heroes"/>
  </div>
);

export default Login;

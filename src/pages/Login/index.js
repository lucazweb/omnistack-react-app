import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import './styles.css';


const Login = () => {
  const history = useHistory();
  const [id, setId] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const ong = await api.post('session', { id });
      const { name } = ong.data;
      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', name);
      
      history.push('/profile');
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <img className="logo" src={logoImg} alt="Heroes"/>
          <h1>Faça seu Login</h1>
            <input onChange={e => setId(e.target.value)} type="text" placeholder="ONG ID"/>
            <button className="button" type="submit">Entrar</button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Login;

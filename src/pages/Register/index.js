import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { api } from  '../../services/api';
import './styles.css';

const Register = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name, 
      email, 
      whatsapp,
      city,
      uf
    };    

    try{
      const response = await api.post('/ongs', data);
      history.push('/');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos de sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={e => handleSubmit(e)}>
            <input onChange={e => setName(e.target.value)} placeholder="Nome da ONG"/>
            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
            <input onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp"/>

            <div className="input-group">
              <input onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
              <input onChange={e => setUf(e.target.value)} placeholder="UF" style={{width: 80}} />
            </div>

            <button className="button" type="submit">Cadastrar</button>

          </form>        
      </div>
    </div>
);
} 

export default Register;

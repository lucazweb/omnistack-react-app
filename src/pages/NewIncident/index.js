import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import './styles.css';

const NewIncident = () => {
  const ong_id = localStorage.getItem('ong_id');
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  
  const handleNewIncident = async e => {
    e.preventDefault();
    
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ong_id
        }
      });
      history.push('/profile');
      console.log('novo caso criado');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um héroi e resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={e => handleNewIncident(e)}>
            <input 
              onChange={e => setTitle(e.target.value)}
              defaultValue={title}
              placeholder="Título do caso"
            />
            <textarea 
              onChange={e => setDescription(e.target.value)} 
              defaultValue={description}
              placeholder="Descrição"
            />
            <input 
              onChange={e => setValue(e.target.value)}
              defaultValue={value}
              placeholder="Valor em Reais"
            />
            <button className="button" type="submit">Cadastrar</button>
          </form>        
      </div>
    </div>
);
}

export default NewIncident;

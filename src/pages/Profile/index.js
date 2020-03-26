import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { api } from '../../services/api';
import './styles.css';

const Profile = () => {
  const history = useHistory();
  const ong_id = localStorage.getItem('ong_id');
  const [name, setName] = useState('');
  useEffect(() => setName(localStorage.getItem('ong_name')), []);

  const [incidents, setIncidents] = useState([]);
  
  useEffect(() => {
    try {
      api.get('/profile', {
          headers: {
            Authorization: ong_id
          }
      }).then(response => setIncidents(response.data))
    } catch (err){
      console.log(err);
    }
  }, [ong_id]);

  const handleDeleteIncident =  async id => {
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ong_id
        }
      });
      setIncidents(incidents.filter( incident => incident.id !== id));
    } catch(err){
      console.log('Erro ao deletar caso, tente novamente');
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
       <header>
         <img src={logoImg} alt="Be the Hero"/>
         <span>Bem vinda, { name }</span>
         <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
         <button onClick={() => handleLogout()} className="button button-logout">
           <FiPower size={18} color="#E02041" />
         </button>
       </header>
      <div className="content">
        <h1>Casos cadastrados</h1>
        <ul>
          {
            incidents.map(incident => (
              <li key={incidents.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>
      
                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>
      
                <strong>VALOR:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                <button onClick={() => handleDeleteIncident(incident.id)}>
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>                    
            ))
          }
        </ul>
      </div>
       
    </div>
  );
}

export default Profile;

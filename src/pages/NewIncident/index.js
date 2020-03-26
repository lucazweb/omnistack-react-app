import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

const NewIncident = () => (
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

        <form>
            <input placeholder="Título do caso"/>
            <textarea placeholder="Descrição"/>
            <input placeholder="Valor em Reais"/>
            <button className="button" type="submit">Cadastrar</button>

          </form>        
      </div>
    </div>
);

export default NewIncident;

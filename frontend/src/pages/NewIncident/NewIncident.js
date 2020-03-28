import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import styles from './NewIncident.module.scss';

export default function NewIncident() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    if(!ongId){
        history.push('/')
    }

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            alert(`Seu Caso foi cadastrado com sucesso!`);

            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro do caso, tente novamente.');
        }
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o home
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="text" 
                        placeholder= "Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
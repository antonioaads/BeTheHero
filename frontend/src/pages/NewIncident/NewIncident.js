import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'

import styles from './NewIncident.module.scss';

export default function NewIncident() {
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

                <form>
                    <input type="text" placeholder="Título do caso"/>
                    <textarea type="email" placeholder="Descrição"/>
                    <input type="text" placeholder= "Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
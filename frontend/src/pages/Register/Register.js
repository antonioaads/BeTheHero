import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import styles from './Register.module.scss';

 
export default function Register() {
    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>

                </section>

                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder= "WhatsApp"/>
                    
                    <div className={styles["input-group"]}>
                        <input type="text" placeholder= "Cidade"/>
                        <input type="text" placeholder= "UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
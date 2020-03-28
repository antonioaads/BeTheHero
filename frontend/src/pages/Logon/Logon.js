import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi'

import styles from './Logon.module.scss';

 
export default function Logon() {
    return (
        <div className={styles["container"]}>
            <section className={styles["form"]}>
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}
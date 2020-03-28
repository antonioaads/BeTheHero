import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'

import styles from './Profile.module.scss';
 
export default function Profile() {
    const ongName = localStorage.getItem('ongName');

    return (
        <div className={styles["container"]}>
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link to='/incidents/new' className="button">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
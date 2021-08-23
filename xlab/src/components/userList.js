import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
import './styles.css';



export function UserList(){

    //TODO: Fazer chamada na API para carregar dados reais
    const clientes = [
        {idUsuario: 1, nomeUsuario: 'Cliente 1'},
        {idUsuario: 2, nomeUsuario: 'Cliente 2'},
        {idUsuario: 3, nomeUsuario: 'Cliente 3'},
        {idUsuario: 4, nomeUsuario: 'Cliente 4'},
        {idUsuario: 5, nomeUsuario: 'Cliente 5'},
        {idUsuario: 6, nomeUsuario: 'Cliente 6'},
        {idUsuario: 7, nomeUsuario: 'Cliente 7'},
        {idUsuario: 8, nomeUsuario: 'Cliente 8'},
    ]

    const history = useHistory();

    function handleButton(cliente){
        localStorage.setItem('nomeUsuario',cliente.nomeUsuario);
        localStorage.setItem('idUsuario',cliente.idUsuario);
        history.push('./User/DebitList');
    }

    return (
        <div className="userlist-container">
            <ul>
                {clientes.map(cliente =>(
                    <button className="button"
                        key={cliente.idUsuario}
                        onClick={()=> handleButton(cliente)}
                    >{cliente.nomeUsuario}</button>
                ))}
            </ul>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import jsonPlaceholder from '../services/jsonPlaceholder';
import './styles.css';



export function UserList() {
    const [clientes, setClientes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        jsonPlaceholder.get('users',{}).then(response => {
                setClientes(response.data);
        })
    });

    function handleButton(cliente){
        localStorage.setItem('nomeUsuario',cliente.name);
        localStorage.setItem('idUsuario',cliente.id);
        history.push('./User/DebitList');
    }

    return (
        <div className="userlist-container">
            <ul>
                {clientes.map(cliente =>(
                    <button className="button"
                        key={cliente.id}
                        onClick={()=> handleButton(cliente)}
                    >{cliente.name}</button>
                ))}
            </ul>
        </div>
    );
}
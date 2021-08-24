import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../../services/api';
import { DebitChart } from '../../../components/debitChart';

export default function DebitList(){

    const idUsuario = localStorage.getItem('idUsuario');
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const [debitos, setDebitos] = useState([]);
    const uuid = process.env.REACT_APP_XLAB_API_KEY;

    const history = useHistory();

    useEffect(() => {
        api.get('divida',
        {params: 
            {uuid: uuid}
        }).then(response => {
            setDebitos(response.data.result);
        })
    });

    function handleBack(){
        localStorage.clear();
        history.push('/');
    }
    
    function handleNewDebt(){
        localStorage.setItem('idDivida',null);
        history.push('./Debit/',{params:{motivo:'', valor:''}});
    }
    
    var userDebits = debitos.filter(function(debito){
        return debito.idUsuario == idUsuario;
    });

    return (
        <div className="debitlist-container">
            <h1>{nomeUsuario}</h1>
            <h2>Lista de Dívidas</h2>
            <ul>
                {userDebits.map(debito => (
                    <DebitChart 
                    nomeUsuario={debito.nomeUsuario}
                    idUsuario={debito.idUsuario}
                    idDivida={debito._id}
                    motivo={debito.motivo}
                    valor={debito.valor}
                    />
                ))}
                

                <button className="button" onClick={()=> handleNewDebt()}>Nova Dívida</button>
                <button className="button" onClick={()=> handleBack()}>Voltar</button>
            </ul>
        </div>
    )
}
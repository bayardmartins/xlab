import React from 'react';
import { useHistory } from 'react-router-dom'
import api from '../services/api';

import './styles.css';

export function DebitChart(parms){
    const idDivida = parms.idDivida;
    const motivo = parms.motivo;
    const valor = parms.valor;
    const uuid = process.env.REACT_APP_XLAB_API_KEY;
    
    const history = useHistory();

    async function handleDelete(){
        try{
            //Todo: Adicionar uuid,
            await api.delete(`divida/${idDivida}`, {
                params: 
                {uuid: uuid}
            });
        }catch(err){
            alert('Erro ao deletar dívida');
        }
    }

    async function handleEdit(){
        localStorage.setItem('idDivida',idDivida);
        history.push('../User/Debit',{params:{motivo:motivo, valor:valor}})
    }

    return (
        <div className="debitchart">
            <li>
                <strong>Motivo</strong>
                <p>{motivo}</p>

                <strong>Valor</strong>
                <p>{valor}</p>
            </li>

            <button className="button-chart" onClick={() => handleEdit()}>Editar</button>
            <button className="button-chart" onClick={() => handleDelete()}>Deletar</button>
        </div>
    )
}


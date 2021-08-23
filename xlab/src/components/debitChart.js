import React from 'react';
import { useHistory } from 'react-router-dom'
import api from '../services/api';

import './styles.css';

export function DebitChart(parms){
    const id = parms.id;
    const motivo = parms.motivo;
    const valor = parms.valor;
    
    const history = useHistory();

    async function handleDelete(id){
        try{
            //Todo: Adicionar uuid,
            await api.delete(`divida/${id}`, {
                body: {
                    
                }
            });
        }catch(err){
            alert('Erro ao deletar dívida');
        }
    }

    async function handleEdit(id){
        localStorage.setItem('idDivida',id);
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

            <button className="button" onClick={() => handleEdit(id)}>Editar</button>
            <button className="button" onClick={() => handleDelete(id)}>Deletar</button>
        </div>
    )
}


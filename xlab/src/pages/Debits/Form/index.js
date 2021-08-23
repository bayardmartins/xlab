import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import api from '../../../services/api';
import './styles.css';

export default function DebitForm(){
    const location = useLocation();
    const params = location.state.params;
    
    const idUsuario = localStorage.getItem('idUsuario');
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const id = localStorage.getItem('idDivida');
    const [motivo, setMotivo] = useState('');
    const [valor, setValor] = useState('');

    async function handleNewDebit(e) {
        e.preventDefault();
        if(id){
            const data = {
                //TODO:adicionar chave
                id,
                idUsuario,
                motivo,
                valor,
            };
            try{
                console.log(data);
                await api.post('updateDivida/'+id, data)
            }catch (err) {
                alert('Erro ao atualizar dívida. Tente novamente.')
            }
        }else{
            const data = {
                //TODO:adicionar chave
                idUsuario,
                motivo,
                valor,
            };
            try{
                console.log(data);
                await api.post('createDivida', data)
            }catch (err) {
                alert('Erro ao cadastrar dívida. Tente novamente.')
            }
        }
    }

    return (
        <div className="debit-container">
            <h1>Cadastro de Dívida</h1>
            <form onSubmit={handleNewDebit}>
                <strong>Cliente</strong>
                <input defaultValue={nomeUsuario} />

                <strong>Motivo</strong>
                <textarea 
                value={params.motivo}
                onChange={e => setMotivo(e.target.value)}
                />

                <strong>Valor em Reais</strong>
                <input 
                value={params.valor}
                onChange={e => setValor(e.target.value)}
                />

                <button className="button" type="submit">Salvar</button>
            </form>
            <Link className="button" to="/User/DebitList">Voltar</Link>
        </div>
    )
}
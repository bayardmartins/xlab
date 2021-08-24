import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import api from '../../../services/api';
import './styles.css';

export default function DebitForm(){
    const location = useLocation();
    const params = location.state.params;
    const history = useHistory();
    
    const idUsuario = localStorage.getItem('idUsuario');
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const id = localStorage.getItem('idDivida');
    const [motivo, setMotivo] = useState(params.motivo);
    const [valor, setValor] = useState(params.valor);
    const uuid = process.env.REACT_APP_XLAB_API_KEY;

    async function handleNewDebit(e) {
        e.preventDefault();
        
        if(validateValor(valor)){

            const data = {
                idUsuario,
                motivo,
                valor,
            };
            if(id !== 'null'){    
                try{
                    await api.put('divida/'+id, data, {params: {uuid : uuid}});
                    history.push('/User/DebitList');
                }catch (err) {
                    alert('Erro ao atualizar dívida. Tente novamente.')
                }
            }else{
                try{
                    await api.post('divida', data, {params: {uuid : uuid}});
                    history.push('/User/DebitList');
                }catch (err) {
                    alert('Erro ao cadastrar dívida. Tente novamente.')
                }
            }   
        }else{
            alert('Valor inválido')
        }
    }

    function validateValor(toValidate){
        var regexp1 = /^([0-9\b])+\.([0-9\b]){1,2}$/;
        var regexp2 = /^([0-9\b])+$/;
        return (toValidate.match(regexp1) || toValidate.match(regexp2))
    }

    return (
        <div className="debit-container">
            <h1>Cadastro de Dívida</h1>
            <form onSubmit={handleNewDebit}>
                <strong>Cliente</strong>
                <input defaultValue={nomeUsuario} />

                <strong>Motivo</strong>
                <textarea 
                value={motivo}
                onChange={e => setMotivo(e.target.value)}
                />

                <strong>Valor em Reais</strong>
                <input 
                value={valor}
                onChange={e => setValor(e.target.value)}
                />

                <button className="button" type="submit">Salvar</button>
            </form>
            <Link className="button" to="/User/DebitList">Voltar</Link>
        </div>
    )
}
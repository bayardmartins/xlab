import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import { DebitChart } from '../../../components/debitChart';

export default function DebitList(){

    const idUsuario = localStorage.getItem('idUsuario');
    const nomeUsuario = localStorage.getItem('nomeUsuario');

    const history = useHistory();

    function handleBack(){
        localStorage.clear();
        history.push('/');
    }
    
    function handleNewDebt(){
        history.push('./Debit/',{params:{motivo:'', valor:''}});
    }

    return (
        <div className="debitlist-container">
            <h1>{nomeUsuario}</h1>
            <h2>Lista de Dívidas</h2>
            {/* TODO: api buscar todas as dívidas do usuário */}
            <ul>
                <DebitChart id={1}
                    nomeUsuario={nomeUsuario}
                    idUsuario={idUsuario}
                    idDivida={1}
                    motivo={"teste descrição"}
                    valor={"123,00"}
                />
                <DebitChart id={2}
                    nomeUsuario={nomeUsuario}
                    idUsuario={idUsuario}
                    idDivida={2}
                    motivo={"teste descrição 2"}
                    valor={"100,00"}
                />
                <button className="button" onClick={()=> handleNewDebt()}>Nova Dívida</button>
                <button className="button" onClick={()=> handleBack()}>Voltar</button>
            </ul>
        </div>
    )
}
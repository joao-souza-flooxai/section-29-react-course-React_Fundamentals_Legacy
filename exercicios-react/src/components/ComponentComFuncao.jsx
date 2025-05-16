import React from 'react';

export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia'];

    const gerarItens = itens => {
        return itens.map(item => <li key={item}>{item}</li>);
    };

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    );
};
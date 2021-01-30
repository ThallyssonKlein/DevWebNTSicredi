import React, { useEffect, useState, useContext } from 'react';

import { FindAll } from '../service/Dragon';

import Table from '../components/Table';

import { ErrorMessageContext } from '../contexts/ErrorMessageContext';

export default function List(){
    const {messages, addAMessage} = useContext(ErrorMessageContext);
    const [dragons, setDragons] = useState(false);
    
    useEffect(async _ => {
        const Dragons = await FindAll();
        if(Dragons){
            setDragons(Dragons);
        }else{
            addAMessage("Falha na comunicação com a API");
        }
    }, []);

    return <html>
        <head>
            <title>Lista dos dragões — Gerenciador de Dragões</title>
        </head>
        <body>
            {messages}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {(dragons) ? <Table dragons={dragons}/> : "Carregando Dragões...."}
            </div>
        </body>
    </html>
}
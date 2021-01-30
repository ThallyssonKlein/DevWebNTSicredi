import React, { useEffect, useState } from 'react';

import { FindAll } from '../service/Dragon';

import Table from '../components/Table';

export default function List(){
    const [dragons, setDragons] = useState(false);

    useEffect(async _ => {
        const Dragons = await FindAll();
        setDragons(Dragons);
    }, []);

    return <html>
        <head>
            <title>Lista dos dragões — Gerenciador de Dragões</title>
        </head>
        <body>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {dragons && <Table dragons={dragons}/>}
            </div>
        </body>
    </html>
}
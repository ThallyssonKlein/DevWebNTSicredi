import React, { useEffect, useState, useContext } from 'react';

import { FindAll } from '../service/Dragon';

import Table from '../components/Table';

import { ErrorMessageContext } from '../contexts/ErrorMessageContext';
import { TrContext } from '../contexts/TrContext';

import Modal from 'react-modal';

import { getSession } from 'next-auth/client';

import NavBar from '../components/NavBar';
import ButtonsBar from '../components/ButtonsBar';
function List(){
    const {messages, addAMessage} = useContext(ErrorMessageContext);
    const [dragons, setDragons] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [detalhes, setDetalhes] = useState(null);
    const {deleteSelecteds} = useContext(TrContext);

    useEffect(async _ => {
        const Dragons = await FindAll();
        if(Dragons){
            setDragons(Dragons);
        }else{
            addAMessage("Falha na comunicação com a API");
        }
    }, []);

    const afterOpenModal = _ => {

    }

    return(
        <html>
            <head>
                <title>Lista dos dragões — Gerenciador de Dragões</title>
            </head>
            <body style={{padding : 0, margin : 0, display : "flex", flex : 1, flexDirection : "column"}}>
                <NavBar/>
                <section>
                    {messages}
                    <Modal isOpen={detailsVisible}
                        onAfterOpen={afterOpenModal}
                        contentLabel="Detalhes do Dragão">

                            {(detalhes) ? <div>

                            </div> : "Carregando detalhes..."}        
                    </Modal>

                   <ButtonsBar/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {(dragons) ? <Table dragons={dragons}/> : "Carregando Dragões...."}
                    </div>
                </section>
            </body>
        </html>
    );
}

List.getInitialProps = async ctx => {
    console.log(ctx);
    const session = await getSession(ctx);
    if(!session){
        ctx.res.writeHead(302, { Location: "/signin" }).end()
        return {}
    }
    return {}
  }

export default List;
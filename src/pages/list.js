import React, { useEffect, useState, useContext } from 'react';

import { FindAll } from '../service/Dragon';

import Table from '../components/Table';

import { ErrorMessageContext } from '../contexts/ErrorMessageContext';
import { TrContext } from '../contexts/TrContext';

import { BsFillTrashFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

import Modal from 'react-modal';

import { signOut, getSession } from 'next-auth/client';
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

    return <html>
        <head>
            <title>Lista dos dragões — Gerenciador de Dragões</title>
        </head>
        <body>
            <header style={{backgroundColor : "black", position : "fixed", left : 0, right : 0, top : 0, padding : 5}}>
                <div style={{display : "flex", flexDirection : "row", justifyContent : "space-between"}}>
                    <div style={{display : "flex", flexDirection : "row", alignItems : "center"}}>
                        <img width="50" height="50" src="https://pbs.twimg.com/profile_images/744538234441601024/lGwI_5I4.jpg"/>
                        <h2 style={{color : "white", marginLeft : 10}}>GERENCIADOR DE DRAGÕES</h2>
                    </div>
                    <button onClick={signOut}>Logout</button>
                </div>
            </header>
            <section style={{marginTop : 100}}>
                {messages}
                <Modal isOpen={detailsVisible}
                    onAfterOpen={afterOpenModal}
                    contentLabel="Detalhes do Dragão">

                        {(detalhes) ? <div>

                        </div> : "Carregando detalhes..."}        
                </Modal>

                <div style={{display : 'flex', flexDirection : 'row', justifyContent : "right", paddingBottom : 10}}>
                    <button><BsFillPlusCircleFill/></button>
                    <button onClick={_ => deleteSelecteds()}><BsFillTrashFill/></button>
                    <button><FaRegEye/></button>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {(dragons) ? <Table dragons={dragons}/> : "Carregando Dragões...."}
                </div>
            </section>
        </body>
    </html>
}

List.getInitialProps = async ctx => {
    const session = await getSession(ctx);
    if(!session){
        ctx.res.writeHead(302, { Location: "/signin" }).end()
        return {}
    }
    return {}
  }

export default List;
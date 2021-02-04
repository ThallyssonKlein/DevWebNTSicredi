import React, { useEffect, useState, useContext } from 'react';

import { FindAll } from '../service/Dragon';

import Table from '../components/Table';

import { ErrorMessageContext } from '../contexts/ErrorMessageContext';

import { getSession } from 'next-auth/client';

import NavBar from '../components/NavBar';
import ButtonsBar from '../components/ButtonsBar';

import DetailModal from '../components/DetailModal';
import NewModal from '../components/NewModal';
import Head from 'next/head';
function List(){
    const {messages, addAMessage} = useContext(ErrorMessageContext);
    const [dragons, setDragons] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [newVisible, setNewVisible] = useState(false);

    useEffect(async _ => {
        const Dragons = await FindAll();
        if(Dragons){
            setDragons(Dragons);
        }else{
            addAMessage("Falha na comunicação com a API");
        }
    }, []);

    return(
        <div style={{padding : 0, margin : 0, display : "flex", flex : 1, flexDirection : "column"}}>
                <Head>
                    <title>Lista dos dragões — Gerenciador de Dragões</title>
                </Head>
                <NavBar/>
                <DetailModal detailsVisible={detailsVisible} setDetailsVisible={setDetailsVisible}/>
                <NewModal newVisible={newVisible} setNewVisible={setNewVisible}/>
                <section>
                    {messages}
                   

                   <ButtonsBar setDetailsVisible={setDetailsVisible} setNewVisible={setNewVisible}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {(dragons) ? <Table dragons={dragons}/> : "Carregando Dragões...."}
                    </div>
                </section>
            </div>
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
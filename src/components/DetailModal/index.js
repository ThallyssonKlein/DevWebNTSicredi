import React, { useState, useContext } from 'react';

import { TrContext } from '../../contexts/TrContext';

import Modal from 'react-modal';

import styles from './detailmodal.module.css';

export default function DetailModal(props){
    const [detalhes, setDetalhes] = useState(null);
    const { viewSelectedOne } = useContext(TrContext);

    const afterOpenModal = async _ => {
        const result = await viewSelectedOne();
        console.log("Result: " + result);
        setDetalhes(result);
    }

    const closeModal = _ => {
        props.setDetailsVisible(false);
    }

    return <Modal isOpen={props.detailsVisible}
                  onAfterOpen={afterOpenModal}
                  contentLabel="Detalhes do Dragão"
                  closeTimeoutMS={150}>

                        {(detalhes) ? <div className={styles.container}>
                            <div className={styles.top}>
                                <button onClick={_ => closeModal()}>X</button>
                            </div>
                            <p><b>Id:</b> {detalhes.id}</p>
                            <p><b>Nome:</b> {detalhes.name}</p>
                            <p><b>Tipo:</b> {detalhes.type}</p>
                            <p><b>Criado Em:</b> {detalhes.createdAt}</p>
                        </div> : "Carregando detalhes..."}        
                </Modal>
}
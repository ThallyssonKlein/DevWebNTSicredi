import React, { useState } from 'react';
import styles from './newmodal.module.css';
import Modal from 'react-modal';

import { New } from '../../service/Dragon';

export default function NewModal(props){
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const closeModal = _ => {
        props.setNewVisible(false);
    }

    const save = async _ => {
        const result = await New(name, type);
        if(!result){
            alert("Erro ao salvar!");
        }
        closeModal();
        window.location.reload();
    }

    return(
        <Modal isOpen={props.newVisible}
               contentLabel="Novo Dragão"
               closeTimeoutMS={150}>
                    <div className={styles.row}>
                        <button onClick={_ => closeModal()}>X</button>
                    </div>
                     <div className={styles.container}>
                        <input className={styles.input}
                               placeholder="Nome do dragão"
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                        <input className={styles.input}
                               placeholder="Tipo do dragão"
                               value={type}
                               onChange={e => setType(e.target.value)}/>
                        <div className={styles.row}>
                            <button className={styles.button}
                                    onClick={_ => save()}>SALVAR</button>
                        </div>
                    </div>
        </Modal>
    );
}
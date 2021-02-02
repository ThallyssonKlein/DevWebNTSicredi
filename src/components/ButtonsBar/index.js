import React, { useContext } from 'react';
import { BsFillTrashFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

import styles from './buttonsbar.module.css';

import { TrContext } from '../../contexts/TrContext';

export default function ButtonsBar(props){
    const { deleteSelecteds, validateSelectedOne } = useContext(TrContext);

    return(
        <div className={styles.container}>
            <button onClick={_ => props.setNewVisible(true)}>
                <BsFillPlusCircleFill/>
            </button>
            <button onClick={_ => deleteSelecteds()}>
                <BsFillTrashFill/>
            </button>
            <button onClick={_ => {
                        if(validateSelectedOne()){
                            props.setDetailsVisible(true);
                        }else{
                            alert("Você só pode visualizar 1 item por vez!");
                        }
                    }}>
                <FaRegEye/>
            </button>
        </div>
    );
}
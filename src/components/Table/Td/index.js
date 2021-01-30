import React, { useState, useContext } from 'react';
import styles from '../index.module.css';
import { HiPencilAlt } from 'react-icons/hi';
import { EditAttribute } from '../../../service/Dragon';
import { ErrorMessageContext } from '../../../contexts/ErrorMessageContext';

export default function Td({isInEditMode,
                            setEditMode,
                            dragon,
                            attr,
                            editingDragonAndAttr,
                            setEditingDragonAndAttr}){
    const [text, setText] = useState(dragon[attr]);
    const [tdValue, setTdValue] = useState(dragon[attr]);
    const {addAMessage} = useContext(ErrorMessageContext);

    if(isInEditMode && (editingDragonAndAttr && editingDragonAndAttr.id === dragon.id && editingDragonAndAttr.attr === attr)){
        return <input value={text} onChange={e => setText(e.target.value)} onKeyDown={async e => {
            if(e.key === 'Enter'){
                const result = await EditAttribute(dragon.id, attr, text);
                setEditMode(false);
                setEditingDragonAndAttr({});
                if(!result){
                    addAMessage("Falha ao salvar");
                }else{
                    setTdValue(text);
                }
            }
        }}/>            
    }else{
        return <td className={styles.td}>
                <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                    {tdValue}
                    <button onClick={_ => {
                        setEditingDragonAndAttr({id : dragon.id, attr});
                        setEditMode(true);
                    }}>
                        <HiPencilAlt/>
                    </button>
                </div>
            </td> 
    }
}
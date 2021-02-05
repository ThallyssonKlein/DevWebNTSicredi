import React, { useContext } from 'react';

import { TrContext } from '../../../contexts/TrContext';
import styles from '../table.module.css';
import Td from '../Td';
import { isMobile } from "react-device-detect";

export default function Tr({dragon, isInEditMode, setEditMode, editingDragonAndAttr, setEditingDragonAndAttr}){
    const { selecteds, setSelecteds, deleteds} = useContext(TrContext);

    if(deleteds[dragon.id]){
        return <div></div>
    }else{
        return <tr className={(!selecteds[dragon.id]) ? styles.tr : styles.selectedTr} key={dragon.id}>
            <td className={styles.td}>
                <input type="checkbox"
                       checked={selecteds[dragon.id]}
                       onChange={e => {
                                    let obj = {...selecteds};
                                    if(e.target.checked){
                                        obj[dragon.id] = e.target.checked;
                                    }else{
                                        delete obj[dragon.id];
                                    }
                                    setSelecteds(obj);
                            }
                        }/>
            </td>
            {!isMobile && <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingDragonAndAttr={editingDragonAndAttr}
                setEditingDragonAndAttr={setEditingDragonAndAttr}
                attr={"id"}
                dragon={dragon}/>}
            <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingDragonAndAttr={editingDragonAndAttr}
                setEditingDragonAndAttr={setEditingDragonAndAttr}
                attr={"name"}
                dragon={dragon}/>
                <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingDragonAndAttr={editingDragonAndAttr}
                setEditingDragonAndAttr={setEditingDragonAndAttr}
                attr={"type"}
                dragon={dragon}/>
            {!isMobile && <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingDragonAndAttr={editingDragonAndAttr}
                setEditingDragonAndAttr={setEditingDragonAndAttr}
                attr={"createdAt"}
                dragon={dragon}/>}
        </tr>
    }
}
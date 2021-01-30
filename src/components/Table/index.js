import React, { useState } from 'react';
import styles from './index.module.css';
import Td from './Td';

export default function Table(props){
    const [isInEditMode, setEditMode] = useState(false);
    const [editingDragonAndAttr, setEditingDragonAndAttr] = useState(null);

    return <table className={styles.table}>
            <tr className={styles.tr}>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Criado Em</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Tipo</th>
            </tr>
            {
                props.dragons.map(dragon => <tr className={styles.tr} key={dragon.id}>
                    <Td isInEditMode={isInEditMode}
                        setEditMode={setEditMode}
                        editingDragonAndAttr={editingDragonAndAttr}
                        setEditingDragonAndAttr={setEditingDragonAndAttr}
                        attr={"id"}
                        dragon={dragon}/>
                     <Td isInEditMode={isInEditMode}
                        setEditMode={setEditMode}
                        editingDragonAndAttr={editingDragonAndAttr}
                        setEditingDragonAndAttr={setEditingDragonAndAttr}
                        attr={"createdAt"}
                        dragon={dragon}/>
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
                </tr>)
            }
        </table>
}
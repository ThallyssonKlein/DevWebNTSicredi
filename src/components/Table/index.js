import React, { useState } from 'react';
import styles from './table.module.css';
import Tr from './Tr';

export default function Table(props){
    const [isInEditMode, setEditMode] = useState(false);
    const [editingDragonAndAttr, setEditingDragonAndAttr] = useState(null);

    return <table className={styles.table}>
            <tr className={styles.tr}>
                <th className={styles.th}>Seletor</th>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Tipo</th>
                <th className={styles.th}>Criado Em</th>
            </tr>
            {
                props.dragons.map(dragon => <Tr dragon={dragon}
                                                isInEditMode={isInEditMode}
                                                setEditMode={setEditMode}
                                                editingDragonAndAttr={editingDragonAndAttr}
                                                setEditingDragonAndAttr={setEditingDragonAndAttr}/>)
            }
        </table>
}
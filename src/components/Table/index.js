import React, { useState, useEffect } from 'react';
import styles from './table.module.css';
import Tr from './Tr';
import { isMobile } from "react-device-detect";

export default function Table(props){
    const [isInEditMode, setEditMode] = useState(false);
    const [editingDragonAndAttr, setEditingDragonAndAttr] = useState(null);

    window.addEventListener('resize', _ => window.location.reload());

    return <table className={styles.table}>
            <tr className={styles.tr}>
                <th className={styles.th}>Seletor</th>
                {!isMobile && <th className={styles.th}>Id</th>}
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Tipo</th>
                {!isMobile && <th className={styles.th}>Criado Em</th>}
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
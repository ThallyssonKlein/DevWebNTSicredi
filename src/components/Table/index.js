import styles from './index.module.css';

export default function Table(props){
    return <table className={styles.table}>
            <tr className={styles.tr}>
                <th className={styles.th}>Id</th>
                <th className={styles.th}>Criado Em</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Tipo</th>
            </tr>
            {
                props.dragons.map(dragon => <tr className={styles.tr} key={dragon.id}>
                    <td className={styles.td} key={dragon.id}>{dragon["id"]}</td>
                    <td className={styles.td} key={dragon.id}>{dragon["createdAt"]}</td>
                    <td className={styles.td} key={dragon.id}>{dragon["name"]}</td>
                    <td className={styles.td} key={dragon.id}>{dragon["type"]}</td>
                </tr>)
            }
        </table>
}
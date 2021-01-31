import styles from './navbar.module.css';

import { signOut } from 'next-auth/client';

export default function Navbar(){
    return <header>
                <div className={styles.navbar}>
                    <h2 className={styles.h2}>GERENCIADOR DE DRAGÕES</h2>
                    <b><a className={styles.a} onClick={signOut}>Logout</a></b>
                </div>
    </header>
}
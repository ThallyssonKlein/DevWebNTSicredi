import { BsFillTrashFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

import styles from './buttonsbar.module.css';

export default function ButtonsBar(){
    return(
        <div className={styles.container}>
            <button>
                <BsFillPlusCircleFill/>
            </button>
            <button onClick={_ => deleteSelecteds()}>
                <BsFillTrashFill/>
            </button>
            <button>
                <FaRegEye/>
            </button>
        </div>
    );
}
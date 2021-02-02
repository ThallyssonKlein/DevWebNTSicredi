import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';

export default function Message(props){
    const [visible, setVisible] = useState(true);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor : 'red',
            padding: 10,
            color : "white",
            justifyContent: 'space-between'
        }
    }
    if(visible){
        return <div style={styles.container}>
            <p>{props.text}<span onPress={_ => setVisible(false)}><GrClose/></span></p>
        </div>
    }else{
        return <div/>
    }
}
import React, { createContext, useState } from 'react';

export const ErrorMessageContext = createContext();

import Message from '../components/Message';

export default function ErrorMessageProvider({children}){
    const [messages, setMessages] = useState([]);

    const addAMessage = text => {
        setMessages([...messages, <Message text={text}/>]);
    }

    return <ErrorMessageContext.Provider value={{messages, addAMessage}}>
                {children}
           </ErrorMessageContext.Provider>
}
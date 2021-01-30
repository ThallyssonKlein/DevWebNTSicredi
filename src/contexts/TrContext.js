import React, { createContext, useState, useContext } from 'react';

import { DeleteOne } from '../service/Dragon';

import { ErrorMessageContext } from './ErrorMessageContext';

export const TrContext = createContext();

export default function TrProvider({children}){
    const [selecteds, setSelecteds] = useState([]);
    const [deleteds, setDeleteds] = useState([]);
    const [addAMessage] = useContext(ErrorMessageContext);

    async function deleteSelecteds(){
        for (const [key] of Object.entries(selecteds)) {
            selecteds[key] = false;

            const result = await DeleteOne(key);
            if(result){
                let objDeleteds = {...deleteds}
                objDeleteds[key] = true;
                setDeleteds(objDeleteds);
            }else{
                addAMessage("Erro ao deletar!");
            }
        }
    }

    return <TrContext.Provider value={{selecteds, setSelecteds, deleteds, deleteSelecteds}}>
                {children}
           </TrContext.Provider>
}
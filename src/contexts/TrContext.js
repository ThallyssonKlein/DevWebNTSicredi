import React, { createContext, useState, useContext } from 'react';

import { DeleteOne } from '../service/Dragon';

import { ErrorMessageContext } from './ErrorMessageContext';

export const TrContext = createContext();

import { FindOne } from '../service/Dragon';

export default function TrProvider({children}){
    const [selecteds, setSelecteds] = useState([]);
    const [deleteds, setDeleteds] = useState([]);
    const { addAMessage } = useContext(ErrorMessageContext);

    async function deleteSelecteds(){
        let objSelecteds = {...selecteds}
        let objDeleteds = {...deleteds}
        for (const [key] of Object.entries(selecteds)) {
             delete objSelecteds[key];
             const result = await DeleteOne(key);
             if(result){
                objDeleteds[key] = true;
             }else{
                    addAMessage("Erro ao deletar!");
             }
        }
        setSelecteds(objSelecteds);
        setDeleteds(objDeleteds);
    }

    function validateSelectedOne(){
        return Object.keys(selecteds).length === 1;
    }

    async function viewSelectedOne(){
        const result = await FindOne(Object.keys(selecteds)[0]);
        if(!result){
            alert("Falha na comunicação com a API");
        }
        return result;
    }

    return <TrContext.Provider value={{selecteds, setSelecteds, deleteds, deleteSelecteds, viewSelectedOne, validateSelectedOne}}>
                {children}
           </TrContext.Provider>
}
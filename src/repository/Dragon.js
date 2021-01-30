import { create } from 'apisauce';

const API = create({
    baseURL : "http://5c4b2a47aa8ee500142b4887.mockapi.io"
});

export function New(){

}

export async function DeleteOne(dragonId){
    const result = await API.delete('/api/v1/dragon/' + dragonId);
    return result.ok;
}

export async function EditAttribute(dragonId, attrName, newValue){
    let obj = {}
    obj[attrName] = newValue
    const result = await API.put('/api/v1/dragon/' + dragonId, obj);
    return result.ok;
}

export async function FindAll(){
    const result = await API.get('/api/v1/dragon');
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}
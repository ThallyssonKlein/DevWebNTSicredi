import { create } from 'apisauce';

const API = create({
    baseURL : "http://5c4b2a47aa8ee500142b4887.mockapi.io"
});

export function New(){

}

export async function FindAll(){
    const result = await API.get('/api/v1/dragon');
    if(result.ok){
        return result.data;
    }else{
        alert("Erro de conexão com a API");
        return {};
    }
}
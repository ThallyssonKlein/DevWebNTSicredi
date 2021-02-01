import { FindAll as FindAllR,
         EditAttribute as EditAttributeR,
         DeleteOne as DeleteOneR,
         FindOne as FindOneR,
         New as NewR} from '../repository/Dragon';

export async function FindAll(){
    let result = await FindAllR();
    if(result){
        result.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        result = result.map(obj => {
            obj.createdAt = new Date(obj.createdAt).toLocaleString();
            return obj;
        });
    }
    return result;
}

export async function DeleteOne(dragonId){
    const result = await DeleteOneR(dragonId);
    return result;
}
export async function EditAttribute(dragonId, attrName, newValue){
    const result = await EditAttributeR(dragonId, attrName, newValue);
    return result;
}

export async function FindOne(dragonId){
    const result = await FindOneR(dragonId);
    result.createdAt = new Date(result.createdAt).toLocaleString();
    return result;
}

export async function New(name, type){
    const result = await NewR(name, type);
    return result;
}
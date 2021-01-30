import { FindAll as FindAllR, EditAttribute as EditAttributeR} from '../repository/Dragon';

export async function FindAll(){
    const result = await FindAllR();
    if(result){
        result.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    return result;
}

export async function EditAttribute(dragonId, attrName, newValue){
    const result = await EditAttributeR(dragonId, attrName, newValue);
    return result;
}
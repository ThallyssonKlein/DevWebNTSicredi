import { FindAll as FindAllR, EditAttribute as EditAttributeR, DeleteOne as DeleteOneR} from '../repository/Dragon';

export async function FindAll(){
    let result = await FindAllR();
    if(result){
        result.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        result = result.map(obj => {
            let createdAt = new Date(obj.createdAt)
            obj.createdAt = createdAt.getDay() + "/" + createdAt.getMonth() + "/" + createdAt.getYear() + " "
                          + createdAt.getHours() + ":" + createdAt.getMinutes();
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
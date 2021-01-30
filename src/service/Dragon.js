import { FindAll as FindAllR} from '../repository/Dragon';

export async function FindAll(){
    const result = await FindAllR();
    result.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return result;
}
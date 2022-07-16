import data from '../data/index.json';

const getChars = async (name) => {
    let char = []

    data.forEach((doc) => {
        if(doc.name===name){
            char.push(doc)
        }
    });
    return char;
}

export { getChars };
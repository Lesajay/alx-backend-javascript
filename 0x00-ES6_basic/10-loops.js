export default function appendToEachArrayValue(array, appendString) {
    const tmp = [];
    for (let idx of array) {
        tmp.push(appendString + idx)
    }
    return tmp;
}

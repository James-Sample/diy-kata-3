const joinNames = (namesObj) => {
    if (namesObj.length === 0) return '';
    if (namesObj.length === 1) return namesObj[0].name;
    let result = namesObj.map(value => value.name);
    let lastName = result.pop();
    return result.join(', ') + ' & ' + lastName;
}
    
module.exports = joinNames;

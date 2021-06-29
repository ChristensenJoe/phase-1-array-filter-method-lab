// Code your solution here
const findMatching = (nameArray, name) => {
    return nameArray.filter((element) => {return element.toLowerCase() === name.toLowerCase()});
}

const fuzzyMatch = (nameArray, name) => {
    return nameArray.filter((element) => {
        if(element.slice(0, name.length).toLowerCase() === name.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }});
}

const matchName = (driverArray, name) => {
    return driverArray.filter((element) => {
        let elementName = element.name;
        console.log(elementName);
        return elementName.toLowerCase() === name.toLowerCase();
    });
}
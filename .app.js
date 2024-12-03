const createName = require('./names'); 
const createHobbies = require('./hobbies'); 

function createPerson() {
    const fullName = createName('Valentino', 'Rossi'); 
    const hobbies = createHobbies('Leggere', 'Palestra', 'Film'); 
    return {
        fullName,
        hobbies,
    };
}

const person = createPerson();
console.log(person);
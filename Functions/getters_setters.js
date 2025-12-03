// getters used to get or access the properties and setter is used to change the properties

const person = {
    firstName : 'Murali',
    lastName : 'Dharan',

    get fullName() {
        return `${person.firstName}  ${person.lastName}`;
    },

    set fullName(value)
    {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }
}

person.fullName = 'Siva Kumar';

console.log(person);
// try catch mentod is used to throw an error when exception is arised

const person = {
    firstName : 'Murali',
    lastName : 'Dharan',

    get fullName() {
        return `${person.firstName}  ${person.lastName}`;
    },

    set fullName(value)
    {
        if(typeof value !== 'string')
            throw new Error('Entered value is not string');

        if(value.length !== 2)
            throw new Error('Enter first and last name');
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }
}
try{
    person.fullName = ' ';
}
catch(e)
{
    console.log(e);
}
console.log(person);
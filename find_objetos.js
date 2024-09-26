const people = [
    { name: 'Sthéfanie', age: '18' },
    { name: 'Dheni', age: '19' },
    { name: 'Pedro', age: '20'}
];

const person = people.find(person => person.name === 'Dheni');
console.log(person)
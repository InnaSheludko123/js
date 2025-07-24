const person = {
    firstName: 'Anna',
    lastName: 'Middle',
    age: 18
}
person.email = 'abcd@gmail.com';
delete person.age;
console.log(person);

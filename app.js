const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Mike', 'Frank', 'Thomas', 'Daniel', 'Andy', 'Frans', 'Raphael', 'Dominic', 'Teddy', 'Steve'];
const femaleNames = ['Lucy', 'Tina', 'Mia', 'Beth', 'Samantha', 'Camila', 'Elizabeth', 'Coco', 'Julia', 'Sussane'];
const lastName = ['Kentucky', 'Georgia', 'Alabama', 'Ohio', 'Connecticut', 'Maryland', 'Arizona', 'Delaware', 'Iowa', 'Michigan'];

function randChoice(arr){
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i = 1; i <= 20; i++) {
  let person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'M' ){
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastName);
  person.age = Math.floor(Math.random() * (54 - 21 + 1)) + 21;

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
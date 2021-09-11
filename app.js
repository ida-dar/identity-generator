const generateRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

let data = [];

for(let i = 0; i <= 20; i++){
  /* gender */
  const gender = ['M', 'F'];
  const genderRandom = generateRandom(gender);

  /* first name */
  const firstName = {
    male: ['Jake', 'John', 'Mike', 'Jim', 'Charles', 'Raymond', 'Bob'],
    female: ['Mia', 'Amanda', 'Amy', 'Rosa', 'Anne', 'Emily', 'Mary'],
  };
  const generateFirstNameMale = generateRandom(firstName.male);
  const generateFirstNameFemale = generateRandom(firstName.female);
  const firstNameRandom = (genderRandom === 'F') ? generateFirstNameFemale : generateFirstNameMale;

  /* last name */
  const lastName = ['Doe', 'Johnson', 'Smith', 'Peralta', 'Santiago', 'Blunt'];

  const lastNameRandom = generateRandom(lastName);
  /* age */
  const age = Math.floor(Math.random() * 61) + 18;

  /* email */
  const email = `${firstNameRandom.toLowerCase()}.${lastNameRandom.toLowerCase()}@gmail.com`;
  
  /* phone */
  const phone = Math.floor(Math.random().toString().slice(2,11));

  let person = {
    gender: genderRandom,
    name: firstNameRandom,
    surname: lastNameRandom,
    age: age,
    email: email,
    phone: phone,
  };

  data.push(person);
};

const convData = JSON.stringify(data);

//data = Array(20).fill(person, 0);
console.log(convData);

const fs = require('fs');

fs.writeFile('people.json', convData, (err) => {
  if (err) throw console.log('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});
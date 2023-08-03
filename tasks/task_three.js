const myBio = {
  name: 'arinze',
  age: 20,
  sex: 'male'
};


for (let key in myBio) {             //I Used  for...in loop to iterate over object properties
 
  console.log(`${key}: ${myBio[key]}`);
}


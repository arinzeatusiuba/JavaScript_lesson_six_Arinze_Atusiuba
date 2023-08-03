//Task 5: Merge objects
//Create multiple objects with different properties.
//Use the Object.assign() method to merge the objects into a single object.
//Log the merged object to the console.



const myBio = {
  name: 'arinze',
  age: 20,
  sex: 'male'
};

const additionalDetails = {
  location: 'Awka',
  occupation: 'Student',
  hobby: 'Swimming'
};


const mergedObject = Object.assign({}, myBio, additionalDetails);  // Here I used the Object.assign() method to merge the objects into a single object
console.log(mergedObject);


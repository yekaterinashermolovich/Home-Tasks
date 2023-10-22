
const student = {
    name: 'Alex',
    surname: 'Max',
    Age: 23
  
  
  }

const rightFields = [];
const wrongFields = [];

const attempts = 10;

for(let i = 0; i < attempts; i++) {

    const fieldname = prompt('Please enter correct field name');


    if(fieldname in student) {

        rightFields.push(fieldname);

    } else {
        wrongFields.push(fieldname);
        
    }

   

}

console.log(rightFields);
console.log(wrongFields);








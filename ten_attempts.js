const fieldname = prompt('Please enter correct field name');

const student = {
    name: 'Alex',
    surname: 'Max',
    Age: 23
  
  
  }

const rightFields = [];
const wrongFields = [];

const keys = Object.keys(student);

const attempts = 10;



for(let i = 0; i < keys.length; i++) {

    --attempts;

    if(fieldname === keys[i] && attempts<=10) {

        rightFields = student.push(fieldname);

    } else {
        wrongFields = student.push(fieldname);
        
    }

   

}

console.log(rightFields);
console.log(wrongFields);








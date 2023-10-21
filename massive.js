const arr = [1, 2, 3, 4, 5];

const start = 4;

const end = -1;

const arrCopy = [];

for (let i = start; i> end; --i) {

    arrCopy.push(arr[i]);
}

console.log(arrCopy);
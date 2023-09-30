// const value = ['one', 'two', 'three'];

// const arr = value.map(function (x) {return `<li>${x}<li>`;});

// document.getElementById("#myList").innerHTML = arr.join();


let letteres = ['A', 'B', 'A'];
function convert(letteres) {
    let points = 0;
    if (letteres === 'A') {
        points = 4;
    } else if (letteres === 'B') {
        points = 3;
    }
    return points;
}
const finalGrade = letteres.map(convert)

const sum = finalGrade.reduce((accumulator, currentValue) => accumulator + currentValue) / finalGrade.length;



// console.log(`${sum}`);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const onlySix = fruits.filter((fruit) => fruit.length > 6) 

// console.log(`${sum}`);

const values = [12, 34, 21, 54];
const luckNumber = 21;

let luckyIndex = values.indexOf(luckNumber);


const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}

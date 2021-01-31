
const a = 0
for(let i=0;i < 5;i++){
    const k = i;
    let j = i;
    // a = i;
    // console.log(k);
    // console.log("a");
}
// console.log(a);
// console.log(k);

// let student = {
//     greeting: function() {console.log("hi");}
// }
// student.greeting();

// console.log(i);
// console.log(j);

// console.log(true == 2);

function printNums(){
    console.log(1);
    setTimeout(function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log(4);
}
printNums();
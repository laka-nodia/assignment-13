let a = 1;
let b = 2;
// gaimeore es operacia 3 jer
for (let j of [1,2,3]){ 
  a = a + j;
}
// console.log(a);
// console.log(b);

// 1
// console.log(a+b);
// 2
let c = a + b;
// console.group(c);
// 3
let ar = [1,2,3,2,2]
// 5
console.log("!!!");
let sumOfArry = 0;
for(let k of ar) {
    if(k%2==0){
        sumOfArry = sumOfArry+k;
    } 
}
console.log("!!!");
console.log(sumOfArry);

// !!!
// 1 1
// 2 3
// 3 6
// !!! 

function add(a,b){
    return a+b;
}

let x = add(2,3);
console.log(x);

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}
if(user.isloggedin==true){
    console.log(user.firstname+' ' + user.lastname);
}


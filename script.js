//1. მოცემულია ობიექტი: ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user2 = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
}
  console.log(user2.studentstatus);
  
//2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით)
let flowers = ['Rose' , 'Orchid' , 'Tulips', 'Lilac', 'Sunflower'];
for (let item of flowers){
    console.log(item);
}

let Range = [11,22,33,44,55];
let L = 0;
while(L<Range.length){
    console.log(Range[L]);
    L++;
}

//3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.
let numbers1 = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let k of numbers1){
    if(k>5){
        console.log(k);
    }
}

// 4 თუ უსერის ასაკი ნაკლებია 18-ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის გიორგის მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25-ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user1 = {
	name: 'giorgi',
	age: 20,
	studentstatus: 'active',
}
if (user1.age < 18 && user1.studentstatus == 'active'){
    console.log('Hello');
}else if(user1.name == 'giorgi'){
    console.log('Hello Giorgi');
}else if (user1.studentstatus == 'active' || user1.age < 25){
    console.log('Hello World');
}else{
    console.log('error');
}

//5.მოცემულია მასივი: გამოიტანეთ მარტო სრტინგები;
let array1 = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;
for(let B of array1){
    if(typeof B=='string'){
        console.log(B);
    }
}

//6. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
for(let Z of array){
    for(let Y of Z){
        if(Y>0){
            console.log(Y);
        }
    }
}
//7. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია

let elements = [32, 10, 'hello', null, 'hello2', 50 ];
for(let X of elements){
    if(typeof X=='number' && X%5==0){
        console.log(X);
    }
}
//დავალება ფუნქციებზე
//1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და უნდა
//დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამი:
function nNumber(...args){
    let sum = 0;
    for(let N of args){
        if(N>0){
            sum=sum+N;
        }
    }
    return sum;
}
let t = nNumber(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(t);

//2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
function plus(...args){
    let total = 0;
    for(let p of args){
        total=total+p;
    }
    return total;
}
let f = plus(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(f);

//3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
//თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: false
}
function myBoolean(){
    if(user.isloggedin==true){
        console.log(user.firstname+' ' + user.lastname);
    }else{
        console.log(false);
    }
}
myBoolean();

//4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ 
//უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:




  
 
  









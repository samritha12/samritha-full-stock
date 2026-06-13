var a; //Declaration
a = 10;//Initialization
var a =10; //Re - declaration and Re - initialization

console.log(a);

let b;//Declaration
b = 20;//Initialization
b = 30;//Re - Initialization

console.log(b);
const c = 30; // Declaration and Initialization
var num = 10;
var str = "orange";
var bool = "true";
var undef;
var nll = null;
var symbol = symbol;
var bigInt = 123456789n;
var arr =[1,2,3,4,5];
var object = {
    name:"samri"
}
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nll);
console.log(typeof symbol);
console.log(typeof bigInt);
console.log(typeof arr);
console.log(typeof object); 

//Arithmetic operation

var x = 10;
var y = "20";
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//conditional operator (>,>=,<,<=,<+,==,!=)
var x = 1;
var y = "1";
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

//Logical operator(&&, ||, !)
console.log(true && false);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

//Assignment Operator (=,+=,-=,/=,%=,*=,**=)
var x = 10;
var y = 20;
console.log(x);
x -= y;
console.log(x)

//Conditional Statements

var x = 10;
if(x%2===0){
    console.log("even");
}

if(x%2===0){
    console.log("even");
}
else{
    console.log("odd");
}
var mark = 90;
if(mark>=90){
    console.log("A Grade")
}
else if(mark>=60){
    console.log("B Grade")
}
else if(mark>=35){
    console.log("Pass")
}
else {
    console.log("fail")
}

//Terinary operator
var x = 2;
//condition ? true statement : false statement
var result = x%2===0 ? "Even" : "Odd"
console.log(result)

var mark = 90;

var grade = mark>=90 ? "A grade":
            mark>=60 ? "B grade":
            mark>=40 ? "B+ grade":
            mark>=35 ? "pass" : "fail";
console.log(grade);

var day = 8;
switch(day){
    case 1:{
        console.log("sunday");
        break;
    }
    case 2:{
        console.log("monday");
        break;
    }
    case 3:{
        console.log("tuesday");
        break;
    }
    case 4:{
        console.log("wednesday");
        break;
    }
    case 5:{
        console.log("thursday");
        break;
    }
    case 6:{
        console.log("friday");
        break;
    }
    case 7:{
        console.log("saturday");
        break;
    }
     default:{
        console.log("Invalid input");
    }
}

//for(insitialization; condition; increment/decrement){
     //statement
//}
for(let i=1;i<=10;i++){
    console.log(i);
}

//while(condition){
//   statement
// }

var num = 10246;
var digit = 0;
while(num>0){
    digit++;
    num= Math.floor(num/10);
}
console.log(digit)

//Unary Operator (i++,++i,i--,--i)

var x = 1;

console.log(x++);
console.log(++x);
var x = 1;

console.log(x--);
console.log(--x);



//do{
//    //Statement
// }while(condition)

do{
    console.log("do...while");
}while(false)

while(false){
    console.log("while example")
}

for(let i=1;i<=10;i++){
    // if(i>5){
    //    break;
    //}
    if(i==5){
        continue;
    }
    console.log(i);
    }

    function add(){
        console.log(10+20);
    }
    add();
    add();
    add();

    function add(a=10, b=15){
        console.log(a+b);
    }
add(10,20);
add(15,25);
add(20);
add();

var add = ()=>{
    console.log(10+20);
}
add();

var sum = () => {
    console.log("arrow function");
}
sum();

var arr =[1,2,3,4,5];
var square = arr.map((val)=>(val**2))
console.log(square)

var even = arr.filter((val)=>(val%2===0));
console.log(even);

var sum = arr.reduce((total,val)=>(total+val),0);
console.log(sum);
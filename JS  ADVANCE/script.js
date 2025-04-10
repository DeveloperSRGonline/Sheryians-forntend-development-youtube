// var let const

// "#Three" difference between var, let and const
// var do chijo se milke bana hai
// 1. ES-5 #1"(old)" -- var
// 2. ES-6 #1"(new)" -- let, const

// var -- #2"functionScoped"
// let, const -- #2"bracesScoped"
// var -- #3"add itself to window object"
// let, const -- #3"not add itself to window object"
// var - apne "parent function me kahi bhi use" ho sakta hai

function abcd() {
    for(var i = 1; i < 12; i++){ // here "var" is function scoped
        console.log(i); // print 1 - 11
    }
    console.log(i);// print - 12
}


// JS LANGUAGE me kuch chije nahi hai jo hum use kar sakte hai aur vo chije hame js se nahi balki browser se milti hai, aise sare features jo js ka part nahi hai but phir bhi hum use kar sakte hai unnhe hum dhund sakte hai ek particular object mein jiska window 
// JS mein kahi saare features hai jo hum use kate hai vo features wo features nahi hai phir bhi use kar pate hai kyoki vo features js language use kar leti hai leti hai window se,aur window kya hai ek box of features given by browser to use with js

// Stack -- kis order me kaam complete hoti hai 

// jitne bhi hum data hum banate hai unhe store kahi to karna padta hai uske liye hota hai "Heap memory" @IntermediateData

// excutation context matlab jab bhi hum function chalayenge function apna khud ek imaginary container bana lega jisme uski tin chije hogi :
// 1. variable
// 2. functions inside that parent function
// 3. lexical environment of that function

// ye jo container hai imaginary ise hi hum excution context bolte hai

// function chalate hi saath pahale excution context create hojayega (ek imaginary dabba)
// Ab is excution context me tin chije hoti hai
// 1. variable
// 2. functions inside that parent function
// 3. lexical environment (ye batata hai app kin chijo ko access kar sakte hai or kin ko nahi)

function abcd(){
    var a = 12; 
    function def(){
        var b = 12;
    }
}
// function "abcd" -- "var - a","fun - def()", ko access kar sakta hai par "fun - def()" ke andar ke element ko use nahi kar sakta
// var b ka scope kaha tak hai def() tak isliye abcd() b ko access nahi kar sakta
// pata kai chalta hai vahi pata kaise chalta hai hi to Lexical environment hai dadda**

// excutation is a container where the function is excuated and it's created whenever a functio is called, it contains three things, they are : variable, functions ,lexical environment.

// lexical environment ye hota ek chart jisme ye likha ki appka particular function kin chijo ko access kar sakta hai and kinko nahi,matalab ki it holds it's scope and scope chain


// var a = [1,2,3,4,5]
// var b = a;
// ye copy nahi ise reffer bolte hai
// b.pop(); // b = [1,2,3,4], a = [1,2,3,4]

// right way to copy 
a = [1,2,3,4,5];
b = [...a];// ye ... 3-dots kahelate hai spread operator matlab is ke baad jo bhi likh hai use copy kardo aur vaha likh do jaha spread operator rakh hai

b.pop(); // b = [1,2,3,4], a = [1,2,3,4,5]

var obj = {name:"harsh"};
var copyobj = {...obj};
//  js me kuch bhi likho wo mainly do prakar mein me se kisi ek prakar ko belong kar ti hai
// falsy values ye hai = 0 false undefined null NaN document.all 
// truthy values
if (7) {
    console.log("hello");
}
else{
    console.log("hey");
}
// output - hello

// INTERVIEW QUESTION**
if(-1){
    console.log("hello");
} 
// ...

// forEach loop sirf array pe chalta hai matlab ki jab bhi tumhare pass, ek array ho, tab use me kon aata hai for each loop

var a = [1,27,3,4,75,6,7,78,97,23];

// variable ka naam kuch bhi nahi rkhana hai vo jo kaam kar raha hai us ke basics par hi uska naam rakhna hai
a.forEach(function(){}) // it is ananomous function
a.forEach(function(val){ // "val" kya hai? -  "variable" hai
    console.log(val+2);
})
// foreach kabhi bhi by default aapke array me changes nahi karta wo aapko changes karke deta hai array ki tenperary copy par jiske wajah se array hamesha same raheta hai 

var a = [1,2,3,4,5,6,7];
a.forEach(function(val){
    val+2;
})

// var let const 
      //        JS
      //        ____
      //       |   |
      //      ES5  ES6
      //   (old)   (new)
      //   (var)    (let,const)

//                 var                 |    Let , Const
//       var old js mein  hai          |    Let const new js mein hai 
// var function scoped hota hai        |    let braces scoped hota hai
// var add itself to the window object |    let and const not add itself to window object
//                                     |
//                                     |
//                                     |

// var apne pure parent function mein kahi bhi use ho sakta hai *
// Let , Const apne pure braces mein kahi bhi use ho sakta hai *
function abcd(){
   for(var i = a; i<12; i++){
      console.log(i);
   }
   console.log(i);
} // output = 1-12 print hoga agar "var" use kiye to varna "let" use kiye to you will get the error 

// JS language mein kuch chije nahi hai jo hum use kar sakte hai aur vo chije hame js se nahi brower se milti hai , aise saare features jo js ka part nahi hai par hum unnhe dhoond sakte hai ek particular object me jiska naam hai "Window" *

// js mein kai saare features hai par kuch features jo hum use karte hai wo features wo nahi hai par phir bhi use kar pate hai kyoki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js *
var a = 12; // ye window pe dikhega // It exposes the data 
let b = 11; // ye window pe nahi dikhega

// Heap memory - Jitnebhi Data banate(Intermediate Data*) hai use kahi to store karna padta hai useke liye hota hai heap memory

// BROWSER CONTEXT API include - 1) Window 2) Stack 3) Heap memory

// "Execution Context" - matlab jab bhi hum function chalayenge function apna khud ka ek imaginary container bana lega jisme uski teen chije hogi :
// 1) Variables
// 2) Functions inside that parents function 
// 3) lexical environment of the function 
// ye jo container hai imaginary ise hi hum excuation context kahete hai 
// "Lexical Environment" - ye batata hai ki aap kya eccess kar sakte ho aur kya nahi 
// "Excuation Context" - is a container where functions's code is executed and it's created whenever a function is called , it contains 3 things , variables ,function & lexical environment 
// Lexical environment - ek chart jisme ye likha hota hai ke aapka partucular function kin chijo ko access kar sakta hai aur kinko nahi , matlab ki it holds it's scope and scope chain 


// var a = [1,2,3,4,5];
// var b = a; ye copy nahi huva ye reference huva 
// b.pop(); hame ye lagta hai ki ye "b" se value hat gai but ye "a" se bhi hat gai

// To ise copy kaise karte hai lets check..
var p = [1,2,3,4,5]; // Array ....
var q = [...a]; // aise copy karte hai "bhai copy karne ko bhi dimakh lagta hai"

// Copying object ...
var obj = {name : "shivam"}
var copyobj = {...obj}

/* if(-1){
   code...
 }       */

// Truthy and Falsy ...
// js mein kuchh bhi likho wo mainly inn do prakar me se ek prakaar ko belong karti hai 

// Falsy values ye hai = "0" "false" "undefined" "null" "NaN" "document.all"
// and Others are Truthy Values
// EX:
if(NaN){
   console.log("Hey");
}
else{
   console.log("Hello");
}
// NaN is Falsy so it prints "Hello"


// forEach loop - sirf arraay pe chalta hai 
var a = [1,22,3,43,55,66,78,85,78,58,7]
a.forEach(function(val){
   console.log(val+2);
})
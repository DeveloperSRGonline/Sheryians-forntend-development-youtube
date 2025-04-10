var a; // and this moved to the top of the code
// word vs keyword ✅

// Words and Keywords.....
// chacha = word
// for = keyword
// bhaiya = word
// harsh = word
// is = word
// good = word
// men = word

// variables and constants ✅
score = 2;
lives = 1;

// variable = to store variable data in code 
// constants = to store constant data in data
// hoisting - variable and function are hoisting which means their decleration is moved on the top of code ...
// hosting and hoisting both are different
var a = 12; // this line converted into 
a = 12; // into this 
// lets take an example ..
console.log(b); // output - b is undefined 
// In other language if you want variable before declaration it gives error (variable is not-defined) but in javascript it is possible and it gives (undefined) instead of (not-defined)
var b = 11;
// undefined and not-defined difference
// Undefined - exist but value not defined
// Not-defined - dosen't exist 


// Types in js..
// primitive and refrence 
// primitive - number , string , null , undefined,boolean
// reference - [] () {} - aisi koi bhi value jisko copy karne par real copy nahi hoti ,balki us mein value ka reference pass ho jata hai use hum reference value kaheta hai ,aur jiska copy karnepar real copy ho jaye vo value 

// Aam jindagi ..
var a = 12;
var b = a;// a = 12 , b = 12
b = b + 2; // output a = 12 , b = 14   

// Mentos zindagi ..
var p = [12,13]; // array ek se jyaada value store karne ke liye use hota hai 
var q = p; // q ke pass khud ki koi value nahi p se reference liya hai 
q.pop(); // output - q = [12] , p = [12,13]

// conditionals ..

// if else if else - Agar-magar | aisa-vaisa
/* 
 if(-1){
    code... // INTERVIEW Question
 }
 */


 // Loops - Loop ka matlab repeat 

 // 1 1 1 1 1 1 1 1 1
 // 1 2 3 4 5 6 7 8 9
 /*
 for(Stat;end;change){
    code
 }
*/

// lets print from 25 - 50 
// for (let i = 25; i < 51; i++) {
//     console.log(i);
    
// }

// while (a<20) {
//     a++;
// }

// Functions - Code ko naam dena
// Mainly tin kaam ke liye hote hai 
// 1) jab aap ka code aap turant nahi chalana chahate ,future me chalana chahate ho 
// 2) jab aapka code aap resue karna chahate ho
// 3) jab code chalana chatate ho with different data 

// function abcd(a){
//    console.log(a);
// }
// abcd(12)
// arguments - real value jo hum dete hai function chalate waqt 
// parameter - variables jinme value stre hoti hai arguments waali

// Arrays - ek variable me ek se jyaada value store karne ke liye freedom deta hai 

// Array - Group of values

var arr = [1,2,3,4];

arr[0]
var arr = [1,2,3,4];
// arr.push(8); //add value in last of array
// console.log(arr);
// arr.pop(8); //remove last value in array
// console.log(arr);
// arr.unshift(8); //add value in start of array
// console.log(arr);
// arr.shift(8); //remove value in start of array
arr.splice(2,1)
console.log(arr);

// ek se jyaada bande ki baat ki to hua array ,ek bande ke bare me saari baat ki to hua Object

// Objects hai ek bande ki details ko hold karna ,in a key value pair 
// 1) blank object 
var a = {};

// 2) filled object
var ghadi = {
   brand: "kenneth",
   price: "16k",
   color : "silver",
   type : "automatic",
   digital:false,
   kuchbolo:function(){}
 }
 ghadi.brand = "Titan kenneth cole"
 console.log(ghadi);

//  object ke andar aisi property jiski value function ho use hum "method" bolte hai
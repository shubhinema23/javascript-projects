// var person = {
// 	"name" : "shubhi",
// 	"address" : {
// 		"city" : "bglr",
// 	    "state" : "karnataka"
// 	}
// }


//alert(person.name);

// 'use strict'
// var myName = 'shubhi';



//  var i;
//  var print = function(){
//  	//alert(i);
//  };


// for(i=0; i<10; i++){
// 	setTimeout(print, 1000);
// };

// var a, b;

// a=10;
// b=20;

//alert(b);



   // int num = 10;
   // var x = 20;
   // alert(num);
   // alert(x);


// function equalto()
// {
//     int num = 10;

//     if(num === "10"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//alert(equalto());


// var myObj = {};

// // alert(myObj);

// myObj.foo = "value";

// alert(myObj.foo);


// var emp1 = {};
//   emp1.firstname = "shubhi";
//   emp1.lastname = "nema";
//   emp1.designation = "designer";
//   emp1.gender = "f";


// function CreateEmpObj(firstname, lastname, designation, gender){
//   var newObj = {};
//   newObj.firstname = firstname;
//   newObj.lastname = lastname;
//   newObj.designation = designation;
//   newObj.gender = gender;
// return newObj;

// };

// emp2 = new CreateEmpObj("alekh", "nema", "developer", "m");

//alert(emp2.firstname);



//--------------this keyword-------------------

// function Bicycle(cadence, speed, gear, tirepressure){
//   //var this = {};
//   this.cadence = cadence;
//   this.speed = speed;
//   this.gear = gear;
//   this.tirepressure = tirepressure;
//   this.inflatetire = function(){
//     this.tirepressure += 3;
//   }
//   // return this;
// };

// var bicycle1 = new Bicycle(50, 20, 50, 5);
// bicycle1.inflatetire();

// function Mechanic(name){
//   this.name = name;
// };

// var mike = new Mechanic(mike);

// mike.inflatetire = bicycle1.inflatetire;

// console.log(mike.inflatetire);

// console.log(mike.inflatetire.call(bicycle1));

// console.log(bicycle1);




//-----------prototype---------------------



// function Person2(name, job, yearOfBirth){    
//     this.name = name; 
//     this.job = job; 
//     this.yearOfBirth = yearOfBirth; 
// };

//console.log(Person2.prototype);


//----------------------------------


// alert(2 + 2);    // 4
// alert('2' + '2');    //22




// let x = 2;

// alert(++x + x++);   // (3+3) 6

// alert(x);   //4

//------------------------------------



// for(let i=2; i<=10; i++){

//   if(i % 2 == 0){
//    // alert(i);
//   }
// };


// for (let i = 0; i < 3; i++) {
//   //alert( `number ${i}!` );
// };


// let x = 0;

// while(x < 3){

//  // alert( `number ${x}!` );
//   x++;

// };



//------------do....while loop---------


// let value;

// while (true) {

//   value = +prompt("Enter a number greater than 100", '0');

//   if (!value || value > 100) break; // (*)

// }



// let value;

// do {
//  value = +prompt("Enter a number greater than 100", '');
//   alert(value);
//  if(value < 100 && value){
//     alert(1);
//  }
//  if(value && value < 100 ){
//     alert(2);
//  }
//  //alert(value);
// }
// while (value < 100 && value); // (*)






// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);



//-------------print prime number--------------


// let n = 30;
// if(n>1)
//   alert(2);
// nextprime:
// for(i=3; i<=n; i=i+2){


//   for(j=2; j<i; j++){

//     if(i%j == 0) continue nextprime;

//   }
// alert(i);
 
// }




//--------------switch------------

// let browser = navigator.appName;
// alert(browser);

// if(browser == 'edge'){
//     alert("You've got the Edge!");
//   }
//     else if(browser == 'chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//       alert( 'Okay we support these browsers too' );
//     }
    
// else{
//     alert( 'We hope that this page looks ok!' );
//   };




// switch (browser) {

//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }



// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }



// let z = +prompt('a?', '');
// switch (z) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert('2,3');
//     break;

// }




//---------------------functions------------


//-------------using if..else---------

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

//-------------using ?---------
// let age = 10;

// let result = (age > 18) ? true : confirm('Did parents allow you?');


// alert(result);



//-------------using || ---------
// let age = 10;

// let result = (age > 18) || confirm('Did parents allow you?');


// alert(result);



// function max(a, b){
//   if(a>b){
//     return a;
//   }
//   else{
//     return b;
//   }
// };


//alert(max(2, 3));
//alert(max(64, 53));



// function pow(m,n){
// let z = m;
//   for(let y=1; y<n; y++){
//     z *= m;
//   }
//   return z;
// }

// alert(pow(2,3));




// ------------Array---------------


// let ArrUser = [];

// let Arrlength = prompt('Please enter length', '1');

// //alert(Arrlength);

// for(i=1; i<=Arrlength; i++){

//   ArrElement = prompt('Please enter Element', '');
//   ArrUser.push(ArrElement); 
// }

// let ArrReverse = ArrUser.reverse();

// alert(ArrReverse);



// let ArrRandom = [1,2,3,4,5,6,7,8,9];
// let ArrEven = [];
// let ArrOdd = [];

// ArrRandom.forEach(myfunction);

// function myfunction(value){
//   if(value % 2 == 0){
//     ArrEven.push(value);
//   }
//   else{
//     ArrOdd.push(value);
//   }
// }

//alert('EvenNumber: ' + ArrEven);
//alert('OddNumber: ' + ArrOdd);




//--------------String---------------


// let StrRandom = "This is a string";
// let UserChar = prompt('Please Enter a charecter', '');
// count = 0;

// for(i=0; i<=StrRandom.length; i++){

// let StrVal = StrRandom.charAt(i);

// if(UserChar == StrVal){
//   count++;
// }

// }

//alert(count);

//-----

// let StrRandom = "abc";
// //alert(StrRandom.length);
// //let UserChar = prompt('Please Enter a charecter', '');

// let ArrStrChr = new Array();
// //console.log(ArrStrChr);
// for(i=0; i<StrRandom.length; i++){

// let StrVal = StrRandom.charAt(i);
// //alert(StrVal);
// //console.log(ArrStrChr[StrVal]);
// if(StrVal in ArrStrChr){
//   var temp = ArrStrChr[StrVal];
//   ArrStrChr[StrVal] = temp+1;
// }else{
//   ArrStrChr[StrVal] = 1;
// }

// };

//console.log(ArrStrChr);

// let UserChar = prompt('Please Enter a charecter', '');


// if(UserChar in ArrStrChr){
//   let value = ArrStrChr[UserChar];
//   alert(value);
// }
// else{
//   alert('Error');
// }


//----------------------------To find second largest no----


// let Arr = [20, 50, 10, 40, 45, 85, 0];
// let Largest = 0;
// let SecondLargest;
// for(i=0; i<Arr.length; i++){
//   let valone = Arr[i];
// //alert(valone);
//   //Largest = Arr[i];
// //alert(Largest);
// if(valone >= Largest){
//   SecondLargest = Largest;
//   Largest = valone;
// }
// // else{
// //   Largest = Largest;
// // }

// }

// alert('Largest: ' + Largest);
// alert('Second Largest: ' + SecondLargest);



//----------------------------Check array sorted or not----

// let ArrSort = [1,0,3,4,10];

// let isSorted = true;
// for (let i = 0; i < ArrSort.length-1; i++) {
//   let valone = ArrSort[i];
//   let valtwo = ArrSort[i + 1];
// //alert(valone , valtwo);
//   if(valtwo > valone) 
//     {
//       continue;
//     }

//   else{
//     isSorted = false;
//   //  alert('notsorted');
//     break;

//   }

// }

// if(isSorted){
//   alert('sorted');
// }
// else{
//   alert('notsorted');
// }



//-------------------

// let bar = null;

// if(typeof bar === 'object')
// {
//   alert(true);
// }


// let Objbar = {};

// if(typeof Objbar === 'object')
// {
//   alert(true);
// }




// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return{
//       bar: "hello"
//   };
// }

// alert(foo1());
// alert(foo2());


// let ObjCar = {};

// alert(ObjCar);

// console.log(0.5 + 0.7);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);


// function areTheNumbersAlmostEqual(num1, num2) {
//   return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));


// let varx;

// function isinteger(){
//   typeof varx;
// }
// alert(isinteger());


//------------which execute first-----------

// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// Ans: 1, 4, 3, 2



//-----------palindrome string------------


// function CheckIfPalindrome(){
// let StrPalin = 'alulaa';
// let i = 0;
// let j = StrPalin.length-1;

// for(; i<=j; i++,j--){
//       if(StrPalin.charAt(i) == StrPalin.charAt(j)) {
//         continue;
//       }
//     else{
//       return false;
//       break;
//     }
//   }
//   return true;
// }
// if(CheckIfPalindrome()){
//   alert('PAlindrome');
// }
// else{
//   alert('not palindrome');
// }



// function isPalindrome(str) {
//   str = str.replace(/\W/g, '').toLowerCase();
//   return (str == str.split('').reverse().join(''));
// }




//--------------------Binary number----------------



// function GetBinaryNumber(Anumber){

//   let Divident = Anumber;
//   let Remender = '';
//   let Quotient;

// for(Divident; Divident>=1;){

//   Remender += Divident % 2;
//   Quotient = Divident / 2;
  
//   Divident = Math.floor(Quotient);
//   // alert(Remender);
//   // alert(Divident);

// }

//   return Remender.split("").reverse().join("");
// };

// console.log(GetBinaryNumber(10));



//---------------reverse a number------------


// function ReverseANumber(num){

// var divident = num;
// var PrevVal = 0;

// while(divident>0){

// var remender =  divident % 10;//9---8---7

// PrevVal = PrevVal * 10 + remender;//9---98---987

// var divident = Math.floor(divident / 10);//78---7---0

// };

// return PrevVal;
// };

// var num = prompt('Enter a number', '');
// alert('reverse of '+ num + ' is : '+ ReverseANumber(num));

//--------------sum method------------

//not working for case 2
// function sum(a, b){
//   let c = a + b;
//   return c;
// }

//Method 1
// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) { return x + y; };
//   }
// }


// //Method 2
// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }


// /console.log(sum(2,3));  // case 1

// console.log(sum(2)(3)); // case 2


//---------------------------

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
//   d[k] = undefined;
// });

// console.log(d);


//------------------------------


// var arr1 = "john".split(''); // j, o, h, n

// var arr2 = arr1.reverse();   // n, h, o, j
// var arr3 = "jones".split('');  // j, o, n, e, s
// arr2.push(arr3);   // n, h, o, j, j, o, n, e, s
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //4   j, o, h
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));  //9   n, h, o, j, j, o, n, e


//-------------callback function--------

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }
// function alertFinished(){
//   alert('Finished my homework');
// }
// doHomework('math', alertFinished);



//-----------Cookie---------------


//     function createCookie(cookieName,cookieValue,daysToExpire)
//         {
//           var date = new Date();
//           date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
//           document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
//         }
//     function accessCookie(cookieName)
//         {
//           var name = cookieName + "=";
//           var allCookieArray = document.cookie.split(';');
//           for(var i=0; i<allCookieArray.length; i++)
//           {
//             var temp = allCookieArray[i].trim();
//             if (temp.indexOf(name)==0)
//             return temp.substring(name.length,temp.length);
//           }
//           return "";
//         }
//     function checkCookie()
//         {
//           var user = accessCookie("testCookie");
//           if (user!="")
//           alert("Welcome Back " + user + "!!!");
//           else
//           {
//             user = prompt("Please enter your name");
//             num = prompt("How many days you want to store your name on your computer?");
//             if (user!="" && user!=null)
//             {
//             createCookie("testCookie", user, num);
//             }
//           }
//         }

// //<body onload="checkCookie()"></body>
// document.cookie = "key1 = value1; key2 = value2; expires = date";




//--------------Anagram---------------

// function createCountMap(str){

// var strCountMap = new Map();

// for (i=0; i<str.length; i++){
//   var strChar = str.charAt(i);
//   //alert(strChar);
  
//   if(!strCountMap.has(strChar)){
//   strCountMap.set(strChar, 1); 
//   }else{
//     var oldvalue = strCountMap.get(strChar)
//     strCountMap.set(strChar, oldvalue + 1);
    
//   }
// }
// return strCountMap;
// }



// function checkAnagram(str1, str2){

//   if(str1.length !== str2.length){
//     return false;
//   }
//   else{
//    var str1CountMap = createCountMap(str1);
//    var str2CountMap = createCountMap(str2);

//    for (var [key, val] of str1CountMap) {
//         var testVal = str2CountMap.get(key);
        
//         if (testVal !== val || (testVal === undefined && !str2CountMap.has(key))) {
//             alert('This is not Anagram');
//             return false;

//         }
      
//     }
//     return true;
//   }

// }



// var str1 = 'abbs';
// var str2 = 'bbaa';

//console.log(checkAnagram(str1, str2));




//......................set---------------------


// function unique(arr) {

//   let firstset = new Set();

//    arr.forEach(myfunction);
//    function myfunction(value){
//       firstset = firstset.add(value);
//    }
//    return firstset;
// };


// function unique(arr) {

//   let firstset = new Set(arr);

//   for (let value of firstset) {
//   alert(value); // 
//   }
//    return firstset;
// };


// function unique(arr) {

//   return Array.from(new Set(arr));
// };



// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

//alert( unique(values) ); // Hare, Krishna, :-O




//--------------- Arrange 2 arrays-----------

// function SorttwoArray(){

// var arr1 = [1, 2, 4, 6, 8]; // length 3

// var arr2 = [3, 5, 7, 9];  // length 4

// var arrnew = [];
// var i=0;
// var j=0;

// var valx;
// var valy;

// for(i=0,j=0; i<arr1.length && j<arr2.length; ){

//    valx = arr1[i];  //6
//    valy = arr2[j];  //7

//     if(valx < valy){
//       arrnew.push(valx);
//       i++;
//     }
  
//     else if(valy < valx){
//       arrnew.push(valy);
//       j++;
//     }

// };

// //alert(i +' , '+ j);   //3 , 2

// //alert(valx +' , '+ valy);   //6 , 7

// if(i !== arr1.length){
//   for(; i<arr1.length;){
//     valx = arr1[i];
//     arrnew.push(valx);
//     i++;
//   }
// }
// else if(j !== arr2.length){
//   for(; j<arr2.length;){
//     valy = arr2[j];
//     arrnew.push(valy);
//     j++;
//   }
// }
//     return arrnew;
// };


// //console.log(SorttwoArray());


// function arrayAlternate(){

// var arr1 = [2, 4, 6, 8]; // length 3
// var arr2 = ['a', 'b', 'c', 'd'];  // length 4

// var arrAlternate = [];

// var i=0;
// var j=0;

// var valx;
// var valy;

// for(; i<arr1.length && j<arr2.length;){

//    valx = arr1[i];  //
//    valy = arr2[j];  //

//    arrAlternate.push(valx);
//    arrAlternate.push(valy);

//    i++;
//    j++;
// }

// if(i !== arr1.length){
//   for(; i<arr1.length;){
//     valx = arr1[i];
//     arrAlternate.push(valx);
//     i++;
//   }
// }
// else if(j !== arr2.length){
//   for(; j<arr2.length;){
//     valy = arr2[j];
//     arrAlternate.push(valy);
//     j++;
//   }
// }
//     return arrAlternate;
// }

// //console.log(arrayAlternate());



// function createNumberfromArray(arr){

//   var val1 = 0;    //

//   for(var i = 0; i<arr.length; i++){
    
//     var val2 = arr[i];    // 9  //8

//     val1 = val1*10+val2;    //0*10+9 = 9   //9*10+8 = 98

//   }

//   return val1;   //
// }


// function Sumoftwoarray(a, b){

//   var numberArray1  = createNumberfromArray(a);
//   var numberArray2  = createNumberfromArray(b);

//   var sum = numberArray1 + numberArray2;

//   return sum;

// };


// var numberArray1 = [1, 1];
// var numberArray2 = [1, 2];

// console.log(Sumoftwoarray(numberArray1, numberArray2))


// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA"
// };

//for (let code in codes) {
///  alert( Number(code) ); // 49, 41, 44, 1   //to change string into number

//alert( +code ); // 49, 41, 44, 1   //to change string into number
//}



//----------------------object check empty------------


// function isEmpty(abc){


// for (let key in abc) {
//     return false;
//   } 

//     return true;
  
// }


// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// console.log(schedule);



//--------------------------- object sum-----------


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }


// function sumOfObj(abc){

//   let sum = 0;

//   for(let key in abc){
//     sum += abc[key];
//   }

//   if(sum == 0){
//     return 0;
//   }
//   else{
//     return sum;
//   }
// }

//console.log(sumOfObj(salaries));



// before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// function multiplyNumeric(abc){

//   for(let key in abc){
//     let vartype = abc[key];
//     if(typeof(vartype) == 'number'){
//       abc[key] = abc[key]*2;
//     }
//   }
// }



// multiplyNumeric(menu);

// console.log(menu);





//---------------------


// var strSentence = 'This is a bird';

// var splitedArr = strSentence.split(" ");

// var reverseStrArray = [];

// splitedArr.forEach(function(element, index, array){

//   var reverseStr = element.split("").reverse().join("");

// //alert(reverseStr);
//   reverseStrArray.push(reverseStr);
// })
// reverseStrArray = reverseStrArray.join(" ")
// //var finalStr = reverseStrArray.toString().replace(/,/g, " ");


// alert(reverseStrArray);




//-------------------------object 


// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined





// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // What's the result?





//---------------------create calculator object------------------






// let calculator = {

//   read(){
//     this.val1 = +prompt('enter value 1', '');
//     this.val2 = +prompt('enter value 2', '');
//   },
//   sum(){
//     let sum = this.val1 + this.val2;
//     return sum;
//   },
//   mul(){
//     let mul =  this.val1 * this.val2;
//     return mul;
//   }
// };


// console.log(calculator);

// calculator.read();
// alert( calculator.sum() );
//  alert( calculator.mul() );


//----------------OBJECT LADDER--------------

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//     return this;
//   }
//};


// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

//ladder.up().up().down().down().down().showStep(); // 1



//--------------------


// function Accumulator(startingValue){

//   this.value = startingValue;

//   this.read = function(){
//     var userval = +prompt('value', '');
//     this.value += userval;
//     //return this.value;
//   }
// }


// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// //accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values




//--------------settimeout-------------

// let i = 1;

// setTimeout(function run() {
//   console.log(i);
//   i++;
//   setTimeout(run, 100);
// }, 100);


//----------------setTimeout '0'----------

// setTimeout(function() {
//   alert('World');
// }, 0);

// alert('Hello');


//---------------reverse string-------------


// var string = "Welcome to this Javascript Guide!";

// var splitstr = string.split("").reverse().join("");

// //op = !ediuG tpircsavaJ siht ot emocleW

// var splitstr = splitstr.split(" ").reverse().join(" ");

// alert(splitstr);



// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");



// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// };



//--------------day and time--------------


// var today = new Date();  
// var day = today.getDay();  
// var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
// console.log("Today is : " + daylist[day] + ".");  

// var hour = today.getHours(); 
// //alert(hour); 
// var minute = today.getMinutes();  
// var second = today.getSeconds();  
// var prepand = (hour >= 12)? " PM ":" AM ";  
// hour = (hour >= 12)? hour - 12: hour;  
// if (hour===0 && prepand===' PM ')   
// {   
// if (minute===0 && second===0)  
// {   
// hour=12;  
// prepand=' Noon';  
// }   
// else  
// {   
// hour=12;  
// prepand=' PM';  
// }   
// }   
// if (hour===0 && prepand===' AM ')   
// {   
// if (minute===0 && second===0)  
// {   
// hour=12;  
// prepand=' Midnight';  
// }   
// else  
// {   
// hour=12;  
// prepand=' AM';  
// }   
// }   
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second); 


//------------------window object--------------


// var win = window;

// console.log(win);

//window.print();



//---------------------current date dd-mm-yyyy, dd/mm/yyyy---------


// var today = new Date();
// var date = today.getDate();
// var month = today.getMonth()+1;
// var year = today.getFullYear();


// console.log(date + '-' + month + '-' + year);
// console.log(date + '/' + month + '/' + year);



//=----------------area of a triangle  its sides are 5, 6, 7------


var sideA = 5;
var sideB = 6;
var sideC = 7;

var p = sideA + sideB + sideC;

p = p/2;

var area = Math.sqrt(p*((p-sideA)*(p-sideB)*(p-sideC)));
alert(area);



//---------- rotate the string 'w3resource'-----


function greet(){
    console.log('hai');
}
greet()

//first-class fun
function logGreeting(fn){
    fn();
}
logGreeting(greet);

// Funtion Expressions :
var greetMe = function(){
    console.log('Hai Tony !');
}
greetMe();
logGreeting(greetMe);
//Pass by value
function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a);

function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a);

 //Pass by Reference

function changeObj(e){
    e.prop1= function() {};
    e.prop2 = {};
}
var c ={};
c.prop1 = {};
changeObj(c);
console.log(c);

(function(){
    console.log('John');
 }());  //Immediate Invoked Function
 
 (function(a,b){
    console.log(a+b);
 }(2,3));


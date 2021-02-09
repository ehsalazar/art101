// Section D - February 2, 2021
// exploring functions, anonymous functions, and callbacks

// create a function that takes two parameters, a firstname and a lastname, and then returns a sentence using them.
// example return: My first name is (firstname) and my last name is (lastname).
function userInfo(first, last){
    return `My first name is ${first} and my last name is ${last}.`
}

// console.log(userInfo("Elan","Salazar"));

var funFunc = function(){
    console.log("Hi!");
};

// setTimeout(funFunc,3000);

//anonymous functions
// setTimeout(function(){console.log("Hi!");},5000);

// Section D - February 2, 2021
// exploring functions and scope

// console.log("JS loaded!")

function comp(x,y){
    return x > y;
}

// console.log(comp(2,1));
// console.log(comp(8,31));

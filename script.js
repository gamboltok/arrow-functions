//ARROW FUNCTIONS

console.log( calc(5, 5) );


let getAccess = function(){        //expression function --start
    let string = "you are admin";
    return string;
};

console.log(getAccess());            //expression function --end


const sayConsole = (message) =>{     //arrow function start     
    console.log(message);
};                                  //arrow function end 

sayConsole("WORKED");

function calc(a, b){                //declaration function start
    return (a + b);
}                                       //declaration function end

console.log( calc(2, 3) );


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// console.log( ret() );
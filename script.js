//console methods:-
//   1. log method:-
var testVariable = 404;
console.log("This is triggered by console.log")
console.log("checking the variable value",testVariable)

//2. Info method :-

console.info("Testing the log info method")

//3. Debug method :-

var userId = "UserOne";
var userId2 = "UserTwo";
var userId3 = "UserThree";

console.log("Console log"+ " " +  userId)

console.info("Console info" + " " +  userId2);

console.debug("Console debug" + " " +  userId3);

//4. Warn method :-
var testVariable = 404;
var testObj = { firstname : "Jhonyy", lastname : "Shaik" };

console.warn("This is a Warning message")

// passing a variable
console.warn(testVariable)
// pass an object as a warning
console.warn(testObj)

// 5. Assert method : -

let x = 1;
let y = 2;
console.assert(x + y == 4, "Expression is false")
console.assert(x + y == 3, "Expression is True")
console.assert(document.getElementById("Test"), "No element found with ID 'Test'");

//6. Count method :-
for (i = 1; i <= 5; i++){
    console.count()
}

//7. Trace method :-

function TraceMethod(){
    function TestMethod(){
        console.trace("Trace call");
    }
    TestMethod();
}
TraceMethod();


let a = 400
const b = 3500
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}



// console.log("Outer:" , a); 
// console.log(b);
// console.log(c); // takes the value form a local scope

// ---------------- L22 -------------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5) // Produces error
const addTwo = function(num){ // https://www.geeksforgeeks.org/javascript-function-expression/
    return num + 2
}
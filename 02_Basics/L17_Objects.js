// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Object inside an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //spread operator
// console.log(obj3);

//Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


// console.log(tinderUser); //Prints the object
// console.log(Object.keys(tinderUser));  //Prints all the keys as an array
// console.log(Object.values(tinderUser)); //Prints all the values as an array
// console.log(Object.entries(tinderUser)); //Prints all the key-value pairs as an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//++++++++++++++++++++ L18 ++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// const {courseInstructor} = course //Define courseInstructor and extract value from course
// console.log(courseInstructor);

// const {courseInstructor : instructor} = course //Define and rename courseInstructor as instructor and extract value from course
// console.log(instructor)


//JSON formats

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
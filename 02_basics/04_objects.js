//method 1 , singleton
// const tinderUser = new object()
//  method 2 , non singleton object
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "zaid"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// ab obj me obj
const meraApp = {
    email : "shaban@google.com",
    fullname : {
        userfullname: {
           firstname : "shaban",
           lastname : "khan"
        }
    }
}
// console.log(meraApp.fullname.userfullname.firstname);
// ...merging objects...

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
   { id : 1,
    email : "s@google.com"
   },
   {
    id : 2,
    email : "k@google.com"
   }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ......destructuring.....
const course = {
    coursename: "js in hindi",
    price : "999",
    teacher : "hitesh"
}
// course.teacher
// const {teacher}= course
// console.log(teacher);

// hamne teacher ki jagah ab instructor kaha usko, usi se hona ab, yahi destructure hai obj ka
const {teacher: instructor}= course
console.log(instructor);

console.log(instructor);

// ........APIs....
//  apis ki value pahle exon me ati thi ab json me 
// json is js object notation, sirf js me nhi balki poori api industry. me chlt hai
// object diye bagair to json ho jayega aur keys bi string me deni hoti hain, pura braces me hota hai


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// array m b ho skta..
// [
//     {},
//     {},
//     {}
// ]
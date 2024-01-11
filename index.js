// try {
//     alert("Salom");
//     console.log("hello");
//     console.log(test);
//     alert("bye");
// } catch (error) {
//     console.log("xatolik", error);
// };

// setTimeout(() => {
//     console.log("Salom");
//     console.log("bye");
// }, 2000);


// setInterval(() => {
//     console.log("to'xta");
// }, 2000);


// 1-misol

// let a=[1, 2, "salom", "bye", 4, true];


// function nums(arg) {
//     let sum=0;
//   for (const value of arg) {
//     if (value===Number(value)) {
//         sum+=value;
//     };
//   };  

//   return sum;
// };


// console.log(nums(a));


// 2-misol

// let b="assalomu alaykum";


// const word = function (arg) {
//    let a=arg.split(" ");
//    let c=[];

//    a.forEach(value => {
//     c.push(value.charAt().toUpperCase()+value.slice(1, value.length))
//    });
   
//    return c;
// };

// console.log(word(b));


// let a="qurur";

// const palindrom = (arg) => {
//     let satr='';

//     for (let i = arg.length; i > 0; i--) {
//           satr+=arg[i-1];    
//     };

//     if (arg===satr) {
//        return true;
//     } else {
//         return false;
//     };

// };

// console.log(palindrom(a));


// 4-misol 

// let users = [
//     {
//         id:1,
//         name:"John",
//         age:40
//     },

//     {
//         id:2,
//         name:"Bill",
//         age:45
//     },

//     {
//         id:3,
//         name:"Adam",
//         age:50
//     }
// ];

// function ageMax(arg) {

//     let ageLength=0;
//     let r="";
//     for (const value of arg) {
//         for (const key in value) {
//             if (ageLength<value["age"]) {
//                 ageLength=value["age"];
//                 r=value["name"];
//             }
//         }
//     }

//     return r;
// };

// console.log(ageMax(users));


// STRINGS AND TEMPLATE LITERALS 

//const firstName = "Dave";
//const job = "Yoga Teacher";
//const birthYear = "1991";
//const year = 2023;

//const dave = 
//"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
//console.log(dave);

//const daveNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(daveNew);

// console.log("String with \n\
//mutliple \n\
//lines");

// with ` template literals ` you can just press return and place string text on a new line

//console.log(`String
//with
//a
//new line`);


// TAKING DECISIONS - IF/ELSE

// first we define our problem/task
// Then we break it apart into smaller pieces/tasks

//TASK - Check if a person is old enough to take his/her drivers license. 

// 1. First we need a variable to store the persons age. 

// 2. We need a value that we store in a variable that will represent the required age to take your driving license. 

// 3. We need to compare the persons age against the required age to see if its a valid age for taking a driving license.

// 4. We need to make a decision based on the evaluation, true or false. 

// const age = 18;

// const isofAge = age >= 18;

// if (isofAge) {
//     console.log("YAY!, You can take a drivers license");
// } else {
//     console.log("You're not old enough to take your drivers license");
// }

// if (age >= 18) {
//     console.log("YAY!, You can take a drivers license");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sorry you are too young. Wait another ${yearsLeft} years`);
// }

// SWITCH

//Is an alternative way of writing a more complicated if else statement. 

//SWITCH

// Switch is an alternative way of writing a complicated if/else statement.

// const day = "monday";

// // switch (day) {
//     //case "monday":
//         // day === "monday" & notice : not ; 
//         console.log("Plan my course in Javescript");
//         // can execute multiple lines
//         console.log("Go to the gym");
//         break;
//         // you need to end the case with break

//         case "tuesday":
//             console.log("Prepare for theory lesson");
//             break;
//         case "wednesday":
//         case "thursday":
//             // you can output the same for two different values
//             console.log("Write some code examples");
//             break;
//         case "friday":
//             console.log("Give students feedback");
//             break;
//         case "saturday":
//         case "sunday":
//             console.log("Enjoy the weekend");
//         break;
//         default:
//             console.log("not a valid day");
//         // default will be executed if all other options fail
// // }

// const day = "monday";

// if (day === "monday") {
//     console.log("Plan my javacsript course!");
//     console.log("Got to the gym");
// } else if (day === "tuesday") {
//     console.log("prepare for theory lesson");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("write some code examples");
// } else if (day === "friday") {
//     console.log("Give students feedback");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy your weekend");
// } else {
//     console.log("Not a valid day");
// }

// // THE CONDITIONAL OPERATOR, TERNARY

// const age = 25;

// age >= 18 
// //condition
// ? console.log(`I like to drink beer`) 
// // if
// : console.log("I'll drink water.."); 
// //else

//  let n = "1" + 1;
//  n = n - 1;
//  console.log(n);

//  //ARRAYS

//  // A data structure which acts as a big container where we can store stuff if we have more than one value. 

//  const dogs = ["Tore", "Clementine", "Doris"];
//  console.log(dogs);

//  const years = [1985, 1990, 1994];
 
//  console.log(dogs);

//  dogs[
// 0] = "Trosan";
//  console.log(dogs);

//  const dogName = "Tore";
// const tore = [dogName, "Miniature Bull Terrier", 2021-2018, "He likes sleeping in his fluffy bed", dogs];

// console.log(tore);
// console.log(tore.length);
// console.log(tore[2]);


// const calcAge = function(birthYear) { // Function to calculate age
// 	return 2021 - birthYear;
// };

// const yearOfBirth = [1999, 1985, 2001, 2016, 1978]; // Array with birth years

// const firstAge = calcAge(yearOfBirth[0]); // You need to do each calculation seperately

// const secondAge = calcAge(yearOfBirth[1]); // Seclecting which array index to calculate.

// console.log(firstAge, secondAge);



function chocolateCake(butter, chocolate, eggs){ // Parameters defined in curly braces.
	const cake = `A simple cake with ${butter} cup of butter, ${chocolate} cups of chocolate and ${eggs} eggs`;  
    return cake;
}

// chocolateCake(1, 2, 3); // Gives each parameter a value
const yummyCake = chocolateCake(1, 2, 3);  
console.log(yummyCake);

function calcAge(age1, age2) { // Naming function - allocate blank parameters
	const resAge = age1 + age2;  // defines the result of the function
  return resAge; 
}

console.log(calcAge(20, 10));
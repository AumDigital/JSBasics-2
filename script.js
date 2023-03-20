

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

const day = "monday";

if (day === "monday") {
    console.log("Plan my javacsript course!");
    console.log("Got to the gym");
} else if (day === "tuesday") {
    console.log("prepare for theory lesson");
} else if (day === "wednesday" || day === "thursday") {
    console.log("write some code examples");
} else if (day === "friday") {
    console.log("Give students feedback");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy your weekend");
} else {
    console.log("Not a valid day");
}

// THE CONDITIONAL OPERATOR, TERNARY

const age = 25;

age >= 18 
//condition
? console.log(`I like to drink beer`) 
// if
: console.log("I'll drink water.."); 
//else

 



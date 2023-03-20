// SWITCH
// Switch is an alternative way of writing a complicated if/else statement.

const day = "monday";

switch (day) {
    case "monday":
        // day === "monday" & notice : not ; 
        console.log("Plan my course in Javescript");
        // can execute multiple lines
        console.log("Go to the gym");
        break;
        // you need to end the case with break

        case "tuesday":
            console.log("Prepare for theory lesson");
            break;
        case "wednesday":
        case "thursday":
            // you can output the same for two different values
            console.log("Write some code examples");
            break;
        case "friday":
            console.log("Give students feedback");
            break;
        case "saturday":
        case "sunday":
            console.log("Enjoy the weekend");
        break;
        default:
            console.log("not a valid day");
}
let favMonth = prompt("What is your favorite month?");
let favMonthlower = favMonth.toLowerCase();


if (isNaN(favMonthlower) === false){
    console.log("Please enter a valid month, not numbers!");
}

else {
    switch (favMonthlower) {
        case "january":
            console.log("Happy New Year!");
        break;
        case "february":
            console.log("Happy Valentine's Day!");
        break;
        case "march":
            console.log("Happy St. Patrick's Day!");
        break;
        case "april":
            console.log("April Fool's!");
        break;
        case "may":
            console.log("Enjoy your Memorial Day weekend!");
        break;
        case "june":
            console.log("Happy Pride Month!");
        break;
        case "july":
            console.log("Happy 4th of July!");
        break;
        case "august":
            console.log("Get ready for back to school!");
        break;
        case "september":
            console.log("Enjoy your Labor Day weekend!");
        break;
        case "october":
            console.log("Happy Halloween!");
        break;
        case "november":
            console.log("Happy Thanksgiving!");
        break;
        case "december":
            console.log("Happy Holidays!");
        break;
    }

    if (favMonthlower === "december" || favMonthlower === "january" || favMonthlower === "february"){
        console.log("You love the winter months!");
    }
    else if (favMonthlower === "june" || favMonthlower === "july" || favMonthlower === "august"){
        console.log("You love the summer months!");
    }
    else{
        console.log("Other months are interesting, too!");
    }
}

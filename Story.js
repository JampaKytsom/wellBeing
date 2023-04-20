//This is my simple story.
//Change the variables to see what happens.

//VARIABLES TO CHANGE
var myName = "Jampa";
var hasEnoughTime = true;
var drink = "coffee";
var food = "banana";

//STORY - DO NOT CHANGE

//introduce myself
    console.log("Hello, my name is  " + myName);

//do the breakfast part
if(hasEnoughTime) {

    
// do the food part first
    if(food == "banana") {
        console.log("I ate a banana. Healthy!");
    }
    else if(food == "bacon") {
        console.log("I ate bacon, tasty");
    }
    else {
        console.log("I ate something quickly");
    }

    //do the drink part
    switch(drink) {
        case "coffee":
        case "tea":
            console.log("I put the kettle on, and made " + drink);
        break; 

        case "orange juice":
        case "apple juixe":
            console.log("I drank a glass of " + drink);
        break; 

        default:
            console.log("I wasn't thirsty");
    }   
}
else {
    console.log("I didn't have time to eat. Oh dear");
}

//finish the story
    console.log("I rushed out of the door");
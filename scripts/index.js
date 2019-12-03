function sumExpense(billsArray) {
    let sum = 0;
    for (let bill of billsArray) {
        if (bill >= 20) {
            sum= sum + bill;
        }
    }
    return sum; 
}

const expenses = [
    1234.56,
    89.42,
    9797.10,
    88.88,
    3.14,
    30.99,
    10.74,
    0.99,
    42.39,
    19.24,
    8.49,
    21.30,
    1.00,
    30.00
];
console.log(sumExpense(expenses));


function itemDiscount(array) {
    let newArray = [];
    for (let cost of array){
        if (cost >= 100) {
            console.log(cost);
            cost = cost * 0.9;
            newArray.push(cost);
        }
        else {
            console.log(`It's too low!`);
            newArray.push(cost);
        
        }
    }
    return newArray;
}




console.log(itemDiscount(expenses));



function alwaysDiscount(expenseArray) {
    let newArray = [];

    for (let cost of expenseArray) {
        cost = cost * 0.9;
        newArray.push(cost);
    }

    return newArray;
}

// How to transform one array
// into a corresponding array

// #1. Write a function
// that describes how to transform
// one, single item.
function discountExpense(singleExpense) {
    // debugger;
    return singleExpense * 0.9;
}

// #2. Declare a variable to hold 
// the new array.
let updatedExpenses = expenses.map(discountExpense);


function onlyOverTwentyDollars(expenseArray) {
    let newArray = [];

    for (let cost of expenseArray) {
        if (cost >= 20) {
            newArray.push(cost);
        }
    }

    return newArray;
}

let filteredExpenses = onlyOverTwentyDollars(expenses);

// How to filter out certain items.

// #1. Write the helper function that knows if one, single
// element should be allowed or not.
// "Gandolf function"

function isOverTwentyDollars(cost) {
    // debugger;
    if (cost >= 20) {
        return true;
    } else {
        return false;
    }
}

// #2. Declare a variable to hold our new, filtered array.
let highExpenses = expenses.filter(isOverTwentyDollars);

function makeTurkey() {
    return "🦃";
}

const friendsToFeed = [
    "Joe",
    "Eva",
    "Aylor"
];

const meals = friendsToFeed.map(makeTurkey);


function firecracker() {
    return "🧨";
}

const redneckFriends = [
    "Jonathan",
    "Tedge"
];

gifts = redneckFriends.map(firecracker);

function myMap(anArray, helperFn) {
    // What is the job of .map?
    // #1. Creates a new, empty array
    const newArray = [];

    // #2. Iterates through each element of `anArray`
    for (let element of anArray) {
        // #3. For each element, call `helperFn` and pass it
        // the element
        const result = helperFn(element); // <==== a little weird.
    
        // #4. .push the result (from step #3) into the new array
        newArray.push(result);
    }

    // #5 return the new array
    return newArray;
}

function myFilter(anArray, helperFn) {
    
    // #1. Create new, empty array
    const newArray = [];

    // #2. Iterate through anArray
    for (let element of anArray) {
        // #3. For each element, call
        // helperFn and pass it the element
        const isCool = helperFn(element);

        // #4. If the helperFn returned true,
        // push the element into new Array
        if (isCool) {
            newArray.push(element);
        }
    }

    // #5 return the new array
    return newArray;
}
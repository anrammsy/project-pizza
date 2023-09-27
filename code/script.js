// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let name = prompt(`What is your name?`);
alert(`Hi ${name} and welcome to the Pizzeria!`);
// Step 2 - Food choice
// Your code goes here
let foodChoice = parseInt(
  prompt(
    `What kind of food do you fancy today?
   1 Pizza 
   2 Pasta 
   3 Salad`
  )
);
foodType = "";
if (foodChoice === 1) {
  foodType = "Pizza";
} else if (foodChoice === 2) {
  foodType = "Pasta";
} else if (foodChoice === 3) {
  foodType = "Salad";
} else {
  alert(`Please choose a number between 1-3`);
  process.exit(1);
}

alert(`You've chosen ${foodType}!`);

// Step 3 - Subtype choice
// Your code goes here
let subTypeChoice = 0;

if (foodChoice === 1) {
  subTypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type
    by typing a number: 
   1 - Napolitana 
   2 - Hawaiian 
   3 - Pepperoni
      `
    )
  );
} else if (foodChoice === 2) {
  subTypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type
      by typing a number: 
     1 - Spaghetti Carbonara 
     2 - Fettuccine Alfredo 
     3 - Cheesy Tortellini`
    )
  );
} else if (foodChoice === 3) {
  subTypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type 
      by typing a number:
    1 - Caesar Salad
    2 - Caprese Salad 
    3 - Greek Salad`
    )
  );
} else {
  alert(`Wrong input, please restart your order with a number between 1-3.`);
  process.exit(1);
}
//Fel här
let subType = "";
if (foodType === "Pizza") {
  if (subTypeChoice === 1) {
    subType = "Napolitana";
  } else if (subTypeChoice === 2) {
    subType = "Hawaiian";
  } else if (subTypeChoice === 3) {
    subType = "Pepperoni";
  } else {
    alert(`Invalid choice! Please try again`);
    process.exit(1);
  }
} else if (foodType === "Pasta") {
  if (subTypeChoice === 1) {
    subType = "Spaghetti Carbonara";
  } else if (subTypeChoice === 2) {
    subType = "Fettuccine Alfredo";
  } else if (subTypeChoice === 3) {
    subType = "Cheesy Tortellini";
  } else {
    alert(`Invalid choice! Please try again`);
    process.exit(1);
  }
} else if (foodType === "Salad") {
  if (subTypeChoice === 1) {
    subType = "Caesar Salad";
  } else if (subTypeChoice === 2) {
    subType = "Caprese Salad";
  } else if (subTypeChoice === 3) {
    subType = "Greek Salad";
  } else {
    alert(`Invalid choice! Please try again`);
    process.exit(1);
  }
} else {
  alert(`Invalid choice`);
  process.exit(1);
}
alert(`You've chosen ${subType}!`);

// Step 4 - Age
// Your code goes here

let age = parseInt(
  prompt(`Is this food for a child or an adult? Type your age`)
);
let price = "";
// Step 5 - Order confirmation
// Your code goes here

//10 euro chilc, 15 adult
if (age < 17) {
  age = "child";
  price = "€10";
} else if (age < 17) {
  age = "adult";
  price = "€15";
} else {
  alert(`Please type in your age`);
  process.exit(1);
}

let confirmOrder = "";
confirmOrder = parseInt(
  prompt(
    `One ${age} sized ${subType} will be prepared for you. 
That'll be ${price}. Are you sure you want to order this? 
1 - Yes 
2 - No`
  )
);

if (confirmOrder === 1) {
  alert(
    `Thank you for your  order! Your delicious meal will be prepared. See you soon!`
  );
} else if (confirmOrder === 2) {
  alert(`That's okay, you're always welcome to order again!`);
} else {
  alert(`Invalid choice, no order has been confirmed 😔`);
}

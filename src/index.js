// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100))


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));


// function isAdult(age) {
//   // Change code below this line
//     const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log (isValidPassword("mangodab3st") )

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20))

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (available < ordered) {
//         message = `Not enough goods in stock!`;
//     } else {
//         message = `Order is processed, our manager will contact you.`;
//     }

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// // a = a + 2;
// // b = b - 4;
// // c = c * 3;
// // d = d / 10;


// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//     if (customerCredits < totalPrice) {
//         message = `Insufficient funds!`;
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
        
//     }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null ) { // Change this line
//     message =  'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (!ordered) {
//         message = `There are no products in the order!`;
//     } else if (ordered > available){
//         message = `Your order is too large, there are not enough items in stock!`;
//     } else {
//         message = `The order is accepted, our manager will contact you`;
//     }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(150, 0));


// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
  
//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"  ; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("starter"));

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17))

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//     }

//   // Change code above this line
//   return discount;
// }


// console.log(getDiscount(137000))

// function checkStorage(available, ordered) {
// let message;
//   // Change code below this line

// //   if (ordered > available) {
// //     message = "Not enough goods in stock!";
// //   } else {
// //     message = "The order is accepted, our manager will contact you";
// //   }

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
    
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50))

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));

// function getSubscriptionPrice(type) {
//   let price;
  // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));


//     function checkPassword(password) {
//         const ADMIN_PASSWORD = "jqueryismyjam";
//         let message;
//         // Change code below this line

//           if (password === null) {
//             message = "Canceled by user!";
//           } else if (password === ADMIN_PASSWORD) {
//             message = "Welcome!";
//           } else {
//             message = "Access denied, wrong password!";
//     }
// }
// console.log(checkPassword(null));

    
    //     switch (password) {
    //         case null:
    //             message = "Canceled by user!";
    //             break;
        
    //         case ADMIN_PASSWORD:
    //             message = "Welcome!";
    //             break;
        
    //         default:
    //             message = "Access denied, wrong password!";

    //     }

    //     // Change code above this line
    //     return message;
    // }

    // console.log (checkPassword("mangohackzor"))

//     function getShippingCost(country) {
//   let message;
//   // Change code below this line
//         switch (country) {
//             case "China":
//                 price = 100;
//                 message = `Shipping to ${country} will cost ${price} credits`;
//                 break;
            
//             case "Chile":
//                 price = 250;
//                 message = `Shipping to ${country} will cost ${price} credits`;
//                 break;
            
//             case "Australia":
//                 price = 170;
//                 message = `Shipping to ${country} will cost ${price} credits`;
//                 break;
//             case "Jamaica":
//                 price = 120;
//                 message = `Shipping to ${country} will cost ${price} credits`;
//                 break;
            
//             default:
//                 message = "Sorry, there is no delivery to your country";
//         }
//   // Change code above this line
//         return message;
// }
// console.log(getShippingCost("Australia") )


// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"))

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// function getSubstring(string, length) {
//   const substring = string.slice(0, length);; // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3) )

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//         if (message.length > maxLength) {
//             result = message.slice(0, maxLength) + "...";
//         } else {
//             result = message;
//         }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"))

// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "egor"))

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//         result = true;
//     } else {
//         result = false;
//     }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));


// Модуль 2

// Завдання 1
// function checkAge(age) {
//   if (age >= 18 ) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));


//  Task 2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//   return  "Welcome!";
  
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"))

// Task 3
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }


// function checkStorage(available, ordered) {
//   // Change code below this line
 
   
//      if (!ordered) { //ordered === 0 автоперевірка не пускає !ordered
//         console.log(typeof (ordered));
//         console.log(ordered);
//         console.log(Boolean(ordered))
//    return "Your order is empty!";
//     }
//     if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//     }
    
//     return "The order is accepted, our manager will contact you";
    
//      }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(70, 0))
//   // Change code above this line


// task 4

// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// Task 5

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(lastElement);


// Task 6

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// Task 7

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;


// Task 8

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// // const lastElementIndex = fruits.length - 1;
// // const lastElement = fruits[lastElementIndex];

// // console.log(lastElement);

// Task 9

// function getExtremeElements(array) {
  // Change code below this line

//   const result = [array[0], array[array.length-1]];
// return result;
//   const lastElement = array.length - 1;
//   return [array[0], array[lastElement]];

//   // Change code above this line
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))

// Task 10

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "))

// Task 11
// function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  
//   const array = message.split(" ");
// const result = array.length * pricePerWord;
// return result;

  // const words = message.split(" ");
  // console.log(words)
  
  // return words.length * pricePerWord;

   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// Task 12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));

// Task 13

// function slugify(title) {
//   // Change code below this line
// //  const siteSlug = title.join("-");
//   const normalize = title.toLowerCase();

//   return normalize.split(" ").join("-")
 
//   //   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

// Task 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2, 5);

// // const firstTwoEls = fruits.slice(0, 2);
// // const nonExtremeEls = fruits.slice(1, fruits.length-1) ;
// // const lastThreeEls = fruits.slice(-3) ;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// // Task 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line
// console.log(allClients)


// Task 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   // const newArray =

//   return firstArray.concat(secondArray).slice(0, maxLength);

//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// Task 17

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1 ) { // Change this line
//   console.log(i);
// }

// Task 18

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(7));

// Task 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i <= fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Task 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(i)
//     // console.log(typeof(i))
//   }
//   // Change code above this line
//   return total;
   
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// // Task 21
// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(" ")
//   console.log(array);

//   for (let i = 0; i < array.length; i += 1) {
//     let longestWord = 0;
//     // console.log(i)
//     if (array[i].length > longestWord) {
//       longestWord = array[i];
//     }
//     return longestWord
  
//   }


//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
// let words = string.split(" ");
// let longestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length)
//   { longestWord = word;}
// }
// return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("Google do a roll"))

// console.time(findLongestWord);
// console.timeEnd(findLongestWord)





// let x = 7;
// let y = null;
// let a = 9;

// console.log(a || x && y )

// Task 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
    
  
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34))

//Task 23

// function filterArray(numbers, value) {
//    // Change code below this line


//   const newArr = [];
  
//   for (const number of numbers) {
//     if (number > value) {
//       newArr.push(number)
//     }
//   }

//   return newArr;
 

//   // Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3));

//Task 24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));

//Task 25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArr = [];
  // for (let i = 0; i < array1.length; i += 1) {
  //   if (array2.includes(array1[i])) {
  //      newArr.push(array1[i])
  //   }
  // }
  // return newArr;
    
  

  // for (const num of array1) {
  //   if (array2.includes(num)) {
  //     newArr.push(num);
  //   }
  // }
  // return newArr;

  // Change code above this line

// }


// console.log(getCommonElements([1, 2, 3], [2, 4, 1, 3, 5]))

//Task 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (const num of order) {
//     total += num;
//     }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// //Task 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }


//   for (number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38))


// Task 28

// Change code below this line
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


//Task 29
// function getEvenNumbers(start, end) {
//    // Change code below this line

//   let newArr = [];
//   for (let i = start; i <= end; i += 1) {
//     // newArr.push(i)

//     if (i % 2 === 0 ) {
//       newArr.push(i);
//     }
    
//    }

//   return newArr;
//     // Change code above this line
//   }


// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11))

//Task 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

//Task 31

// function findNumber(start, end, divisor) {
//   // Change code below this line
  

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
      
//       return i;
//     }
//   }

  
//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));

//Task 32

// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }

//     return false;

//     // Change code above this line
//   }
// }

// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))



// // Завдання 32

// function includes(array, value) {
//   // Change code below this line
//     for (const arrayEl of array) {
//         if (arrayEl === value) {
//             return true;
//         }
//     }

//      return false
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));


// function includes(array, value) {
//   // Change code below this line
// for (const arrayElement of array) {
// if (arrayElement === value) {
//   return true;
// }
// }
// return false;
//   // Change code above this line
// }


// Module 3

// Task 1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
  
// };
// console.log(apartment);

// Task 2

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner : {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// Task 3

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Task 4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// Task 5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Task 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 4000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);


// Task 7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }

// console.log(apartment);

// Task 8

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   price,
//   name,
//   image,
//   tags,
  
//   // Change code below this line
//   // Change code above this line
// };


// console.log(product);

// Task 9

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]:"jqueryismyjam",


//   // Change code above this line
// };

// console.log(credentials)

// Task 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   console.log(key);
//   keys.push(key);
//   values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);



// Change code below this line


// Task 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (advert.hasOwnProperty(key)) {
//    keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code below this line

  

//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// Task 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// // console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));

// Task 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (key of keys) {
//   values.push(apartment[key])
// }

// console.log(values)

// Task 14


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

 

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// Task 15

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


//Task 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salary = Object.values(salaries);
  
//   for (const value of salary) {
//     totalSalary += value;
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

//Task 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//Task 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//     return null
//   }

//   // Change code above this line
// }


// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Engine"))

//Task 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {

//     const newArr = [];

//     for (const product of products) {
//         propName in product ? newArr.push(product[propName]) : null;

//     }
//     return newArr;
// }
// console.log(getAllPropValues('name'));




// function getAllPropValues(propName) {
//   // Change code below this line

// let allPropValues = [];
// for(const product of products) {
//   const keys = Object.keys(product);
//   if (keys.includes(propName)) {
//     allPropValues.push(product[propName])
//   }
// }
//  return allPropValues;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"))

//Task 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let price = 0;
//   for (const product of products) {
//     if (product.name === productName)
//       price = product.price * product.quantity;
//   }
//   return price;


//   // Change code above this line
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));

//Task 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


//Task 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//Task 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line


// const { yesterday: highYesterday, today: highToday , tomorrow: highTomorrow , icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//Task 24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);

//Task 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low: lowToday, high: highToday, icon: todayIcon },
//         tomorrow: { low: lowTomorrow , high:highTomorrow,  tomorrowIcon =  "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" } } = forecast;


// console.log(highToday);


//Task 26

// Change code below this line
// function calculateMeanTemperature(forecast) {
// const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast



//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//Task 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);


//Task 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);

//Task 29

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings)


//Task 30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
 
//   return {completed, category, priority, ...data}
  

//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

// // one more variant
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let makeData = {
//     completed, category,priority
//   };
//   if (data){
//     makeData;
//   }
// return makeData ={completed, category,priority, ...data}
//   // Change code above this line
// }

//Task 31

// Change code below this line
// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   // for (let i = 0; i < args.length; i += 1){
//   //   total += args[i];
//   // }
//   // return total;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }



// console.log(add(15, 27))

//Task 33

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1){
//     if (args[i] > args[0]) {
//       total += args[i];
//     }
//   }
//   return total;

//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number){
//     total += arg;
//   }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//Task 33

// Change code below this line
// function findMatches(array, ...numbers) {
//   const matches = []; // Don't change this line
//   for (const number of numbers) {
//     for (const arr of array) {
//       if (number === arr) {
//         matches.push(number);
//       }
      
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))

// function findMatches(numbers, ...args) {
//   const matches = []; // Don't change this line
// for ( const arg of args) {
//   if (numbers.includes(arg)){
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }

// Task 34

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// Task 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1);
//     this.books.splice(bookIndex, 0, newName);
//   }
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//   const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1);
//     this.books.splice(bookIndex, 0, newName);
//     // return this.books;
//     // Change code above this line
//   },
//   getBooks() {
//     return this.books;
//   },
// };
//   console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// // console.log (bookShelf.getBooks("Haze", "Dungeon chronicles"))

// Task 36

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// Task 37

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };

//Task 38

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));

// // Task 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     return this.potions;


//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
// const index = this.potions.indexOf(potionName);
//    if (this.potions.includes(potionName)){
     
//      this.potions.splice(index, 1);
//    }

//     // Change code above this line
//   },
// };

// Task 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const posionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(posionIndex, 1);
//     this.potions.splice(posionIndex, 0, newName);
//     return this.potions;

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// Task  41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//     removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//       return this.potions;
//   },
//   // updatePotionName(oldName, newName) {
//   //   let result = `Potion ${oldName} is not in inventory!`;
//   //   for (let i = 0; i < this.potions.length; i += 1) {
//   //     const potion = this.potions[i];
     
//   //     if (oldName === potion.name) {
//   //       potion.name === newName
//   //     }
      
//   //   }
//   // return result = this.potions;

//   // },
  
  
//   // Change code above this line


//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (oldName === potion.name) {
//         potion.name ===newName
//       }
//     }
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))


// Module 4
// Change code below this line

// Task 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

//Task 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// // Task 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });

//Task 4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
    
//     }

//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//Task 5

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(element =>  {
//     totalPrice += element;
//   });


//   // Change code above this line
//   return totalPrice;
// }


// //Task 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })


//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

//Task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

//Task 8
// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }


//Task 9
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//Task 10

// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// const  calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach( item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

//Task 11
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

//Task 12
// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element =>  {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//Task 13

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// const changeEvenCopy = (numbers, value) =>  {
//   // Change code below this line
//   const newArr = [];
//   numbers.forEach(number => {
    
//     if (!(number % 2)) {
      
//       return newArr.push(number + value);
//     }
//     return newArr.push(number)
//   });

//   return newArr;
//   // Change code above this line
// }

// console.log(changeEvenCopy([1, 2, 3, 4, 5], 10) )

// function changeEven(numbers, value) {
//   const newEven = [];
//   // Change code below this line
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       return newEven.push(number + value);
//     }
//     return newEven.push(number);
//   });

//   return newEven
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10) )

//Task 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//Task 15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

// //Task 16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

//Task 17
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames1 = users.map(user => user.name);



// console.log(getUserNames1);
//   // Change code above this line

// const getUserNames = users => {
//   const userName = users.map(user => user.name);
//   return userName;
// }

// console.log(getUserNames(users));

//Task 18
// Change code below this line
// const getUserEmails = users => {
//   const userEmail = users.map(user => user.email);
//   return userEmail;

//   };
//   // Change code above this line
// console.log(getUserEmails(users));

//Task 19

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => !(number % 2) );
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

//Task 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, idx) => allGenres.indexOf(genre) === idx);
// console.log(allGenres);
// console.log(uniqueGenres);

//Task 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//Task 22


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];



// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
  
// };
// // Change code above this line
// console.log(getUsersWithEyeColor(users, "brown"));

//Task 23

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// // Change code above this line
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

//Task 24

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user => user.friends.includes(friendName)));

// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));
// console.log(getUsersWithFriend(users, "Briana Decker"));

//Task 25
// Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   return allFriends.filter((friend, idx) => allFriends.indexOf(friend) === idx);
  
   
// };
// // Change code above this line
// console.log(getFriends(users));

//Task 26

// Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };
// Change code above this line
// console.log(getActiveUsers(users))

//Task 27

// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive);
// };
// // Change code above this line
// console.log(getInactiveUsers(users));

//Task 28

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE );
// const bookByAuthor = books.find( book => book.author === AUTHOR );

// console.log(bookWithTitle);
// console.log(bookByAuthor);

//Task 29

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// // Change code above this line

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//Task 30


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => !(value % 2) );
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 );

// const eachElementInSecondIsEven = secondArray.every(value => !(value % 2) );
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 );

// const eachElementInThirdIsEven = thirdArray.every(value => !(value % 2) );
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

//Task 31

// Change code below this line (масив в завданны 29)
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
   
// };
// // Change code above this line
// console.log(isEveryUserActive(users));

//Task 32

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => !(value % 2));
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2);

// const anyElementInSecondIsEven = secondArray.some(value => !(value % 2));
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2);

// const anyElementInThirdIsEven = thirdArray.some(value => !(value % 2));
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2);
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

//Task 33

// Change code below this line (масив в 29 завданні)
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive)
   
// };
// // Change code above this line
// console.log(isAnyUserActive(users));

//Task 34

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// console.log(averagePlayTime);

//Task 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, {playtime, gamesPlayed}) => {
//    return acc + (playtime / gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);

//Task 36

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((acc, {balance}) => {
//     return acc + balance;
//     }, 0)
   
// };
// // Change code above this line
// console.log(calculateTotalBalance(users));

//Task 37
// Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((acc, { friends }) => {
//     return acc + friends.length;
//   }, 0);
   
// };
// // Change code above this line

// console.log(getTotalFriendCount(users));

//Task 38

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates.sort();

// const alphabeticalAuthors = authors.sort();
// console.log(alphabeticalAuthors);
// console.log(ascendingReleaseDates);

//Task 39

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b );

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b - a );


// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//Task 40

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder)

//Task 41

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort(({ title: titleA }, { title: tileB}) => titleA.localeCompare(tileB) );

// const sortedByReversedAuthorName = [...books].sort(({ title: titleA }, { title: tileB}) => tileB.localeCompare(titleA) );

// const sortedByAscendingRating = [...books].sort(({ rating: ratingA }, { rating: ratingB}) => ratingA - ratingB);

// const sortedByDescentingRating = [...books].sort(({ rating: ratingA }, { rating: ratingB}) => ratingB - ratingA);

// const sortedByAuthorName = [...books].sort ((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort ((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort ((a,b) => a.rating - b.rating);;

// const sortedByDescentingRating = [...books].sort ((a,b) => b.rating - a.rating);


// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//Task 42

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort(({ balance: balanceA }, { balance: balanceB }) => balanceA - balanceB);
   
// };
// // Change code above this line

// console.log(sortByAscendingBalance(users));

// Task 43

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort(({ friends: friendsA }, { friends: friendsB }) => friendsA.length - friendsB.length);
   
// };
// // Change code above this line

// console.log(sortByDescendingFriendCount(users));

//Task 44
// Change code below this line
// const sortByName = users => {
//   return [...users].sort(({ name: firstName }, { name: secondName }) => firstName.localeCompare(secondName));

// };
// // Change code above this line
// console.log(sortByName(users))

//Task 44

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));



// console.log(names);

//Task 45

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort(({ friends: firstFriend }, { friends: secondFriend }) => firstFriend.length - secondFriend.length).map(user => user.name);
   
// };
// // Change code above this line
// console.log(getNamesSortedByFriendCount(users));

//Task 47

// Change code below this line
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends).filter((user, idx, array) => array.indexOf(user) === idx).sort((a,b) => a.localeCompare(b));
   
// };
// // Change code above this line
// console.log(getSortedFriends(users))

//Task 48

// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).reduce((acc, { balance }) => {
//     return acc + balance;
//   }, 0);
// };
// // Change code above this line
// console.log(getTotalBalanceByGender(users, "female"));
// console.log(getTotalBalanceByGender(users, "male"));

//Module 5
// //Task 1
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.checkPizza("Superchees"));
// console.log(pizzaPalace.order("Supercheese"));


//Task 2
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//Task 3
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// historyService.getOrdersLog();
// console.log(historyService.getOrdersLog());
// historyService.getEmails();
// console.log(historyService.getEmails());
// historyService.getOrdersByEmail("jacob@hotmail.com");
// console.log(historyService.getOrdersByEmail("jacob@hotmail.com"));

//Task 4

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("age"));
// console.log(child.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(parent.isPrototypeOf(child));

//Task 5
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);;
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(ancestor.hasOwnProperty("surname"));
// console.log(parent.surname);
// console.log(child.hasOwnProperty("surname"));
// console.log(child.surname);
// console.log(ancestor.hasOwnProperty("heritage"));
// console.log(ancestor.heritage);
// console.log(parent.hasOwnProperty("heritage"));
// console.log(parent.heritage);
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.heritage);


// Task 6

// class Car { };

//Task 7
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model= model;
//     this.price = price;
//   }
// }

//Task 8
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//Task 9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
// }
//   changePrice(newPrice) {
//     this.price = newPrice;
//  }

//   // Change code above this line
// }
// console.log();

// Task 10

class Storage {
  constructor (items = []) {
    this.items = items;
  };
  getItems() {
    return this.items;
  };
  addItem(newItem) {
    this.items.push(newItem);
    return;
  };
  removeItem(itemToRemove) {
    const indexItem = this.items.indexOf(itemToRemove);
    this.items.splice(indexItem, 1);
  }
}

console.dir(Storage);


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//Task 11

// class StringBuilder {
//   constructor(value = " ") {
//     this.value = value;
//   };
//   getValue() {
//     return this.value;
//   };
//   padEnd(str) {
//     this.value = this.value + str;
 
   
//   };
//   padStart(str) {
//     this.value = str + this.value;
 
//   };

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }


// class StringBuilder {
//   constructor(value = " ") {
//     this.value = value;
//   };
//   getValue() {
//     return this.value;
//   };
//   padEnd(str) {
//     this.value = this.value.padEnd(this.value.length + 1, str);
//     return;
 
   
//   };
//   padStart(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//     return;
 
//   };

//   padBoth(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//     this.value = this.value.padEnd(this.value.length + 1, str);
//     return;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


//Task 12

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   };
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//     return;
//   };
//   // Change code above this line
// }
// console.log(getBrand());

//Task 13

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//Task 14
// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//Task 15

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.#model;
//   }

//   updateModel(newModel) {
//     this.#model = newModel;
//   }

//   getPrice() {
//     return this.#price;
//   }

//   setPrice(newPrice) {
//     this.#price = newPrice;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#brand = newModel;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#brand = newPrice;
//   }
//   // Change code above this line
// }


//Task 16

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       return this.#price = newPrice;
//     }
   
    
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Task 17

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";

//   }
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Task 18

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   }
// }



// console.log(Admin);

//Task 19

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


//Task 20


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

  
//   blacklist(email) {
//   this.blacklistedEmails.push(email);
//   }
  
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ===================================== CHALLENGE #1 =================================================

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
  it("The function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"
    const secretCodeWord4 = "Illegal";
    // Expected output: "1ll3g4l"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
    expect(codedMessage(secretCodeWord4)).toEqual("1ll3g4l");
  });
});

//ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
//we need a function that takes a string as parameter
//since we are receiving a string we need to convert it to an array (using .split method) for easier iteration.
//after that we can use .map since we are expecting the array of same length
//once we check for needed conditions and make necessary changes, we are going to join the array into a string again using .join method

const codedMessage = (word) => {
  return word
    .split("")
    .map((e) => {
      return e === "a" || e === "A"
        ? (e = "4")
        : e === "e" || e === "E"
        ? (e = "3")
        : e === "i" || e === "I"
        ? (e = "1")
        : e === "o" || e === "O"
        ? (e = "0")
        : e;
    })
    .join("");
};

// test passed

// ===================================== CHALLENGE #2 =================================================

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findWords", () => {
  it("a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];
    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    const letterI = "i";
    // Expected output: ["Apricot", "Kiwi"]
    const letterZ = "Z";
    // Expected output: []
    expect(findWords(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(findWords(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
    expect(findWords(fruitArray, letterI)).toEqual(["Apricot", "Kiwi"]);
    expect(findWords(fruitArray, letterZ)).toEqual([]);
  });
});

//ReferenceError: findWords is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
//our function will start with two parameters, an array and a letter
//we can use .filter to iterate through our array
//since we are going to use .include method, we need to make sure individual strings are all in lower cases using .toLowerCase method
//only strings with "true" return value will be found in our return array

const findWords = (arr, ltr) => {
  return arr.filter((str) => str.toLowerCase().includes(ltr));
};

//test passed

// ===================================== CHALLENGE #3 =================================================

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("findFullHouse", () => {
  it("a function that takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.", () => {
    const hand1 = [5, 5, 5, 3, 3];
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4];
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4];
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7];
    // Expected output: true
    const hand5 = [1, 2, 7, 2, 7];
    // Expected output: false
    const hand6 = [4, 5, 6, 4, 5];
    // Expected output: false
    const hand7 = [2, 7, 7, 7, 7];
    // Expected output: false
    const hand8 = [8, 8, 8, 8, 8];
    // Expected output: false
    const hand9 = [2, 8, 8, 8, 2];
    // Expected output: true
    expect(findFullHouse(hand1)).toEqual(true);
    expect(findFullHouse(hand2)).toEqual(false);
    expect(findFullHouse(hand3)).toEqual(false);
    expect(findFullHouse(hand4)).toEqual(true);
    expect(findFullHouse(hand5)).toEqual(false);
    expect(findFullHouse(hand6)).toEqual(false);
    expect(findFullHouse(hand7)).toEqual(false);
    expect(findFullHouse(hand8)).toEqual(false);
    expect(findFullHouse(hand9)).toEqual(true);
  });
});

//ReferenceError: findFullHouse is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
// our function will receive an array of numbers
// we can utilize new Set object since we are only looking for a Set with two values to start with. Everything else (over and below size 2) will not be considered since full house contains only two different numbers.
// once we pass the Set test, we only need to check for cases where we have one number 4 times. We can test our Set values and filter our array
//If either comes back more than 3 times (return array.length), the condition will return "false", everything else will return "true"

const findFullHouse = (cards) => {
  let cardsFound = new Set(cards);
  const [card1, card2] = cardsFound;
  if (cardsFound.size != 2) return false;
  return cards.filter((e) => e === card1).length > 3 ||
    cards.filter((e) => e === card2).length > 3
    ? false
    : true;
};

//test passed

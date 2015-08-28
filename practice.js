//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.
// var me = {
//   name: "Sam Skeen",
//   age: 22
// }
//alert(me.name);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.
var favoriteThings = {
  band: "Imagine Dragons",
  food: "baked mac & cheese",
  person: "Christ",
  book: "Words of Radiance",
  movie: "Star Wars Episode 5",
  holiday: "my birthday"
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
favoriteThings.car = "Toyota Corolla";
favoriteThings.brand = "Think Geek";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.
favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";
// for (var key in favoriteThings) {
//   console.log(key + ": " + favoriteThings[key]);
// }




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */
var backpack = {}, item = "firstPocket";
backpack[item] = "chapstick";
backpack.color = "green";

//After you do the above, alert your entire backPack object.
//alert(backpack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */
//console.log(backpack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.
var me = {
  name: "Sam Skeen",
  age: 22,
  height: 70,
  gender: "male",
  married: false,
  eyeColor: "blue-grey",
  hairColor: "brown"
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc
// for (var key in me) {
//   alert(me[key]);
// }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.
var album = {
  song1: "Radioactive",
  song2: "Tiptoe",
  song3: "Underdog",
  song4: "Top of the World",
  song5: "America"
}

//Now, loop through your album object alerting every song title individually.
// for (var key in album) {
//   alert(album[key]);
// }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).
var States = {
  utah: 30000000,
  washington: 50000000,
  alaska: 1000000,
  hawaii: 20000000,
  newYork: 2
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.
// for (var key in States) {
//   if (States[key] > 30000) {
//     alert(key);
//   }
// }




//NEXT PROBLEM




// var user = {
//     name: 'Tyler McGinnis',
//     email: null,
//     pwHash: 'U+Ldlngx2BYQk',
//     birthday: undefined,
//     username: 'tylermcginnis33',
//     age: 0
// }
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */
for (var key in user) {
  if (!user[key]) {
    delete user[key];
  }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.
// user.name = "Sam Skeen";
// user.pwHash = "U+JeldpaneJ4sod";
// user.username = "cwadrupldijjit";

// for (var key in user) {
//   alert(key);
// }




//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email
// user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.
var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */
methodCollection.alertHello = function() {
  alert("hello");
}

methodCollection.logHello = function() {
  console.log("hello");
}

//Now call your alertHello and logHello methods.
// methodCollection.alertHello();
// methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.
function MakePerson(name, birthday, ssn) {
  var Person = {};
  
  Person.name = name;
  Person.birthday = birthday;
  Person.ssn = ssn;
  
  return Person;
}

// console.log(MakePerson("Sam Skeen", "Sep 8, 92", "123-45-6789"));



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.
function MakeCard(num, svv, signed, expirationDate) {
  var Card = {};
  
  Card.num = num;
  Card.svv = svv;
  Card.signed = signed;
  Card.expirationDate = expirationDate;
  
  return Card;
}
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/
var bindCard = function(person, creditCard) {
  var obj = {};
  for (var key in person) {obj[key] = person[key];}
  for (var key in creditCard) {obj[key] = creditCard[key];}
  return obj;
}

// var somebody = MakePerson("Sam Skeen", "Sep 9, 1992", "123-45-6789");
// var someCard = MakeCard(1234567812345678, 123, true, "1/2015");
var someRandomThing = bindCard(MakePerson("Sam Skeen", "Sep 9, 1992", "123-45-6789"), MakeCard(1234567812345678, 123, true, "1/2015"));

// console.log(someRandomThing);
//1. Given an array of strings, return only the strings that have exactly 4 characters.

var genres = ["Jazz", "Pop", "Funk", "Rock", "Country", "Rap", "Soul", "House" ]

for (var i= 0; i < genres.length; i++ ) {
    if (genres[i].length === 4){
        console.log(genres[i]);
    }
}

//*Goal: The strings in this array should only print the genres with 4 characters in them
//*Pseudocode: Declare varying generes of music ranging in character length, include some with only 4 characters
//: for statement will run loop once through the whole array
//:: create a if statment that contains a conditional that is strickly equal to 4 

//***Final statement should print if true:
// Jazz
// Funk
// Rock
// Soul

------------------------

// 2.Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

var artists = ["pRiNcE", "sPaRkS", "aAlIyAh", "oAsIs", "pIxIeS"]
for (var i=0; i < artists.length; i++) {
  console.log(artists[i].toLowerCase(i))
}
//*Goal: This array should print all the artists names from uppercase and lowercase to only lowercase letters.
//**Pseudocode: Declare varying artist names with a mix of upper and lower case letters
//:for statement will call the condition of the length to be run through each element in the array
//:: the console should print only lowercase letters for all elements in the array if true

//***Final statement should print if true:
//prince
// sparks
// aaliyah
// oasis
// pixies

------------------------

// 3.Given an array of strings, return only the words that begin with the letter "t".

var bands = ["tool", "carpenters", "thin lizzy", "tricky", "breeders", "janet jackson"]
for (var i=0; i < bands.length; i++){
    if (bands[i].startsWith("t"))
    console.log(bands[i]);
}

//*Goal: The goal should be to run through this array and only print the strings that start with the letter "t"
//**Pseudocode: array should include list of strings with various band names not all starting with the letter "t"
//:for statement should only run through each element in the array and check if the band starts with the letter "t"
//:: if the band does not start with "t" the string should print nothing to the console 

//***Final statement should print if true:
// tool
// thin lizzy
// tricky

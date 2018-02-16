// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
/*global$*/
$( document ).ready(function() {
  

   $("#go").click(function(){
             var userSays = $("#input3").val();
             $("#message").text(userSays);
            });
});

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
var input= $("#input3").val();
var wordArray=input.split(" ");


var prefix = word.slice(0,1);
var suffix = word.slice(1);
var result = suffix + prefix + 'ay';
for(i=0; i< wordArray.length, i++){
var word =wordArray[i];
}


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
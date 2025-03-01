// Q1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input

    let S1 = "AbaDd";
    let B = [0 , 0];
    for (let char of S1) {
        if (char === 'A') {
            B[0]++;
        } else if (char === 'D') {
            B[1]++;
        }
    }
    console.log(B);

// Q2. Count the Heads

// Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how 
// many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds 
// out the count of characters that occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.

function CountHead(S) {
    let charCount = {};
    for (let char of S) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = Object.keys(charCount)
        .filter(char => charCount[char] > 1)
        .sort()
        .map(char => char + charCount[char])
        .join('');
    
    return result;
}
console.log(CountHead("chitranjan")); 

// Q3. Count the Vowels

// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
// given string. 
// Note: You have to complete Count_Vowel function. No need to take any input. 
// Input Format 
// The first and only line of the input contains string S.  
// Output Format 
// Return the number of Vowels in the string S as output. 
let s="chitranjan"
let vowel="aeiouAEIOU"
let count=0 ;
for(let i=0; i<s.length; i++){
    if(vowel.includes(s[i])){
        count++;
    }
    console.log(s)
}
console.log(count);

// Q4. Concatenate the Strings 

// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings.  
// Note: You have to complete Concatenate_Strings function. No need to take any input. 

// Input Format 
// The first line of the input contains the first string S1 and the second line of input contains the second string S2.  

// Output Format 
// Return the String S3 as output, which is the concatenation of given both strings. 

let S12 = "Prep";
let S2 = "bytes";
let S3 = S1 + S2;
console.log(S3);

// Q5. Find Length 

// You are given a string S, and your task is to return the length of the string S. 
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input. 

// Input Format 
// The first and the only line of the input contains a string S. 

// Output Format 
// Return the length of the string S.
  
let b = "CeDqe";
console.log(b.length)

// second method
let b1 = "CeDqe";
let count1=0;
for(let i=0; i<b1.length; i++){
    count1++
}
console.log(count1);

// Q6. Find the Winner 

// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
// player wins the maximum number of games or there is a draw between them. 
// Note: You have to complete Game_Winner function. No need to take any input. 

// Input Format 
// The first and only line of the input contains string S. 

// Output Format 
// Return the name of the player who have won the maximum number of games, if both player won same number of games return Draw. 

let s1=prompt("enter your alphabate")
let countA=0;
let countD=0;

for(let i=0; i<s1.length; i++){
    if((s1[i]=="A")){
        countA++;
    }else if((s1[i]=="D")){
        countD++
    }
}
if(countA>countD){
    console.log("Aditya")
}else if(countD>countA){
    console.log("Dinesh")
}else{
console.log("Draw")
}

// Q7. Join Strings 
// You are given two strings S and P, and your task is to concatenate them and return the concatenated string. 
// Note: You have to complete joinStrings function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains two space-separated strings S and P. 
// Output Format 
// Return the final concatenated string. 
let j= ["PrepBytes", "Technologies "]
let S5=j[0];
let P=j[1];
let join=S5+P;
console.log(join);

// Q8. Plaindrome Check 
// You are given a string S, Your task is to check wether the given string is a Palindrome or not. 
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
// both upppercase lowercase letters. 
// Note: You have to complete Plain_Check function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains a string S. 
// Output Format 
// Return "True" if the given string is Palindrome else return "False" (without " ") .

let S = "Naman";
let isPalindrome = true;

for (let i = 0; i < Math.floor(S.length / 2); i++) {
    if (S[i] !== S[S.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "True" : "False");



// Q9. Reverse the String 
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
// complete Reverse_String function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains a string S. 
// Output Format 
// Return the reversed String. 

let string=prompt("Enter  your word");
let rev="";
for(let i=string.length-1; i>=0; i--){
    rev+=string[i];
}
console.log(rev);

// Q10. Match the Strings 
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO. 
// Note: You have to complete String_Match function. No need to take any input. 
// Input Format 
// The first line of the input contains a string S1. The second line of the input contains a string S2. 
// Output Format 
// Return YES if S1 and S2 are same, else return NO

let m="Prepbytes";
let m1="Prepbytes";
if (m === m1) {
    console.log("YES");
  } else {
    console.log("NO");
  }

// Q11. String Replace 
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string. 
// Note: You have to complete Replace function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains a string S. 
// Output Format 
// Return updated String S as output. 

let S6 = "Hi, I am You. You Prepbytes";
let pattern = "You";
let replacement = "Prepbytes";
let result = "";
let i = 0;

while (i < S6.length) {
    if (S6.substr(i, pattern.length) === pattern) {
        result += replacement;
        i += pattern.length;
    } else {
        result += S6[i];
        i++;
    }
}

console.log(result);


// Q12. Split the String 
// You are given a string S, Your task is to split the string with respect to spaces. 
// Note: You have to complete Split_the_String function. No need to take any input. 
// Input Format 
// The first and the only line of the input contains a string S. 
// Output Format 
// Return the array of splitted strings of S.

function Split_the_String(S) {
  let result = [];
  let word = "";
  
  for (let i = 0; i < S.length; i++) {
      if (S[i] === ' ') {
          if (word !== "") {
              result.push(word);
              word = "";
          }
      } else {
          word += S[i];
      }
  }
  
  if (word !== "") {
      result.push(word);
  }
  
  return result;
}
console.log(Split_the_String("I am utkarsh raj"));

// Q13. Count the Vowels and Consonants 
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
// consonants in the given string. 
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input. 
// Input Format 
// The first and only line of the input contains string S.  
// Output Format 
// Return the number of Vowels and the number of Consonants in the string S in the functions.

let S7 = "Prepbytes";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let char of S7) {
    if (vowels.includes(char)) {
        vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
        consonantCount++;
    }
}

console.log(vowelCount, consonantCount);

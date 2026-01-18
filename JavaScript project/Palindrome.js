let str1=prompt('enter a string') //take the input from user using prompt
let lowercase=str1.toLowerCase(); //convering the user input into lower case
let onlyletter=lowercase.split("") //now we are spliting each word and inserting it in array
let filter=onlyletter.filter(function(char) {
    return char >= 'a' && char <= 'z';
}) // here we are keeping only the alphabet rest are ignore
join=filter.join("")//here we are joining only the alphabet after filter in the form of array
reverscase=join.split('').reverse().join('');// here we are reversing the join variable 
if (join===reverscase){ // checking it is palindrome or not and displaying the result
    document.body.innerHTML='it is palindrome'
}
else{
    document.body.innerHTML='it is not a palindrome'
}
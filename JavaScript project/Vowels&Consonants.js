let str=prompt("enter a string")
str2=str.toLowerCase().split("")
filter=str2.filter(function (char){ 
return char>='a' && char<='z';
})
let join=filter.join("")
let obj={
vowels:0,
consonants:0}
for (let char of join){
    if ('aeiou'.includes(char)){
        obj.vowels++
    }
    else{
        obj.consonants++
    }
}

document.body.innerHTML=`Vowels: ${obj.vowels}, Consonants: ${obj.consonants}`
console.log(obj)
//input
//this is the test for aeiou and for consonants
//output
//Vowels: 15, Consonants: 22
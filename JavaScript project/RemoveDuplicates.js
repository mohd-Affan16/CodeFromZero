let arry=[];//empty array
let obj={};//empty object 
let input=[1,3,3,4,4,6] // testing value
for(let item of input){ // loop  for iterate in testing value 
    if (!obj[item]){ // condition to check if the value is already in object
        arry.push(item)//if the value is not there push it to the array
        obj[item]=true;//store the value in obj
    }
    else{
        continue//skip the iteration
    }
}
console.log(arry)
// output
// (4) [1, 3, 4, 6]
// 0:1
// 1:3
// 2:4
// 3:6
// length: 4
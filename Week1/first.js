const a = 20//Constant
console.log(a)
let uname = "Vamsi"
let age = 25
let isMarried = true
console.log("This persons name is "+uname+" and he is "+age+" years old")
if(isMarried){
    console.log(uname+" is Married")
}else{
    console.log(uname+" is Not Married")
}
//Arrays
const arr = [12,2,30]//You can not assign new array to this but you can change values inside

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}
//Objects
const allUsers = [{
    firstName:"Vamsi",
    gender:"male"
},{
    firstName:"melanie",
    gender:"female"
},{
    firstName:"Jigar",
    gender:"male"
},{
    firstName:"Amanda",
    gender:"female"
},]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}
//functions

console.log(sum(3,4))
function sum(a,b){
    return a+b
}
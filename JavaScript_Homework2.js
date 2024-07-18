//Homework assigment 1 for Parsing throught JavaScript Objects

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let showInfo = function(){

    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(person3[0])
        if(Object.entries(person3)[i]){
            console.log(Object.entries(person3)[i])
        }
    }
}

console.log(showInfo(person3))



//Homework assignment 2 for Parsing through JavaScript Objects

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = (height = 0, eye_color, shoe_size = 0) => {
        console.log( `Your name is ${this.name}, and you are ${this.age} years old. You are ${height} inches tall, with ${eye_color} eyes, and wear a size ${shoe_size} shoe. Great to meet you!`)
        return 'Just another cool person added to the list.'
    }
    this.addAge = (addNum = 1) =>{
        this.age += addNum;
        console.log(`You have aged ${this.age} years.`)
        return 'Cool you grew up.'
    }
}

let you = new Person('Jessica', 45)
let u2 = new Person('Mateo', 23)

console.log(you.printInfo(56, 'blue', 11))
console.log(u2.printInfo(65, 'hazel', 12))
console.log(u2.addAge(3))
console.log(you.addAge())


//Homework assignment number 3... Create a promise based function that will check to see if a string's length is greater than 10

const isGreaterThanTen = (variable) => {
    return new Promise((resolve, reject) => {
        if(String(variable).length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

isGreaterThanTen('MMM tacos. I would have stopped at tacos if I wanted an error.')

.then( (result) => {
    console.log(`The string is longer than ten: ${result}`)
})

.catch( (error) => {
    console.log(`The string is too short: ${error}`)
})
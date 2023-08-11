import CREED from 'prompt-sync'

const input = CREED()

let user_weight = input("Weight in pounds: ")

let converter = Number(user_weight) * 0.45

console.log("Weight In Kilogram: " + converter)
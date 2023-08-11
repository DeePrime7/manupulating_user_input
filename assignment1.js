import CREED from 'prompt-sync'

const input = CREED()


let first_name = input("First-Name: ")


let last_name = input("Last-Name: ")

let age = input("Age: ")

let current_year = input("Current-Year: ")

let earthly_appearance =  Number(current_year) - Number(age)

console.log("First Name: "+ first_name + " Last Name: " + last_name + ", You are " + age + " Years Old, and you came to earth in the year " + earthly_appearance)
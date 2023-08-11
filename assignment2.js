import CREED from 'prompt-sync'

const input = CREED()

const name = input("Name: ")

const age = input("Age: ")

const department_name = input("Department-Name: ")

const score = 34.72

console.log("Welcome " + name)

console.log("You Are In " + department_name +  " Department")

console.log("You Are "+ age + " Years Old")

console.log("Yours Score is: "+ score)
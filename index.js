import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

let myUsername = process.env.name
console.log("value: ", myUsername);

console.log("Start of an backend project");

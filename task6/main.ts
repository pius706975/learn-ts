import { PassengerArray, objInArr } from "./1";

// 1
// console.log(objInArr([['Michael Jackson', 'Male', 2000], ['Michael 2', 'Male', 2002]]))

// 2
const passengers: [string, string, string][] = [
    ['joko', 'A', 'B'],
    ['jono', 'B', 'E']
]

console.log(PassengerArray(passengers))
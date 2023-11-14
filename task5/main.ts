import { AddData, CountWithBday, CreateObj, Params } from "./1";

// 1
console.log(AddData({nama: 'Joko', umur: 99, tanggal_lahir: '17 Agustus 1924', alamat: 'Goa Hantu'}))

// 2
console.log(CreateObj(['tes', 'tes2']))

// 3
const params: Params = {minus: 5, times: 3, mod: 2}
const bday = 17
console.log(CountWithBday(params, bday))
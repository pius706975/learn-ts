// Buatlah sebuah fungsi yang menerima object yang terdiri dari nama, umur, tanggal lahir dan alamat. Kembalikan nilai “ Nama saya {nama}, berumur {umur}, tanggal lahir saya {tanggal lahir}. Tempat tinggal saya {alamat}, senang bertemu dengan Anda ”.
interface Person {
    nama?: string,
    umur?: number,
    tanggal_lahir?: string,
    alamat?: string
}

// 1st mehotd
// const AddData = (nama: string, umur: number, tanggal_lahir: string, alamat: string): string => {
//     let str = ''
//     const data: Person = {nama, umur, tanggal_lahir, alamat}
//     const msg: string = `Nama saya ${data.nama}, berumur ${data.umur}, tanggal lahir saya ${data.tanggal_lahir}. Tempat tinggal saya ${data.alamat}, senang btertemu dengan Anda.`
    
//     return str += msg
// }

// 2nd method
const AddData = (data: Person): string => {
    const {nama, umur, tanggal_lahir, alamat} = data
    const msg: string = `Nama saya ${nama}, berumur ${umur}, tanggal lahir saya ${tanggal_lahir}. Tempat tinggal saya ${alamat}, senang btertemu dengan Anda.`

    return msg
}


// Buatlah fungsi yang mengembalikan object baru, dengan parameter string yang dijadikan key pada object baru tersebut. Contoh parameter yang diinput adalah tes dan tes2 secara berurutan dengan value otomatis sesuai urutan data yang dimasukkan, maka outputnya { tes: 1, tes2: 2 }
const CreateObj = (keys: string[]): any => {
    const result: any = {}

    keys.forEach((key, i)=>{
        result[key] = i + 1
    })

    return result
}
// console.log(CreateObj(['tes', 'tes_gabut', 'tes_extraordinary_gabut']))


//  Diketahui parameter yang diinput dalam sebuah fungsi adalah { minus: 5, times: 3, modulus: 2 }. Hitung sesuai key pada object tersebut dengan tanggal lahir kamu. Contoh tanggal lahirnya adalah 12 maka pertama-tama kurangi 12 dengan value minus (5), lalu hasilnya kalikan dengan value times (3), terakhir hitung modulus dari hasil kali sebelumnya dengan value modulus (2). Kembalikan hasilnya.
interface Params {
    minus: number,
    times: number,
    mod: number
}

const CountWithBday = (params: Params, bDate: number): number => {
    const {minus, times, mod} = params
    let res: number = 0
    let count: number = ((bDate - minus) * times) % mod
    res += count

    return res
}

export {AddData, CreateObj, CountWithBday, Params}
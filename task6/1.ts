/*
Buat object dalam array baru dari data penumpang yang diinput.
Diketahui:
1. Terdapat 10 rute yaitu A, B, C, D, E, F, G, H, I , dan J.
2. Misal penumpang berangkat dari A ke B maka jaraknya 1, jadi harus membayar 3000.
3. Inputan akan berupa array dengan struktur [ nama penumpang, mulai dari rute, sampai rute ].
4. Struktur output yang diharapkan yaitu => [ { penumpang: namaPenumpang, naikDari: ruteMulai, sampai: ruteAkhir, ongkos: jumlahBayar }, … ]

*/
interface Passenger {
    penumpang: string,
    naikDari: string,
    sampai: string,
    ongkos: number
}

interface CostInterface {
    [key: string]: number;
}

const Cost:CostInterface = {
    A: 3000,
    B: 3000,
    C: 3000,
    D: 3000,
    E: 3000,
    F: 3000,
    G: 3000,
    H: 3000,
    I: 3000,
    J: 3000,
}

const PassengerArray = (pass: [string, string, string][]): any => {
    const passengerData = pass.map(([name, startingRoute, finalRoute])=>{
        const routes = Object.keys(Cost)
        const finalPoint = routes.indexOf(finalRoute)

        let totalCost = 0
        
        for (let i:number = 0; i<finalPoint; i++) {
            totalCost += Cost[routes[i]]
        }

        return {penumpang: name, naikDari: startingRoute, sampai: finalRoute, ongkos: totalCost}
    })

    return passengerData
}

/* from kak vika

Buat object dalam array baru dari data mahasiswa yang diinput.
Diketahui:
1. Inputan akan berupa array dengan struktur [ [ nama lengkap (hanya 2 suku kata), gender, tahun lahir ] ].
2. Hitung umur mahasiswa dari tahun lahir yang diinput.
3. Struktur output yang diharapkan yaitu => [ { firstName: nama depan, lastName: namaBelakang, age: umur }, … ]
*/
const objInArr = (arr: any[]) => {
    let currentYear = new Date().getFullYear()
    let newArr: any = []
    arr.map((val: any, index: number) => {
        let age = currentYear - val[2]
        // console.log(currentYear, age)
        let name = val[0].split(' ')
        newArr.push({
            firstName: name[0],
            lastName: name[1],
            age
        })
    })    
    
    return newArr
}

export {objInArr, PassengerArray, Passenger}
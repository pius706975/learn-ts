// from kak vika

// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array, yang mengembalikan nilai median (nilai tengah) dari kumpulan angka tersebut.
const GetMedian = (n: number[]): any => {
    let sort:any = n.sort()
    let num:number = sort.length
    let med:number = 0

    let count: number = (num % 2 !== 0) ? (num + 1) / 2 : num / 2
    med += count
    
    return `${sort} = ${med}`
}

// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array dan kembalikan jumlah semua angka dalam array.
const GetSum = (n: number[]): number => {
    let sum:number = 0
    let count = n.reduce((num1, currentNum) => num1 + currentNum)
    sum += count
    
    return sum
}

// Buatlah sebuah fungsi yang menerima kumpulan angka dalam bentuk array. Carilah nilai modus dari array tersebut. Contoh input : [1, 2, 3, 3, 2, 1, 2] maka nilai modusnya adalah 2 karena 2 yang terbanyak jumlahnya dalam array tersebut.
const GetMode = (n: number[]) => {
    let objSearch: any = {}    
    n.map((val: number, index: number) => {
       objSearch[val] ? (objSearch[val] += 1) : (objSearch[val] = 1)
    })    
    
    let modus = 0
    let modusKey = 0    
    
    for (const key in objSearch) {
        objSearch[key] > modus && (modus = objSearch[key], modusKey = +key)
    }    
    
    return modusKey
}

export {GetMedian, GetSum, GetMode}
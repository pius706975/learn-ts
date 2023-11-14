// Buatlah fungsi yang menerima parameter angka, lalu lakukan iteration sesuai jumlah angka tersebut dan kalikan iteration dengan 2 dan kembalikan nilai “Jumlah {angka iterasi} dikali 2 = {hasil perkalian iterasi dan 2}”.
const Multiply = (n: number): string => {
    let res: string = ''

    for (let i: number = 1; i<=n; i++) {
        const multiplication = i * 2
        res += `Jumlah ${i} dikali 2 = ${multiplication}\n`
    }

    return res
}

// Buatlah fungsi yang untuk menghasilkan bilangan fibonacci yang dimulai dari angka 0 hingga 55. Contoh deret fibonacci yaitu 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
const GetFibonacci = (n: number): number[] => {
    let res: number[] = [0,1]

    for (let a=0; a<=n; a++) {
        const nextNum = res[a - 1] + res[a - 2]

        if (nextNum <= n) {
            res.push(nextNum)
        }
    }

    return res
}

// Buatkan sebuah fungsi yang mengecek angka yang diterima fungsi tersebut adalah bilangan positif atau negatif.  
const NumberCheck = (n: number)=>{
    if (n < 0) {
        return 'Negative!'
    } else {
        return 'Positive!'
    }
}

export {Multiply, NumberCheck, GetFibonacci}
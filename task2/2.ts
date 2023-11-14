// Buatlah fungsi yang menerima parameter jam/waktu (00.00 - 23.59), lalu return kalimat greeting sesuai waktunya. Misal parameter yang dikirim adalah 11.00 maka returnnya “Selamat siang!”.
const GetGreeting = (time: string)=>{    
    if (time >= '00.00' && time <= '03.59') {
        console.log('Dini hari')
    } else if (time >= '04.00' && time <= '10.59') {
        console.log('Selamat pagi!')
    } else if (time >= '11.00' && time <= '15.59') {
        console.log('Selamat Siang!')
    } else if (time >= '16.00' && time <= '17.59') {
        console.log('Selamat Sore!')
    } else if (time >= '18.00' && time <= '23.59') {
        console.log('Selamat malam!!')
    } else {
        console.log('Invalid input')
    }
}

// Buatlah fungsi yang menerima string, lalu hitunglah panjang string tersebut dan buang karakter spasi jika terdapat spasi di dalamnya. Contoh inputnya “Hello Word” maka outputnya adalah  “Jumlah huruf adalah 9 karakter”.
const GetStrLength = (s: string)=>{
    let str = ''

    for (let i=0; i<s.length; i++) {
        if (s[i] !== ' ') {
            str += s[i]
        }
    }

    console.log(`The length of "${s}" =  ${str.length}`)
}

// Buatlah fungsi yang menerima angka desimal, bulatkan 2 angka setelah koma. Jika hasilnya 0 - 3 maka kembalikan angka sebelum koma, jika range 4 - 7 maka kembalikan angka dengan format “{angka sebelum koma}, 5”, selain itu kembalikan angka sebelum koma ditambah 1.  
function GetRoundNumber(n: number) {
    const roundedNumber = Math.round(n * 100) / 100
    const beforeComma = Math.floor(roundedNumber)
    const afterComma = Math.floor((roundedNumber * 10) % 10)

    if (afterComma >= 0 && afterComma <= 3) {
        console.log(beforeComma);
    } else if (afterComma >= 4 && afterComma <= 7) {
        console.log(`${beforeComma}, 5`)
    } else if (afterComma > 7) {
        console.log(beforeComma + 1)
    }
}

export {GetGreeting, GetStrLength, GetRoundNumber}
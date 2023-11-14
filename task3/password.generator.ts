/*
Buatlah fungsi yang menghasilkan password dari nama yang diinput. Langkah pengerjaannya:
Gantikan huruf vokal dari nama yang diinput, berlaku untuk huruf kecil maupun besar :
a => b
i => j
u => v
e => f
o => p
Balikkan inputan setelah dilakukan langkah 1 dari belakang menjadi depan.
Tukar huruf dalam inputan jika hurufnya kecil diubah menjadi uppercase, jika hurufnya besar diubah menjadi lowercase.
Hilangkan space jika ada.
Contoh inputan "Vika Vitaloka", outputnya adalah BKPLBTJuBKJu.
*/

const PasswordGenerator = (password: string): string=>{
    let str: string = ''
    
    for (let i=0; i<password.length; i++) {
        if (password[i] !== ' ') {
            const s = password[i].toLowerCase()
        
            if (s === 'a') {
                str += 'b'
            } else if (s === 'i') {
                str += 'j'
            } else if (s === 'u') {
                str += 'v'
            } else if (s === 'e') {
                str += 'f'
            } else if (s === 'o') {
                str += 'p'
            } else {
                str += password[i]
            }
        }
    }

    let str2: string = ''

    for (let i=0; i<str.length; i++) {
        const s = str[i]

        if (s === s.toUpperCase()) {
            str2 += s.toLowerCase()
        } else {
            str2 += s.toUpperCase()
        }
    }

    let generatedPass: string = str2.split('').reverse().join('')
    
    return generatedPass
}

export {PasswordGenerator}
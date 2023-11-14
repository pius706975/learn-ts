// Buatlah interface data karyawan dengan ketentuan nama (string), umur (number), nik (number), tanggal lahir (string), departemen (string), divisi (string), jabatan (string), grade (string), no npwp (number), no rekening (number), nama pemegang rekening (string). Lalu buatlah variable data sesuai interface diatas.
interface dataKaryawan {
    nama: string,
    umur: number,
    nik: number,
    tanggal_lahir: string,
    departemen: string,
    divisi: string,
    jabatan: string,
    grade: string,
    no_npwp: number,
    no_rekening: number,
    nama_pemegang_rekening: string
}

const data: dataKaryawan[] = []

const TambahKaryawan = (karyawan: dataKaryawan)=>{
    data.push(karyawan)
}

const TampilkanKaryawan = ()=>{
    return data
}

// Buatlah variable yang menambahkan 2 angka.
// Buatlah variable yang mengurangi 2 angka.
// Buatlah variable yang membagi 2 angka.
const count: any = [
    {
        tambah: function (arr: number[]) {
            let res = 0

            for (let i=0; i<arr.length; i++) {
                res += arr[i]
            }

            return res
        }
    },
    {
        kali: function (arr: number[]) {
            let res = 1

            for (let i=0; i<arr.length; i++) {
                res *= arr[i]
            }

            return res
        }
    },
    {
        kurang: function (arr: number[]) {
            let res = arr[0]

            for (let i=1; i<arr.length; i++) {
                res -= arr[i]
            }

            return res
        }
    },
    {
        bagi: function (arr: number[]) {
            let res = arr[0]

            for (let i=1; i<arr.length; i++) {
                res /= arr[i]
            }

            return res
        }
    },
    
]

export {dataKaryawan, count, data, TambahKaryawan, TampilkanKaryawan}
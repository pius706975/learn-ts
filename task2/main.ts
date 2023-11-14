import { TambahKaryawan, TampilkanKaryawan, count } from "./1"
import { GetGreeting, GetRoundNumber, GetStrLength } from "./2"

// Exercise 1
TambahKaryawan({
    nama: 'Joko Selo Samudro Wardoyo Eko Sunjoyo',
    umur: 99,
    nik: 1176387,
    tanggal_lahir: '19 November 1803',
    departemen: 'Produksi',
    divisi: 'Quality Control',
    jabatan: 'Supervisor',
    grade: 'Grade 3',
    no_npwp: 123456789,
    no_rekening: 1039901773918,
    nama_pemegang_rekening: 'Joko Samudro Sunjoyo'
})

TambahKaryawan({
    nama: 'Gracious Homunculus Pithecanthropus Erectus',
    umur: 99,
    nik: 1176387,
    tanggal_lahir: '19 November 1212',
    departemen: 'Penerbangan',
    divisi: 'Maintenance',
    jabatan: 'Teknisi',
    grade: 'Grade 3',
    no_npwp: 123456789,
    no_rekening: 1039901773918,
    nama_pemegang_rekening: 'Gracious Javanicus'
})

let tambah = count[0].tambah([2,3])
let kurang = count[2].kurang([2,3])
let bagi = count[3].bagi([2,4])

// let a = 10
// let b = 12
// let tambah = a+b
// let kurang = a-b
// let bagi = a-b

// console.log(TampilkanKaryawan())
// console.log(`${tambah}\n${kurang}\n${bagi}`)

// ========================================================================

// Exercise 2
// 1
// GetGreeting('10.59')

// // 2
GetStrLength(' Hello Word ')

// // 3
// GetRoundNumber(5.333777777777)
// GetRoundNumber(2.55555555898999)
// GetRoundNumber(7.88888889)
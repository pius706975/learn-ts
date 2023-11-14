/*
Diketahui variable data siswa dengan contoh struktur:
[ { nama: “Rojali”, skor: 70 }, …dst ]
Buatlah sebuah fungsi yang menerima data nilai siswa dalam bentuk array of object. Kembalikanlah array of object yang hanya berisi data siswa yang lulus dimana minimal score yang lulus adalah 75.
Contoh output :
[ { nama: “Ucup”, skor: 90 }, …dst ]
 */
interface Student {
    nama: string,
    skor: number
}

const GetNailedStudent = (s: Student[]): Student[] => {
    let res = s.filter((data)=>data.skor >= 75)
    return res
}

const student: Student[] = [
    {nama: 'Joko', skor: 76},
    {nama: 'Jono', skor: 89},
    {nama: 'Joni', skor: 70},
    {nama: 'Jongos', skor: 98}
]

console.log(GetNailedStudent(student))
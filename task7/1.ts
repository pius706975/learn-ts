/*
Buat array dalam object baru dari data siswa yang diinput.
Diketahui:
1. Inputan akan berupa array in object dengan struktur [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ].
2. Bagilah data input berdasarkan score, jika score diatas 75 maka kategorinya “lulus” dan selain itu kategorinya “gagal”.
3. Struktur output yang diharapkan yaitu => { lulus : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ], gagal : [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ] }.
*/
interface Student {
    name: string,
    score: number,
    class: string
}

interface Result {
    lulus: Student[],
    gagal: Student[]
}

const CreateStudentCategory = (s: Student[]): Result => {
    const res: Result = {
        lulus: [],
        gagal: []
    }

    s.forEach((student)=>{
        student.score >= 75 ? res.lulus.push(student) : res.gagal.push(student)
    })
    
    return res
}


/* from kak vika

Buat array dalam object baru dari data siswa yang diinput.
Diketahui:
1. Inputan akan berupa array in object dengan struktur [ { name: namaSiswa, score: nilaiRapor, class: namaKelas } ].
2. Bagilah data input berdasarkan kelasnya.
3. Struktur output yang diharapkan yaitu => { namaKelas : [ { name: namaSiswa, score: nilaiRapor } ], … }.
*/
const arrInObj = (arr: any) => {
    let newObj: any = {}    
    arr.map((val: any, index: number) => {
       newObj[val.class] ? (newObj[val.class] = [
        ...newObj[val.class],
        { name: val.name, score: val.score }])
        : (newObj[val.class] = [{ name: val.name, score: val.score }])
    })    
    
    return newObj
}

export {arrInObj, CreateStudentCategory, Student}
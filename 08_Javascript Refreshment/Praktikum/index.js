//Rahmawati
//React Java script Kelas E
//Task-Javascript refreshment 1

var a = 5;
let b = "Kampus merdeka";
const name = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, name, terdaftar];

//1. menampilkan dalam console untuk index ke 2 dalam array
console.log("Array = " + lengkap_arr[2]);

function perkenalkan() {
    let asal = "Indonesia";
    return console.log(
        " perkenalkan nama saya " +
            nama +
            " nomor urut " +
            a +
            "sekarang sedang mengikuti" +
            b +
            " berasal dari " +
            asal
    );
}

//1b. ubah kode diatas agar baris 22 didalam console.
terdaftar = true;
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka ");
}

//1c. lakukan pemanggilan untuk function perkenalan
perkenalkan();
console.log();

//1d. mengubah agar output sesuai di tugas
a = b;

//bebas mengubah code asal sesuai output dengan tugas
console.log("a adalah = " + a);
console.log("b adalah = " + b);

//agar mengeluarkan output sesuai tugas
terdaftar = true;
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka ");
}
console.log("Array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalkan();
console.log();


// Tugas Nomor 2
// a. Kenapa baris 21,22 dan 23 tidak tampil?
//Karena pada kode sebelumnya nilai yang terdapat di terdaftar merupakan false sehingga tidak dapat tampil dan harus dirubah terlebih dahulu
// b. kenapa deklarasi baris 26 eror?
//karena variabel name merupakan variable constan yang tidak dapat diubah valuenya, sehingga akan menghasilkan eror
// c. dengan melakukan komen pada baris 26, apakah baris 28 bisa di eksekusi?
//tidak bisa

// Tugas Nomor 3

const foo = ['Budi', 'Sita', 'Ayu'];
[a, b, c] = foo
console.log(c);//Ayu

// Tugas Nomor 4
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map((e) => e.replace ("-", "/"));
console.log("nomor 4 => ", bdays);

//Tugas Nomor 5
let value = [1, 2, 3, 4, 5, 6];
value = value.map((e) => 2 * e);
console.log("nomor 5 => ", value)

//Tugas Nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map((e) => Math.ceil(e));
console.log("Nomor 6 => ", arr);

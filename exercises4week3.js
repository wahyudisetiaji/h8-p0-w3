// Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
 // UPDATE DATA
 var nama = input[1].split(" ")
 var provinsi = input[2].split(" ")

 nama.push("Elsharawy")
 provinsi.unshift("Provinsi")

 input.splice(1,1, nama.join(" "))
 input.splice(2,1, provinsi.join(" "))
 input.splice(4,1, "Pria", "SMA Internasional Metro")
 console.log(input)

 // BULAN
 var month = input[3].split("/")
 var bulanInteger = parseInt(month[1])
 switch(bulanInteger){
    case 1 : { bulanInteger = "Januari"; break;}
    case 2 : { bulanInteger = "Februari"; break;}
    case 3 : { bulanInteger = "Maret"; break;}
    case 4 : { bulanInteger = "April"; break;}
    case 5 : { bulanInteger = "Mei"; break;}
    case 6 : { bulanInteger = "Juni"; break;}
    case 7 : { bulanInteger = "Juli"; break;}
    case 8 : { bulanInteger = "Agustus"; break;}
    case 9 : { bulanInteger = "September"; break;}
    case 10 : { bulanInteger = "Oktober"; break;}
    case 11 : { bulanInteger = "November"; break;}
    case 12 : { bulanInteger = "Desember"; break;}
 }

 console.log(bulanInteger)

 // EDIT POSISI
 var tanggal = input[3].split("/")
  tanggal.sort(function(a,b){return b - a});
  console.log(tanggal)

// // FORMAT dd-mm-YYY
  var format = input[3].split("/")
  var tanggall = format[0].split("")
  var bulan = format[1].split("")
  var tahun = format[2].split("")
  bulan.unshift("-")
  tahun.unshift("-")
  tanggall = tanggall.join("")
  bulan = bulan.join("")
  tahun = tahun.join("")

  var formatTgl = tanggall+bulan+tahun

  console.log(formatTgl)

 // EDIT NAMA

 var editNama = input[1].toString()
 editNama = editNama.slice(0,15)
 console.log(editNama)

}

dataHandling2();

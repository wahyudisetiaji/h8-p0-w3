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
 switch(month[1]){
    case '01' : {console.log("Januari"); break;}
    case '02' : {console.log("Februari"); break;}
    case '03' : {console.log("Maret"); break;}
    case '04' : {console.log("April"); break;}
    case '05' : {console.log("Mei"); break;}
    case '06' : {console.log("Juni"); break;}
    case '07' : {console.log("Juli"); break;}
    case '08' : {console.log("Agustus"); break;}
    case '09' : {console.log("September"); break;}
    case '10' : {console.log("Oktober"); break;}
    case '11' : {console.log("November"); break;}
    case '12' : {console.log("Desember"); break;}
 }

 // EDIT POSISI
 var tanggal = input[3].split("/")
 tanggal.sort(function(a,b){return b - a});
 console.log(tanggal)

 // FORMAT dd-mm-YYY
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

 var editNama = input[1].split(" ")
 editNama.pop()
 editNama = editNama.join(" ")
 console.log(editNama)

}

dataHandling2();

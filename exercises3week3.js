// ARRAY - IF ELSE

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];


function dataHandling(nomorID){
  if (nomorID === "0001"){
    console.log("Nomor ID : " + input[0][0]);
    console.log("Nama Lengkap : " + input[0][1]);
    console.log("TTL : " + input[0][2] + " " + input[0][3]);
    console.log("Hobi : " + input[0][4]);
    return
  }else if (nomorID === "0002"){
    console.log("Nomor ID : " + input[1][0]);
    console.log("Nama Lengkap : " + input[1][1]);
    console.log("TTL : " + input[1][2] + " " + input[1][3]);
    console.log("Hobi : " + input[1][4]);
    return
  }else if (nomorID === "0003"){
    console.log("Nomor ID : " + input[2][0]);
    console.log("Nama Lengkap : " + input[2][1]);
    console.log("TTL : " + input[2][2] + " " + input[2][3]);
    console.log("Hobi : " + input[2][4]);
    return
  }else if (nomorID == "0004"){
    console.log("Nomor ID : " + input[3][0]);
    console.log("Nama Lengkap : " + input[3][1]);
    console.log("TTL : " + input[3][2] + " " + input[3][3]);
    console.log("Hobi : " + input[3][4]);
    return
  }
}

dataHandling("0004")

// ARRAY - BALIK KATA

function balikString(kata){
var box = ''

  for(j = kata.length-1; j >= 0; j--){
    box += kata[j];
  }
  console.log(box)
}

balikString('Hello World') // Hasilnya : dlrow olleH

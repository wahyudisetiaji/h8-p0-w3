// Logic Challenge - Palindrome

function palindrome(kata){
var box = ''
  for(var j = kata.length-1; j >= 0; j--){
    box += kata[j];
  }
  if(kata === box){
    return true
  }else{
    return false
  }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

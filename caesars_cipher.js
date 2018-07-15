function rot13(str) { 
  var code=str.split("");
  var decoded=[];
  var alphabet=["A","B","C","D","E","F","G","H",
  "I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","A","B","C","D","E","F","G",
  "H","I","J","K","L","M"];
  
  for (let i=0;i<code.length;i++){
    if (alphabet.indexOf(code[i])===-1) {
      decoded.push(code[i]);
    } else {
      for (let j=0;j<alphabet.length;j++) {
        if (code[i]===alphabet[j]){
          decoded.push(alphabet[j+13]);
        }
      }
    }
  }
  return decoded.join("");
}
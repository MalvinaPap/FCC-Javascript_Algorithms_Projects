function palindrome(str) {

  var lstr=str.toLowerCase(str);
  var filtered_str=lstr.replace(/\W|\_|\*/gi,"");
  var reverse_filtered_str=filtered_str.split("").reverse().join("");

  if (reverse_filtered_str===filtered_str){
    return true;
  } else {
    return false;
  } 
}

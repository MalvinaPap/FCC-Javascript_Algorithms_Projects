function convertToRoman(num) {
    var roman="";
    //create empty string
    var romanNumeral=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    //create array with all possible roman numbers up to 1000
    var numbers=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    //create array with possible number values of roman numbers up to 1000
    
    for (let i=0;i<numbers.length;i++) {
        while (num>=numbers[i]){
            roman=roman+romanNumeral[i];
            num=num-numbers[i];
        }
    }
    return roman;
}
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const specialChar ="!@#$%^&*()_+?><,.|~";
const numbers= "1234567890";
const inputField = document.querySelector("input");
const charAll = upperCase+specialChar+lowerCase+numbers;
const maxLength =12 ;

function GeneratePassword(){
    var password = '';
    while(password.length < maxLength){
        var randomIndex= Math.floor(Math.random()*charAll.length);
        password = password + charAll[randomIndex];
    }
    inputField.value = password;
}
document.querySelector(".container button").addEventListener("click",GeneratePassword);
document.querySelector(".display img").addEventListener("click",()=>{
    inputField.select();
    navigator.clipboard.writeText(inputField.value);
    alert("Password copied to clipboard");
});

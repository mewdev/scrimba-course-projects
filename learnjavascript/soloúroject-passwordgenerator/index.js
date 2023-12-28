const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLenght = 10
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")


function generatePasswords() {
    let newPasswordOne = ""
    let newPasswordTwo = ""
    for ( i = 0; i < passwordLenght; i++ ) {
    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    newPasswordOne += characters[randomIndexOne]
    newPasswordTwo += characters[randomIndexTwo]
    password1.textContent = newPasswordOne
    password2.textContent = newPasswordTwo   
 }
}

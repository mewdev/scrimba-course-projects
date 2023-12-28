let countHome = 0;
let countGuest = 0;
let homeScore = document.getElementById("countHome");
let guestScore = document.getElementById("countGuest");
let liveClock = document.getElementById("displayDateTime")

function resetCount () {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
    document.getElementById("countHome").classList.remove("winner")
    document.getElementById("countGuest").classList.remove("winner")
    document.getElementById("countHome").classList.remove("tie")
    document.getElementById("countGuest").classList.remove("tie")
    document.getElementById("countHome").classList.add("count")
    document.getElementById("countGuest").classList.add("count")
}

function addOneHome () {
    countHome = countHome + 1
    homeScore.textContent = countHome
    console.log(countHome)
    checkWinner()
}

function addTwoHome () {
    countHome = countHome + 2
    homeScore.textContent = countHome
    checkWinner()
}

function addThreeHome () {
    countHome = countHome + 3
    homeScore.textContent = countHome
    checkWinner()
}

function addOneGuest () {
    countGuest = countGuest + 1
    guestScore.textContent = countGuest
    console.log(countGuest)
    checkWinner()
}

function addTwoGuest () {
    countGuest = countGuest + 2
    guestScore.textContent = countGuest
    checkWinner()
}

function addThreeGuest () {
    countGuest = countGuest + 3
    guestScore.textContent = countGuest
    checkWinner()
}

function checkWinner() {
if (countHome > countGuest) {
    console.log("Home is the winner")
    document.getElementById("countHome").classList.add("winner")
    document.getElementById("countGuest").classList.remove("winner")
    document.getElementById("countGuest").classList.remove("tie")
    document.getElementById("countHome").classList.remove("tie")
} else if (countGuest > countHome) {
    console.log("Guest is the winner")
    document.getElementById("countGuest").classList.add("winner")
    document.getElementById("countHome").classList.remove("winner")
    document.getElementById("countHome").classList.remove("tie")
    document.getElementById("countGuest").classList.remove("tie")
    } else if (countGuest === countHome) {
    document.getElementById("countGuest").classList.add("tie")
    document.getElementById("countHome").classList.add("tie")
    console.log("Tie")
  }  
}


function currentTime(){
    let d = new Date();
    let s = d.getSeconds().toString().padStart(2, '0');
    let m = d.getMinutes().toString().padStart(2, '0');
    let h = d.getHours().toString().padStart(2, '0');
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    liveClock.textContent = " 🕒 " + (h + ":" + m + ":" + s) + " " + " 🗓️ " + date + "." + month + "." + year
}
setInterval(currentTime,1000);


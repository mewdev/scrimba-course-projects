// OBB routes
const obbHraniceToWienUrl = "https://shop.oebbtickets.at/de/ticket?cref=scotty&outwardDateTime=2024-01-04T13:00&stationOrigEva=5400063&stationDestEva=1190100";
const obbWienToHraniceUrl = "https://shop.oebbtickets.at/de/ticket?cref=scotty&outwardDateTime=2024-01-04T13:00&stationOrigEva=1190100&stationDestEva=5400063";
const obbWienToOstravaUrl = "https://shop.oebbtickets.at/de/ticket?cref=scotty&outwardDateTime=2024-01-03T06:10&stationOrigEva=1190100&stationDestEva=5400026";
const obbOstravaToWienUrl = "https://shop.oebbtickets.at/de/ticket?cref=scotty&outwardDateTime=2024-01-03T06:10&stationOrigEva=5400026&stationDestEva=1190100";

// CD routes
const cdHraniceToWienUrl = "https://idos.idnes.cz/vlaky/spojeni/vysledky/?date=04.01.2024&time=06:10&f=Hranice%20na%20Morav%C4%9B&fc=100003&t=Wien;%20Rakousko&tc=1";

const cdWienToHraniceUrl = "https://idos.idnes.cz/vlaky/spojeni/vysledky/?date=05.01.2024&time=22:00&f=Wien;%20Rakousko&fc=1&t=Hranice%20na%20Morav%C4%9B&tc=100003"

const cdWienToOstravaUrl = "https://idos.idnes.cz/vlaky/spojeni/vysledky/?date=04.01.2024&time=06:10&f=Wien;%20Rakousko&fc=1&t=Ostrava%20hl.n.&tc=100003";
const cdOstravaToWienUrl = "https://idos.idnes.cz/vlaky/spojeni/vysledky/?date=04.01.2024&time=06:10&f=Ostrava%20hl.n.&fc=100003&t=Wien;%20Rakousko&tc=1";

// Date function
let currentDate = new Date();

// Get the current date as a string (YYYY-MM-DD format)
let currentDateString = currentDate.toISOString().split('T')[0];

// Get the current time as a string (HH:MM:SS format)
let currentTimeString = currentDate.toTimeString().split(' ')[0];

let dateValue
let timeValue
let idosDate


// Functions


function reset() {
    let urlElementObb = document.getElementById("cdTrain");
    let urlElementCd = document.getElementById("obbTrain");
    let resetButton = document.getElementById("reset");
    urlElementObb.classList.add("hide");
    urlElementCd.classList.add("hide");
    resetButton.classList.add("hide");
    
}

function showLinks() {
    let urlElementObb = document.getElementById("cdTrain");
    let urlElementCd = document.getElementById("obbTrain");
    let resetButton = document.getElementById("reset");
    urlElementObb.classList.remove("hide");
    urlElementCd.classList.remove("hide");
    resetButton.classList.remove("hide");
}

        
function dateInput() {
            dateValue = document.getElementById("date").value;
            timeValue = document.getElementById("time").value;
        }
        
        
        function convertDateFormat(dateValue) {
            const [year, month, day] = dateValue.split('-');
            idosDate = `${day}.${month}.${year}`;
        }

        
        function hraWie() {
            dateInput()
            convertDateFormat(dateValue)
            
            let newUrlobb = obbHraniceToWienUrl.replace(/outwardDateTime=[^&]*/, "outwardDateTime=" + dateValue + "T" + timeValue);
            
        
            let newUrlcd = cdHraniceToWienUrl.replace(/date=[^&]*/, "date=" + idosDate)
                                    .replace(/time=[^&]*/, "time=" + timeValue);
                    
            
            
            showLinks()
            document.getElementById("obbTrain").href = newUrlobb;
            document.getElementById("cdTrain").href = newUrlcd;

        }
    
    
            function wieHra() {
            dateInput()
            convertDateFormat(dateValue)
            
            let newUrlobb = obbWienToHraniceUrl.replace(/outwardDateTime=[^&]*/, "outwardDateTime=" + dateValue + "T" + timeValue);
            
        
            let newUrlcd = cdWienToHraniceUrl.replace(/date=[^&]*/, "date=" + idosDate)
                                    .replace(/time=[^&]*/, "time=" + timeValue);
                    
            
            
            showLinks()
            document.getElementById("obbTrain").href = newUrlobb;
            document.getElementById("cdTrain").href = newUrlcd;

        }
        
        
            
            function ostWie() {
            dateInput()
            convertDateFormat(dateValue)
            
            let newUrlobb = obbOstravaToWienUrl.replace(/outwardDateTime=[^&]*/, "outwardDateTime=" + dateValue + "T" + timeValue);
            
        
            let newUrlcd = cdOstravaToWienUrl.replace(/date=[^&]*/, "date=" + idosDate)
                                    .replace(/time=[^&]*/, "time=" + timeValue);
                    
            
            
            showLinks()
            document.getElementById("obbTrain").href = newUrlobb;
            document.getElementById("cdTrain").href = newUrlcd;

        }
        
        
            function wieOst() {
            dateInput()
            convertDateFormat(dateValue)
            
            let newUrlobb = obbWienToOstravaUrl.replace(/outwardDateTime=[^&]*/, "outwardDateTime=" + dateValue + "T" + timeValue);
            
        
            let newUrlcd = cdWienToOstravaUrl.replace(/date=[^&]*/, "date=" + idosDate)
                                    .replace(/time=[^&]*/, "time=" + timeValue);
                    
            
            
            showLinks()
            document.getElementById("obbTrain").href = newUrlobb;
            document.getElementById("cdTrain").href = newUrlcd;

        }
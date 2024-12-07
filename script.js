let gol1 = 0;
let gol2 = 0;
let team1_name = "Csapat 1";
let team2_name = "Csapat 2";
let time = 0;
let extraTime = 0;  
let currentExtraTime = 0; 
let idout = document.getElementById("ido_output");
let ido_gomb = document.getElementById("start");
let messageBox = document.getElementById("message");
let winnerMessage = document.getElementById("winner-message");


function felido_submit()
{
    felido = parseInt((document.getElementById("felido_input").value)) * 60 + parseInt(document.getElementById("felido_input_second").value);
}


function setTeamName(team) {
    if (team === 'team1') {
        team1_name = document.getElementById("team1_name").value || "Csapat 1";
        document.getElementById("team1_display").innerHTML = team1_name;
    } else if (team === 'team2') {
        team2_name = document.getElementById("team2_name").value || "Csapat 2";
        document.getElementById("team2_display").innerHTML = team2_name;
    }
}


function gol(x, gol) {
    if (gol === "gol1") {
        gol1 += parseInt(x);
        document.getElementById("gol1").innerHTML = gol1;
    } else if (gol === "gol2") {
        gol2 += parseInt(x);
        document.getElementById("gol2").innerHTML = gol2;
    }
}


function yellowCard(gol) {
    messageBox.innerHTML = (gol === "gol1" ? team1_name : team2_name) + " sárga lapot kapott!";
}

function redCard(gol) {
    messageBox.innerHTML = (gol === "gol1" ? team1_name : team2_name) + " piros lapot kapott!";
}

function clock() {
    time++;
    idout.innerHTML = `${Math.floor(time / 60)}:${('0' + time % 60).slice(-2)}`;
    
    if (time >= 1200 && currentExtraTime === 0 && extraTime > 0) {
        currentExtraTime = extraTime * 60;
        messageBox.innerHTML = "Hosszabbítás kezdődik!";
    }
    if (time >= 1200 + currentExtraTime) {
        finishMatch();
    }
}



function finishMatch() {
    clearInterval(ora);
    let resultMessage = gol1 > gol2 ? `${team1_name} NYERTE! Gólok: ${gol1} - ${gol2}` : 
                        gol2 > gol1 ? `${team2_name} NYERTE! Gólok: ${gol2} - ${gol1}` : "DÖNTETLEN!";
    winnerMessage.innerHTML = resultMessage;
}



let ora2;
let running = false;

function start() {
    if (running) {
        clearInterval(ora2);
        running = false;
        ido_gomb.innerHTML = "Start";
    } else {
        ora2 = setInterval(clock, 1000);
        running = true;
        ido_gomb.innerHTML = "Stop";
    }
}

function setExtraTime() {
    extraTime = parseInt(document.getElementById("extra_time").value) || 0;
    messageBox.innerHTML = `Hosszabbítás: ${extraTime} perc`;
}












let felclock
function gol(x,gol)
{
    switch(gol)
    {
        case "gol1":gol1 += parseInt(x); gol1d.innerHTML = gol1; break;
        case "gol2":gol2 += parseInt(x); gol2d.innerHTML = gol2; break;
    }
    console.log("gol1   " + gol1)
    console.log("gol2   " + gol2)
    if(gol1 > 0)
        {
            document.getElementById("gol1n").disabled = false;
        }
    else
        {
            document.getElementById("gol1n").disabled = true;
        }
    if(gol2 > 0)
        {
            document.getElementById("gol2n").disabled = false;
        }
     else
        {
        document.getElementById("gol2n").disabled = true;
        }   
}

function clock()
{
    time++;
    idout.innerHTML = `${Math.floor(time / 60)}:${time % 60}`;
    if(time >= 1200)
        {
            clearInterval(ora)
            if(felido_input.value != 0)
                {
                    felclock = setInterval(felido_clock,1000)//idö
                }
            else
            {
                win()
            }

        }
}







function felido_clock()
{
    felido--;
    felido_output.innerHTML = `${Math.floor(felido / 60)}:${felido % 60}`;
    if(felido == 0)
        {
            win()
        }
}



let ora;
let istimegoing = false;

function start()
{
    if(istimegoing)
        {

            clearInterval(ora);
            istimegoing = false;
            ido_gomb.innerHTML = "start";
        }
        else
        {
            ora = setInterval(clock,1000)//idö
            istimegoing = true;
            ido_gomb.innerHTML = "stop";
        }
}


function win()
{
    log.console("win has been runed");
}







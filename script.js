let gol1 = 0;
let gol2 = 0; 
let gol1d = document.getElementById("gol1");
let gol2d = document.getElementById("gol2");
let time = 0;
let idout = document.getElementById("ido_output");
let ido_gomb = document.getElementById("start");
let extra_output = document.getElementById("extra_output")
let extra
let team1 = "csapat1";
let team2 = "csapat2";

function extra_submit()
{
    extra = parseInt((document.getElementById("extra_input").value)) * 60;
}

function setTeamName(x)
{
    switch(x)
    {
        case "team1":team1 = document.getElementById("team1_name").value;document.getElementById("team1_display").innerHTML = team1; break;
        case "team2":team2 = document.getElementById("team2_name").value;document.getElementById("team2_display").innerHTML = team2; break;
    }
}








function gol(x,gol)
{
    switch(gol)
    {
        case "gol1":gol1 += parseInt(x); gol1d.innerHTML = gol1; break;
        case "gol2":gol2 += parseInt(x); gol2d.innerHTML = gol2; break;
    }

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

let feldihosz
function felido_submit()
{
    feldihosz = parseInt(document.getElementById("felido_input").value) * 60
}

function clock()
{
    time++;
    idout.innerHTML = `${Math.floor(time / 60)}:${time % 60}`;
    if(time >= feldihosz)
        {
            clearInterval(ora)
            if(extra_input.value != 0)
                {
                    extraclock = setInterval(extra_clock,1000)//idö
                }
            else
            {

                win()
            }

        }
}






let extraclock

function extra_clock()
{
    extra--;
    extra_output.innerHTML = `${Math.floor(extra / 60)}:${extra % 60}`;
    if(extra == 0)
        {
            clearInterval(extraclock)
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
            ora = setInterval(clock,1)//idö
            istimegoing = true;
            ido_gomb.innerHTML = "stop";
        }
}
let winner = document.getElementById("winner-message")

function win()
{
    if(gol1 > gol2)
        {
            winner.innerHTML = "A Mérközés nyertese: " + team1
        }
    else if(gol1 < gol2)
        {
            winner.innerHTML = "A Mérközés nyertese: " + team2
        }
        else
        {
            winner.innerHTML = "A Mérközés döntetlen"
        }
}

//ember kidobás
let idosszal = setInterval(()=>
    {
        for(let i  = 0; i < l.length; i++)
            {
                l[i].time--;
                if(l[i].time == 0)
                    {
                        l.splice(i,1);
                    }
                frissit()
            }
    } ,1000)

let l = []
function inp(x)
{
    let name = document.getElementById("txt").value;
    let time = 120;
    let team = x;
    l.push({task: name ,time: time,team: team})
    frissit();
}

function frissit()
{
    document.getElementById("team1_foul").innerHTML = ""
    document.getElementById("team2_foul").innerHTML = ""
    l.forEach(item => {
        document.getElementById(item.team).innerHTML += `<li>${item.task} -- ${item.time}</li>`
    });
}
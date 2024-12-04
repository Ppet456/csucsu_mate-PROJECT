let gol1 = 0;
let gol2 = 0; 
let gol1d = document.getElementById("gol1");
let gol2d = document.getElementById("gol2");
let time = 0;
let idout = document.getElementById("ido_output");
let ido_gomb = document.getElementById("start");
let felido_output = document.getElementById("felido_output")
let felido


function felido_submit()
{
    felido = parseInt((document.getElementById("felido_input").value)) * 60 + parseInt(document.getElementById("felido_input_second").value);
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
            ora = setInterval(clock,1)//idö
            istimegoing = true;
            ido_gomb.innerHTML = "stop";
        }
}


function win()
{
    log.console("win has been runed");
}







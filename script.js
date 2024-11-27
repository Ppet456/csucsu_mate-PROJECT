let gol1 = 0;
let gol2 = 0; 
let gol1d = document.getElementById("gol1")
let gol2d = document.getElementById("gol2") 



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
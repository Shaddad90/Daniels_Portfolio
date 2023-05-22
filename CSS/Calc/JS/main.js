



var x = Number( window.prompt("put pages number"))
var y = 30
var c = 1

if(x<800)
{
    var r = (x/2*c+y)+" LE"
    var p = y/30*1
}

if( x >= 800 && x < 1600 )
{
    var r = (x/2*c+y*2)+" LE"
    var p = y/30*2
}

if( x >= 1600 && x < 2400 )
{
    var r = (x/2*c+y*3)+" LE"
    var p = y/30*3
}

if( x >= 2400 && x < 3200 )
{
    var r = (x/2*c+y*4)+" LE"
    var p = y/30*4
}

if( x >= 3200 && x < 4000 )
{
    var r = (x/2*c+y*5)+" LE"
    var p = y/30*5
}


//console.log (r)
document.getElementById("result").innerHTML = r
document.getElementById("Parts").innerHTML = p


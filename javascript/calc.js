function displayscreen(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function Cleardisplay()
{
    document.getElementById("screen").value=""
}
function equalbutton()
{
    var text =document.getElementById("screen").value
    var result =eval(text)
    document.getElementById("screen").value=result
}
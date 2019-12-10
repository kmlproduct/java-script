



function convertdollartodirhams()
{
    "use strickt";
    var amount = document.getElementById("dollar").value;
    result= amount * 11.5;
    document.getElementById("message").innerHTML = amount + " dollar is " + result + "dirhams";
}



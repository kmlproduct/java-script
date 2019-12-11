

 var
 myinput = document.getElementById("input"),
 mydiv = document.getElementById("message"),
 myCurrency = document.getElementById("currency");

myinput.onkeyup =function ()
{
    "use strickt";
    result = myinput.value * myCurrency.value;

     document.getElementById("message").innerHTML = myinput.value + " dollar is " + result + " dirhams ";

    if ( myinput.value === "")
{
    document.getElementById("message").innerHTML = "write your number";
}
else if (isNaN(myinput.value)) {
    document.getElementById("message").innerHTML = "this frild accept number only";
}
}





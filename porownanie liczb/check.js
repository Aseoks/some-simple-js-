function check()
{
    var number = document.getElementById("number").value; //uzyskanie wprowadzone wartości w polu "number"
    if (number > 0) //jeśli cyfra większa od 0
    {
    document.getElementById("answer").innerHTML ="This number is positive"; // to wyświetl to
    }
    else if (number < 0) // jeśli mniejsza od 0
    {
        document.getElementById("answer").innerHTML ="This number is negative"; // to wyświetl to
    }
    else if (number == "0") // jeśli równa 0 i tylko 0
    {
        document.getElementById("answer").innerHTML ="It`s 0 :O, wow"; // to wyświetl to
    }

    else{ // w innym wypadku
        document.getElementById("answer").innerHTML ="It`s not a number OMG"; // wyświetl to, również dla pustego pola
    }
}
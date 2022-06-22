function countdown() // wykonanie funkcji
{            
    var today = new Date(); // pobranie danych z wbudowanej opcji Date
    var day = today.getDate(); // wyciagniecie wartości dnia z powyzszej funckji
    var month = today.getMonth() + 1; // jak wyżej, dodanie 1, poniewaz w systeie amerykańskim styczeń oznaczony jest jako 0, a grudzień jako 11
    var year = today.getFullYear(); // jw
    var hour = today.getHours(); // jw
        if(hour<10) godzina = "0"+godzina;   // dodanie 0 dla godziny 1-9             
    var minute = today.getMinutes(); 
        if(minute<10) minute = "0"+minute;    //jw
    var second = today.getSeconds();
         if(second<10) second = "0"+second;   // jw

    document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second; // wypisanie elementow uzyskanych wczesniej oraz rozdzielenie ich odpowiednimi znacznikami umieszczonymi w ""

    setTimeout("countdown()", 1000); // odswiezaie funkcji co 1000ms, czyli 1s
}
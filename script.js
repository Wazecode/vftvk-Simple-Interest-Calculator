function compute()
{
    p = document.getElementById("principal").value;
    a = document.getElementById("rate").value;
    r = document.getElementById("select").value;

    const currentYear = 2021;

    document.getElementById("result").innerHTML = p*a*r/1000;
    document.getElementById("principalO").innerHTML = p;
    document.getElementById("rateO").innerHTML = a/10;
    document.getElementById("year").innerHTML = (r*10)/10 + (currentYear*10)/10;
    
}

function show_value(x)
{
    var a = document.getElementById("rate");
    document.getElementById("poop").innerHTML = x/10; 
}

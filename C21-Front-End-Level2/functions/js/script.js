let myStr = "Ibrahim Guennoun"; //dit is een variabele van het datatype string, waarom?  ______omdat dit een stuk tekst is________ vul je antwoord in op de lijn
let myInt = 5; //dit is een variabele van het datatype ____integer________ waarom? ____omdat dit een getal is________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ____dit is ee functie om aan te geven dat het gaat om een variabele________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______16________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _____getName_______ de waarde noemen we een Argument__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __melding_____ op het scherm met de tekst ___"dit is een variabele van het datatype string"______ deze tekst staan op regel _______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____ja dat mag______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? __________de ene foto wordt verbergt terwijl de andere dan juist te zien is_________ en waar wordt deze in je HTML aangeroepen? _____22_______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _____24______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ________die pakt 1 specifiek document___________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _______de ene foto wordt verbergt terwijl de andere dan juist te zien is____________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____31_________ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _______regel 2, dus cijfer 3_______ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _________hetzelfde als getElementById__________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __________er wordt een berekening gemaakt met het ingevoerde cijfer___________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ___________als ik een 5 invul, kotm er een ander getal, namelijk een 7 als uitkomst__________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______43________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _____paragraaf_________ en waar komt de waarde van kleur vandaan? ______oranje______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _____30px_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _________de kleur en grootte van de tekst wordt veranderd____________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ______er verschijnt een melding met een tekst_____ en wanneer gebeurt dat ___zodra je de website opent_______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ________ik zie een melding met mijn eigen naam___________ vul je antwoord in op de lijn.
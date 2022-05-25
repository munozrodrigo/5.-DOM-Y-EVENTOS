//VARIABLES
let precioapp = 300000;
let preciosist = 500000;
let preciomark = 200000;

let CalcApp = document.getElementById("CalcApp");
CalcApp.onclick = precio1;

let CalcSist = document.getElementById("CalcSist");
CalcSist.onclick = precio2;

let CalcMark = document.getElementById("CalcMark");
CalcMark.onclick = precio3;

function precio1 (){
    document.getElementById("CalcApp").innerHTML = "$ " + precioapp;
}

function precio2 (){
    document.getElementById("CalcSist").innerHTML = "$ " + preciosist;
}

function precio3 (){
    document.getElementById("CalcMark").innerHTML = "$ " + preciomark;
}
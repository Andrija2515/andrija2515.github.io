
var broj = Math.round(Math.random() * (100 - 1) + 1);

console.log(broj);
var br=0;

var dugme = document.querySelector("#dugme");
var tekst = document.querySelector("#tekst");
var poruka = document.querySelector("#poruka");
var sajt = document.querySelector("#sajt");
var modz = document.querySelector("#modz");

var reci = ["Наѕалост", "Срећом", "Немогуће", "Ѕамало али","Честитам"];
var rec;

dugme.addEventListener("click",function(){
    br++;
    if(br == 5){
        br = 0;
        poruka.innerHTML = "Погрешио си.</br>нови бр измислјен";
        broj = Math.round(Math.random() * (100 - 1) + 1);
    }
    else if(tekst.value == broj){
        poruka.innerHTML = "ок бравоброј је:"+ broj +"</br>нови број креиран";
        poruka.classList.remove("zelena");
        poruka.classList.add("crvena");
        broj = Math.round(Math.random() * (100 - 1) + 1);
        br = 0;
    }
    else if(tekst.value != broj){
        rec = Math.round(Math.random() * (reci.length - 1) + 1);
        poruka.classList.remove("crvena");
        poruka.classList.add("zelena");
        if(broj > tekst.value){
            poruka.innerHTML = reci[rec] + "али број је већио";
        }
        else{
            poruka.innerHTML = reci[rec] + "али број је манји";
        }
    }
})

modz.addEventListener("click",function(){
    if(sajt.classList.contains('bela')){
        sajt.classList.remove("bela");
        sajt.classList.add("crna");
        modz.value = "лигхтМоде";
    }
    else{
        sajt.classList.remove("crna");
        sajt.classList.add("bela");
        modz.value = "ДаркМоде";
    }
})
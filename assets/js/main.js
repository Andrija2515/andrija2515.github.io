
//Global
var path = window.location.pathname.split("/").pop();

//Nav menu dinamic list
let navTitles = ["Home","Author","Contact Us"];
let navLinks = ["index.html","author.html","create.html"];
var navDiv = document.querySelector(".navmenu");
var navmenu ='<ul class="nav">';
for(let i=0; i < navTitles.length; i++){
    navmenu += `<li><a href="${navLinks[i]}"`;
    if(navLinks[i] == path){
        navmenu +=' class="active" ';
    }
    navmenu += `>${navTitles[i]}</a></li>`;
}
navmenu += "</ul>";
navDiv.innerHTML = navmenu;

//Categories
let catTitles = ["HTML","CSS","JavaScript","Bootstrap","Testing","Other"];
let catIcon = ["fa-brands fa-html5","fa-brands fa-css3","fa-brands fa-square-js","fa-brands fa-bootstrap","fa-solid fa-check","fa-solid fa-code"];
let catLink = ["#","#","#","#","#","#"];
var catDiv = document.querySelector(".category");
var cat="";
for(let i=0; i<catTitles.length ; i++){
    cat += `<div class="col-lg-2 col-sm-6">
                <div class="item">
                    <div class="icon">
                        <i class="${catIcon[i]}"></i>
                    </div>
                    <h4>${catTitles[i]}</h4>
                    <div class="icon-button">
                        <a href="${catLink[i]}"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>`;
}
catDiv.innerHTML = cat;

//Advertising
let advReason = ["FrontEnd Logic is a project that tries to set up a standard in industry and keep web as uniformed and modern as possible.","All of out courses are made secially with help of some of the best front end developers. Every course is carefuly split into easy to understand chapters with a lot of practical examples and tests","We also offer real time consultations and/or different checking services, like html, css, js and seo optimization and testing."];
let advTitles = ["What's our goal","Professional courses","Website checking"]
let advIcon = ["fa-solid fa-bullseye","fa-solid fa-graduation-cap","fa-solid fa-stamp"];
var advDiv = document.querySelector(".service");
var adv = "";
for(let i = 0 ; i<advTitles.length ; i++){
    adv += `<div class="col-lg-4">
                <div class="item`;
    if(i == 0){
        adv += ` first-item`;
    }
    else if(i == 1){
        adv += ` second-item`;
    }
    adv += `"> <div class="icon">
                    <i class="${advIcon[i]}"></i>
                </div>
                <h4>${advTitles[i]}</h4>
                <p>${advReason[i]}</p>
            </div>
        </div>`;
}
advDiv.innerHTML = adv;

//Filters

// let filType = ["*",".msc","css",".js",".tst",".oth"];
// let filTitles = ["All Items","HTML","CSS","JavaScript","Testing","Other"];
// var filDiv = document.querySelector(".filters");
// var fil = `<ul>`;
// for(let i = 0; i < filType.length ; i++){
//     fil += `<li data-filter="${filType[i]}"`;
//     if(filType[i] == "*"){
//         fil += `class="active"`;
//     }
//     fil += `>${filTitles[i]}</li>`;
// }
// fil += `</ul>`;
// filDiv.innerHTML = fil;
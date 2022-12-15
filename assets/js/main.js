
//Global
var path = window.location.pathname.split("/").pop();
//Nav menu dinamic list
let navTitles = ["Home","Author","Contact Us"];
let navLinks = ["index.html","author.html","contact.html"];
var navDiv = document.querySelector(".navmenu");
var navmenu ='<ul>';
for(let i=0; i < navTitles.length; i++){
    navmenu += `<li><a href="${navLinks[i]}"`; 
    if(navLinks[i] == "index.html"){
        if(path == "" || path == navLinks[i]){
            navmenu +=' class="active" ';
        }
    }
    else if(navLinks[i] == path){
        navmenu +=' class="active" ';
    }
    navmenu += `>${navTitles[i]}</a></li>`;
}
navmenu += "</ul>";
navDiv.innerHTML = navmenu;


//Home page
if(path == "index.html" || path == ""){
    //Categories
    let catTitles = ["HTML","CSS","JavaScript","Bootstrap","Testing","Other"];
    let catIcon = ["fa-brands fa-html5","fa-brands fa-css3","fa-brands fa-square-js","fa-brands fa-bootstrap","fa-solid fa-check","fa-solid fa-code"];
    let catClass = ["hml","cs","js","hml","tst","oth"];
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
                            <a href="#cats" class="${catClass[i]}"><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>`;
    }
    catDiv.innerHTML = cat;

    $(".category .item a").click(function(){
        let currClass = $(this).attr("class");
        $(".items .all").hide();
        $(`.items .${currClass}`).show();

        $(".filters ul li").siblings(".active").removeClass("active");
        $(`.filters ul .${currClass}`).addClass("active");
    })

    //Sales slider
    $(".item .down-content a").click(function(){

        var datId = $(this).attr("class");

        var detTitle = iteTitles[datId];
        sessionStorage.setItem("dettitle",detTitle);

        var detPrice = itePrice[datId];
        sessionStorage.setItem("detprice",detPrice);

        var detCat = iteCat[datId];
        sessionStorage.setItem("detcat",detCat);

        var detDiff = iteDiff[datId];
        sessionStorage.setItem("detdiff",detDiff);

        var detDesc = iteDesc[datId];
        sessionStorage.setItem("detdesc",detDesc);

        var detImg = itePicture[datId];
        sessionStorage.setItem("detimg",detImg);

    })

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

    //Items Filter
    let filTitles = ["All Items","HTML","CSS","JavaScript","Testing","Other"];
    let filTypes = ["all","hml","cs","js","tst","oth"];
    var filDiv = document.querySelector(".filters");
    var fil = "<ul>";
    for(let i = 0; i < filTitles.length ; i++){
        fil += `<li class="${filTypes[i]}`;
        if(filTitles[i] == "All Items"){
            fil += ` active`;
        }
        fil += `">${filTitles[i]}</li>`;
    }
    fil += `</ul>`;
    filDiv.innerHTML = fil;

    //Filter aka. jQuery

    $(".currently-market .filters ul li").click(function(){

        let currClass = $(this).attr("class");
        //Selected items
        $(".items .all").hide();
        $(`.items .${currClass}`).show();
        
        //Current selected category
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        
    });

    //Items
    let iteTitles = ["HTML 5","HTML Forms","HTML Tables","CSS 3","CSS Animation","JavaScript 3","JS Events","jQuery","Bootstrap","Website checking","SEO","XML"];
    let itePrice = ["79.99&euro;","34.99&euro;","29.99&euro;","39.99&euro;","59.99&euro;","299.99&euro;","29.99&euro;","69.99&euro;","24.99&euro;","499.99&euro;","149.99&euro;","79.99&euro;"];
    let itePicture = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let iteDiff = ["Easy","Medium","Easy","Easy","Hard","Medium","Medium","Expert","Easy","None","Expert","Hard"];
    let iteId = [0,1,2,3,4,5,6,7,8,9,10,11]
    let iteCat = ["HTML","HTML","HTML","CSS","CSS","JavaScript","JavaScript","JavaScript","Other","Testing","Other","Other"];
    let iteDesc = ["HTML is Markup language used for describing Web pages structure. HTML can be further designed using CSS and it can embed programs written in scripting language like JavaScript.",
                    "HTML forms are used to allow users to enter data that is send to a server for processing. It can be used for ordering products sending messages...",
                    "HTML tables allow developers to arrane data into rows and columns. They can be used to arrang data like text, images, links, other tables... ",
                    "CSS is used for Web pages presentation, including colors, layout and fonts. It also allows sites to adapt to different resolutions.",
                    "CSS animations are used smooth out elements style transitions. Animations are released using keyframes which hold what style element will have at certain times.",
                    "JavaScript is programming language used for web programming. It has dynamic typing, first class functions and a lot more...",
                    "JavaScript Events are used to notify code of changes caused by user. Those changes trigger a certain funtion and make site interactive.",
                    "jQuery is JavaScript plugin that simplefies element selecting and add a lot of methodes that make programming in javascript easier.",
                    "To ensure sites are made with all regualtions and procedures we are offering detailed website checking with our professionals.",
                    "Bootstrap is open-source CSS framework that makes site easier to organise and response. It works by implementing built-in classes in html code.",
                    "SEO is process that improves site when it comes to it's visibility on the search engines. The better visibility the more likely they are to gain attention.",
                    "XML is markup language for storing, transmitting and reconstructig arbitrary data. The design goals of XML are simplicity,generality and usability across the internet."]
    iteClass = ["hml","hml","hml","cs","cs","js","js","js","oth","tst","oth","oth"];
    var iteDiv = document.querySelector(".items");
    var item = "";
    for(let i = 0; i < iteTitles.length ; i++){
        item += `<div class="col-lg-6 currently-market-item all ${iteClass[i]} showItem">
                    <div class="item">
                    <div class="left-image">
                        <img src="assets/images/market-${itePicture[i]}.jpg" alt="" style="border-radius: 20px; min-width: 195px;">
                    </div>
                    <div class="right-content">
                        <h4>${iteTitles[i]}</h4>
                        <div class="line-dec"></div>
                        <span class="bid">
                        Price<br><strong>${itePrice[i]}</strong>
                        </span>
                        <span class="ends">
                        Difficulty<br><strong>${iteDiff[i]}</strong>
                        </span>
                        <div class="text-button" id="${iteId[i]}">
                        <a href="details.html">View Item Details</a>
                        </div>
                    </div>
                    </div>
                </div>`;
    }
    iteDiv.innerHTML = item;

    //Details data
    $(".item .right-content a").click(function(){
        var datId = $(this).parent().attr('id');

        var detTitle = iteTitles[datId];
        sessionStorage.setItem("dettitle",detTitle);

        var detPrice = itePrice[datId];
        sessionStorage.setItem("detprice",detPrice);

        var detCat = iteCat[datId];
        sessionStorage.setItem("detcat",detCat);

        var detDiff = iteDiff[datId];
        sessionStorage.setItem("detdiff",detDiff);

        var detDesc = iteDesc[datId];
        sessionStorage.setItem("detdesc",detDesc);

        var detImg = itePicture[datId];
        sessionStorage.setItem("detimg",detImg);
    });

}

//Item details page
if(path == "details.html"){

    //Details data
    var detTitle = sessionStorage.getItem("dettitle");
    console.log(detTitle);

    var detPrice = sessionStorage.getItem("detprice");
    console.log(detPrice);

    var detCat = sessionStorage.getItem("detcat");
    console.log(detCat);

    var detDiff = sessionStorage.getItem("detdiff");
    console.log(detDiff);

    var detDesc = sessionStorage.getItem("detdesc");
    console.log(detDesc);

    var detImg = sessionStorage.getItem("detimg");
    console.log(detImg);

    var uTitle = document.querySelector("#useTitle");
    uTitle.innerHTML = detTitle;

    var uDesc = document.querySelector("#useDesc");
    uDesc.innerHTML = detDesc;

    var uPrice = document.querySelector("#usePrice");
    uPrice.innerHTML = detPrice;

    var uCat = document.querySelector("#useCat");
    uCat.innerHTML = detCat;

    var uDiff = document.querySelector("#useDiff");
    uDiff.innerHTML = detDiff;

    var uImg = document.querySelector("#useImg");
    uImg.setAttribute("src",`assets/images/item-details-${detImg}.jpg`);

    //Advertisemrnt
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

    var regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    var formMail = document.querySelector("#mymail");
    formMail.addEventListener("blur",function(){
        textCheck(regMail,formMail);
    });

    var formBtn = document.querySelector("#form-submit");
    formBtn.addEventListener("click",function(){
        var errBr = 0;
        errBr += textCheck(regMail,formMail);
        if(!errBr){
            formBtn.nextElementSibling.classList.remove("succHide");
            formBtn.nextElementSibling.classList.add("succShow");
        }
        else{
            formBtn.nextElementSibling.classList.remove("succShow");
            formBtn.nextElementSibling.classList.add("succHide");
        }
    })
}


//Contact page
if(path == "contact.html"){

    //Regular expressions
    var regTitle = /(.{3})+/
    var regMail = /^[a-z]+([\.]?[a-z]*[\d]*)*\@[a-z]+([\.]?[a-z]+)*(\.[a-z]{2,3})+$/
    var regName = /^([A-Z][a-z]{2,10})\s([A-Z][a-z]{3,15})$/
    var regMsg = /(.{10})+/

    //Form validation
    var formTitle = document.querySelector("#title");
    formTitle.addEventListener("blur",function(){
        textCheck(regTitle,formTitle);
    })

    var formMail = document.querySelector("#mymail");
    formMail.addEventListener("blur",function(){
        textCheck(regMail,formMail);
    })

    var formName = document.querySelector("#username");
    formName.addEventListener("blur",function(){
        textCheck(regName,formName);
    })

    var formMsg = document.querySelector("#message");
    formMsg.addEventListener("blur",function(){
        textCheck(regMsg,formMsg);
    })

    var formRadio = document.getElementsByName("msgtype");
    for(let i = 0; i < formRadio.length ; i++){
        formRadio[i].addEventListener("change",function(){
            if(formRadio[i].checked){
                formRadio[2].nextElementSibling.nextElementSibling.classList.remove("errShow");
                formRadio[2].nextElementSibling.nextElementSibling.classList.add("errHide");
            }
            else{
                formRadio[2].nextElementSibling.nextElementSibling.classList.remove("errHide");
                formRadio[2].nextElementSibling.nextElementSibling.classList.add("errShow");
            }
        })
    }

    var formCheck = document.querySelector("#agree");
    formCheck.addEventListener("change",function(){
        if(formCheck.checked){
            formCheck.nextElementSibling.nextElementSibling.classList.remove("errShow");
            formCheck.nextElementSibling.nextElementSibling.classList.add("errHide");
        }
        else{
            formCheck.nextElementSibling.nextElementSibling.classList.remove("errHide");
            formCheck.nextElementSibling.nextElementSibling.classList.add("errShow");
        }
    })

    var formBtn = document.querySelector("#form-submit");
    formBtn.addEventListener("click",function(){

        //Radio check
        var errBr = 0;
        var j = 1;
        for(let i= 0; i <formRadio.length; i++){
            if(formRadio[i].checked){
                formRadio[2].nextElementSibling.nextElementSibling.classList.remove("errShow");
                formRadio[2].nextElementSibling.nextElementSibling.classList.add("errHide");
                j=0
                break;
            }
            else{
                formRadio[2].nextElementSibling.nextElementSibling.classList.remove("errHide");
                formRadio[2].nextElementSibling.nextElementSibling.classList.add("errShow");
                j = 1
            }
        }
        errBr += j;
        j=1
        //Check check
        if(formCheck.checked){
            formCheck.nextElementSibling.nextElementSibling.classList.remove("errShow");
            formCheck.nextElementSibling.nextElementSibling.classList.add("errHide");
            j=0;
        }
        else{
            formCheck.nextElementSibling.nextElementSibling.classList.remove("errHide");
            formCheck.nextElementSibling.nextElementSibling.classList.add("errShow");
            j=1;
        }
        errBr += j;
        errBr += textCheck(regTitle,formTitle);
        errBr += textCheck(regMail,formMail);
        errBr += textCheck(regName,formName);
        errBr += textCheck(regMsg,formMsg);
    
        if(!errBr){
            formBtn.nextElementSibling.classList.remove("succHide");
            formBtn.nextElementSibling.classList.add("succShow");
        }
        else{
            formBtn.nextElementSibling.classList.remove("succShow");
            formBtn.nextElementSibling.classList.add("succHide");
        }
    })
}

//Functions

function textCheck(reg,val){
    if(reg.test(val.value)){
            val.nextElementSibling.classList.remove("errShow");
            val.nextElementSibling.classList.add("errHide");
            return 0;
        }
    else{
            val.nextElementSibling.classList.remove("errHide");
            val.nextElementSibling.classList.add("errShow");
            return 1;
        }
}
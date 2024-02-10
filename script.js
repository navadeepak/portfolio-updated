function linkedin(){
    window.location.href="https://www.linkedin.com/in/navadeepak-c-7b35741b6/";
}
function github(){
    window.location.href="https://github.com/navadeepak";
}
function resume(){
    window.location.href="https://drive.google.com/file/d/1-Y3bm85RVTCiFvoDbaDeV8Bkjy3ECtkf/view?usp=drive_link";
}
function dark(){
    document.getElementById("dark").style="diplay:none;";
    document.getElementById("light").style="display:flex;background-color:rgb(237, 240, 242);color:rgb(37, 49, 55);";
    document.getElementById("body").style="background-color:rgb(37, 49, 55);";
    document.getElementById("name").style="color:rgb(237, 240, 242);text-shadow: 2px 2px 5px rgb(237, 240, 242);";
    document.getElementById("port-title").style="color:rgb(237, 240, 242);";
    document.getElementById("mob-no").style="color:rgb(237, 240, 242);";
    document.getElementById("mail").style="color:rgb(237, 240, 242);";
    document.getElementById("intrest").style="color:rgb(237, 240, 242);";
    document.getElementById("profile-img").style="filter: drop-shadow(0px 0px 30px rgb(237, 240, 242 ,.3));border-bottom: 5px solid rgb(237, 240, 242) !important;"
    document.getElementById("linkedin").src="icons8-linkedin-50 (1).png";
    document.getElementById("github").src="github-mark-white.png";
    document.getElementById("inner-mobile").style="color:rgb(237, 240, 242);";
    document.getElementById("inner-mail").style="color:rgb(237, 240, 242);";
    document.getElementById("inner-whatsapp").style="color:rgb(237, 240, 242);";
}
function light(){
    document.getElementById("dark").style="diplay:flex;";
    document.getElementById("light").style="display:none;";
    document.getElementById("body").style="background-color:rgb(237, 240, 242);";
    document.getElementById("name").style="color:rgb(37, 49, 55);";
    document.getElementById("port-title").style="color:rrgb(37, 49, 55);";
    document.getElementById("mob-no").style="color:rgb(37, 49, 55);";
    document.getElementById("mail").style="color:rgb(37, 49, 55);";
    document.getElementById("intrest").style="color:rgb(37, 49, 55);";
    document.getElementById("profile-img").style="filter: drop-shadow(0px 0px 30px rgba(66, 66, 66, 0.52));border-bottom: 5px solid rgb(37, 49, 55) !important;";
    document.getElementById("linkedin").src="icons8-linkedin-uselight.svg";
    document.getElementById("github").src="github-mark.png";
    document.getElementById("inner-mobile").style="color:rgb(37, 49, 55);";
    document.getElementById("inner-mail").style="color:rgb(37, 49, 55);";
    document.getElementById("inner-whatsapp").style="color:rgb(37, 49, 55);";
}
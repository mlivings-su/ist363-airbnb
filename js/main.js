//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");


//"event name", callback function
menuBtn.addEventListener("click", function(){
    //console.log("cliiiiiiicked")
    mobileMenu.classList.add("active");
});//end of menuBtn click


closeBtn.addEventListener("click", function(){
    //console.log("cliiiiiiicked")
    mobileMenu.classList.remove("active");
});//end of menuBtn click

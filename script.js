const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else{
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.padding = "20px";
        navLinks.style.background = "#111";
        navLinks.style.borderRadius = "10px";
    }

});

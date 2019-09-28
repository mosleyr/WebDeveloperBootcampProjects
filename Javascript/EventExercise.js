var aDiv = document.querySelector("div");
var isPurple = false;

/*
aDiv.addEventListener("click", function(){
    //div.setAttribute("background", "purple"); // This did not work
    if (isPurple)
    {
        document.body.style.background = "white";
        isPurple = false;
    }
    else
    {
        document.body.style.background = "purple";
        isPurple = true;
    }
});
 */

aDiv.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});
//1. Correctly include jQuery
if(jQuery) {
    alert("jQuery loaded!");
} else {
    alert("No jQuery!");
}
//2. Select all divs and give them a purple background
$("div").css("background-color", "purple");
//3. Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");
//4. Select the div with id "third" and give it an orange border
$("#third").css("border", "2px solid orange");
//5. Bonus: Select the first div only and change its font color to pink
$("div").first().css("color", "pink");
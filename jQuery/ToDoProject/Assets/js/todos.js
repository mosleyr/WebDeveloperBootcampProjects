// Check off specific To-Dos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

/*
$("li").click(function(){
    //console.log("It's a click!");
    $(this).toggleClass("completed");

 */
    /*
    // if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        // turn it gray

        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
});
     */


// Click on X to delete To Do item
$("span").click(function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //console.log("Is it working?");
        // Capture new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li>" + "<span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});




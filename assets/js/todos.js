// checks off/uncheck todos on click
$("ul").on("click", "li", function(){
    $(this).toggleClass("checkOff");
});

// deleting toodos when X is pressed
$("ul").on("click", "li span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
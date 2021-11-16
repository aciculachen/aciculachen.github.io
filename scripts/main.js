

$(".nav-link").click(function(){

   $(".nav-pills").find(".active").removeClass("active");
    $(this).addClass("active");
   
});

$(".navbar-toggler").click(function(){
    $("#container").toggleClass("toggled");
   
});



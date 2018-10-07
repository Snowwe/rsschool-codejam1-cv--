$(document).ready(function () {
    //About me
    $("#btn1").click(function () {
        location.reload();
    });
    //My education
    $("#btn2").click(function () {
        $(".english").hide("slow");
        $(".studied").hide("slow");
        $(".work").hide("slow");
    });
    //My work experience
    $("#btn3").click(function () {
        $(".english").hide("slow");
        $(".studied").hide("slow");
        $(".work").show("slow").css("font-size", "18px");
    });
    //I studied
    $("#btn4").click(function () {
        $(".english").hide("slow");
        $(".studied").show("slow").css("font-size", "18px");
        $(".work").hide("slow") //css("display", "block").
    });
    //My English
    $("#btn5").click(function () {
        $(".english").show("slow");
        $(".studied").hide("slow");
        $(".work").hide("slow").css("font-size", "18px");
    });

});
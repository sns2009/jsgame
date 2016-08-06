var contHeight = $("#cards").height();
var boxSide;
var topMargin = ($(window).height() - contHeight) / 2;
var boxNumber;


//calculating margin from top
$("#cards").css({
    "margin": topMargin + "px auto 0px"
});


//initial filling with boxes
boxNumber = $("#cards select option:selected").text();
boxSide = 600 / Math.sqrt(boxNumber);
for (var i = 1; i <= boxNumber; i++) {
    $("#cards").append("<div class ='box'>" + i + "</div>");
}
$(".box").css({
    "display": "block",
    "height": boxSide + "px",
    "width": boxSide + "px",
    "border": "1px solid black",
    "float": "left",
    "box-sizing": "border-box"
});


//filling based on select
$("#cards select").change(function () {
    $(".box").remove();
    console.log("event is happen");
    boxNumber = $("#cards select option:selected").text();
    switch (+boxNumber) {
    case 9:
        boxSide = 600 / Math.sqrt(boxNumber);
        break;
    case 16:
        boxSide = 600 / Math.sqrt(boxNumber);
        break;
    case 25:
        boxSide = 600 / Math.sqrt(boxNumber);
        break;
    default:
        console.log("mistake happened");
    }

    for (var i = 1; i <= boxNumber; i++) {
        $("#cards").append("<div class ='box'>" + i + "</div>");
    }

    $(".box").css({
        "display": "block",
        "height": boxSide + "px",
        "width": boxSide + "px",
        "border": "1px solid black",
        "float": "left",
        "box-sizing": "border-box"
    });

});
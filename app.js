var contHeight = $('#cards').height();
var boxSide;
var topMargin = ($(window).height() - contHeight) / 2;
var boxNumber;


//calculating margin from top
$('#cards').css({
    'margin': topMargin + 'px auto 0px'
});


//initial filling with boxes
boxNumber = 16;
boxSide = contHeight / Math.sqrt(boxNumber);
for (var i = 0; i < boxNumber; i++) {
    $('#cards').append('<div class ="box" data-item="' + i + '">' + i + '</div>');
}
$('.box').css({

    'height': boxSide + 'px',
    'width': boxSide + 'px'
    
});



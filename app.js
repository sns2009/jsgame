var contHeight = $('#cards').height();
var boxSide;
var topMargin = ($(window).height() - contHeight) / 2;
var boxNumber;
var imgArr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg'];
var boxValue = [];
var userOpened = [];
var currentItem;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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

//creating values for boxes

function onlyTwoNotUnique(box){
    var j = 0;
    for(var k = 0; k < boxNumber; k++){
        if(boxValue[box] === boxValue[k]){
            j++;
        }
    }
    if(j>2){
        boxValue[i] = getRandomInt(0,8);
        onlyTwoNotUnique(box);
    }   
}

for(i = 0; i < boxNumber; i++){
    boxValue[i] = getRandomInt(0,8);
    if( !((i-1) <= 0) ){
        onlyTwoNotUnique(i);   
    }
}

$('.box').on('click',function(){
    currentItem = $(this).data('item');
    console.log(currentItem);
    if(userOpened[currentItem] != true){
        $(this).css({
            'background':'url('+imgArr[boxValue[+currentItem]]+');'
        });
    }

    
    userClicked = true;
});

console.log(boxValue);
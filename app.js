var contHeight = $('#cards').height();
var boxSide;
var topMargin = ($(window).height() - contHeight) / 2;
var boxNumber;
var imgArr = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg'];
var boxValue = [];
var userOpened = [];
var currentItem,previousItem;
var newProperty = {};

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
    $('#cards').append('<div class ="box" data-item="' + i + '"></div>');
    userOpened[i] = false;
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

function openItem(context,item){
     $(context).css('background-image','url(' + imgArr[boxValue[item]] + ')');
}
function closeItems(currentItem,previousItem){
    $('.box[data-item="'+currentItem+'"]').css('background-image','none');
    $('.box[data-item="'+previousItem+'"]').css('background-image','none');
    userOpened[currentItem] = false;
    userOpened[previousItem] = false;
    previousItem = undefined;
    
}
for(i = 0; i < boxNumber; i++){
    boxValue[i] = getRandomInt(0,8);
    if( !((i-1) <= 0) ){
        onlyTwoNotUnique(i);   
    }
}

$('.box').on('click',function(){
    currentItem = $(this).data('item');
    
    
    if(userOpened[currentItem] != true){
        openItem(this,currentItem);
        userOpened[currentItem] = true;
        if(typeof previousItem != "undefined" && boxValue[currentItem] != boxValue[previousItem]){
            closeItems(currentItem,previousItem);
        }
        if(boxValue[previousItem] == boxValue[currentItem]){
            previousItem = undefined;
        }else if(typeof previousItem != "undefined" && boxValue[previousItem] != boxValue[currentItem]){
            previousItem = undefined;   
        }else{
            previousItem = currentItem;
        }
        
        
        
    }
    j = 0;
    for(i = 0; i< (userOpened.length); i++){
        if(userOpened[i] == true){
            j++;
            if( j == 16 ){
                        setTimeout(function(){
                            if(confirm('You\'ve played like a BOSS! One more time?)')){
                            location.reload(true);
                        }
                        },200);
                        
                    }
        }   
    }
    console.log('currentItem ' + currentItem);
    console.log('previousItem ' + previousItem);
    console.log(userOpened);
    console.log(boxValue);
});


console.log(boxValue);




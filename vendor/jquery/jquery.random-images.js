$(document).ready(function(){

var images=['img/2027_img001.jpg',
                'img/2027_img002.jpg',
                'img/2027_img003.jpg',
                'img/2027_img004.jpg',
                'img/2027_img005.jpg'];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('header.masthead').css({'background-image':bgImg, 'background-size':'cover', 'background-position':'center'});

});
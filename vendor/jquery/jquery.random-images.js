$(document).ready(function(){

var images=['img/2027_img001.jpg',
                'img/2027_img002.jpg',
                'img/2027_img003.jpg',
                'img/2027_img004.jpg',
                'img/2027_img005.jpg',
                'img/2027_img006.jpg',
                'img/2027_img007.jpg',
                'img/2027_img008.jpg',
                'img/2027_img009.jpg',
                'img/2027_img010.jpg',
                'img/2027_img011.jpg'  ];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('header.masthead').css({'background-image':bgImg, 'background-size':'cover', 'background-position':'center'});

});
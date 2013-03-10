// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
    niceWords();
}

function niceWords() {
    var mySayings = new Array();
    mySayings[0] = "I love you";
    mySayings[1] = "I like it when you smile";
    mySayings[2] = "You are beautiful";
    mySayings[3] = "You are amazing";
    mySayings[4] = "I love the way you laugh";
    mySayings[5] = "You have an amazing personality";
    mySayings[6] = "You always make me smile";
    mySayings[7] = "You complete me";
    mySayings[8] = "You should be a model";
    mySayings[9] = "You are sexy as hell";
    mySayings[10] = "You are my favorite person in the world";
    mySayings[11] = "I kinda like you... alot";
    mySayings[12] = "You are gorgeous in every way";
    mySayings[13] = "I love the way you dress";
    mySayings[14] = "You restore my faith in Humanity";
    mySayings[15] = "You look incredible today";
    mySayings[16] = "You always make me laugh";
    mySayings[17] = "You do the most amazing things";
    mySayings[18] = "I believe in you";
    mySayings[19] = "<3";
    mySayings[20] = "I like what you did with your hair";
    mySayings[21] = "You have beautiful eyes";
    mySayings[22] = "I like your style";
    mySayings[23] = "I like the way you move";
    mySayings[24] = "You are so charming";
    mySayings[25] = "Hello, good looking";
    mySayings[26] = "That looks nice on you";
    mySayings[27] = "I dig you";
    mySayings[28] = "You're so smart";
    mySayings[29] = "I'm glad we met";
    mySayings[30] = "I made this app for you";
    mySayings[31] = "I told all my friends how cool you are";
    mySayings[32] = "You're #1 in my book";
    mySayings[33] = "When I grow up, I want to be just like you";
    mySayings[34] = "I support all of your decisions";
    mySayings[35] = "Being awesome is hard, but you'll manage";
    mySayings[36] = "You look so perfect";
    mySayings[37] = "You're so rad";
    mySayings[38] = "You could survive a zombie apocalypse";
    mySayings[39] =  "You are a champ";
    mySayings[40] = "You make babies smile";
    mySayings[41] = "You make me feel like I'm on top of the world";
    mySayings[42] = "You have good taste";
    mySayings[43] = "I like your face";
    mySayings[44] = "You are infatuating";
    mySayings[45] = "Even my cat likes you";
    mySayings[46] = "All I want for Christmas is you";
    mySayings[47] = "You smell nice";
    mySayings[48] = "I'd let you eat the white part of my Oreo";
    mySayings[49] = "The Force is strong with you";
    mySayings[50] = "You're the bee's knees";
    mySayings[51] = "You are well groomed";
    mySayings[52] = "I feel the need to impress you";
    mySayings[53] = "You are invited to my birthday party";
    mySayings[54] = "I would share my dessert with you";
    mySayings[55] = "You are full of youth";
    mySayings[56] = "Your manners are superb";
    
    var index = Math.floor(Math.random() * mySayings.length);
    
    document.getElementById('Saying').innerHTML = "<center>" + mySayings[index] + "</center>";
}
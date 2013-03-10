// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    getLocation();
    navigator.splashscreen.hide();
    niceWords();
}

function getLocation() {
    myNewFunction();
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
    mySayings[12] = "You are gorgeous in every way, shape, and form";
    mySayings[13] = "I love the way you dress";
    mySayings[14] = "You restore my faith in Humanity";
    mySayings[15] = "You look incredible today";
    mySayings[16] = "You always make me laugh";
    mySayings[17] = "You do the most amazing things";
    mySayings[18] = "I believe in you";
    mySayings[19] = "<3";
    mySayings[20] = "I like what you did with your hair";
    mySayings[21] = "You have beautiful eyes";
    
    
    var index = Math.floor(Math.random() * mySayings.length);
    
    document.getElementById('Saying').innerHTML = "<center>" + mySayings[index] + "</center>";
}
  
function myNewFunction(){
    navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
}
  
//=======================Say Hello (Page 1) Operations=======================//
function sayHello() {
    var sayHelloInputElem = document.getElementById('helloWorldInput');
    var sayHelloTextElem = document.getElementById('helloWorldText');
    var inputText = document.getElementById('txtName');
    
    sayHelloTextElem.innerHTML = 'Hello, ' + inputText.value + '!';
    sayHelloTextElem.style.display = 'block';
    sayHelloInputElem.style.display = 'none';
}

function sayHelloReset() {
    var sayHelloInputElem = document.getElementById('helloWorldInput');
    var sayHelloTextElem = document.getElementById('helloWorldText');
    var inputText = document.getElementById('txtName');
    
    inputText.value = '';
    sayHelloTextElem.style.display = 'none';
    sayHelloInputElem.style.display = 'block';
}

//=======================Geolocation Operations=======================//
// onGeolocationSuccess Geolocation
function onGeolocationSuccess(position) {
    // Use Google API to get the location data for the current coordinates
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    geocoder.geocode({ "latLng": latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if ((results.length > 1) && results[1]) {
                $("#myLocation").html(results[1].formatted_address);
            }
        }
    });
    
    // Use Google API to get a map of the current location
    // http://maps.googleapis.com/maps/api/staticmap?size=280x300&maptype=hybrid&zoom=16&markers=size:mid%7Ccolor:red%7C42.375022,-71.273729&sensor=true
    var googleApis_map_Url = 'http://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=hybrid&zoom=16&sensor=true&markers=size:mid%7Ccolor:red%7C' + latlng;
    var mapImg = '<img src="' + googleApis_map_Url + '" />';
    $("#map_canvas").html(mapImg);
}

// onGeolocationError Callback receives a PositionError object
function onGeolocationError(error) {
    $("#myLocation").html("<span class='err'>" + error.message + "</span>");
}
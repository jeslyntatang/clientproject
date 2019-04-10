/* global $ */

var custom_api_url = "https://api.letterboxd.com/api/v0/auth/token";
var custom2 = "https://api.openaq.org/v1/cities";
$("#search").click(function() { 
    $.ajax({
        url: custom2,
        method: "GET",
        beforeSend:function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Content-Type", "Accept: application/json");
        },
        crossDomain:true,
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log("test");
        }
    }); 
});
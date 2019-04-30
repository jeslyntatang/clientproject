/* global $ */
/* global localStorage*/

$("#search").click(function() { 
    var input = $("#input").val();
    var custom_api_url = "https://www.omdbapi.com/?s=" + input +"&apikey=e6878204";
    $.ajax({
        url: "https://www.omdbapi.com/?s=" + input +"&apikey=e6878204",
        method: "GET",
        beforeSend:function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("Accept", "application/json");
        },
        crossDomain:true,
        success: function(response) {
            $.ajax({
                url2 : custom_api_url,
                method: "GET",
                success:function(reply) {
                    function storage(idImg){
                        return idImg;
                    }
                    for(let i = 1; i < 5; i++){
                        var randomIndex = Math.floor(Math.random() * (10 - 4) + 4);
                        console.log(randomIndex);
                        var movie = response.Search[randomIndex];
                        var movieId = movie.imdbID;
                        $("#moviechild" + i).append("<a href = 'infopage.html'> <img src=" + movie.Poster + "data-movieId=" + movieId + " onclick ='" + storage(movieId) + "'/> </a>");
                        console.log(movieId);
                    }
                    $("img").click(function(){
                        var custom2 = "https://www.omdbapi.com/?i=" + movieId + "&apikey=e6878204";
                        console.log(movieId);
                        $.ajax({
                            url: custom2,
                            method:"GET",
                            success:function(reply){
                              var clickedMovie = reply.Title;
                              console.log(clickedMovie);
                                
                            //var t = document.getElementById("movieTitle");
                            //var y = document.createTextNode("This just got added");
                           // t.appendChild(y);
                           
                           var title = movie.Title;
                           var summary = movie.Plot; 
                           var year = movie.Year;
                           $("#movieTitle").html(title + "(" + year + ")");
                           $("#summary").html(summary);

                                console.log("movie: " + movie.Title);
                                console.log("year: " + movie.Year);
                                console.log("plot:" + movie.Plot);
                                /* 
                                    movie = response.Search[randomIndex] which means 
                                    this function is always going to show the latest value of
                                    randomIndex (fourth movie in the row) and not the movie that the person clicks on
                                */
                            }
                        });
                    });
                }
            });
        },
        
    }); 
});

// http://www.omdbapi.com/?s=guardians&apikey=e6878204
// http://www.omdbapi.com/?i=tt2015381&apikey=e6878204
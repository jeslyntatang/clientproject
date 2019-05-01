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
                    for(let i = 1; i < 5; i++){
                        var randomIndex = Math.floor(Math.random() * (10 - 4) + 4);
                        console.log(randomIndex);
                        var movie = response.Search[randomIndex];
                        var movieId2 = movie.imdbID;
                        $("#moviechild" + i).append("<a href = 'infopage.html?q=" + movieId2+ "'> <img src=" + movie.Poster + " data-id=" + movieId2 + "> </a>");
                        console.log(movieId2);
                    }
                    $("img").click(function(){
                        var newId = $(this).data("id");
                        var custom2 = "https://www.omdbapi.com/?i=" + newId + "&apikey=e6878204";
                        console.log(newId);
                        $.ajax({
                            url: custom2,
                            method:"GET",
                            error:function(reply) {
                                console.log("error");
                            },
                            success:function(reply){
                              var clickedMovie = reply.Title;
                              console.log(clickedMovie);
                                
                        /*    var title = document.getElementById("movieTitle");
                            var add = document.createTextNode(" added");
                            title.appendChild(add);*/
                           
                            var title = movie.Title;
                           var summary = movie.Plot; 
                           var year = movie.Year;
                           $("#movieTitle").append(title + "(" + year + ")");
                           $("#summary").append(summary);

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
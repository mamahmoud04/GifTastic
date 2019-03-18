var cars = ["Ferrari", "Lamborghini", "Bentley", "Mercedes", "Mclaren", "Bugatti"];


$(document).ready(function () {



    for (var i = 0; i < cars.length; i++) {
        $("#car-buttons").append("<button type = 'button' onclick='searchGif(\"" + cars[i] + "\")' class='btn btn-success' value='" + cars[i] + "'> " + cars[i] + " </button>");
    }
});
function carButtonClicked() {
    var userInput = $("#car-input").val().trim();
    searchGif(userInput);
} console.log("car-input", carButtonClicked);

function submitButtonClicked() {
    var userInput = $("#car-input").val().trim()
    if (userInput) {
        $("#car-buttons").append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-success' value=' " + userInput + "'> " + userInput + " </button>");
    }

}
function searchGif(gifName) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=diCUtFxAOMkqvr6ly103uRq4dRhqFFGT&q=" + gifName + " &limit=15&offset=5&rating=PG-13&lang=en";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        displayGif(response.data);
        // console.log(response.data);


    });

}


function displayGif(response) {
    $('#car').empty();
    // console.log(response);

    for (var i = 0; i < response.length; i++) {

        var rating = $("<div>");
        rating.attr("class", "ratings");
        rating.text(response[i].rating);
        // console.log(response[i].rating);
        // console.log(rating);
        ;

        image = '<div class="col-md-4">' + image + "</div>";
        var image = $("<img class='carimage'>");
        image.attr("src", response[i].images.fixed_height_still.url);
        image.attr("data-still", response[i].images.fixed_height_still.url);
        image.attr("data-animate", response[i].images.fixed_height.url);
        image.attr("data-state", "still");
        // $(image).append(rating);
        $('#cars').append(image);
        $('#cars').append(rating);
    }

};



$(document).on('click', '.carimage', function () {
    console.log("clicked");

    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).attr("data-animate"));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr("data-still"));
        $(this).attr('data-state', 'still');
    }

});
























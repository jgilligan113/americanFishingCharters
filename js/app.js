var state = 'Georgia'
var city = 'Tybee Island'

// $('#weather').on('click', function () {
//     console.log("I was clicked");
    $.ajax({
        url: 'http://api.wunderground.com/api/2d160d5a7d89cd60/forecast10day/q/' + state + '/' + city + '.json',
        method: 'GET'
    }).done(function (weather) {
        for (i = 0; i < 3; i++) {
            var weatherF = weather.forecast.txt_forecast.forecastday[i].fcttext;
            var altTxt = weather.forecast.txt_forecast.forecastday[i].icon;
            var image = weather.forecast.txt_forecast.forecastday[i].icon_url;
            var day = weather.forecast.txt_forecast.forecastday[i].title;
            console.log("I ran!")
            //add to the modal
            $('#city').text(city);
            var icon = $('<img>').attr('src', image);
            icon.attr('alt', altTxt);
            var details = $('<div>').html('<h6>' + day + '</h6><p>' + weatherF + '</p>');
            $('.weatherDetails').append(icon, details);
        }
     //$('#weatherModal').modal();
        // $('#close-button').modal('hide');
    // });
});

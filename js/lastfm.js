var currSongs;

function getRecentTracks(limit) {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=curiousgorg&api_key=7e94f6bc8a09e1fc8b2c72965e7abfdc&limit=" + limit + "&format=json", function(json) {
        var html = "<ul>";
        console.log(json.recenttracks);
        $.each(json.recenttracks.track, function(i, item) {
        	if (item.hasOwnProperty("date")) {
        		html += "<li><a href=" + item.url + " target='_blank'>" + item.name + "</a> by " + item.artist["#text"] + " on " + item.date["#text"] + "</li>";
        	}
        });
        html += "</ul>";
        currSongs = html;
    })
};

$("#more-button").click(function() {
    $(".more").html(
    'Some of my favorite YouTube videos are:' +  
    '<ul>' +
        '<li><a href="https://www.youtube.com/watch?v=amv8fiCQnXI">Joel Embiid on Hot Ones</a></li>' + 
        '<li><a href="https://www.youtube.com/watch?v=Vs6In7UtyXY">Yes Theory Fools the Internet</a></li>' +
        '<li><a href="https://www.youtube.com/watch?v=gQlKelwPX4A">How Calvin Harris made Slide</a></li>' +
    '</ul>' + 
    '<p></p>' + 

    'The last three songs I listened to were:' + 
    currSongs + 
    '<p></p>' + 

    'The best movies I’ve ever seen are: ' + 
    '<ul>' + 
        '<li><a href="https://www.youtube.com/watch?v=c3sBBRxDAqk">Ratatouille</a> (2007)</li>' + 
        '<li><a href="https://www.youtube.com/watch?v=ijXruSzfGEc">The Prestige</a> (2006)</li>' + 
        '<li>with Crazy Rich Asians (2018) and Into the Spider-Verse (2018) on the come-up</li>' + 
    '</ul>' + 
    '<p></p>'
    );
})

$(document).ready(getRecentTracks(3));

var currSongs;

function getRecentTracks(limit) {
    $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=curiousgorg&api_key=7e94f6bc8a09e1fc8b2c72965e7abfdc&limit=" + limit + "&format=json", function(json) {
        var html = "<ul>";
        $.each(json.recenttracks.track, function(i, item) {
        	if (item.hasOwnProperty("date")) {
        		html += "<li><a href=" + item.url + " target='_blank'>" + item.name + "</a> by " + item.artist["#text"] + " on " + item.date["#text"] + "</li>";
        	}
        });
        html += "</ul>";
        currSongs = html;
    })
};

$("#other").click(function() {
    console.log("hello")
    $("#other").html(
        '<p>The last three songs I listened to were:' + 
        currSongs + 
        '</p>' + 

        '<p> This is me in yellowstone, mud volcano area, May \'19.' +
        'It was very cold!' + 

        '<img src="old/IMG_1640.jpg" alt="yellowstone">'
    );
})

console.log("does this ever run lol")

$(document).ready(getRecentTracks(3));
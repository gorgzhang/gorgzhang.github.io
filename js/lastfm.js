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

$(document).ready(getRecentTracks(3));

var oauth_token = "BQBSAIzNTBfmKSFWICuDAQAO57PJbmDFU47-f9dp5-XyhXSHibiPSaYdMfshwe_nj4OrrV-GJohR8c1Yh8sLH255YdDB8tEAcJI2ZLKGAzUER3E5VWdpc4-aHHE6H7xYGmAHOtL8K0oA-0RW7Bw"
var client_id = "9eca37cf81d94340ba6627853b621ae7"

$("#api-test").click(function() {
	console.log("hello")

	$.getJSON("https://accounts.spotify.com/authorize?" + 
		"client_id=" + client_id + 
		"&response_type=" + "token" +
		"&redirect_uri=" + "https://gorgzhang.github.io/" +
		"&state=" + "400", function(json) {
			console.log(json);
		}
	)
	// $.getJSON("https://api.spotify.com/v1/browse/new-releases?country=US&limit=5&access_token=" + token, function(json) {
	// 	console.log(json);
	// })
	
})
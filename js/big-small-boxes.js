
squares = 5000
num = ($(window).height() * $(window).width()) / squares
length = Math.max(20, Math.floor(Math.sqrt(num)))

for (i = 0; i < squares; i++) {
	$('<div>', {
	    css: {
	        width:      length,
	        height:     length,
	        padding:    '0',
	        margin:     '0',
	    }
	})
	.addClass('box')
	.appendTo("#main") 
}


$(".box").on( "mouseover", function() {
     $(this).animate({ backgroundColor:'#0000ff'}, 600);
});

$(".box").on( "mouseout", function() {
     $(this).animate({ backgroundColor:'#ffffff'}, 600);
});

$(".text").css("font-size", length * 2)	
// Color conversion code borrowed from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb /***/

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// End color conversion code /***/


$(document).ready(function() {
	// options with defaults (not required)
	var opts = {
	    colors: 10,        // desired palette size
	    method: 2,          // histogram method, 2: min-population threshold within subregions; 1: global top-population
	    boxSize: [64,64],   // subregion dims (if method = 2)
	    boxPxls: 2,         // min-population threshold (if method = 2)
	    initColors: 4096,   // # of top-occurring colors  to start with (if method = 1)
	    minHueCols: 0,      // # of colors per hue group to evaluate regardless of counts, to retain low-count hues
	    dithKern: null,     // dithering kernel name, see available kernels in docs below
	    dithSerp: false,    // enable serpentine pattern dithering
	};

	var q = new RgbQuant(opts);
	var img = $('img').first();

	q.sample(img[0]);

	var palette = q.palette(true);

	for (var i = 0; i < palette.length; i++) {
		var hex_value = rgbToHex(palette[i][0], palette[i][1], palette[i][2]);
		console.log(hex_value);

		var el = $('<div class="color"><div class="square"></div><div class="hex-value"></div></div>');

		el.children('.square').css('background-color', hex_value);
		el.children('.hex-value').text(hex_value);
		$('.palette').append(el);
	}
});
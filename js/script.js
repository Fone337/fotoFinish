$(document).ready(function() {
	$('.slider').on('change', function() {

		// CURRENT VALUES OF PIC
		var currentBlur = $('img#mainImage').css('-webkit-filter').split(' ')[0];
		var currentBrightness = $('img#mainImage').css('-webkit-filter').split(' ')[1];
		var currentSaturate = $('img#mainImage').css('-webkit-filter').split(' ')[2];
		var currentHue = $('img#mainImage').css('-webkit-filter').split(' ')[3];
		var currentContrast = $('img#mainImage').css('-webkit-filter').split(' ')[4];
		var currentInvert = $('img#mainImage').css('-webkit-filter').split(' ')[5];
		var currentGrayscale = $('img#mainImage').css('-webkit-filter').split(' ')[6];
		var currentSepia = $('img#mainImage').css('-webkit-filter').split(' ')[7];

		// VALUE ENTERED
		var currentVal = $(this).val();

		// SLIDER CLICKED
		var filterSlide = $(this).attr('id');
		
		switch(filterSlide)
		{
			case 'blur':
				var new_filter = "blur(" + currentVal + "px) " + currentBrightness + currentSaturate + currentHue + currentContrast + currentInvert + currentGrayscale + currentSepia;
		 	break;
			case 'brightness':
				var new_filter = currentBlur + "brightness(" + currentVal + ")" + currentSaturate + currentHue + currentContrast + currentInvert + currentGrayscale + currentSepia;
			break;
			case 'saturate':
				var new_filter = currentBlur + currentBrightness + "saturate(" + currentVal + "%)" + currentHue + currentContrast + currentInvert + currentGrayscale + currentSepia;
			break;
			case 'hue':
				var new_filter = currentBlur + currentBrightness + currentSaturate + "hue-rotate(" + currentVal + "deg)" + currentContrast + currentInvert + currentGrayscale + currentSepia;
			break;
			case 'contrast':
				var new_filter = currentBlur + currentBrightness + currentSaturate + currentHue + "contrast(" + currentVal + "%)" + currentInvert + currentGrayscale + currentSepia;
			break;
		}
	    var $sample = $('#mainImage');
	    		    
	    $sample.removeClass().css("-webkit-filter", new_filter);
	});

	$('.preset img').on('click', function() {
		var clickedPreset = $(this).closest('.preset').attr('class').split(' ')[2];
		if (clickedPreset == 'random'){

			var minBlur = 0;
			var maxBlur = 1;
			var ranBlur = Math.floor(Math.random() * (maxBlur - minBlur + 1)) + minBlur;

			var minBright = 1;
			var maxBright = 3;
			var ranBright = Math.floor(Math.random() * (maxBright - minBright + 1)) + minBright;

			var minSat = 1;
			var maxSat = 100;
			var ranSat = Math.floor(Math.random() * (maxSat - minSat + 1)) + minSat;

			var minHue = 0;
			var maxHue = 360;
			var ranHue = Math.floor(Math.random() * (maxHue - minHue + 1)) + minHue;

			var minCon = 100;
			var maxCon = 200;
			var ranCon = Math.floor(Math.random() * (maxCon - minCon + 1)) + minCon;

			var ranInv = 0;
			var ranGray = 0;
			var ranSepia = 0;

			var ranFilter = "blur(" + ranBlur + "px) " + "brightness(" + ranBright + ")" + "saturate(" + ranSat + "%)" + "hue-rotate(" + ranHue + "deg)" + "contrast(" + ranCon + "%)" + "invert(" + ranInv + "%)" + "grayscale(" + ranGray + "%)" + "sepia(" + ranSepia + "%)";

			$('img#mainImage').removeClass().css("-webkit-filter", ranFilter);
		}
		else{
			$('img#mainImage').removeClass().addClass(clickedPreset);
		}
	});

	$('#layer2').on('click', function() {
		$( "#mainImage2" ).toggle( "fast", function() {
  		});
	});
	
	$('#upload').on('click', function() {
		$('#uploader').modal('show');
	});
	
});
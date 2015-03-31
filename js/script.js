$(function(){


	$('div[id^=color-bar]').each(function(){
		
		var number = $(this).attr("number");
		var max = $(this).attr("max");
		var divid = $(this).context.id;
		var colorCode = "#00aced"; 
		var height = $(this).attr("height");
		var width = $(this).attr("width");

		makeColorBar(number,max,colorCode,divid,width,height);					

	});

});

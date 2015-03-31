/*** 指定したdivに横長のrectを数値に応じて表示する関数です。 *///

function makeColorBar(number,max,colorCode,divid,width,height){

	if(!width){
		width = 200;
	}

	if(!height){
		height = 20;
	}

	var dataset = [number];

	var xScale = d3.scale.linear()
				.domain([0,max])
				.range([0,width]);

	var svg = d3.select("div#"+divid)
				.append("svg")
				.attr({width: width,height: height});	

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.transition()
		.duration(600)
		.ease("in")
		.each("start",function(){
			d3.select(this).attr({
				width: 0,	
				height: height,
				x: 0,
				y: 0,
				fill: "rgb(230,230,230)"
			});
		})
		.attr({
			width: function(d,i){ return xScale(d); },
			height: height,
			x: 0,
			y: 0,
			fill: colorCode
		});


}



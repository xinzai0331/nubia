$(function() {
		let obtn1 = $("#btn1");
		let obtn2 = $("#btn2");
		let time;
		let index = 0;
		let ospan = $("#op span");
		let oli = $("#oul li");
		let oul = $("#oul");
		console.log(oli.length)

		let change = function() {
			ospan.attr("class", "no_red").eq(index).attr("class", "red");
			if (index >= ospan.length) {
				ospan.eq(0).attr("class", "red");
			}

			oul.animate({
					left: -1370 * index

				}, 300,function(){
					if(index == ospan.length){
						index = 0;
						oul.css("left", "0");
					}
					
				})
		
		}
		time = setInterval(function(){
			index++;
			change();
		},2000)

	$("#banner").mouseover(function(){
		clearInterval(time);
	})
	$("#banner").mouseout(function(){
		time = setInterval(function(){
			index++;
			change();
		},2000)
	})
	
	ospan.click(function(){
		index = $(this).index();
		change();
	})
	
	obtn1.click(function(){
		index++;
		change();
	})
	obtn2.click(function(){
		index--;
		if(index < 0 ){
			index = ospan.length - 1
		}
		change();
	})


	})
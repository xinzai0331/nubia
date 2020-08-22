$("#foot dd").hover(function(){
	$(this).find("a").css("color","black");
},function(){
	$(this).find("a").css("color","gray");
})

$("#tel_p1").hover(function(){
	$(this).css("background","black");
},function(){
	$(this).css("background","#666666");
})

$("#tel_p").find("img").eq(0).hover(function(){
	$("#tel_img").css("display","block")
},function(){
	$("#tel_img").css("display","none")
})

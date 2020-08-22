// 下拉菜单1
$("#header_li1").mouseover(function(){
	$("#subtitle1").slideDown(300,function(){
	})
})
$("#header_li1").mouseout(function(){
	$("#subtitle1").slideUp(300,function(){
	})
})
$("#subtitle1").mouseover(function(){
	$("#subtitle1").css({
		style:"block"
	})
})

// 下拉菜单2
$("#header_li2").mouseover(function(){
	$("#subtitle2").slideDown(300,function(){
	})
})
$("#header_li2").mouseout(function(){
	$("#subtitle2").slideUp(300,function(){
	})
})

// 下拉菜单3
$("#header_li3").mouseover(function(){
	$("#subtitle3").slideDown(300,function(){
	})
})
$("#header_li3").mouseout(function(){
	$("#subtitle3").slideUp(300,function(){
	})
})
// 下拉菜单4
$("#header_li4").mouseover(function(){
	$("#subtitle4").slideDown(300,function(){
	})
})
$("#header_li4").mouseout(function(){
	$("#subtitle4").slideUp(300,function(){
	})
})
// 更改鼠标划上的导航栏字体颜色
$("#header_ul").find("li").mouseover(function(){
	$(this).css({color:"grey"});
})
$("#header_ul").find("li").mouseout(function(){
	$(this).css({color:"black"});
})

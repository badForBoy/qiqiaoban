var lis = $(".theme").find("ul li")
lis.click(function(){
	lis.removeClass("nav-stacked-on")
	$(this).addClass("nav-stacked-on")
})
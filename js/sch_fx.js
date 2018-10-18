document.documentElement.scrollTop = 1;
var toTop = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
document.documentElement.scrollTop = 0;

var schFx = document.querySelector(".sch-fx");

window.onscroll = function(){
	if(toTop.scrollTop > 1000) {
		schFx.style.top = "0";
		setTimeout(function(){
			schFx.style.transition = "all 0s";
		}, 500)
	}
	else {
		schFx.style.top = "-54px";
		setTimeout(function(){
			schFx.style.transition = "all .5s";
		}, 50)
	}
}

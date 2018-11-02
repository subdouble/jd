let futureTime = "2018/10/22 23:59:59";

let TodayTimeInfo = new Date();
futureTime = (TodayTimeInfo.getFullYear() + "/") + ((TodayTimeInfo.getMonth() + 1) + "/") + (TodayTimeInfo.getDate() + " ") + "23:59:59";
futureTime = new Date(futureTime).getTime();

let countDown = document.querySelectorAll(".countdown span");

let countDownTimer = setInterval(function(){
	setCountDown(futureTime);
}, 1000);

function setCountDown(futureTime){
	let nowTime = new Date().getTime();
	let diffTime = futureTime - nowTime;
	if(diffTime <= 0){
		diffTime = 0;
	}
	
	let hour = Math.floor(diffTime / 1000 / 60 / 60);
	let minute = Math.floor((diffTime / 1000 - hour * 60 * 60) / 60);
	let second = Math.floor(diffTime / 1000 - hour * 60 * 60 - minute * 60);
	
	countDown[0].innerText = hour < 10 ? "0" + hour : hour;
	countDown[1].innerText = minute < 10 ? "0" + minute : minute;
	countDown[2].innerText = second < 10 ? "0" + second : second;
	
}

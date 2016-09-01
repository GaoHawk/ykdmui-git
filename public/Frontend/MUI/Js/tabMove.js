// 减少全局变量
var TABMOVE = {};

TABMOVE.$ = {
	tab : $("#segmentedControl")
}
//var tabA = document.getElementById("clickA")
//tabA.addEventListener('tap',function(){
//	console.log('tap');
//});

console.log(TABMOVE.$.tab);
var $tab = $("#segmentedControl");
var $tabCell = $(".mui-control-item");
//var $m1 = $(".m1");
//var $m2 = $(".m2");

//var mainTab = $(".mainTab");
var xM, marginL, ml,
	starX, rightend;
console.log($tabCell.width());

function touchs(event) {
	event.preventDefault();


	marginL = $tab[0].style.marginLeft;
	ml = marginL.length == 0 ? 0 : parseInt(marginL);
	starX = event.touches[0].pageX;

};
$tab[0].addEventListener('touchstart', touchs, false);

function touchm(event) {

	xM = starX - event.touches[0].pageX;
	$tab[0].style.marginLeft = -xM + ml + "px";
	$tab[0].style.marginRight = 'auto';
//	console.log('ml:' + ml);
	event.preventDefault();

};
$tab[0].addEventListener('touchmove', touchm, false);

function touche(event) {
	var body = document.getElementsByTagName('body');
	var winW = body[0].clientWidth;

	var marginL = $tab[0].style.marginLeft;

	ml = marginL.length == 0 ? 0 : parseInt(marginL);

	var ulW = $tab[0].clientWidth;

//	 获取点击对象地址
	var target = event.target;
	var href = $(target)[0].href;
	console.log($(target)[0].href);
	if(!href){
		href = $(target).parent()[0].href
		console.log($(target).parent()[0].href);
	}
	href = href.split("#");	
	console.log(href[1]);
	href = href[1];
//  模拟点击事件	
	if (xM == undefined || (-2 < xM && xM < 2)) {

			console.log("click");
//			window.open("http://www.baidu.com");

	};

	xM = null;
	var cell = ml %$tabCell.width();
	console.log(ml);
	console.log(cell);
	if (ml > 0) {
		$tab[0].removeEventListener("touchstart", touchs, false);
		$tab[0].removeEventListener("touchmove", touchm, false);
		var intervalProcess1 = setInterval(
			function() {
				ml = parseInt($tab.css("marginLeft"));

				var step = -4;
				$tab.css({
					marginLeft: ml + step + "px"
				});

				if (ml <= 0) {

					console.log("stop");

					clearInterval(intervalProcess1);
					restoreTab();
					console.log('end:' + event.type);
				}
			}, 16);


	} else if (ml + ulW < winW) {

		$tab[0].removeEventListener("touchstart", touchs, false);
		$tab[0].removeEventListener("touchmove", touchm, false);
		console.log("winW:" + winW);
		rightend = winW - ulW;

		var intervalProcess2 = setInterval(function() {
			ml = parseInt($tab.css("marginLeft"));

			var step = 4;
			$tab.css({
				marginLeft: ml + step + "px"
			});
			if (ml >= rightend -20) {
				console.log("stop");
				clearInterval(intervalProcess2);
				changeTab();
			}
//			console.log(ml);
		}, 18);
	} else if( cell != 0){
		if(Math.abs(cell) > $tabCell.width()/3){
			console.log("change");
		}else{
			console.log("restore");
		}
	}

};

$tab[0].addEventListener("touchend", touche, false);

function restoreTab() {
	$tab[0].style.marginLeft = 0 + "px";
	$tab[0].style.marginRight = 'auto';
	$tab[0].addEventListener('touchmove', touchm, false);
	$tab[0].addEventListener('touchstart', touchs, false);
	console.log("restore");
	ml = null;
}

function changeTab() {
	$tab[0].style.marginLeft = rightend - 20 + "px";
	$tab[0].style.marginRight = 'auto';
	$tab[0].addEventListener('touchmove', touchm, false);
	$tab[0].addEventListener('touchstart', touchs, false);
	console.log("change");
	ml = null;
	rightend = null;
}

function addTab(arg) {

	var content = $(arg).text();
	console.log(content);
	var subTab;
	if(content == "标签1"){
		subTab = $m1;	
	}else if(content =="标签2"){
		subTab = $m2;
	}
	$tab.empty();
	if (subTab.length <= 5) {
		$(".ui-tab-nav ").attr("style", "width: 100%;");
		$(".ui-tab-nav ")[0].removeEventListener("touchstart", touchs, false);
		$(".ui-tab-nav ")[0].removeEventListener("touchmove", touchm, false);
	} 

	for (var j = 0; j < subTab.length; j++) {
		$(subTab[j]).attr("style", "");
	}

	for (var i = 0; i < subTab.length; i++) {

		console.log(subTab[i]);
		$tab.append(subTab[i]);
	}
}



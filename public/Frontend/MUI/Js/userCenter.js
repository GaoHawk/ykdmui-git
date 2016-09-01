mui.init({
	swipeBack:true
});
	mui('.mui-scroll-wrapper').scroll();
	mui('body').on('shown', '.mui-popover', function(e) {
		//console.log('shown', e.detail.id);//detail为当前popover元素
	});
	mui('body').on('hidden', '.mui-popover', function(e) {
		//console.log('hidden', e.detail.id);//detail为当前popover元素
	});
  	var menuWrapper = document.getElementById("menu-wrapper");
	var menu = document.getElementById("menu");
	var menuWrapperClassList = menuWrapper.classList;
	var backdrop = document.getElementById("menu-backdrop");
//		var info = document.getElementById("info");
	
	backdrop.addEventListener('tap', toggleMenu);
//		document.getElementById("menu-btn").addEventListener('tap', toggleMenu);
	document.getElementById("icon-menu").addEventListener('tap',toggleMenu);
	//下沉菜单中的点击事件
	mui('#menu').on('tap', 'a', function() {
		toggleMenu();
		console.log(this.innerHTML);
//			info.innerHTML = '你已选择：'+this.innerHTML;
	});
	
	var busying = false;
	
	function tabC(){
		console.log(1);
	}
	function toggleMenu(){
		if(busying){
			return;
		}
		busying = true;
		if (menuWrapperClassList.contains('mui-active')) {
			document.body.classList.remove('menu-open');
			menuWrapper.className = 'menu-wrapper fade-out-up animated';
			menu.className = 'menu bounce-out-up animated';
			setTimeout(function() {
				backdrop.style.opacity = 0;
				menuWrapper.classList.add('hidden');
			}, 500);
		} else {
			document.body.classList.add('menu-open');
			menuWrapper.className = 'menu-wrapper fade-in-down animated mui-active';
			menu.className = 'menu bounce-in-down animated';
			backdrop.style.opacity = 1;
		}
		setTimeout(function() {
			busying = false;
		}, 500);
	}

var coll = document.getElementById("collection");
coll.addEventListener('tap',function(){
	console.log("click collection");
	window.open('collection.html');
});
//function clickOr(){
//	console.log("1112");
//}
	
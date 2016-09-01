var drag = $('.mui-scroll');
var tabView = $('.mui-table-view');
var content;
var spy,epy,move;
tabView.css({
//			left: 27  + "px",
	transform: 'translate3d(0,0,0) translateZ(0)',
	transitionDuration: '500ms',
    transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
});

$(function(){
	var topPocket = document.createElement('div');
	$(topPocket).addClass('mui-pull-top-pocket mui-block');
	$(topPocket).css({
		top: 0
	});
	var $div1 = $(document.createElement("div"));
	$div1.addClass("mui-pull");
	
	var spiner = $(document.createElement('div'));
	spiner.addClass('mui-pull-loading mui-icon mui-icon-pulldown');

	spiner.appendTo($div1);
	
	
	var caption = $(document.createElement('div'));
	caption.addClass('mui-pull-caption');
	caption.text('下拉可以刷新');
	caption.appendTo($div1);
	
	$div1.appendTo(topPocket);
	$(topPocket).prependTo(drag);
	console.log(topPocket);
	tabView.on('dragstart',function(e){
		console.log($(this).prev());
		
		var curTopPoc =  $(this).prev();
		setTimeout(function(){
			curTopPoc.css({
				visibility: 'visible'
			});
		},240);
		curTopPoc.find('.mui-pull-loading').css({
			transition: '-webkit-transform 0.3s ease-in',
			transform: 'rotate(0deg)'
		});
		content = $('.mui-control-content.mui-active ul.mui-table-view');
		spy = Number(e['detail'].touches[0].pageY);
//		console.log(spy);

	});
	tabView.on('drag',function(e){
		var maxLen = content.height();
		var y = (e['detail'].touches[0].pageY);
		if(move > y - spy &&  move - 5<=y-spy){
			move  += 0.33;
		}else if(move == y - spy){
			move  += 1;
		}else{
			move = y - spy;
		}
		if(move <0 && maxLen <= $('.mui-control-content.mui-active').height()){
			return;
		}
//		console.log(move);
		tabView = $(this) ;
		
		tabView.css({
			transform: 'translate3d(0,' + (move/3) + 'px,0) translateZ(0)'
		});
		
		var curTopPoc =  $(this).prev();
		
		if(move/3 > 50){
			console.log("rotate(180)");
			curTopPoc.find(".mui-pull-loading").css({
				transform: 'rotate(180deg)'
			});
			curTopPoc.find('.mui-pull-caption').text('释放立即刷新');
//			curTopPoc.css()
		}
	
		
	});
	tabView.on('dragend',function(e){
		epy = Number(e['detail'].touches[0].pageY);
		tabView = $(this) ;
		var endMove = epy - spy;
		var maxLen = content.height();
		console.log(maxLen);
		var offsetheight = $('.mui-control-content.mui-active').height() - maxLen;
		console.log(offsetheight);
		
		var curTopPoc =  $(this).prev();
		setTimeout(function(){
			if(endMove >= 50){
				//页面刷新
				tabView.css({
					transform: 'translate3d(0,' + 50 + 'px,0) translateZ(0)'
				});
				backdrop.show();
				curTopPoc.find('.mui-pull-caption').text('正在刷新...');
				curTopPoc.find('.mui-pull-loading').removeClass('mui-icon-pulldown').addClass('mui-spinner').css({
					animation: 'spinner-spin 1s step-end infinite'
				});
				
				pageReload(curTopPoc);
//			正常的拖拽
			}else if(endMove >=0){
				tabView.css({
					transform: 'translate3d(0,' + 0 + 'px,0) translateZ(0)'
				});
			}else if(endMove < offsetheight && offsetheight < 0){
				tabView.css({
					transform: 'translate3d(0,' + offsetheight + 'px,0) translateZ(0)'
				});
			}
		},150);
//		刷新页面重新加载将特效还原成初始状态
		
	});
	
	function pageReload(topPocket){
		setTimeout(function(){
			topPocket.next().css({
				transform: 'translate3d(0,' + 0 + 'px,0) translateZ(0)'
			});
			topPocket.find('.mui-pull-loading').removeClass('mui-spinner').addClass('mui-icon-pulldown').css({
				animation: ''
			});
			topPocket.find('.mui-pull-caption').text('下拉可以刷新');
			
			dataReload(topPocket);
			backdrop.hide();
		},400);
	}
	
	function dataReload(topPocket){
		// 数据加载 区域ul
		var ul = topPocket.next();
		console.log(ul);
		
	}
});

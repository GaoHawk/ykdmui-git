	console.log($('.mui-tab-item'));
	$('.mui-tab-item').on('tap',function(){
		
		var txt = $(this).find('.mui-tab-label').length > 0?$(this).find('.mui-tab-label').text():$(this).find('.name').text();
		console.log(txt);
		if(txt ==="关注"){
			$(this).find('.iconfont').removeClass('iconfont').addClass('heart');
			//将该页面加入到个人收藏页面中
			/*todo */
		}else 
		if(txt ==="购物车"){
//			首先判断页面是否选择完商品规格
			
		}else
		if(txt ==="加入购物车"){
			
		}else
		if(txt ==="立即购买"){
			
		}
		
	});
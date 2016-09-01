//详情和供货商信息相关JS
	var controls = document.getElementById("segmentedControls");
	var contents = document.getElementById("segmentedControlContents");
	var bluebar = $('#sliderProgressBar');
	var Items = $(controls).find('.mui-control-item');
	var contentItems = $(contents).find(".mui-control-content");
	Items.on('tap',function(){
		console.log($(this)[0].hash);
		var winLen = $(window).width();
		for(var i =0; i< Items.length;i++){
			if(!Items[i] === $(this)[0]){
				Items[i].removeClass('.mui-active');
			}
		}
		activeContent($(this)[0].hash);
		if($(this)[0].hash === "#item1"){
			bluebar.css({
				left: 0
			});
		}else{
			bluebar.css({
				left: winLen/2 + "px"
			});
		}
	});
	function activeContent(id){
		for(var j=0;j < contentItems.length; j++){
	
			if(!(contentItems[j] === $(id)[0])){
				
				contentItems[j].setAttribute("class","mui-control-content");
			}
		}
	}
	
//	跳转到评论页面
	var commentAdd = $('#btnAssess');
	commentAdd.on('tap',function(){
		console.log('comment');
		location.href = "pro-comment.html";
	});
	
	var slider = mui("#slider");
	slider.slider({
			interval: 5000
	});
	

//	修改商品数量
	var number = $('#number');
	var amount = $('#amount');
	function minus(){
		var val = number.val();
		val--;
		if(val < 1){
			return;
		}
		number.val(val);
		amount.text(val+"件");
	}
//	function plus(){
//		var val = number.val();
//		val++;
//		number.val(val);
//		amount.text(val+"件");
//	}
	function modify(){
		var val = number.val();
		console.log(typeof val);
		var num = parseInt(val);
		console.log(num);
		console.log(typeof num);
		if(isNaN(num)){
			number.val(1);
		}
		val = number.val();
		amount.text(val+"件");
	}
//  商品选择
	var btn = $('.pro-size a.a-item');
	var groupLen = $('.pro-size').length;
	btn.on('tap',function(){
		$(this).addClass('selected');
		console.log($(this).parent());
		var items = $(this).parent().children();
		for(var i =0;i< items.length;i++){
			if(!(items[i] === this)){
				$(items[i]).removeClass('selected');
			}
		}
		var selectedTen = $('.pro-size  a.a-item.selected');
	
		var tenVal = $(selectedTen[0]).text();
		var sizeVal = $(selectedTen[1]).text();
		console.log(tenVal + "," + sizeVal);
		var price = $('.yang-pic-price');
		var arr = ["749.00","647.00","299.00"];
		
		var pickSize = $('.pick-size');
		var pickTenacy = $('.pick-tenacy');
		
		if(selectedTen.length === groupLen){
			for(var j=selectedTen.length;j>0;j--){
				var btnVal = $(selectedTen[j]).text();
				console.log(btnVal);
			}
//			pickSize.text(sizeVal);
//			pickTenacy.text(tenVal);
			console.log(pickTenacy.text());
//			ajax发送请求计算价格
			/* todo */
//			$.ajax({
//				type:"post",
//				url:"",
//				data:{
//					size: sizeVal,
//					tenacy: tenVal
//				}
//				async:false,
//				success: function(result){
//					price.text(result);
//				}
//			});


//			模拟效果
//			switch(pickSize.text()){
//				case "30平米":
//				   price.text(arr[0]);
//				   break;
//				case "50平米":
//				   price.text(arr[1]);
//				   break;
//				case "60平米":
//				   price.text(arr[2]);
//				   break;
//			}
		}
	});

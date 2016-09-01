function defended(swiper,startX,endX,end){
	swiper.on('dragstart',function(e){
		startX = Number(e['detail'].touches[0].pageX);
				
		swiper.find('.swiper-wrapper').css({
			transitionDuration: "0ms"
		});
	});
	swiper.on("drag",function(e){
		var maxLen = $(window).width();
		var x = (e['detail'].touches[0].pageX);
		var moveX = x - startX;
		
		tabView = $(this) ;
		end = end == undefined? 0 : end
		swiper.find('.swiper-wrapper').css({
			transform: 'translate3d('+ (end + moveX) + 'px,0,0)',
		});
		
	});
	swiper.on('dragend',function(e){
		endX = Number(e['detail'].touches[0].pageX);
		var endMove = endX - startX;
		var cellWidth = swiper.find('.sx-table-row').width();
		var cellLen = cellWidth + 22;
		var matrix = swiper.find('.swiper-wrapper').css('transform').split(',');
		end = Math.round(matrix[4]);
		var aniX = endMove%cellLen;
		setTimeout(function(){
			swiper.find('.swiper-wrapper').css({
				transitionDuration: "300ms"
			});
			if(Math.abs(endMove) >= cellLen/3){
				var diff = end%cellLen;
				if(aniX >= 0){
					swiper.find('.swiper-wrapper').css({
						transform: 'translate3d('+ (end - diff) + 'px,0,0)',
					});
					end = end -diff;
				}else {
					before = cellLen - Math.abs(diff);
					swiper.find('.swiper-wrapper').css({
						transform: 'translate3d('+ (end - before) + 'px,0,0)',
					});
					end = end - before;
				}
			}else {
				var diff = end%cellLen;
				if(aniX >= 0){
					if(Math.abs(end) > cellLen){
						swiper.find('.swiper-wrapper').css({
							transform: 'translate3d('+ (end - diff - cellLen) + 'px,0,0)',
						});
						end = end - diff - cellLen;
					}else{
						swiper.find('.swiper-wrapper').css({
							transform: 'translate3d('+ (end - diff ) + 'px,0,0)',
						});
						end = end- diff;
					}
					
					
				}else{
					before = cellLen - Math.abs(diff);
					swiper.find('.swiper-wrapper').css({
						transform: 'translate3d('+ (end - before + cellLen) + 'px,0,0)',
					});
					end = end - before +cellLen;
				}
			}
			if(end > 0){
				swiper.find('.swiper-wrapper').css({
					transform: 'translate3d('+ 0 + 'px,0,0)',
				});
				end = 0;
			}else if(end < -cellLen * (swiper.find('.swiper-wrapper').children().length - 1)){
				console.log("out of range");
				swiper.find('.swiper-wrapper').css({
					transform: 'translate3d('+ -cellLen * (swiper.find('.swiper-wrapper').children().length - 1) + 'px,0,0)',
				});
				end = -cellLen * (swiper.find('.swiper-wrapper').children().length - 1);
			}
			var index = Math.abs(end/cellLen);
			var bullet = $('.swiper-pagination');
//						console.log(bullet);
			for(var i =0;i<bullet.children().length;i++){
				if(i === index){
					$(bullet.children()[i]).addClass('.swiper-pagination-bullet-active');
					$(bullet.children()[i]).css({
							opacity: "1",
							background: "#007aff"
					});
				}else{
					$(bullet.children()[i]).removeClass('.swiper-pagination-bullet-active');
					$(bullet.children()[i]).css({
							opacity: ".2",
							background: "#000"
					});
				}
			}
//			console.log(bullet.children()[index]);
		},150);
	
	});
}
	

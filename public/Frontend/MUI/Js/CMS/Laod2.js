mui.init();
(function($) {
	//阻尼系数
	var deceleration = mui.os.ios ? 0.003 : 0.0009;
	$('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration: deceleration
	});
	$.ready(function() {
		//循环初始化所有下拉刷新，上拉加载。
		$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
			$(pullRefreshEl).pullToRefresh({
				down: {
					callback: function() {
						var self = this;
						setTimeout(function() {
							var ul = self.element.querySelector('.mui-table-view');
							ul.insertBefore(createFragment(ul, index, 5, true), ul.firstChild);
							self.endPullDownToRefresh();
						}, 1000);
					}
				},
				up: {
					callback: function() {
						var self = this;
						setTimeout(function() {
							var ul = self.element.querySelector('.mui-table-view');
							ul.appendChild(createFragment(ul, index, 5));
							self.endPullUpToRefresh();
						}, 1000);
					}
				}
			});
		});
		var createFragment;
		$.ajax({
			type: "get",
			url: "Json/Laod.json",
			dataType: "json",
			success: function lists(data) {
				var $table = $(".mui-table-view");
				console.log($table);
				var $li = '';
				createFragment = function(ul, index, count, reverse) {
					var length = ul.querySelectorAll('.mui-table-view-cell').length;
					console.log(length);
					var fragment = document.createDocumentFragment();
					var li;
					for (var i = 0; i < count; i++) {
						li = document.createElement('li');
						li.className = 'mui-table-view-cell';
						var num = length + (reverse ? (count - i) : (i + 1));
						console.log(num);
						if(num>data.lists.length){
							return fragment;
						}
						if (data.lists[num - 1].pic.length != 0) {
							if (data.lists[num - 1].pic.length >= 1 && data.lists[num - 1].pic.length < 3) {
								li.innerHTML = '<ul class="doc1"><li class="doc1-infor"><span class="infor-tittle">' 
								+ data.lists[num - 1].infor_tittle+ '</span><span class="infor-describe">' 
								+ data.lists[num - 1].infor_describe+ '</span><a>'
								+ data.lists[num - 1].day + '</a><a>' 
								+ data.lists[num - 1].read + '</a></li><li class="doc1-pic"><img src="' 
								+ data.lists[num - 1].pic[0] + '"/></li></ul>';

							} else if (data.lists[num - 1].pic.length >= 3) {
								li.innerHTML = '<ul class="doc2"><li class="doc2-infor"><span class="infor-tittle">' 
								+ data.lists[num - 1].infor_tittle + '</span><a>' 
								+ data.lists[num - 1].day + '</a><a>' 
								+ data.lists[num - 1].read + '</a><span class="infor-describe">' 
								+ data.lists[num - 1].infor_describe + '</span></li><li class="doc2-pic"><img style="width:32%;" src="' 
								+ data.lists[num - 1].pic[0] + '" />' + '<img style="width:32%;" src="' 
								+ data.lists[num - 1].pic[1] + '" />' + '<img style="width:32%;" src="' 
								+ data.lists[num - 1].pic[2] + '" /></li></ul>';
							}
						} else {
							li.innerHTML = '<ul class="doc3"><li class="doc3-infor"><span class="infor-tittle">' 
							+ data.lists[num - 1].infor_tittle + '</span><a>' 
							+ data.lists[num - 1].day + '</a><a>' 
							+ data.lists[num - 1].read + '</a><span class="infor-describe">' 
							+ data.lists[num - 1].infor_describe + '</span></li></ul>';
						};
						console.log(li);
						fragment.appendChild(li);
					}
					return fragment;
				};
			},
			error: function(xhr, type, errorThrown) {
				console.log(type);
			}
		});
	});
})(mui);
function chart(id) {
	if (id == 1) {
		var dom1 = document.getElementById("container1");
		var myChart1 = echarts.init(dom1);
		var dom2 = document.getElementById("container2");
		var myChart2 = echarts.init(dom2);
		var app = {};
		var option1, option2;
		var data = [];
		var phValue = 8;
		option1 = {
			tooltip: {
				formatter: "{a} <br/>{c} {b}"
			},
			toolbox: {
				show: true,
				feature: {
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			series: [{
				name: '',
				type: 'gauge',
				center: ["50%", "70%"],
				z: 3,
				min: 0,
				max: 14,
				splitNumber: 7,
				radius: '100%',
				startAngle: 155,
				endAngle: 25,
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						width: 3,
						shadowColor: 'rgba(0, 0, 0, 0.5)',
						shadowBlur: 3,
						color: [
							[0.3, '#4FEBEC'],
							[0.8, '#99BD0D'],
							[1, '#F55631']
						]
					}
				},
				axisTick: { // 坐标轴小标记
					length: 7, // 属性length控制线长
					splitNumber: 2,
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: { // 分隔线
					length: 9, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				title: {
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 14,
						fontStyle: 'italic'
					},
				},
				pointer: {
					width: 3
				},
				detail: {
					formatter: function(value) {
						if (value < 7) {
							return "碱性";
						} else if (value == 7) {
							return "中性";
						} else if (value > 7) {
							return "酸性";
						}
					},
					offsetCenter: [0, '25%'],
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 13,
						color:'#666666'
					},
				},
				data: [{
					value: 8,
					name: '' + phValue
				}]
			}]
		};
		option2 = {
			tooltip: {
				formatter: "{a} <br/>{c} {b}"
			},
			toolbox: {
				show: true,
				feature: {
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			series: [{
				name: '水分',
				type: 'gauge',
				center: ['50%', '70%'], // 默认全局居中
				radius: '100%',
				min: 0,
				max: 100,
				startAngle: 155,
				endAngle: 25,
				splitNumber: 4,
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						width: 4,
						color: [
							[0.2, '#A8E6DB'],
							[0.4, '#6CDCE2'],
							[0.6, '#6DE6DC'],
							[0.8, '#27ADE2'],
							[1, '#0080DE']
						]
					}
				},
				axisTick: { // 坐标轴小标记
					length: 7,
					splitNumber: 4, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel:{
					textStyle:{
						fontSize: 7
					}
			
				},
				splitLine: { // 分隔线
					length: 9, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width: 3
				},
				title: {
					offsetCenter: [0, '-35%'], // x, y，单位px
					textStyle: {
						fontSize: 12
					}
				},
				detail: {
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 13,
						color: '#666666'
					},
					offsetCenter: [0, '25%'],
					formatter: function(value) {
						if (value < 20) {
							return "含水量" + value + "%\n水分不足";
						} else if (value <= 70 && value >= 20) {
							return "含水量" + value + "%\n水分充足";
						} else if (value > 70) {
							return "含水量" + value + "%\n过饱和";
						}
					}
				},
				data: [{
					value: 4,
					name: ""
				}]
			}]
		}
		myChart1.setOption(option1, true);
		myChart2.setOption(option2, true);
	} else if (id == 2) {
		var dom = document.getElementById("container");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		var data = [];

		//    	for (var i = 0; i <= 360; i++) {
		//		    var t = i / 180 * Math.PI;
		//		    var r = Math.sin(2 * t) * Math.cos(2 * t);
		//		    data.push([r, i]);
		//		}

		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				selectedMode: false,
				data: ['发芽期', '幼苗期', '挂果期', '成熟期', '已种植']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'value'
			},
			yAxis: {
				type: 'category',
				data: ['实际', '参考']
			},
			series: [{
				name: '发芽期',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'insideRight'
					}
				},
				data: [{
					value: 9,
					itemStyle: {
						normal: {
							color: 'rgba(80,191,36,1)',
							shadowColor: 'rgba(0,0,0,0.5)',
							shadowBlur: 10
						}
					}
				}, 10]
			}, {
				name: '幼苗期',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'insideRight'
					}
				},
				data: [{
					value: 18,
					itemStyle: {
						normal: {
							color: 'rgba(125,160,107,1)',
							shadowColor: 'rgba(0,0,0,0.5)',
							shadowBlur: 10
						}
					}
				}, 20]
			}, {
				name: '挂果期',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'insideRight'
					}
				},
				data: [{
					value: 17,
					itemStyle: {
						normal: {
							color: 'rgba(107,247,196,0.88)',
							shadowColor: 'rgba(0,0,0,0.5)',
							shadowBlur: 10
						}
					}
				}, 20]
			}, {
				name: '成熟期',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'insideRight'
					}
				},
				data: [{
					value: 0,
					label: {},
					itemStyle: {
						normal: {
							color: 'rgba(186,64,218,0.9)',
							shadowColor: 'rgba(0,0,0,0.5)',
							shadowBlur: 10
						}
					}
				}, 20]
			}, {
				name: '已种植',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'insideRight'
					}
				},
				data: [{
					value: 8,
					itemStyle: {
						normal: {
							color: 'rgba(255,110,52,1)',
							shadowColor: 'rgba(0,0,0,0.5)',
							shadowBlur: 10
						}
					}
				}, 0]
			}]
		};;
		if (option && typeof option === "object") {
			var startTime = +new Date();
			myChart.setOption(option, true);
		}

	} else if (id == 3) {

	} else if (id == 4) {

	}
}

function radius(radius,$time_span,$pie1,$pie2) {
	var i = 0,
		j = 0,
		count = 0,
		MM = 4,
		SS = 59,
		MS = 9,
		totle = (MM + 1) * 600,
		d = 180 * (MM + 1),
		MM = "0" + MM,
		percent = 0,
		t1, t2;

	//	s = setInterval(function showTime() {
	//		totle = totle - 1;
	//		var rotate = $(".pie1").css("transform");
	//		percent += 0.166;
	//		if (percent > 100) {
	//			percent = 0;
	//		}
	//		$(".time span").html(Math.round(percent) + "%");
	//		if (Math.round(percent) == radius) {
	//			clearInterval(t1);
	//			//			clearInterval(t2);
	//			clearInterval(s);
	//			console.log(i)
	//		}
	//	}, 1);

	//	t1 = setInterval(function start1() {
	//		i = i + 0.6;
	//		$(".pie1").css("-o-transform", "rotate(" + i + "deg)");
	//		$(".pie1").css("-moz-transform", "rotate(" + i + "deg)");
	//		$(".pie1").css("-webkit-transform", "rotate(" + i + "deg)");
	//	}, 1);
	$time_span.html(radius + "%");
	if (radius > 50) {
		$pie2.css("-webkit-transform", "rotate(" + (360*(radius/100)-180) +"deg)");
		$pie1.css("-webkit-transform", "rotate(" + 180 +"deg)");
	} else {
		$pie1.css("-webkit-transform", "rotate(" + 360*(radius/100) +"deg)");
//		$(".pie2").css("-webkit-transform", "rotate(" +  +"deg)");
	}
}





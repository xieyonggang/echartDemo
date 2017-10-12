var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)'
    }
};

var fuzaijunhengGTM1chart = echarts.init(document.getElementById('fuzaijunhengGTM1'),'chalk');
var fuzaijunhengGTM1option = {
    series: [{
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        //center: ['75%', '50%'],
        data: [{
            value: 75,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '8',
                        fontWeight: 'normal',
                        color: '#a6f08f'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#a6f08f',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }]
	}]
};
fuzaijunhengGTM1chart.setOption(fuzaijunhengGTM1option);

var fuzaijunhengGTM2chart = echarts.init(document.getElementById('fuzaijunhengGTM2'),'chalk');
var fuzaijunhengGTM2option = {
    series: [{
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        //center: ['75%', '50%'],
        data: [{
            value: 75,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '8',
                        fontWeight: 'normal',
                        color: '#a6f08f'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#a6f08f',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }]
	}]
};
fuzaijunhengGTM2chart.setOption(fuzaijunhengGTM2option);

var fuzaijunhengLTM1chart = echarts.init(document.getElementById('fuzaijunhengLTM1'),'chalk');
var fuzaijunhengLTM1option = {
    series: [{
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 75,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '8',
                        fontWeight: 'normal',
                        color: '#a6f08f'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#a6f08f',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }]
	}]
};
fuzaijunhengLTM1chart.setOption(fuzaijunhengLTM1option);

var fuzaijunhengLTM2chart = echarts.init(document.getElementById('fuzaijunhengLTM2'),'chalk');
var fuzaijunhengLTM2option = {
    series: [{
        type: 'pie',
        clockWise: false,
        radius: ['50%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        //center: ['75%', '50%'],
        data: [{
            value: 75,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '8',
                        fontWeight: 'normal',
                        color: '#a6f08f'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#a6f08f',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }]
	}]
};
fuzaijunhengLTM2chart.setOption(fuzaijunhengLTM2option);

//make it update

var fuzaijunhengcharts = [];
fuzaijunhengcharts.push(fuzaijunhengGTM1chart);
fuzaijunhengcharts.push(fuzaijunhengGTM2chart);
fuzaijunhengcharts.push(fuzaijunhengLTM1chart);
fuzaijunhengcharts.push(fuzaijunhengLTM2chart);

//setInterval(updatefuzaijunheng, 3000);

function updatefuzaijunheng() {
	for (var i = 0;  i< fuzaijunhengcharts.length; i++) {
	    var data = [];
		var last = 1;
		for (var j = 0; j < 4; ++j) {
			last = Math.floor(last * (Math.random() * 0.5 + 0.5)
				* 100) / 100;
			data.push(last);
		}
	
		fuzaijunhengcharts[i].setOption({
			series: [{
				data: data
			}]
		});
	}
}
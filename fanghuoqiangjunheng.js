var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date1 = [];

var data1 = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date1.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data1.push(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
}

fanghuoqianggaojingoption = {
    color : ['#4cabce'],
	title : {
        text: '告警增长趋势',
        color: '#fff',
        left: 'center',
        top: 'top',
		fontSize: 14
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '告警次数',
			color: '#fff',
			nameLocation: 'end',
			nameGap: 20,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16
			},
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            max: 500,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'告警次数',
            type:'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 100) +400);
                }
                return res;
            })()
        }
    ]
};

var fanghuoqianggaojingchart = echarts.init(document.getElementById('fanghuoqianggaojing'),'chalk');
fanghuoqianggaojingchart.setOption(fanghuoqianggaojingoption);

setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = fanghuoqianggaojingoption.series[0].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 100) + 400);

    fanghuoqianggaojingoption.xAxis[0].data.shift();
    fanghuoqianggaojingoption.xAxis[0].data.push(axisData);

    fanghuoqianggaojingchart.setOption(fanghuoqianggaojingoption);
}, 2100);

fanghuoqiangFW01option = {
    xAxis: {
        type : 'category',
          show : false
    },
	grid: [
        {x: '80%', y: '90%'}
    ],
    yAxis: {
        type : 'value',
        show : false
    },
    series: [
        {
            type: 'bar',
            stack: 'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#a6f08f'
                },
            },
			label: {
                normal: {
					formatter: '南海OP-FW',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 10,
					fontSize : 10,
					fontWeight: 'bolder',
					color : '#fff'
                }
            },
            data:[90]
        },{
            type: 'bar',
            stack:  'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
            },
            data: [10]
        }
    ]
};


var fanghuoqiangFW01chart = echarts.init(document.getElementById('fanghuoqiangFW01'),'chalk');
fanghuoqiangFW01chart.setOption(fanghuoqiangFW01option);

fanghuoqiangFW02option = {
    grid: [
        {x: '80%', y: '90%'}
    ],
    xAxis: {
        type : 'category',
          show : false
    },
    yAxis: {
        type : 'value',
        show : false
    },
    series: [
        {
            type: 'bar',
            stack: 'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#a6f08f'
                },
            },
			label: {
                normal: {
					formatter: '南海NAS-FW',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 10,
					fontSize : 10,
					fontWeight: 'bolder',
					color : '#fff'
                }
            },
            data:[90]
        },{
            type: 'bar',
            stack:  'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
            },
            data: [10]
        }
    ]
};


var fanghuoqiangFW02chart = echarts.init(document.getElementById('fanghuoqiangFW02'),'chalk');
fanghuoqiangFW02chart.setOption(fanghuoqiangFW02option);

fanghuoqiangEB01option = {
    grid: [
        {x: '80%', y: '90%'}
    ],
	xAxis: {
        type : 'category',
          show : false
    },
    yAxis: {
        type : 'value',
        show : false
    },
    series: [
        {
            type: 'bar',
            stack: 'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#a6f08f'
                },
            },
			label: {
                normal: {
					formatter: '南海EX-FW',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 10,
					fontSize : 10,
					fontWeight: 'bolder',
					color : '#fff'
                }
            },
            data:[90]
        },{
            type: 'bar',
            stack:  'full',
			barWidth : 20,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
            },
            data: [10]
        }
    ]
};


var fanghuoqiangEB01chart = echarts.init(document.getElementById('fanghuoqiangEB01'),'chalk');
fanghuoqiangEB01chart.setOption(fanghuoqiangEB01option);

fanghuoqiangEB02option = {
    grid: [
        {x: '80%', y: '90%'}
    ],
	xAxis: {
        type : 'category',
          show : false
    },
    yAxis: {
        type : 'value',
        show : false
    },
    series: [
        {
            type: 'bar',
            stack: 'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#a6f08f'
                },
            },
			label: {
                normal: {
					formatter: '南海OA-FW',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 10,
					fontSize : 10,
					fontWeight: 'bolder',
					color : '#fff'
                }
            },
            data:[90]
        },{
            type: 'bar',
            stack:  'full',
			barWidth : 15,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
            },
            data: [10]
        }
    ]
};


var fanghuoqiangEB02chart = echarts.init(document.getElementById('fanghuoqiangEB02'),'chalk');
fanghuoqiangEB02chart.setOption(fanghuoqiangEB02option);


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
	title : {
        text: '告警增长趋势',
        color: '#fff',
        left: 'center',
        top: 'top',
		fontSize: 14
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date1
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data1
        }
    ]
};

var fanghuoqianggaojingchart = echarts.init(document.getElementById('fanghuoqianggaojing'),'chalk');
fanghuoqianggaojingchart.setOption(fanghuoqianggaojingoption);


fanghuoqiangFW01option = {
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
                    color: '#0f0'
                },
            },
			label: {
                normal: {
					formatter: 'FW01',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 20
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
                    color: '#0f0'
                },
            },
			label: {
                normal: {
					formatter: 'FW02',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 20
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
                    color: '#0f0'
                },
            },
			label: {
                normal: {
					formatter: 'EB01',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 20
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


var fanghuoqiangEB01chart = echarts.init(document.getElementById('fanghuoqiangEB01'),'chalk');
fanghuoqiangEB01chart.setOption(fanghuoqiangEB01option);

fanghuoqiangEB02option = {
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
                    color: '#0f0'
                },
            },
			label: {
                normal: {
					formatter: 'EB02',
                    show: true,
                    position: 'left',
                    left : 'center',
					distance : 20
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


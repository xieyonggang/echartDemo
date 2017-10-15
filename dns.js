
var dns01chart = echarts.init(document.getElementById('dns01'),'chalk');
var dns01option = {
    series: [
        {
            type:'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:90, name:'Good'},
				{value:10, name:'bad'}
            ]
        }
    ]
};
dns01chart.setOption(dns01option);

var dns02chart = echarts.init(document.getElementById('dns02'),'chalk');
var dns02option = {
    series: [
        {
            type:'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:90, name:'Good'},
				{value:10, name:'bad'}
            ]
        }
    ]
};
dns02chart.setOption(dns02option);

var dns03chart = echarts.init(document.getElementById('dns03'),'chalk');
var dns03option = {
    series: [
        {
            type:'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:90, name:'Good'},
				{value:10, name:'bad'}
            ]
        }
    ]
};
dns03chart.setOption(dns03option);

var dns04chart = echarts.init(document.getElementById('dns04'),'chalk');
var dns04option = {
    series: [
        {
            type:'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:90, name:'Good'},
				{value:10, name:'bad'}
            ]
        }
    ]
};
dns04chart.setOption(dns04option);

//make it update

var dnscharts = [];
dnscharts.push(dns01chart);
dnscharts.push(dns02chart);
dnscharts.push(dns03chart);
dnscharts.push(dns04chart);

setInterval(updatedns, 3000);

function updatedns() {
	for (var i = 0;  i< dnscharts.length; i++) {
	    var data = [];
		item = {};
		item.value = Math.floor(Math.random() * 10 + 90); 
		item.name = 'good';
		item2 = {};
		item2.value = 100-item.value ; 
		item2.name = 'bad';
		data.push(item);
		data.push(item2);
	
		dnscharts[i].setOption({
			series: [{
				data: data
			}]
		});
	}
}

// Generate data
var category = [];
var lineData = [];

for (var i = 0; i < 8; i++) {
    var b = Math.random() * 10 + 90;
    category.push('DNS'+(i+1));
    lineData.push(b);
}


var dnsgaojingoption = {
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        name: '告警次数',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        max: 100,
        min: 70,
    },
    series: [{
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 15,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'red'},
                        {offset: 0.2, color: 'blue'},
                        {offset: 1, color: 'green'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 5],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};

var dnsgaojingchart = echarts.init(document.getElementById('dnsgaojing'),'chalk');
dnsgaojingchart.setOption(dnsgaojingoption);

setInterval(function (){

	var lineData0 = [];
	var category0 = [];
	for (var i = 0; i < 8; i++) {
	    //var a ='DNS'+(Math.floor(Math.random() * 50)+1);
	    //category0.push(a);
		var b = Math.floor(Math.random() * 10) + 90 + 1;
		lineData0.push(b);
	}
	
	dnsgaojingoption.series[0].data = lineData0;
	dnsgaojingoption.series[1].data = lineData0;
	//dnsgaojingoption.xAxis.data = category0;
    dnsgaojingchart.setOption(dnsgaojingoption);
	
},4000)
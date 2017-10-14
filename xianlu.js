var xianluline01chart = echarts.init(document.getElementById('xianluline01'),'chalk');
var xianluline01option = {
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 50;
                while (len--) {
                    res.push((new Date()).toLocaleTimeString().replace(/^\D*/,''));
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            scale: true,
            name: '',
            max: 100,
            min: 75,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len <50) {
                    res.push((Math.random()*20 + 80));
                    len++;
                }
                return res;
            })()
        }
    ]
};
xianluline01chart.setOption(xianluline01option);



var xianluline02chart = echarts.init(document.getElementById('xianluline02'),'chalk');
var xianluline02option = {
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 50;
                while (len--) {
                    res.push((new Date()).toLocaleTimeString().replace(/^\D*/,''));
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            scale: true,
            name: '',
            max: 100,
            min: 75,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len <50) {
                    res.push((Math.random()*20 + 80));
                    len++;
                }
                return res;
            })()
        }
    ]
};
xianluline02chart.setOption(xianluline02option);

var xianluline03chart = echarts.init(document.getElementById('xianluline03'),'chalk');
var xianluline03option = {
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 50;
                while (len--) {
                    res.push((new Date()).toLocaleTimeString().replace(/^\D*/,''));
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            scale: true,
            name: '',
            max: 100,
            min: 75,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len <50) {
                    res.push((Math.random()*20 + 80));
                    len++;
                }
                return res;
            })()
        }
    ]
};
xianluline03chart.setOption(xianluline03option);

var xianluline04chart = echarts.init(document.getElementById('xianluline04'),'chalk');
var xianluline04option = {
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 50;
                while (len--) {
                    res.push((new Date()).toLocaleTimeString().replace(/^\D*/,''));
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
			axisLine: {
				lineStyle: {
					color: '#eee'
				}
			},
            scale: true,
            name: '',
            max: 100,
            min: 75,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len <50) {
                    res.push((Math.random()*20 + 80));
                    len++;
                }
                return res;
            })()
        }
    ]
};
xianluline04chart.setOption(xianluline04option);

//make it update
setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = xianluline01option.series[0].data;
    data0.shift();
    data0.push((Math.random()*20 + 80));

    xianluline01option.xAxis[0].data.shift();
    xianluline01option.xAxis[0].data.push(axisData);

    xianluline01chart.setOption(xianluline01option);
}, 2100);



setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = xianluline02option.series[0].data;
    data0.shift();
    data0.push((Math.random()*20 + 80));

    xianluline02option.xAxis[0].data.shift();
    xianluline02option.xAxis[0].data.push(axisData);

    xianluline02chart.setOption(xianluline02option);
}, 2100);

setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = xianluline03option.series[0].data;
    data0.shift();
    data0.push((Math.random()*20 + 80));

    xianluline03option.xAxis[0].data.shift();
    xianluline03option.xAxis[0].data.push(axisData);

    xianluline03chart.setOption(xianluline03option);
}, 2100);

setInterval(function (){
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    var data0 = xianluline04option.series[0].data;
    data0.shift();
    data0.push((Math.random()*20 + 80));

    xianluline04option.xAxis[0].data.shift();
    xianluline04option.xAxis[0].data.push(axisData);

    xianluline04chart.setOption(xianluline04option);
}, 2100);

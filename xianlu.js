var xianluline01chart = echarts.init(document.getElementById('xianluline01'),'chalk');
var xianluline01option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [1.0,0.8,0.9],
        label: {
            normal: {
                textStyle: {
                fontSize: 10,
                fontFamily: 'Lobster Two'
                }
            }
        },
        outline: {
            show: false
        },
		amplitude: 0,
        //waveAnimation: false,
        //silent: true
    }]
};
xianluline01chart.setOption(xianluline01option);

var xianluline02chart = echarts.init(document.getElementById('xianluline02'),'chalk');
var xianluline02option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [1.0,0.8,0.9],
        label: {
            normal: {
                textStyle: {
                fontSize: 10,
                fontFamily: 'Lobster Two'
                }
            }
        },
        outline: {
            show: false
        },
		amplitude: 0,
        //waveAnimation: false,
        //silent: true
    }]
};
xianluline02chart.setOption(xianluline02option);

var xianluline03chart = echarts.init(document.getElementById('xianluline03'),'chalk');
var xianluline03option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [1.0,0.8,0.9],
        label: {
            normal: {
                textStyle: {
                fontSize: 10,
                fontFamily: 'Lobster Two'
                }
            }
        },
        outline: {
            show: false
        },
		amplitude: 0,
        //waveAnimation: false,
        //silent: true
    }]
};
xianluline03chart.setOption(xianluline03option);

var xianluline04chart = echarts.init(document.getElementById('xianluline04'),'chalk');
var xianluline04option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [1.0,0.8,0.9],
        label: {
            normal: {
                textStyle: {
                fontSize: 10,
                fontFamily: 'Lobster Two'
                }
            }
        },
        outline: {
            show: false
        },
		amplitude: 0,
        //waveAnimation: false,
        //silent: true
    }]
};
xianluline04chart.setOption(xianluline04option);

//make it update

var xianlulinecharts = [];
xianlulinecharts.push(xianluline01chart);
xianlulinecharts.push(xianluline02chart);
xianlulinecharts.push(xianluline03chart);
xianlulinecharts.push(xianluline04chart);

setInterval(updateXianlu, 3000);

function updateXianlu() {
	for (var i = 0;  i< xianlulinecharts.length; i++) {
	    var data = [];
		var last = 1;
		for (var j = 0; j < 4; ++j) {
			last = Math.floor(last * (Math.random() * 0.5 + 0.5)
				* 100) / 100;
			data.push(last);
		}
	
		xianlulinecharts[i].setOption({
			series: [{
				data: data
			}]
		});
	}
}
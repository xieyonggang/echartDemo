var duankouG01chart = echarts.init(document.getElementById('duankouG01'),'chalk');
var duankouG01option = {
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
duankouG01chart.setOption(duankouG01option);

var duankouG02chart = echarts.init(document.getElementById('duankouG02'),'chalk');
var duankouG02option = {
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
duankouG02chart.setOption(duankouG02option);

var duankouG03chart = echarts.init(document.getElementById('duankouG03'),'chalk');
var duankouG03option = {
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
duankouG03chart.setOption(duankouG03option);

var duankouG04chart = echarts.init(document.getElementById('duankouG04'),'chalk');
var duankouG04option = {
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
duankouG04chart.setOption(duankouG04option);

//make it update

var duankoucharts = [];
duankoucharts.push(duankouG01chart);
duankoucharts.push(duankouG02chart);
duankoucharts.push(duankouG03chart);
duankoucharts.push(duankouG04chart);

setInterval(updateDuankou, 3000);

function updateDuankou() {
	for (var i = 0;  i< duankoucharts.length; i++) {
	    var data = [];
		var last = 1;
		for (var j = 0; j < 4; ++j) {
			last = Math.floor(last * (Math.random() * 0.5 + 0.5)
				* 100) / 100;
			data.push(last);
		}
	
		duankoucharts[i].setOption({
			series: [{
				data: data
			}]
		});
	}
}
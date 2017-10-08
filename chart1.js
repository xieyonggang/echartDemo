// based on prepared DOM, initialize echarts instance
var chart1 = echarts.init(document.getElementById('chart1'),'chalk');

// specify chart configuration item and data
var chart1option = {
	title: {
		text: ''
	},
	tooltip: {},
	xAxis: {
		data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
	},
	yAxis: {},
	series: [{
		name: 'Sales',
		type: 'bar',
		itemStyle: {
            normal: {
                color: 'green'
            }
        },
		data: [5, 20, 36, 10, 10, 20]
	}]
};

// use configuration item and data specified to show chart
chart1.setOption(chart1option);
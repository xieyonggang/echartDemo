// based on prepared DOM, initialize echarts instance
var chart4 = echarts.init(document.getElementById('chart4'),'chalk');

// specify chart configuration item and data
var chart4option = {
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
		data: [5, 20, 36, 10, 10, 20]
	}]
};

// use configuration item and data specified to show chart
chart4.setOption(chart4option);
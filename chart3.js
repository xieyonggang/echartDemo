// based on prepared DOM, initialize echarts instance
var chart3 = echarts.init(document.getElementById('chart3'),'chalk');

// specify chart configuration item and data
var chart3option = {
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
chart3.setOption(chart3option);
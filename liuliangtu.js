// based on prepared DOM, initialize echarts instance


dangqianliuliangOption = null;
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
	'南海': [113.146094,23.042702],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
	'台北': [121.538333,25.095905],
	'澳门': [113.546589,22.192651],
	'韶关': [113.606976,24.809321],
	'清远': [113.065917,23.686906],
	'梅州': [116.128387,24.296022],
	'河源': [114.701697,23.749949],
	'汕头': [116.689104,23.359888],
	'惠州': [114.391363,23.091096],
	'东莞': [113.866504,23.093545],
	'佛山': [113.10724,23.016317],
	'肇庆': [112.46344,23.093585],
	'中山': [113.395973,22.512967],
	'珠海': [113.575081,22.279508],
	'江门': [113.575081,22.279508],
	'阳江': [111.986764,21.862998],
	'茂名': [110.932693,21.668795],
	'湛江': [110.357505,21.275376]
	
};

var CHINAData = [
    [{name:'南海'},{name:'哈尔滨',value:95}],
    [{name:'南海'},{name:'沈阳',value:90}],
    [{name:'南海'},{name:'大连',value:80}],
    [{name:'南海'},{name:'北京',value:70}],
    [{name:'南海'},{name:'天津',value:60}],
    [{name:'南海'},{name:'石家庄',value:50}],
    [{name:'南海'},{name:'济南',value:40}],
    [{name:'南海'},{name:'郑州',value:30}],
	[{name:'南海'},{name:'西安',value:35}],
	[{name:'南海'},{name:'南京',value:85}],
    [{name:'南海'},{name:'苏州',value:20}],
    [{name:'南海'},{name:'合肥',value:10}],
	[{name:'南海'},{name:'上海',value:10}],
	[{name:'南海'},{name:'武汉',value:10}],
	[{name:'南海'},{name:'杭州',value:10}],
	[{name:'南海'},{name:'宁波',value:10}],
	[{name:'南海'},{name:'成都',value:10}],
	[{name:'南海'},{name:'重庆',value:10}],
	[{name:'南海'},{name:'长沙',value:10}],
	[{name:'南海'},{name:'南昌',value:10}],
	[{name:'南海'},{name:'福州',value:10}],
	[{name:'南海'},{name:'澳门',value:10}],
	[{name:'南海'},{name:'南宁',value:10}],
	[{name:'南海'},{name:'昆明',value:10}],
	[{name:'南海'},{name:'乌鲁木齐',value:45}]
];


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#003366', '#006699', '#4cabce', '#e5323e'];
var chinaSeries = [];
[['南海', CHINAData]].forEach(function (item, i) {
    chinaSeries.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'none',
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

dangqianliuliangOption = {
    title : {
        text: '骨干网当前流量（全国）',
        subtext: '',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
	visualMap: {
	    type: 'continuous',
        min : 0,
        max : 100,
        calculable : true,
		inRange: {
            color: ['orange', 'yellow','lime','aqua'],
            symbolSize: [2, 10]
        },
        textStyle:{
            color:'#fff'
        },
		show : false
    },
    geo: {
        map: 'china',
		zoom : 1.25,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#0098d9',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: chinaSeries
};
var dangqianliuliangchart = echarts.init(document.getElementById('dangqianliuliang'),'chalk');
if (dangqianliuliangOption && typeof dangqianliuliangOption === "object") {
    dangqianliuliangchart.setOption(dangqianliuliangOption, true);
}



var GDData = [
    [{name:'南海'},{name:'韶关',value:95}],
    [{name:'南海'},{name:'清远',value:90}],
    [{name:'南海'},{name:'梅州',value:80}],
    [{name:'南海'},{name:'河源',value:70}],
    [{name:'南海'},{name:'汕头',value:60}],
    [{name:'南海'},{name:'惠州',value:50}],
    [{name:'南海'},{name:'东莞',value:40}],
    [{name:'南海'},{name:'佛山',value:30}],
	[{name:'南海'},{name:'肇庆',value:35}],
	[{name:'南海'},{name:'中山',value:85}],
    [{name:'南海'},{name:'珠海',value:20}],
    [{name:'南海'},{name:'江门',value:10}],
	[{name:'南海'},{name:'阳江',value:10}],
	[{name:'南海'},{name:'茂名',value:10}],
	[{name:'南海'},{name:'广州',value:10}]
];

var gzSeries = [];
[['南海', GDData]].forEach(function (item, i) {
    gzSeries.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'none',
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

dangqianliuliang2Option = {
    title : {
        text: '骨干网当前流量（广东）',
        subtext: '',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
	visualMap: {
	    type: 'continuous',
        min : 0,
        max : 100,
        calculable : true,
		inRange: {
            color: ['#c12e34'],
            symbolSize: [2, 10]
        },
        textStyle:{
            color:'#fff'
        },
		show : false
    },
    geo: {
        map: '广东',
		zoom : 1.15,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#87f7cf',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: gzSeries
};

var dangqianliuliangchart2 = echarts.init(document.getElementById('dangqianliuliang2'),'chalk');
if (dangqianliuliang2Option && typeof dangqianliuliang2Option === "object") {
    dangqianliuliangchart2.setOption(dangqianliuliang2Option, true);
}

var guangzhoushujuchart = echarts.init(document.getElementById('guangzhoushuju'),'chalk');
var guangzhoushujuoption = {
    series : [
        {
            type:'gauge',
            min:0,
            max:100,
            splitNumber:10,
            radius: '90%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, 'lime']],
                    width: 5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
					fontSize: 2
                },
				show : false
            },
            axisTick: {            // 坐标轴小标记
                length :10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
					fontSize: 5
                }
            },
            splitLine: {           // 分隔线
                length :10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                // 分隔线
                width: 5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 15,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
					fontSize: 10
                },
				formatter : '{value}%'
            },
            data:[{value: 80, name: '广东数据中心'}]
        }
    ]
};
guangzhoushujuchart.setOption(guangzhoushujuoption);  



var yuanqushujuchart = echarts.init(document.getElementById('yuanqushuju'),'chalk');
var yuanqushujuoption = {
    series : [
        {
            type:'gauge',
            min:0,
            max:100,
            splitNumber:10,
            radius: '90%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, 'lime']],
                    width: 5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
					fontSize: 2
                },
				show : false
            },
            axisTick: {            // 坐标轴小标记
                length :10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
					fontSize: 5
                }
            },
            splitLine: {           // 分隔线
                length :10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                // 分隔线
                width: 5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 15,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
					fontSize: 10
                },
				formatter : '{value}%'
            },
            data:[{value: 80, name: '园区网络'}]
        }
    ]
};
yuanqushujuchart.setOption(yuanqushujuoption);  



var nanhaishujuchart = echarts.init(document.getElementById('nanhaishuju'),'chalk');
var nanhaishujuoption = {
    series : [
        {
            type:'gauge',
            min:0,
            max:100,
            splitNumber:10,
            radius: '90%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, '#1e90ff']],
                    width: 5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
					fontSize: 2
                },
				show : false
            },
            axisTick: {            // 坐标轴小标记
                length :10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
					fontSize: 5
                }
            },
            splitLine: {           // 分隔线
                length :10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                // 分隔线
                width: 5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 15,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
					fontSize: 10
                },
				formatter : '{value}%'
            },
            data:[{value: 60, name: '南海数据中心'}]
        }
    ]
};
nanhaishujuchart.setOption(nanhaishujuoption); 



var shenzhenzaibeichart = echarts.init(document.getElementById('shenzhenzaibei'),'chalk');
var shenzhenzaibeioption = {
    series : [
        {
            type:'gauge',
            min:0,
            max:100,
            splitNumber:10,
            radius: '90%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, '#1e90ff']],
                    width: 5,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5,
					fontSize: 2
                },
				show : false
            },
            axisTick: {            // 坐标轴小标记
                length :10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,
					fontSize: 5
                }
            },
            splitLine: {           // 分隔线
                length :10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                // 分隔线
                width: 5,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 15,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff',
					fontSize: 10
                },
				formatter : '{value}%'
            },
            data:[{value: 60, name: '深圳灾备中心'}]
        }
    ]
};
shenzhenzaibeichart.setOption(shenzhenzaibeioption);



setInterval(function (){
    guangzhoushujuoption.series[0].data[0].value = (90 +(Math.random()*10)).toFixed(0);
    nanhaishujuoption.series[0].data[0].value = (80 +(Math.random()*20)).toFixed(0);
	shenzhenzaibeioption.series[0].data[0].value = (70 +(Math.random()*30)).toFixed(0);
	yuanqushujuoption.series[0].data[0].value = (80 +(Math.random()*20)).toFixed(0);
    nanhaishujuchart.setOption(nanhaishujuoption); 
	guangzhoushujuchart.setOption(guangzhoushujuoption);
    shenzhenzaibeichart.setOption(shenzhenzaibeioption);
	yuanqushujuchart.setOption(yuanqushujuoption);
},2000)
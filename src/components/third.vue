<template>
  <div class="hello">
    <div id="n1">
        <span style="margin-right:20px;height:30px;line-height:30px;">产品名称:</span>
        <i-select :model.sync="model1" clearable  filterable placeholder="请选择产品" style="width:200px">
          <i-option v-for="item in cityList" :key="item.label" :value="item.value">{{ item.label }}</i-option>
        </i-select>

        <span style="margin-right:20px;height:30px;line-height:30px;">供应商名称:</span>
        <i-select :model.sync="model1" clearable  filterable placeholder="请选择供应商" style="width:200px">
          <i-option v-for="item in gongList" :key="item.label" :value="item.value">{{ item.label }}</i-option>
        </i-select>

        <span style="margin-right:20px;height:30px;line-height:30px;">预测时间:</span>
        <row>
            <i-col span="18">
                <Date-picker type="date" placeholder="选择日期" size="large" style="width: 200px"></Date-picker>
            </i-col>
        </row>
    </div>
    <div style="width:80%;margin-left:10%" >
      <i-table :columns="columns1" :data="data1"></i-table>
    </div>
    <Page v-if="item===1" :total="10000" show-elevator show-sizer style="margin-top:10px;margin-right:-60%"></Page>
    <!-- <div id="myChart" :style="{width: '500px', height: '500px'}"></div> -->
    <i-button style="width:200px;margin-left:75%;margin-top:10px;background-color:#D0E4FE">提交</i-button>
    <div style="display:flex;margin-top:20px;">
        <div class="gong">
            <span>供应商：</span>
            <Checkbox value="twitter"><span>供应商1</span></Checkbox>
            <Checkbox value="facebook"><span>供应商2</span></Checkbox>
            <Checkbox value="github"><span>供应商3</span></Checkbox>
            <Checkbox value="snapchat"><span>供应商4</span></Checkbox>
            <Checkbox value="snapchat"><span>供应商5</span></Checkbox>
            <Checkbox value="snapchat"><span>供应商6</span></Checkbox>
        </div>
            
        <div id="myChart"></div>
    </div>
    
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    name: 'HelloWorld',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        item: 1,
        value: '',
        cityList: [
            
            {
                value: 'wuji',
                label: '无机化工原料'
            },
            {
                value: 'huaxue',
                label: '化学矿'
            },
            {
                value: 'youji',
                label: '有机化工原料'
            },
            {
                value: 'suliao',
                label: '塑料原料'
            },
            {
                value: 'jiujing',
                label: '酒精'
            },
            {
                value: 'jiujing',
                label: '甲醇'
            }
        ],
        gongList: [
            {
                value: 'wuji',
                label: '供应商1'
            }
        ],
        model1: '',
        columns1: [
                        {
                            title: '供应商',
                            key: 'supplier',
                            align: 'center'
                        },
                        {
                            title: '产品名称',
                            key: 'titl',
                        },
                        {
                            title: '羚基化合物',
                            key: 'name1'
                        },
                        {
                            title: '还原高猛酸钾物质',
                            key: 'name2'
                        },
                        {
                            title: '水分',
                            key: 'name3'
                        },
                        {
                            title: '密度',
                            key: 'name4'
                        },
                        {
                            title: '蒸发残渣',
                            key: 'name5'
                        },
                        {
                            title: '酸度',
                            key: 'name6'
                        },
                        {
                            title: '碱度',
                            key: 'name7'
                        },
                        {
                            title: '质量评分',
                            key: 'name8'
                        }
                    ],
                    data1: [
                        {
                            supplier: "供应商1",
                            name1: 4.3,
                            titl: '甲醇20',
                            name2: 2.9,
                            name3: 5.0,
                            name4: 3.0,
                            name5: 1.00,
                            name8: 6,
                            name7: 2.00,
                            name6: 1.32
                        },
                        {
                            supplier: "供应商1",
                            name1: 3.3,
                            titl: '甲醇21',
                            name2: 4.3,
                            name3: 1.2,
                            name4: 2.1,
                            name5: 1.76,
                            name8: 7,
                            name7: 2.10,
                            name6: 2.13
                        },
                        {
                            supplier: "供应商1",
                            name1: 4.3,
                            titl: '甲醇22',
                            name2: 4.2,
                            name3: 2.7,
                            name4: 3.0,
                            name5: 1.51,
                            name8: 6,
                            name7: 1.05,
                            name6: 2.61
                        },
                        {
                            supplier: "供应商1",
                            name1: 4.6,
                            titl: '甲醇23',
                            name2: 4.3,
                            name3: 1.9,
                            name4: 2.0,
                            name5: 0.23,
                            name8: 8,
                            name7: 3.01,
                            name6: 2.17
                        },
                        {
                            supplier: "供应商1",
                            name1: 2.9,
                            titl: '甲醇24',
                            name2: 4.5,
                            name3: 1.8,
                            name4: 3.0,
                            name5: 1.93,
                            name8: 9,
                            name7: 1.40,
                            name6: 2.78
                        },
                        {
                            supplier: "供应商1",
                            name1: 4.3,
                            titl: '甲醇25',
                            name2: 4.3,
                            name3: 1.6,
                            name4: 4.1,
                            name5: 1.20,
                            name8: 6,
                            name7: 1.30,
                            name6: 4.13
                        },
                        {
                            supplier: "供应商1",
                            name1: 2.3,
                            titl: '甲醇26',
                            name2: 6.3,
                            name3: 1.8,
                            name4: 1.3,
                            name5: 1.55,
                            name8: 8,
                            name7: 2.20,
                            name6: 2.97
                        },
                        {
                            supplier: "供应商1",
                            name1: 4.3,
                            titl: '甲醇27',
                            name2: 4.3,
                            name3: 2.0,
                            name4: 3.3,
                            name5: 3.31,
                            name8: 7,
                            name7: 2.40,
                            name6: 4.13
                        },
                        {
                            supplier: "供应商1",
                            name1: 2.3,
                            titl: '甲醇28',
                            name2: 5.3,
                            name3: 1.8,
                            name4: 3.0,
                            name5: 1.00,
                            name8: 8,
                            name7: 2.70,
                            name6: 6.13
                        },
                        {
                            supplier: "供应商1",
                            name1: 2.3,
                            titl: '甲醇29',
                            name2: 2.3,
                            name3: 1.3,
                            name4: 4.3,
                            name5: 1.01,
                            name8: 8,
                            name7: 3.10,
                            name6: 4.24
                        }
                    ],
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '供应商评价' },
        tooltip: {},
        xAxis: {
          data: ["供应商1", "供应商2", "供应商3", "供应商4", "供应商5", "供应商6"]
        },
        yAxis: {},
        series: [{
          name: '评价',
          type: 'bar',
          data: [8, 7, 6, 10, 2, 9, 4]
        },
        {
          name: '评价',
          type: 'line',
          data: [8, 7, 6, 10, 2, 9, 4],
          itemStyle: {
				normal: {
					color: '#8cd5c2', //改变折线点的颜色
					lineStyle: {
						color: '#8cd5c2' //改变折线颜色
					}
				}
			},
        }
        ]
        // grid:{
        //     x:30,
        //     y:30,
        //     x2:0,
        //     y2:30
        // }
      });
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#n1{
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  height:100px;
  width:80%;
}
.test-name {
    background: #f40;
}
.ivu-table-header th{
    color:#FFD3B4;
    font-weight: bold;
    background-color: #212c31;
    border: none;
  }
.span{
  margin-bottom: 20px;
}
#myChart{
    position: absolute;
    left: 43%;
    width: 550px;
    height: 550px;
}
.gong{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:325px;
    position: absolute;
    left: 38%;
    margin-top: 10px;
}
</style>

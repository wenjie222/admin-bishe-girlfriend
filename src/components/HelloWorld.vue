<template>
  <div class="hello">
    <div id="n1" style="height:150px">
      <div style="display:flex">
        <span style="margin-right:20px;height:30px;line-height:30px;">产品名称:</span>
        <i-select :model.sync="model1" clearable  filterable placeholder="请选择产品" style="width:200px">
          <i-option v-for="item in cityList" :key="item.label" :value="item.value">{{ item.label }}</i-option>
        </i-select>

        <!-- <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in cityList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
      </div>
      <div style="display:flex">
        <i-input :value.sync="value" placeholder="数据集名称" style="width: 300px;margin-right:20px"></i-input>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <i-button icon="ios-cloud-upload-outline">上传数据</i-button>
        </Upload>
      </div>
      
    </div>
    <span class="span1" style="display:block;margin-right:20px;height:30px;line-height:30px;margin-bottom:20px;">预测与实际效果对比图:</span>
    <div align="center" style="margin-bottom:50px">
      <img style="display:flex;justify-content:space-around;" src="../assets/3.png">
    </div>
    <div style="width:80%;margin-left:10%" >
      <i-table :columns="columns2" :data="data2"></i-table>
    </div>
    <Page v-if="item===2" :total="10000" show-elevator show-sizer style="margin-top:10px;margin-right:-60%"></Page>
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
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

                columns2: [
                    
                    {
                        title: '产品名称',
                        key: 'titl',
                        align: 'center'
                    },
                    {
                        title: '模型',
                        key: 'name1'
                    }
                ],
                data2: [
                    {
                        name1: "Y=5X1+4X2+3X3+2.5X4+6.7X5+4.3X6+3.4X7+7.9",
                        titl: '甲醇'
                    },
                    {
                        supplier: "正和化工公司",
                        name1: "Y=2.3X1+4X2+3X3+6X4+8.1",
                        titl: '异丙醇'
                    },
                    {
                        supplier: "正和化工公司",
                        name1: "Y=2.5X1+4.1X2+2.7X3+2.6X4+5.3X5+2.4",
                        titl: '酒精'
                    },
                    {
                        supplier: "正和化工公司",
                        name1: "Y=3.5X1+4.2X2+3.7X3+2.7X4+8.1X5+6.21X6+7.89X7+2.34X8+4.56X9+6.94",
                        titl: '葡萄糖'
                    },
                    {
                        supplier: "正和化工公司",
                        name1: "Y=3.2X1+10X2+3.57X3+2.15X4+6.18X5+4.56X6+3.4X7+2.35X8+5.67X9+1.23X10+2.19",
                        titl: '维生素B2'
                    }
                ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#n1{
  display: flex;
  justify-content: space-around;
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
</style>

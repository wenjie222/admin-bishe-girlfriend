<template>
    <div style="width:40%;margin-left:30%">
        <i-form :model="formItem" :label-width="80">
            <Form-item label="检验类型:">
                <!-- <i-input :value.sync="formItem.input" placeholder="请输入"></i-input> -->
                <i-select :model.sync="formItem.select" placeholder="请选择">
                    <i-option value="beijing">来料检验</i-option>
                </i-select>
            </Form-item>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="抽样方法:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">简单随机抽样</i-option>
                    </i-select>
                </Form-item>
                <Form-item label="工厂:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">工厂A</i-option>
                    </i-select>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="检验对象:" style="width:45%">
                    <Radio-group :model.sync="formItem.radio">
                        <Radio value="male">产品</Radio>
                        <Radio value="female">产品组</Radio>
                    </Radio-group>
                </Form-item>
                <Form-item label="供应商:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">供应商1</i-option>
                    </i-select>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="产品名称:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">甲醇</i-option>
                    </i-select>
                </Form-item>
                <Form-item label="库位:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">t001</i-option>
                    </i-select>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="产品编号:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">001</i-option>
                    </i-select>
                </Form-item>
                <Form-item label="检验责任人:" style="width:45%">
                    <i-select :model.sync="formItem.select" placeholder="请选择">
                        <i-option value="beijing">admin</i-option>
                    </i-select>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="样品总量:" style="width:45%">
                    <i-input :value.sync="formItem.input" placeholder="请输入">250</i-input>
                </Form-item>
                <Form-item label="质检精度:" style="width:45%">
                    <i-input :value.sync="formItem.input" placeholder="请输入">0.4</i-input>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="置信水平:" style="width:45%">
                    <i-input :value.sync="formItem.input" placeholder="请输入">95%</i-input>
                </Form-item>
                <Form-item label="检验费用:" style="width:45%">
                    <i-input :value.sync="formItem.input" placeholder="请输入">1000</i-input>
                </Form-item>
            </div>
            <div style="display:flex;justify-content:space-between;">
                <Form-item label="绝对误差:" style="width:45%">
                    <i-input :value.sync="formItem.input" placeholder="请输入">0.4</i-input>
                </Form-item>
                <Form-item label=" " >
                    <i-button style="width:100%">计算</i-button>
                </Form-item>
            </div>
        </i-form>

        <div>
            <i-table :columns="columns2" :data="data2"></i-table>
        </div>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                    

                },
                columns2: [
                        {
                            title: '产品编码',
                            key: 'dat1'
                        },
                        {
                            title: '产品名称',
                            key: 'dat2'
                        },
                        {
                            title: '样品总量',
                            key: 'dat3'
                        },
                        {
                            title: '抽样样本量',
                            key: 'dat4'
                        },
                    ],
                    data2: [
                        {
                            dat1: "甲醇",
                            dat2: "001",
                            dat3: 1000,
                            dat4: 250
                        }
                    ]
            }
        }
    }
</script>

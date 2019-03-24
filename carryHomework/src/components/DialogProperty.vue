<template>
  <div class="dialog">
    <el-dialog
      title="添加资产"
      :visible.sync="show"
      @close="close"
      width="50%">
      <div>

        <el-cascader
          expand-trigger="hover"
          :show-all-levels="false"
          :options="info"
          :props="selectoption"
          v-model="value"
          placeholder="选择位置"  
          style="width:100px">
        </el-cascader>

        <el-cascader
          expand-trigger="hover"
          :options="typeOptions"
          @active-item-change="handleItemChange"
          placeholder="选择类型"
          :props="props"
        ></el-cascader>

        <el-input v-model="input" placeholder="请按照ID或者名称搜索" style="width:calc(70% - 110px)"></el-input>
        <el-button round style="border:1px solid rgb(152, 116, 28)" @click="search()"><span style="color:rgb(152, 116, 28)">搜索</span></el-button>
      
        <!-- 下方显示的表格 -->
        <el-table 
          :data="this.info2"
          border
          size="mini"
          max-height="250"
          style="width: 100%"
          @selection-change="handleSelected">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="名称"
            width="250">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            label="台账编号"
            width="180">
            <template slot-scope="scope">{{ scope.row.gaid }}</template>
          </el-table-column>
          <el-table-column
            label="信息">
            <template slot-scope="scope">类型：{{ scope.row.type }}</template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="changeActive" class="quxiao">取 消</el-button>
        <el-button type="primary" @click="modify" round class="queren">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DialogProperty',
  props: ['property5Visible','list1'],
  data() {
    return {
      show:false,
      info:null,
      info2:[],//搜索得到的值
      value:[],
      label:'',
      input:'',
      selectoption:{
        value:"location_id",
        label:"location",
        children:""
      },
      tableData: [],

      typeOptions:[
        {
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }
      ],
      props: {
        value: 'label',
        children: 'cities'
      },
    };
  },
  computed:{
    modifylist() {
        return this.list1;
    }
  },
  // 对是否可见进行监听
  watch:{
    property5Visible(val){
      this.show = val
    }
  },
  mounted () {
    axios
      // http://192.168.242.13:3000/locations/get_sub_locations?user=chaiguangfei&ids=2223 几楼
      .post('http://192.168.242.13:3000/risk2/get_rsk_location?user=chaiguangfei&location=2223')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
          console.log(error)
      });
  },
  methods: {
    // submit(){
    //   this.dialogVisible = false;
    //   this.$emit("listentochild",value);
    // },
    handleSelected(){

    },
    //把值传给父组件
    // 取消
    changeActive() {
      this.$emit('change5');
    },
    // 确认传值
    modify() {
      this.$emit('modify5', this.modifylist);    
    },
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:property5Visible',false)
    },
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
    search(){
      axios
        // 搜索this.input关键字
        .post(`http://192.168.242.13:3000/assets/get_it_assets?user=chaiguangfei&type_id=255&keyword=${this.input}&location_id=2223`)
        .then(response => {
          this.info2 = JSON.parse(response.data.devices);//转换成数组 
        })
        .catch(error => {
            console.log(error)
        });
    },
    //动态加载次级选项
    handleItemChange(val) {
      // console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.typeOptions[0].cities.length) {
          this.typeOptions[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.typeOptions[1].cities.length) {
          this.typeOptions[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    }
  }
}
</script>
<style>
@import "../components/dialog.css";
</style>

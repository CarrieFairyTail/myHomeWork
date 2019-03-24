<template>
  <div class="dialog">
    <el-dialog
      title="添加流程"
      :visible.sync="show"
      @close="close"
      width="50%">
      <div>
       
            
        <el-select v-model="value" placeholder = "请选择流程类型" style="width:100px">
          <el-option 
          v-for="(item,index) in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :value-key="index">
          </el-option> 
        </el-select>
        <el-input v-model="input" style="width:calc(70% - 110px)"></el-input>
        <el-button round style="border:1px solid rgb(152, 116, 28)" @click="search()"><span style="color:rgb(152, 116, 28)">搜索</span></el-button>
        {{this.modifylist}}    
        <br>
        <!-- 下方显示的表格 -->
        <el-table 
          :data="this.info"
          border
          size="mini"
          style="width: 100%"
          max-height="250"
          @selection-change="handleSelected">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="类型"
            width="250">
            <!-- 固定 -->
            <template slot-scope="scope">{{ scope.row.flow_type_name }}</template>
          </el-table-column>
          <el-table-column
            label="单号"
            width="180">
            <template slot-scope="scope">{{ scope.row.flow_no }}</template>
          </el-table-column>
          <el-table-column
            label="名称">
            <template slot-scope="scope">{{ scope.row.flow_name }}</template>
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">{{ scope.row.status_desc }}</template>
          </el-table-column>
        </el-table>


        <!-- <table style="width:100%;max-height:250px;">
            <thead style="background-color:#ccc">
              <tr>
                  <th>类型</th>
                  <th>单号</th>
                  <th>名称</th>
                  <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in info" :key="item.flow_no" type="selection">
                  <td v-text="item.flow_type_name"></td>
                  <td v-text="item.flow_no"></td>
                  <td v-text="item.flow_name"></td>
                  <td v-text="item.status_desc"></td>
              </tr>
            </tbody>
        </table> -->

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
  name: 'DialogFlow',
  props: ['flow6Visible','listFlow'],
  data() {
    return {
      show:false,
      info:[],//input中输入的数据
      value:[],
      label:'',
      input:'',
      list:null,
      selectoption:{
        value:"location_id",
        label:"location",
        children:""
      },
      options:[{
        value:'1',
        label:'故障单',
        },{
          value:'2',
          label:'事件单',
        },{
          value:'3',
          label:'变更单',
        },{
          value:'4',
          label:'风险单',
      }]
    };
  },
  computed:{
    modifylist() {
        return this.listFlow;
    }
  },
  // 对是否可见进行监听
  watch:{
    flow6Visible(val){
      this.show = val
    }
  },
  mounted () {
    
  },
  methods: {
    handleSelected(val){
      // for(var item of val){
      //   // console.log(item);
      //   // let opt = {};
      //   // opt.type = item.flow_type_name;
      //   // opt.number = item.flow_no;
      //   // opt.name = item.flow_name;
      //   // opt.zhuangtai = item.status_desc;
      //   // this.modifylist.push(opt)
        
      //   this.modifylist.type = item.flow_type_name;
      //   this.modifylist.number = item.flow_no;
      //   this.modifylist.name = item.flow_name;
      //   this.modifylist.zhuangtai = item.status_desc;
      //   // return this.modifylist;
      // }
      //  this.modifylist = val
      // console.log(val)
      // console.log(this.modifylist)//这样的for循环我们只拿到了最后一个值
      this.list = val
    },
    //把值传给父组件
    // 取消
    changeActive() {
      this.$emit('change6');
    },
    // 确认传值
    modify() {
      // console.log(this.list)
      
      this.$emit('modify6', this.list);    
    },
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:flow6Visible',false)
    },
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
    search(){
      axios
        // 搜索this.input关键字
        .post(`http://192.168.242.13:3000/changes/get_flows?user=chaiguangfei&flow_type=${this.value}&keyword=${this.input}`)
        .then(response => {
          this.info = JSON.parse(response.data.flows);//转换成数组 
        })
        .catch(error => {
            console.log(error)
        });
    },
    
  }
}
</script>
<style>
@import "../components/dialog.css";
</style>

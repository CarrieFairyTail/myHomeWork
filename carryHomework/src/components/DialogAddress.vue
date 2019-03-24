<template>
  <div class="dialog">
    <el-dialog
      title="添加位置"
      :visible.sync="show"
      width="50%"
      @close="close">
      <div>
        
        <el-cascader
          expand-trigger="hover"
          :show-all-levels="false"
          :options="options"
          v-model="selectoption"
          placeholder="选择位置"  
          style="width:100px">
        </el-cascader>
          
        <div>选择位置后，该位置下的所有客户将被关联进来</div>
        <el-button type=text @click="searchKehu()" style="color:rgb(152,116,28)">相关客户</el-button>
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
            label="客户名称"
            width="250">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            label="联系人"
            width="180">
            <template slot-scope="scope">{{ scope.row.contacts }}</template>
          </el-table-column>
          <el-table-column
            label="ADM">
            <template slot-scope="scope">{{ scope.row.adms }}</template>
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
  name: 'DialogAddress',
  props: ['address2Visible','list1'],
  data() {
    return {
      show:false,
      info:null,
      info2:[],//searchKehu后找到的值
      info3:null,//几楼
      value:[],
      label:'',
      input:'',
      options:[{
        value:'2223',
        label:'华东区',
        children:[
            {
              value:'2',
              label:'上海一号',
              children:[
                {
                  value:'11',
                  label:'11',
                }
              ]
            }
          ]
      }],
      tableData: [],
      selectoption:[],
    };
  },
  computed:{
    modifylist() {
        return this.list1;
    }
  },
  mounted () {
    axios
      .post('http://192.168.242.13:3000/risk2/get_rsk_location?user=chaiguangfei&location=2223')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
          console.log(error)
      });

    axios
      //几楼
      .post('http://192.168.242.13:3000/locations/get_sub_locations?user=chaiguangfei&ids=2223')
      .then(response => {
        this.info3 = response.data.lists
      })
      .catch(error => {
          console.log(error)
      }); 

    // axios
    //   //查找客户
    //   .post('http://192.168.242.13:3000/risk2/get_customer_location?user=chaiguangfei&locationId=2223')
    //   .then(response => {
    //     this.info2 = response.data.lists
    //   })
    //   .catch(error => {
    //       console.log(error)
    //   }); 
  },
  // 对是否可见进行监听
  watch:{
    address2Visible(val){
      this.show = val
    }
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
      this.$emit('change2');
    },
    // 确认传值
    modify() {
      this.$emit('modify2', this.modifylist);    
    },
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:address2Visible',false)
    },
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
    searchKehu(){
      axios
      //查找客户
      .post('http://192.168.242.13:3000/risk2/get_customer_location?user=chaiguangfei&locationId=2223')
      .then(response => {
        this.info2 = response.data.device
      })
      .catch(error => {
          console.log(error)
      }); 
    }
  }
}
</script>
<style>
@import "../components/dialog.css";
</style>

<template>
  <div class="dialog">
    <el-dialog
      title="添加客户相关"
      :visible.sync="show"
      width="50%">
      <div>
        <!-- <el-popover
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-button slot="reference">选择位置</el-button>
        </el-popover> -->
        
            <el-cascader
              expand-trigger="hover"
              :show-all-levels="false"
              :options="addressOptions"
              :props="props"
              v-model="value"
              placeholder="选择位置"
              @active-item-change="handleItemChange"  
              style="width:100px">
            </el-cascader>
            {{this.info3}}
            <el-input v-model="input" placeholder="请按照ID或者名称搜索" style="width:calc(70% - 110px)"></el-input>
            <el-button round style="border:1px solid rgb(152, 116, 28)" @click="search()"><span style="color:rgb(152, 116, 28)">搜索</span></el-button>
          
        <!-- <el-select v-model="modifylist.kehu">
          <el-option 
          v-for="(item,index) in info"
          :key="item.id"
          :label="item.its_name"
          :value="item.its_name"
          :value-key="index">
          </el-option> 
        </el-select> -->
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
  name: 'DialogLink1',
  props: ['dialogVisible1','list1'],
  data() {
    return {
      show:false,
      info:null,
      info2:[],//搜索后得到的值
      info3:[],//几楼
      value:[],
      label:'',
      input:'',
      selectoption:{
        value:"location_id",
        label:"location",
        children:""
      },
      tableData: [],

      addressOptions:[
        {
          value:'2223',
          label: '华东区',
          children: [
            {
              value:'2',
              label:'上海一号',
              floor:[]
            }
          ]
        } 
      ],
      props: {
        value: 'label',
        children: 'floor'
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
    dialogVisible1(val){
      this.show = val
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
      this.$emit('change1');
    },
    // 确认传值
    modify() {
      this.$emit('modify1', this.modifylist);    
    },
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:dialogVisible1',false)
    },
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
    search(){
      axios
        // 搜索this.input关键字
        .post(`http://192.168.242.13:3000/risk2/get_customer_location?user=chaiguangfei&locationId=2223&search=${this.input}`)
        .then(response => {
          this.info2 = response.data.device;
        })
        .catch(error => {
            console.log(error)
        });
    },

    // http://192.168.242.13:3000/locations/get_sub_locations?user=chaiguangfei&ids=2223 几楼
    //动态加载次级选项
    handleItemChange(val) {
      axios
        // 几楼
        .post(`http://192.168.242.13:3000/locations/get_sub_locations?user=chaiguangfei&ids=2223`)
        .then(response => {
          this.info3 = response.data.device;
        })
        .catch(error => {
            console.log(error)
        });

      // console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('上海一号') > -1 && !this.addressOptions[0].floor.length) {
          this.addressOptions[0].floor = [{
            label: '南京'
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

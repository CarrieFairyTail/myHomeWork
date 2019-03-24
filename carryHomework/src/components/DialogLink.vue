<template>
  <div class="dialog">
    <!-- 标题 -->
    <!-- <div style="width:50%;height:30px;background-color:black">增加</div> -->
    <!-- 内容 -->
    <!-- <div>

    </div> -->
    <!-- 按钮 -->
    <!-- <div
      slot="footer"
      class="dialog-footer"
      style="text-align: right;">
      <el-button
        style="padding:0;width:100px;height:32px;background:#F04852;color:#ffffff;border-radius:50px;"
        @click="secondClose">取 消</el-button>
      <el-button
        style="padding:0;width:100px;height:32px;background:#F04852;color:#ffffff;border-radius:50px;"
        @click="secondConfirm">确 定</el-button>
    </div> -->
    <!-- <el-button type="text" class="text-button fl" style="color:#98741c" @click="add">+添加ITS相关</el-button> -->
    <el-dialog
      title="添加ITS相关"
      :visible.sync="show"
      width="50%"
      @close="close">
      <div>
        <el-select v-model="modifylist.its">
          <el-option 
          v-for="(item,index) in info"
          :key="item.id"
          :label="item.its_name"
          :value="item.its_name"
          :value-key="index">
          </el-option> 
        </el-select>
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
  name: 'DialogLink',
  props: ['dialogVisible','list'],
  data() {
    return {
      show:false,
      info:null,

      selectedlist:[],
      
      value:'',
      label:'',
      msg:'',
      its:'',
      its_name:'',
      form:{}
    };
  },
  computed:{
    modifylist() {
        return this.list;
    }
  },
  mounted () {
    axios
      .post('http://192.168.242.13:3000/risk2/get_ITS?user=chaiguangfei')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
          console.log(error)
      });
  },
  // 对是否可见进行监听
  watch:{
    dialogVisible(val){
      this.show = val
    }
  },
  methods: {
    // // 点击触发显示弹框
    // add(){
    //   this.selectedlist={
    //     its:''
    //   };
    //   this.dialogVisible=true;
    // },
    // submit(){
    //   this.dialogVisible = false;
    //   this.$emit("listentochild",value);
    // },
    
    //把值传给父组件
    // 取消
    changeActive() {
      this.$emit('change');
    },
    // 确认传值
    modify() {
      if(this.modifylist.its===''){
        this.$message({
            type: 'info',
            message: '请填写ITS选项！'
        });    
      }    
      this.$emit('modify', this.modifylist);
    },
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:dialogVisible',false);
    },
    // closed(){
    //   this.$emit('updata:dialogVisible',false);
    //   console.log(this.dialogVisible)
    // }
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
  }
}
</script>
<style>
@import "../components/dialog.css";
</style>
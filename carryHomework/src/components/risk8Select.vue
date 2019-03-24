<template>
  <div class="first"> 
    <el-select v-model="ruleForm.region8" :placeholder="placeholder" :disabled="isdisabled">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk8Select',
  props:{
    placeholder: {
      type: String,
      default: ''
    },
    ruleForm:''
  },
  data () {
    return {
      isdisabled:true,
      flag:true,
      info:null,
      dengji:'',
      log:'',
      options: [{
          value: '1',
          label: '季'
          }, {
          value: '2',
          label: '周'
          }, {
          value: '3',
          label: '月'
      }],
    }
  },
  mounted () {
    // axios
    //   .post('')
    //   .then(response => {
    //     this.info = response.data.device
    //   })
    //   .catch(error => {
    //      console.log(error)
    //   })
  },
  // 接收dialogGrade传来的数据
  mounted () {
    var self=this;
    bus.$on("dengji",function(dengji){
      self.dengji=dengji;
    });
    var that=this;
    bus.$on("log",function(log){
      that.log=log;
      if(that.log==="ITS"){
        that.isdisabled=false;
      }else{
        that.isdisabled=true;
      }
    }); 
  },
  computed:{
    change(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

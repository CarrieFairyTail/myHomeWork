<template>
  <div> 
    <el-select v-model="ruleForm.region9" placeholder="请选择责任人" @change="choose()">
      <el-option
      v-for="item in msg"
      :key="item.username"
      :label="item.name"
      :value="item.username"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk9Select',
  props:{
    // placeholder: {
    //   type: String,
    //   default: ''
    // },
    ruleForm:''
  },
  data () {
    return {
      info:null,
      msg:''
    }
  },
  mounted () {
    var self=this;
    bus.$on("zeren",function(msg){
      self.msg=msg;
    });
    // axios
    //   .post('http://192.168.242.13:3000/risk2/get_responsible_account?user=chaiguangfei&dc=2&grade=0&ownership=ITS&category=3')
    //   .then(response => {
    //     this.info = response.data.device
    //   })
    //   .catch(error => {
    //      console.log(error)
    //   })
  },
  methods:{
    choose(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

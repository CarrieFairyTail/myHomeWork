<template>
  <div class="first">    
    <el-select v-model="ruleForm.region4" :placeholder="placeholders" @change="choose2()">
      <el-option
      v-for="item in msg"
      :key="item.id"
      :label="item.risk_classify_name"
      :value="item.id"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk4Select',
  props:{
    placeholders: {
      type: String,
      default: ''
    },
    ruleForm:''
  },
  data () {
    return {
      info:null,
      value: '',
      region4: '',
      msg:''
    }
  },
  mounted () {
    var self=this;
    bus.$on("hello2",function(msg){
      self.msg=msg;
    });
    // axios
    //   .post('http://192.168.242.13:3000/risk2/get_risk_classify_detail?user=chaiguangfei&ownership=FM&classifyId=1')
    //   .post('http://192.168.242.13:3000/risk2/get_risk_classify_detail?user=chaiguangfei&ownership=FM&classifyId=2')
    //   .post('http://192.168.242.13:3000/risk2/get_risk_classify_detail?user=chaiguangfei&ownership=FM&classifyId=3')
    //   .then(response => {
    //     this.info = response.data.device
    //   })
    //   .catch(error => {
    //      console.log(error)
    //   })
  },
  methods:{
    choose2(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

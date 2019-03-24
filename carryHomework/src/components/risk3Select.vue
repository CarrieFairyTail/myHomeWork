<template>
  <div class="first">  
    <el-select v-model="ruleForm.region3" placeholder="请选择风险分类" @change="choose2">
      <el-option
      v-for="(item,index) in msg"
      :key="item.id"
      :label="item.risk_classify_name"
      :value="item.id"
      :value-key="index"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk3Select',
  props:{
    ruleForm:''
  },
  data () {
    return {
      info:null,
      msg:'',
      msg2:''
    }
  },
  mounted () {
    var self=this;
    bus.$on("hello",function(msg){
      self.msg=msg;
    });
    var self1=this;
    bus.$on("log",function(msg2){
      self1.msg2=msg2;
    });
  },
  methods:{
    // log为选中选项的value值
    choose2(log){
      // console.log(log)
      var info2=null;
      var info3=null;
      // 触发下一个select选项
      let url =`http://192.168.242.13:3000/risk2/get_risk_classify_detail?user=chaiguangfei&ownership=${this.msg2}&classifyId=`+log
      axios
        .post(url)
        .then(response => {
          this.info2 = response.data.device;
          bus.$emit("hello2",this.info2);
        });
      // 发送给责任人
      axios
        .post(`http://192.168.242.13:3000/risk2/get_responsible_account?user=chaiguangfei&dc=2&grade=0&ownership=${this.msg2}&category=${log}`)
        .then(response => {
          this.info3 = response.data.device;
          bus.$emit("zeren",this.info3);
          console.log(this.info3)
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

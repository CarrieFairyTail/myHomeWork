<template>
  <div class="first">
    <el-select v-model="ruleForm.region2" placeholder="请选择部门" @change="choose">
      <el-option
      v-for="(item,index) in info"
      :key="item.type_no"
      :label="item.type_name"
      :value="item.type_no"
      :value-key="index"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk2Select',
  props:{
    ruleForm:''
  },
  data () {
    return {
      info:null,
      info2:null,
      value:''
    }
  },
  mounted () {
    // 从接口读取数据
    axios
      .post('http://192.168.242.13:3000/risk2/get_ownership?user=chaiguangfei')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
         console.log(error)
      })
  },
  methods:{
    // text(log){
    //   console.log(log)
    // },
    // 字符串的拓展 反引号 ${} +参数
    choose:function(log){
      var info2=null;
        // bus.$emit("hello",this.info2);
      let url ='http://192.168.242.13:3000/risk2/get_risk_classify?user=chaiguangfei&ownership='+log
      axios
         .post(url)
         .then(response => {
           this.info2 = response.data.device;
           bus.$emit("hello",this.info2);
          });
      bus.$emit("log",log);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>  
    <el-select v-model="ruleForm.region5" placeholder="请选择风险来源" @change="choose">
      <el-option
      v-for="item in info"
      :key="item.risk_source_id"
      :label="item.name"
      :value="item.risk_source_id"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'risk5Select',
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
      value: ''
    }
  },
  mounted () {
    axios
      .post('http://192.168.242.13:3000/risk2/get_risk_source?user=chaiguangfei')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
         console.log(error)
      })
  },
  methods:{
    choose(log){
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

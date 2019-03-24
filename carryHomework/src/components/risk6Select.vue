<template>
  <div>  
    <el-select 
    v-model="ruleForm.region6" 
    placeholder="请选择根本原因" 
    @change="choose"
    >
      <el-option
      v-for="item in info"
      :key="item.reason_id"
      :label="item.name"
      :value="item.reason_id"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'risk6Select',
  props:{
    placeholder: {
      type: String,
      default: ''
    },
    ruleForm:''
  },
  data () {
    return {
      info:null,
      value: '',
      region_id:''
    }
  },
  mounted () {
    axios
      .post('http://192.168.242.13:3000/risk2/get_risk_reason?user=chaiguangfei')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
         console.log(error)
      })
  },
  methods:{
    choose:function(){
    }
  }
}
</script>

<style scoped>
</style>

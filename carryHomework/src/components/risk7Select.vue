<template>
  <div class="first"> 
    {{this.dengji}}
    <el-select v-model="ruleForm.region7" :placeholder="placeholder" disabled>
      <el-option
      v-for="item in dengji"
      :key="item.type_no"
      :label="item.type_name"
      :value="item.type_no"/>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '../assets/eventBus'

export default {
  name: 'risk7Select',
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
      dengji:[]
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
  mounted () {
    var self=this;
    bus.$on("dengji",function(gradeList){
      self.dengji=gradeList;
    }); 
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

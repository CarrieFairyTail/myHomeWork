<template>
  <div> 
    <!-- <el-select 
    v-model="ruleForm.region" 
    placeholder="请选择数据中心" 
    @change="choose"
    >
      <el-option
      v-for="item in info"
      :key="item.region_id"
      :label="item.name"
      :value="item.region_id"/>
    </el-select> -->
    <!-- <span class="demonstration">hover 触发子菜单</span> -->
    <el-cascader
      expand-trigger="hover"
      :show-all-levels="false"
      :options="options"
      
      v-model="ruleForm.region"
      placeholder="请选择数据中心"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'risk1Select',
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
      value:'',
      region_id:'',
      // 选项的值
      options:[
        {
          value:'2223',
          label:'华东区',
          children:[
            {
              value:'2',
              label:'上海一号',
            }
          ]
        }
      ],
      // selectoption:{
      //   value:"location_id",
      //   label:"name",
      //   children:"dc_name_inner_full"
      // }
    }
  },
  mounted () {
    axios
      .post('http://192.168.242.13:3000/risk2/get_dc?user=chaiguangfei')
      .then(response => {
        this.info = response.data.device
      })
      .catch(error => {
         console.log(error)
      })
  },
  methods:{
    choose:function(log){
      // this.$emit("listentochild",log);
      // console.log(log)
    },
    handleChange(log){
      console.log(log)
    }
  }
}
</script>

<style scoped>
</style>

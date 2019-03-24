<template>
  <div class="dialog">
    <el-dialog
      title="风险分类说明"
      :visible.sync="show"
      @close="close"
      width="50%">
      <div style="max-height:300px;overflow-y:auto">
        <table style="width:100%;">
          <tbody>
            <tr>
              <td rowspan="3" style="width:80px">FM</td>
              <td style="width:150px">技术风险</td>
              <td>建筑、电器、暖通、消防、自控</td>
            </tr>
            <tr>
              <td style="width:150px">管理风险</td>
              <td>供应商管理、团队管理、工具相关、安防、客户与合约、制度流程、人员管理、项目管理、运维管理、维保管理</td>
            </tr>
            <tr>
              <td style="width:150px">项目风险</td>
              <td>项目交付风险、SLA不达标风险、客户业务连续性风险</td>
            </tr>
            <tr>
              <td rowspan="3" style="width:80px">DCS</td>
              <td style="width:150px">技术风险</td>
              <td>建筑、电器、暖通、消防、自控</td>
            </tr>
            <tr>
              <td style="width:150px">管理风险</td>
              <td>供应商管理、团队管理、工具相关、安防、客户与合约、制度流程、人员管理、项目管理、运维管理、维保管理</td>
            </tr>
            <tr>
              <td style="width:150px">项目风险</td>
              <td>项目交付风险、SLA不达标风险、客户业务连续性风险</td>
            </tr>
            <tr>
              <td rowspan="3" style="width:80px">ITS</td>
              <td style="width:150px">技术风险</td>
              <td>建筑、电器、暖通、消防、自控</td>
            </tr>
            <tr>
              <td style="width:150px">管理风险</td>
              <td>供应商管理、团队管理、工具相关、安防、客户与合约、制度流程、人员管理、项目管理、运维管理、维保管理</td>
            </tr>
            <tr>
              <td style="width:150px">项目风险</td>
              <td>项目交付风险、SLA不达标风险、客户业务连续性风险</td>
            </tr>
            <tr>
              <td style="width:80px">Corporate</td>
              <td style="width:150px">Corporate</td>
              <td></td>
            </tr>
            <tr>
              <td style="width:80px">PE</td>
              <td style="width:150px">PE</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="changeActive" class="quxiao">取 消</el-button>
        <el-button type="primary" @click="changeActive" round class="queren"><span>确 定</span></el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DialogLink2',
  props: {
    typeVisible:''
    },
  data() {
    return {
      show:false
    };
  },
  // 对是否可见进行监听
  watch:{
    typeVisible(val){
      this.show = val
    }
  },
  computed:{
    
  },
  mounted () {
    
  },
  methods: {
    changeActive() {
      this.$emit('changeType');
    },

    // close() {
    //   this.$emit('close');
    // },

    // 更新传给父组件的可见值
    close(){
      this.$emit('update:typeVisible',false)
    },
  }
}
</script>
<style>
@import "../components/dialog.css";
/* table{
    border: 1px solid #ddd;
    border-collapse:collapse;
    border-spacing:0;
    text-align:center;
}
table td{
    border: 1px solid #ddd;
}
table th{
  border: 1px solid #ddd;
} */
</style>

<template>
  <div id="risk" class="risk">
    <div class="risk-page">
      <!-- 头部 -->
      <div class="head">
        <!-- <div class="head-left fl">logo</div> -->
        <div class="head-right fl">Carrie's Homework1</div>
        <div class="close fr">关闭</div>
      </div>
      <!-- 下边部分 -->
      <div class="middle">
        <!-- 中间 -->
        <div class="center fl">
          <!-- rules属性传入约定的验证规则,prop设置为需要校验的字段名 -->
          <div class="center-wrap">
            <el-form :model="ruleForm" ref="ruleForm" size="medium" style="width:90%">
              <!-- 标题 -->
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">风险基础信息</div>
                </el-col>
              </el-row>
              <!-- 风险标题 -->
              <el-row>
                <el-col :span="24">
                  <el-form-item label="风险标题" required>
                    <el-input v-model="ruleForm.name" placeholder="请填写风险标题（字数<=200）"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 风险描述 -->
              <el-row>
                <el-col :span="24">
                  <el-form-item label="风险描述" required>
                    <el-input type="textarea" :rows="3" placeholder="请详细描述风险内容，指出如果不处理该风险会导致的后果（字数<=500）" v-model="ruleForm.describe">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- four -->
              <el-row>
                <!-- 数据中心 -->
                <el-col :span="6">
                  <el-form-item style="font-weight:700" label="数据中心" required><br>
                    <!-- <risk1Select :ruleForm="ruleForm" style="width:85%"></risk1Select> -->
                    <data1Select :ruleForm="ruleForm" style="width:85%"></data1Select>
                  </el-form-item>
                </el-col>
                <!-- 部门 -->
                <el-col :span="6">
                  <el-form-item label="部门" required><br>
                    <risk2Select :ruleForm="ruleForm" style="width:85%"></risk2Select>
                  </el-form-item>
                </el-col>
                <!-- 风险分类 -->
                <el-col :span="6">
                  <el-form-item label="风险分类:" required>
                    <el-button type='text' @click="addType" style="color:rgb(0,153,204)">分类说明</el-button><br>
                      <!-- 分类说明弹框 -->
                      <dialog-link2 :typeVisible="typeVisible" @changeType="changeType"></dialog-link2>
                    <risk3Select :ruleForm="ruleForm" style="width:85%"></risk3Select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="" required><br>
                    <risk4-select placeholders="请选择" :ruleForm="ruleForm" style="width:85%"></risk4-select> 
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- four2 -->
              <el-row>
                <!-- 风险来源 -->
                <el-col :span="6">     
                  <el-form-item label="风险来源" required><br>            
                    <risk5Select :ruleForm="ruleForm" style="width:85%"></risk5Select>
                  </el-form-item>
                </el-col>
                <!-- 根本原因 -->
                <el-col :span="6">
                  <el-form-item label="根本原因" required><br>
                    <risk6Select :ruleForm="ruleForm" style="width:85%"></risk6Select>
                  </el-form-item>
                </el-col>
                <!-- 风险等级 -->
                <el-col :span="6">
                  <el-form-item label="风险等级" required>
                    <el-button type='text' @click="addGrade" style="color:#98741c">等级评估</el-button><br>
                      <!-- 等级弹框 -->
                      <dialog-grade 
                      :gradeVisible="gradeVisible" 
                      @modifyGrade="modifyGrade" 
                      @changeGrade="changeGrade" 
                      @dengji="dengji" 
                      @zhouqi="zhouqi">
                      </dialog-grade>
                    <!-- <risk7Select  placeholder="请选择" :ruleForm="ruleForm" style="width:85%"></risk7Select> -->
                    <grade7Select :ruleForm="ruleForm" style="width:85%"></grade7Select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="整改周期" required><br>
                    <risk8-select  placeholder="请选择" :ruleForm="ruleForm" style="width:85%"></risk8-select>
                    <!-- <zhouqi8Select :ruleForm="ruleForm" style="width:85%"></zhouqi8Select> -->
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 计划完成时间 -->
              <el-row>
                <el-col :span="6">
                  <el-form-item label="计划完成时间：" required><br>
                    <el-date-picker type="date" v-model="ruleForm.describe3" placeholder="请选择日期" style="width:85%"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 受理人 -->
              <el-row>
                <el-col :span="6">
                  <el-form-item label="受理人" required><br>
                    <el-input v-model="ruleForm.describe4" placeholder="请填写受理人" style="width:85%"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="责任人" required><br>
                    <risk9-select placeholders="请选择责任人" :ruleForm="ruleForm" style="width:85%"></risk9-select>
                    <!-- <el-select v-model="ruleForm.region8" placeholder="请选择责任人">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select> -->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="影响范围" required>
                <el-button type="text" class="text-button fl" @click="add1">+添加客户</el-button>
                  <dialog-link1 
                  :dialogVisible1.sync = "dialogVisible1" 
                  :list1 = 'selectedlist1' 
                  @modify1 = "modify1" 
                  @change1 = "changeOverlay1">
                  </dialog-link1>
                
                <el-button type="text" class="text-button fl" style="color:#98741c" @click="add2">+添加位置</el-button>
                  <dialog-address
                  :address2Visible.sync = "address2Visible" 
                  :listAddress = 'selectedlistAddress' 
                  @modify2 = "modify2" 
                  @change2 = "changeOverlay2">
                  </dialog-address>

                <el-button type="text" class="text-button fl" style="color:#98741c" @click="add">+添加ITS相关</el-button>
                <!-- <dialog-link :dialogVisible="dialogVisible" v-on:listentochild="showfromchild"></dialog-link> -->
                  <dialog-link 
                  :dialogVisible.sync = "dialogVisible" 
                  :list = 'selectedlist' 
                  @modify = "modify" 
                  @change = "changeOverlay">
                  </dialog-link>
                <!-- 表格 -->  
                <el-row style="margin-top:20px">
                  <el-col :span="24">
                    <el-table 
                      :data="tableData"
                      border
                      v-if="flag1"
                      size="mini"
                      style="width: 100%">
                      <el-table-column
                        prop="kehu"
                        label="客户名称"
                        width="250">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="联系人"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="adm"
                        label="ADM">
                      </el-table-column>
                      <!-- 固定列fixed在left或right -->
                      <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-row>
                <!-- 表格2 -->
                <el-row>
                  <el-col :span="24">
                    <el-table
                      :data="tableData2"
                      border
                      size="mini"
                      v-if="flag2"
                      style="width: 100%">
                      <el-table-column
                        prop="weizhi"
                        label="位置"
                        width="350">
                      </el-table-column>
                      <el-table-column
                        prop="others"
                        label="">
                      </el-table-column>
                      <!-- 固定列fixed在left或right -->
                      <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData2)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-row>
                <!-- 表格3 -->
                <el-row>
                  <el-col :span="24">
                    <!-- <el-button @click="testShow">显示</el-button> -->
                    <!-- {{this.flag}}{{this.tableData3}} -->
                    
                    <!-- 判断是否显示 -->
                    <el-table
                      :data="tableData3"
                      border
                      size="mini"
                      style="width: 100%"
                      v-if="flag">
                      <el-table-column
                        prop="its"
                        label="ITS相关">
                      </el-table-column>
                      <el-table-column
                        label="操作"
                        width="200">
                        <template slot-scope="scope">
                          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData3)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                    <!-- <el-button @click="add">添加</el-button> -->
                  </el-col>
                </el-row>
              </el-form-item>
              <!-- 表格4 -->
              <el-form-item label="关联设备">
                <!-- 添加的值放在同一张表格中 -->
                <el-button type="text" class="text-button fl" @click="add4">+添加设备</el-button>
                  <dialog-equip
                  :equip4Visible.sync = "equip4Visible"
                  :listEquip = "selectedlistEquip"
                  @modify4 = "modify4" 
                  @change4 = "changeOverlay4">
                  </dialog-equip>
                <el-button type="text" class="text-button fl" @click="add5">+添加资产</el-button>
                  <dialog-property
                  :property5Visible.sync = "property5Visible"
                  :listEquip = "selectedlistEquip"
                  @modify5 = "modify5" 
                  @change5 = "changeOverlay5">
                  </dialog-property>
                <el-row style="margin-top:20px">
                  <el-col :span="24">
                    <el-table
                      :data="tableData4"
                      border
                      v-if="flag4"
                      size="mini"
                      style="width: 100%">
                      <el-table-column
                        prop="type"
                        label="类别"
                        width="50">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="名称"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="number"
                        label="台账编号"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="message"
                        label="信息">
                      </el-table-column>
                      <!-- 固定列fixed在left或right -->
                      <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData4)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-row>
              </el-form-item>
              <!-- 表格5 -->
              <el-form-item label="关联流程">
                <el-button type="text" style="color:#98741c" @click="add6">+添加流程</el-button>
                  <dialog-flow
                  :flow6Visible.sync = "flow6Visible"
                  :listFlow = "selectedlistFlow"
                  @modify6 = "modify6" 
                  @change6 = "changeOverlay6">
                  </dialog-flow>
                <el-row>
                  <el-col :span="24">
                    {{this.tableData5}}
                    <el-table
                      :data="this.tableData5"
                      border
                      v-if="flag6"
                      size="mini"
                      style="width: 100%">
                      <el-table-column
                        
                        label="类型"
                        width="250">
                        <template slot-scope="scope">{{ scope.row.flow_type_name }}</template>
                      </el-table-column>
                      <el-table-column
                        
                        label="单号"
                        width="180">
                        <template slot-scope="scope">{{ scope.row.flow_no }}</template>
                      </el-table-column>
                      <el-table-column
                        
                        label="名称">
                        <template slot-scope="scope">{{ scope.row.flow_name }}</template>
                      </el-table-column>
                      <el-table-column
                        
                        label="状态">
                        <template slot-scope="scope">{{ scope.row.status_desc }}</template>
                      </el-table-column>
                      <!-- 固定列fixed在left或right -->
                      <el-table-column
                        label="操作"
                        width="150">
                        <template slot-scope="scope">
                          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData5)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </div>
        
        <!-- 左侧 -->
        <!-- <div class="left fl">
          侧边栏

        </div> -->
        <!-- 右边 -->
        <div class="right fl">
          <div class="right-top">常见问题</div>
          <div class="right-bottom">如何反馈使用中遇到的问题？<br><br><span>系统中遇到任何问题，都可以反馈给PE部门对接人：成旭辉</span></div>
        </div>
      </div>
      <!-- 最后的提交按钮 -->
      <div class="last">
        <el-button round class="submit" @click="submitForm()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

// import risk1Select from './components/risk1Select'
import risk2Select from './components/risk2Select'
import risk3Select from './components/risk3Select'
import risk4Select from './components/risk4Select'
import risk5Select from './components/risk5Select'
import risk6Select from './components/risk6Select'
// import risk7Select from './components/risk7Select'
import risk8Select from './components/risk8Select'
import risk9Select from './components/risk9Select'
import DialogLink from './components/DialogLink'
import DialogLink1 from './components/DialogLink1'
import DialogLink2 from './components/DialogLink2'
import DialogGrade from './components/DialogGrade'
import DialogAddress from './components/DialogAddress'
import DialogEquip from './components/DialogEquip'
import DialogProperty from './components/DialogProperty'
import DialogFlow from './components/DialogFlow'




// 数据中心1select
Vue.component('data1Select',{
  props:['ruleForm'],
  // template:<h3>hello</h3>,
  template:'<el-cascader expand-trigger="hover" :show-all-levels="false" :options="options" v-model="ruleForm.region" placeholder="请选择数据中心"></el-cascader>',
  data(){
    return{
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
    } 
  },
  // mounted () {
  //   axios
  //     .post('http://192.168.242.13:3000/risk2/get_dc?user=chaiguangfei')
  //     .then(response => {
  //       this.info = response.data.device
  //     })
  //     .catch(error => {
  //        console.log(error)
  //     })
  // },
  methods:{
    // choose:function(log){
    //   // this.$emit("listentochild",log);
    //   // console.log(log)
    // },
    // handleChange(log){
    //   console.log(log)
    // }
  }
})
//风险等级7select
Vue.component('grade7Select',{
  props:['ruleForm'],
  template:'<el-select v-model="ruleForm.region7" disabled><el-option v-for="item in dengji" :key="item.type_no" :label="item.type_name" :value="item.type_no"/></el-select>',
  data () {
    return {
      info:null,
      dengji:[],
    }
  },
  mounted () {
    var self=this;
    this.$on("dengji",function(dengji){
      self.dengji=dengji;
    }); 
  },
  methods:{
    
  }
})
// 整改周期8Select
// Vue.component('zhouqi8Select',{
//   props:['ruleForm'],
  
//   template:'<el-select v-model="ruleForm.region8" disabled><el-option v-for="item in options" :key="item.type_no" :label="item.type_name" :value="item.type_no"/></el-select>',
//   data () {
//     return {
//       info:null,
//       zhouqi:[],
//       log:'',
//       options: [{
//           value: '1',
//           label: '季'
//           }, {
//           value: '2',
//           label: '周'
//           }, {
//           value: '3',
//           label: '月'
//       }],
//     }
//   },
//   mounted () {
//     var self=this;
//     this.$on("zhouqi",function(zhouqi){
//       self.zhouqi=zhouqi;
//     }); 
//     var that=this;
//     this.$on("log",function(log){
//       that.log=log;
//     }); 
//   },
// })

export default {
  name: 'Risk',
  data(){
    return{
      flag1:false,//客户
      flag2:false,//位置
      flag:false,//its表格是否可见
      flag4:false,//设备
      flag5:false,//资产
      flag6:false,//流程

      info: null,
      value:'',
      value1:'',

      typeVisible:false,//分类说明
      dialogVisible:false,//添加ITS相关
      dialogVisible1:false,//添加客户
      gradeVisible:false,//等级评估
      address2Visible:false,//添加位置
      equip4Visible:false,//添加设备
      property5Visible:false,//添加资产
      flow6Visible:false,//添加流程

      selected: -1,

      selectedlist: [],//ITS添加传回来的值
      selectedlist1: [],//客户添加传回来的值
      selectedlistAddress:[],//地址添加传回的值
      selectedlistEquip:[],//设备添加传回的值
      // selectedlistProperty:[],//资源添加传回的值
      selectedlistFlow: [],//流程添加传回的值

      slist: [],

      ruleForm:{
        name:'',
        describe:'',
        describe2:'',
        describe3:'',
        describe4:'',
        describe5:'',
        
        region:[],  
        region2:[],
        region3:[],
        region4:[],
        region5:[],
        region6:[],
        region7:[],
        region8:[],
        region9:[],
        data:[],
        data2:[]
      },
      // rules:{
      //   name: [
      //       { required: true, message: '请输入风险标题', trigger: 'blur' },
      //       { min: 0, max: 200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
      //     ],
        // describe:[
        //     { required: true, message: '请输入风险描述', trigger: 'blur' },
        //     { min: 0, max: 500, message: '长度在 0 到 500 个字符', trigger: 'blur' }
        //   ],
        // describe2:[
        //     { required: true, message: '请输入风险等级', trigger: 'blur' },
        //     { min: 0, max: 500, message: '长度在 0 到 500 个字符', trigger: 'blur' }
        //   ],
        // describe3:[
        //     { required: true, message: '请输入计划完成时间', trigger: 'blur' }
        //   ],
        // describe4:[
        //     { required: true, message: '请输入受理人', trigger: 'blur' },
        //     { min: 0, max: 500, message: '长度在 0 到 500 个字符', trigger: 'blur' }
        //   ],
        // describe5:[
        //     { required: true, message: '请添加影响范围', trigger: 'blur' }
        //   ],
        // region: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region2: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region3: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // // region4: [
        // //     { required: true, message: '请选择活动区域', trigger: 'change' }
        // //   ],
        // region5: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region6: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region7: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region8: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        // region9: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ]

      // },

      tableData: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5:[]
    }
  },
  // 监听选项的值，一但变化就调用方法
  watch:{
    // 'ruleForm.region2':function(newValue,oldValue){
    //   this.ruleForm.region3=''
    //   // console.log('改变了！')
    // },
    'ruleForm.region3':function(newValue,oldValue){
      this.ruleForm.region4='';
      this.ruleForm.region7='';
      this.ruleForm.region8='';
    },
    'ruleForm.region2':function(newValue,oldValue){
      this.ruleForm.region7='';
      this.ruleForm.region8='';
    },
  },
  components: {
    // risk1Select,
    risk2Select,
    risk3Select,
    risk4Select,
    risk5Select,
    risk6Select,
    // risk7Select,
    risk8Select,
    risk9Select,
    DialogLink,
    DialogLink1,
    DialogLink2,
    DialogGrade,
    DialogAddress,
    DialogEquip,
    DialogProperty,
    DialogFlow
  },
  methods: {
    // 删除表格中的一行
    deleteRow(index, rows) { 
      // 弹框提示
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        if(this.tableData3.length||this.tableData4.length||this.tableData.length||this.tableData3.length===0){
            this.flag = false;
        };
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
      
      
    },
    // 点击提交以后判断是否提交成功
    submitForm() {
      if(
        this.ruleForm.describe===''||
        this.ruleForm.describe2===''||
        this.ruleForm.describe3===''||
        this.ruleForm.describe3===''||
        this.ruleForm.describe4===''||
        this.ruleForm.describe5===''||
        this.ruleForm.region===''||
        this.ruleForm.region2===''||
        this.ruleForm.region3===''||
        this.ruleForm.region4===''||
        this.ruleForm.region5===''||
        this.ruleForm.region6===''||
        this.ruleForm.region7===''||
        this.ruleForm.region8===''||
        this.ruleForm.region9===''){
          this.$message({
            type: 'info',
            message: '请填写必填选项！'
          });    
      }else {
        if(this.ruleForm.name.length>200){
          this.$message({
            type:'info',
            message:'风险标题长度不能大于200'
          })
        }else{
            if(this.ruleForm.describe.length>500){
              this.$message({
                type:'info',
                message:'风险描述长度不能大于500'
              })
            }
          }
      }
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     this.$message({
      //       type: 'info',
      //       message: '请填写必填选项！'
      //     });    
      //     return false;
      //   }
      // });
    },
    // 显示隐藏
    // testShow(){
    //   // console.log("它要开始隐藏啦");
    //   // console.log(this.flag);
    //   this.flag = !this.flag;
    // },
    // 写一个方法接收传过来的值
    // showfromchild(data){
    //   this.child=data
    // },

    // ==============添加ITS3=============
    // 点击保存按钮
    modify(arr) {
      // console.log(arr.its)
        // if (this.selected > -1) {
        //     Vue.set(this.tableData3, this.selected, arr);
        //     this.selected = -1;
        // } else 
        if(arr.its!==''){
          this.tableData3.push(arr);
        };
        this.setSlist(this.tableData3);
        this.changeOverlay();//关闭
        if(this.tableData3.length===0){
          this.flag = false
        }else{
          this.flag = true
        }
    },
    // 点击触发显示弹框
    add(){
      this.selectedlist={
        its:''
      };
      this.dialogVisible=true;
    },
    //关闭
    changeOverlay() {
      this.selected = -1;
      this.dialogVisible = !this.dialogVisible;
    },
    // 获取需要渲染到页面中的数据
    setSlist(arr) {
        this.slist = JSON.parse(JSON.stringify(arr));
    },
    // test(){
    //   var dialogVisible=true;
    //   this.$emit("dialog",this.dialogVisible)
    //   console.log(this.dialogVisible)
    // }

    // ================添加客户1==============
    add1(){
      this.selectedlist1={
        kehu:'',
        name:'',
        adm:''
      };
      this.dialogVisible1=true;
    },
    modify1(arr) {
      if (this.selected > -1) {
          Vue.set(this.tableData, this.selected, arr);
          this.selected = -1;
      } else {
          this.tableData.push(arr);
      }
      this.setSlist(this.tableData);
      this.changeOverlay1();//关闭
    },
    changeOverlay1() {
      this.selected = -1;
      this.dialogVisible1 = false;
    },
    // ==============添加位置2=============
    add2(){
      this.address2Visible = true;
    },
    modify2(arr) {
      this.changeOverlay2();//关闭
    },
    changeOverlay2() {
      this.address2Visible = false;
    },
    // ==============添加设备4=============
    add4(){
      this.selectedlistEquip={
        type:'',
        number:'',
        name:'',
        zhuangtai:''
      };
      this.equip4Visible = true;
    },
    modify4(arr) {
      if(arr!==''){
          this.tableData4.push(arr);
        };
        this.setSlist(this.tableData4);
        this.changeOverlay5();//关闭
        if(this.tableData4.length===0){
          this.flag4 = false
        }else{
          this.flag4 = true
        }
      this.changeOverlay4();//关闭
    },
    changeOverlay4() {
      this.equip4Visible = false;
    },
    // =============添加资产5=============
    add5(){
      this.selectedlistEquip={
        type:'',
        number:'',
        name:'',
        zhuangtai:''
      };
      this.property5Visible = true;
    },
    modify5(arr) {
      if(arr!==''){
          this.tableData4.push(arr);
        };
        this.setSlist(this.tableData4);
        this.changeOverlay5();//关闭
        if(this.tableData4.length===0){
          this.flag5 = false
        }else{
          this.flag5 = true
        }
      this.changeOverlay5();//关闭
    },
    changeOverlay5() {
      this.property5Visible = false;
    },
    // =============添加流程6=============
    add6(){
      // this.selectedlistFlow={
      //   type:'',
      //   number:'',
      //   name:'',
      //   zhuangtai:''
      // };
      this.flow6Visible = true;
    },
    modify6(arr) {
      // console.log(arr);
      //插入数据的值要满足不为空and不重复
      if(arr.length!==0){
          this.tableData5.push(arr);
        };
        this.setSlist(this.tableData5);
        this.changeOverlay6();//关闭
        if(this.tableData5.length===0){
          this.flag6 = false
        }else{
          this.flag6 = true
        }

      this.changeOverlay6();//关闭
    },
    changeOverlay6() {
      this.flow6Visible = false;
    },
    // =============分类说明==============
    addType(){
      this.typeVisible = true;
    },
    changeType(){
      this.typeVisible = false;
    },

    // ================等级评估==============
    addGrade(){
      this.gradeVisible=true;
    },
    changeGrade(){
      this.gradeVisible = false;
    },

    modifyGrade(){
      this.ruleForm.region7=this.data.label;
      this.ruleForm.region8=this.data2.label;
      this.changeGrade();
    },
    dengji:function(data){
      // console.log(data)
      this.data=data
    },
    zhouqi:function(data2){
      this.data2=data2;
    }
  },
}
</script>

<style scoped>
.show{
  display:block;
}
.hidden{
  display: none;
}

  .fl{float: left}
  .fr{float: right}
  
  i{
    color: #fd3535
  }
  .risk{
    position: relative;
    width: 100%;
    background-color: #f2f2f2
  }
  .risk-page{
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  /* ===============头部样式================= */
  .head{
    position: relative;
    height: auto;
    text-align: center;
    line-height: 40px
  }
  .head-left{
    width: 50px;
    height: 42px;
    position: absolute;
    left: 0;
    background-color:white
  }
  .close{
    width: 105px;
    height: 78px;
    line-height: 78px;
    position: absolute;
    right: 0;
    background-color: #004;
    color: white;
    font-size: 12px;
  }
  .head-right{
    width: 100%;
    height: 76px;
    line-height: 76px;
    background-color: black;
    color: #f2f2f2;
    border-bottom: 2px solid #ab2127
  }
/* =============================下边部分=============================== */
  .middle{
    position: relative;
    margin-top: 5px
  }
  /* =================中间================= */
  .center{
    width: 100%;
    min-height: 100px;
    background-color: #f2f2f2
  }
  .center-wrap{
    position: relative;
    margin: 5px 205px 50px 0px;
    border: 1px solid #d2d2d2;
    padding: 20px;
    background-color: white
  }
  
  .bg-purple-dark {
    border-bottom:1px solid #99a9bf;
  }
  .grid-content {
    min-height: 36px;
  }
  /* .el-table-column{
    text-align: center
  } */
  /* 提交按钮 */
  .submit{
    width: 100px;
    height: 30px;
    position: absolute;
    right: 250px;
    top:10px;
    color: white;
    padding: 8px 0;
    background-color: #98741c
  }
  /* 提交框 */
  .last{
    position: fixed;
    width: 100%;
    border: 1px solid #d2d2d2;
    padding: 30px;
    background-color: white;
    bottom: 0;
    z-index: 1;
  }
  .text-button{
    color: #98741c;
    margin-right: 5px;
  }
  /* ==============左侧边栏================ */
  .left{
    width: 50px;
    margin-left: -100%;
    height: 200px;
    background-color:#d2d2d2
  }
  /* ==================右边================ */
  .right{
    width: 180px;
    margin-left: -190px;
    margin-top: 5px;
    height: auto;
    background-color: white;
    
  }
  .right-top{
    
    border: 1px solid #dadada;
    padding: 10px;
    color: #98741c
  }
  .right-bottom{
    height: 130px;
    padding: 10px;
    font-size: 10px;
    border: 1px solid #dadada
  }
  .right-bottom span{
    color:#b5b5b5
  }
</style>

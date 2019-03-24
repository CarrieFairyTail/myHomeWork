<template>
  <div class="dialog">
    <el-dialog
      title="添加设备"
      :visible.sync="show"
      width="50%"
      @close="close">
      <div>
        <el-form>
          <el-form-item>
            <!-- <el-cascader
              expand-trigger="hover"
              :show-all-levels="false"
              :options="info"
              :props="selectoption"
              v-model="value"
              placeholder="选择位置"  
              style="width:100px">
            </el-cascader> -->

            <!-- <el-select v-model="value">
              <el-option
              v-for="item in info2"
              :key="item.id" 
              :label="item.parent_id"
              :value="item.id"/>
            </el-select> -->
            
            <!-- <el-cascader
              expand-trigger="hover"
              :show-all-levels="false"
              :options="options"
              :props="selectoption"
              v-model="value"
              placeholder="选择类型"  
              style="width:100px">
            </el-cascader> -->

            <el-cascader
              expand-trigger="hover"
              :options="option"
              v-model="selectedOptions2"
              :show-all-levels="false"
              :change-on-select="true"
              placeholder="选择位置">
            </el-cascader>
            <el-cascader
              expand-trigger="hover"
              :options="typeOptions"
              @active-item-change="handleItemChange"
              placeholder="选择类型"
              :props="props"
            ></el-cascader>

            <el-input v-model="input" placeholder="请按照ID或者名称搜索" style="width:calc(70% - 110px)"></el-input>
            <el-button round style="border:1px solid rgb(152, 116, 28)" @click="search()"><span style="color:rgb(152, 116, 28)">搜索</span></el-button>
          </el-form-item>
        </el-form>

        <!-- 下方显示的表格 -->
        <el-table 
          :data="this.info3"
          border
          size="mini"
          max-height="250"
          style="width: 100%"
          @selection-change="handleSelected">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="名称"
            width="250">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            label="台账编号"
            width="180">
            <template slot-scope="scope">{{ scope.row.gaid }}</template>
          </el-table-column>
          <el-table-column
            label="信息">
            <!-- 类型：{{ scope.row.type }}位置：{{scope.row.lacation}}品牌：{{}}型号：{{}} -->
            <template slot-scope="scope">类型：{{ scope.row.type }}</template>
            <!-- <template slot-scope="scope">位置：{{ scope.row.location }}</template>
            <template slot-scope="scope">品牌：{{ scope.row.location }}</template> -->
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="changeActive" class="quxiao">取 消</el-button>
        <el-button type="primary" @click="modify" round class="queren">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import { error } from 'util';

export default {
  name: 'DialogEquip',
  props: ['equip4Visible','list1'],
  data() {
    return {
      // 弹框问题
      show:false,
      info:null,
      info2:null,
      info3:[],//搜索得到的值
      item:[],

      value:[],
      label:'',
      input:'',
      selectoption:{
        value:"location_id",
        label:"location",
        children:""
      },
      selectedOptions2:[],

      tableData: [],
      
      option:[{
        value:'4',
        label:'强电',
        children:[{
          value:'12',
          label:'高压配电',
          children:[{
            value:'56',
            label:'高压隔离柜',
          }]
        }]
      }],

      typeOptions:[
        {
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }
      ],
      props: {
        value: 'label',
        children: 'cities'
      },

      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
    };
  },
  computed:{
    modifylist() {
        return this.list1;
    }
  },
  // 对是否可见进行监听
  watch:{
    equip4Visible(val){
      this.show = val
    }
  },
  
  mounted () {

    // $.ajax({
    //   url: "http://192.168.242.13:3000/assets/list_sub_asset_type?user=chaiguangfei",
    //   type: "post",
    //   dataType: "json",
    //   data: {
    //       'pid': data.parent_id,
    //       'name':data.name,
    //       'id':data.id
    //   },
    //   success:function(data){
    //     //alert(data.err);
    //     console.log(pid);
    //   },
    //     error:function(){
    //     }
    // });

    axios
      //http://192.168.242.13:3000/assets/list_sub_asset_type?user=chaiguangfei
      //http://192.168.242.13:3000/locations/get_sub_locations?user=chaiguangfei&ids=2223 几楼
      .post('http://192.168.242.13:3000/risk2/get_rsk_location?user=chaiguangfei&location=2223')
      .then(response => {
        this.info = response.data.device;
        for(var i=0;i<=this.info.length;i++){
          this.item = info[i]
          console.log(this.item.name)
        }
      })
      .catch(error => {
          console.log(error)
      });

    axios
      .post('http://192.168.242.13:3000/assets/list_sub_asset_type?user=chaiguangfei')
      .then(response => {
        this.info2 = response.data.types;
        
      })
      .catch(error => {
        console.log(error)
      })

    // axios({
    //     url: 'http://192.168.242.13:3000/assets/list_sub_asset_type?user=chaiguangfei',
    //     method: 'post',
    //     responseType: 'json', // 默认的
    //     data: {
    //         // pid:'',
    //         // name:'',
    //         // id:'',
    //         // info2:''  
    //     }
    // }).then(function (response) {
    //     console.log(response);
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.log(error);
    // })



  },
  methods: {
    // submit(){
    //   this.dialogVisible = false;
    //   this.$emit("listentochild",value);
    // },
    handleSelected(){

    },
    //把值传给父组件
    // 取消
    changeActive() {
      this.$emit('change4');
    },
    // 确认传值
    modify() {
      this.$emit('modify4', this.modifylist);    
    },
    // tijiao(log){
    //   this.$emit("listentochild",log);
    //   // console.log(log);
    // }
    
    // 更新传给父组件的可见值
    close(){
      this.$emit('update:equip4Visible',false)
    },
    search(){
      axios
        // 搜索this.input关键字
        //http://192.168.242.13:3000/devices/get_devices?user=chaiguangfei&asset_type_id=4&name=11&location=2223
        .post(`http://192.168.242.13:3000/devices/get_devices?user=chaiguangfei&asset_type_id=4&name=${this.input}&location=2223`)
        .then(response => {
          this.info3 = JSON.parse(response.data.devices);//转换成数组 
        })
        .catch(error => {
            console.log(error)
        });
    },

    //动态加载次级选项
    handleItemChange(val) {
      // console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.typeOptions[0].cities.length) {
          this.typeOptions[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.typeOptions[1].cities.length) {
          this.typeOptions[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    }
  }
}
</script>
<style>
@import "../components/dialog.css";
</style>

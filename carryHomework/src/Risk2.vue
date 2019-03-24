<template>
  <div id="risk2" class="total">
    <!-- 左边主要部分 -->
    <div class="fl" style="width:100%">
      <div class="left-wrap">
        <el-form style="width:80%">
          <div style="height: 30px;border-bottom: 1px solid #dadada;"><b>风险基础信息</b></div>
          <!-- 风险标题 -->
          <el-form-item>
            <!-- label为input做标记，for与相关id值相同 -->
            <label for="riskTitle"><span style="color:#e43a45;">*</span><b>风险标题：</b></label><br>
            <input id="riskTitle" type="text" placeholder="请填写风险标题（字数<=200）">
          </el-form-item>
          <!-- 风险描述 -->
          <el-form-item>
            <label for="riskDescribe"><span style="color:#e43a45;">*</span><b>风险描述：</b></label><br>
            <textarea id="riskDescribe" :rows="2" placeholder="请填写风险描述信息（字数<=500）"></textarea>
          </el-form-item>
          <!-- 下拉框 -->
          <el-form-item style="width:100%">
            <div class="fl sel">
              <label for="numCenter"><span style="color:#e43a45;">*</span><b>数据中心：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="part"><span style="color:#e43a45;">*</span><b>部门：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="riskType"><span style="color:#e43a45;">*</span><b>风险分类：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="notKnow"></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="fl sel">
              <label for="riskSource"><span style="color:#e43a45;">*</span><b>风险来源：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="genReason"><span style="color:#e43a45;">*</span><b>根本原因：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="riskGrade"><span style="color:#e43a45;">*</span><b>风险等级：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
            <div class="fl sel">
              <label for="numCenter"><span style="color:#e43a45;">*</span><b>整改周期：</b></label><br>
              <select>
                <option>数据一</option>
                <option>数据二</option>
              </select>
            </div>
          </el-form-item>
          <!-- 计划完成时间 -->
          <el-form-item>
            <div class="fl sel">
              <label for="riskTitle"><span style="color:#e43a45;">*</span><b>计划完成时间：</b></label><br>
              <input id="" type="text" style="width:90%" placeholder="请填写计划完成时间">
            </div>
          </el-form-item>
          <!-- 受理人 -->
          <el-form-item>
            <div>
              <div class="fl sel">
                <label for="shouliren"><span style="color:#e43a45;">*</span><b>受理人：</b></label><br>
                <input id="" type="text" style="width:90%" placeholder="请填写计划完成时间">
              </div>
              <div class="fl sel">
                <label for="zerenren"><span style="color:#e43a45;">*</span><b>责任人：</b></label><br>
                <select>
                  <option>数据一</option>
                  <option>数据二</option>
                </select>
              </div>
            </div>
          </el-form-item>
          <!-- 表格1 -->
          <el-form-item>
            <div class="fl" style="margin-top:20px;width:100%">
              <label for="riskTitle"><span style="color:#e43a45;">*</span><b>影响范围：</b></label>
              <el-button type="text" style="color:#98741c">+添加客户</el-button>
              <el-button type="text" style="color:#98741c">+添加位置</el-button>
              <el-button type="text" style="color:#98741c">+添加ITS相关</el-button>
              <br>
              <!-- <table  class="">
                <thead>
                  <tr>
                    <th>客户名称</th>
                    <th>联系人</th>
                    <th>ADM</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in tableData" :key="index">
                    <td>{{item.kehu}}</td><td>{{item.name}}</td><td>{{item.adm}}</td>
                  </tr>
                </tbody>
              </table> -->
              <el-table
                :data="tableData"
                border
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
                <el-table-column
                  label="操作"
                  width="150">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="fl" style="margin-top:20px;width:100%">
              <!-- <table  class="">
                <thead>
                  <tr>
                    <th>位置</th>
                    <th></th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td></tr>
                  <tr><td></td></tr>
                </tbody>
              </table> -->
              <el-table
                :data="tableData2"
                border
                size="mini"
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
            </div>
          </el-form-item>
          <el-form-item>
            <div class="fl" style="margin-top:20px;width:100%">
              <!-- <table  class="">
                <thead>
                  <tr>
                    <th>ITS相关</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td></tr>
                  <tr><td></td></tr>
                </tbody>
              </table> -->
              <el-table
                :data="tableData3"
                border
                size="mini"
                style="width: 100%">
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
            </div>
          </el-form-item>
          <el-form-item>
            <div class="fl" style="width:100%">
              <label for="riskTitle"><span style="color:#e43a45;">*</span><b>关联设备：</b></label>
              <el-button type="text" style="color:#98741c">+添加设备</el-button>
              <el-button type="text" style="color:#98741c">+添加资产</el-button>
              <br>
              <!-- <table  class="">
                <thead>
                  <tr>
                    <th>客户名称</th>
                    <th>联系人</th>
                    <th>ADM</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td></tr>
                  <tr><td></td></tr>
                </tbody>
              </table> -->
              <el-table
                :data="tableData4"
                border
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
            </div>
          </el-form-item>
          <el-form-item>
            <div class="fl" style="margin-top:20px;width:100%">
              <label for="riskTitle"><span style="color:#e43a45;">*</span><b>关联流程：</b></label><br>
              <!-- <table  class="">
                <thead>
                  <tr>
                    <th>客户名称</th>
                    <th>联系人</th>
                    <th>ADM</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td></tr>
                  <tr><td></td></tr>
                </tbody>
              </table> -->
              <el-table
                :data="tableData5"
                border
                size="mini"
                style="width: 100%">
                <el-table-column
                  prop="type"
                  label="类型"
                  width="250">
                </el-table-column>
                <el-table-column
                  prop="number"
                  label="单号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="名称">
                </el-table-column>
                <el-table-column
                  prop="zhuangtai"
                  label="状态">
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
            </div>
          </el-form-item>
          <el-form-item>
            <el-button round class="fr" style="color: white;background-color: #98741c">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 右边 -->
    <div class="fl" style="width: 200px;height: auto;position: fixed;right: 0;background-color: white;font-size: 13px">
      <div style="height: 30px;border: 1px solid #dadada;color: #a28235;padding: 10px;line-height: 30px;">常见问题</div>
      <div style="height: 130px;border: 1px solid #dadada;padding: 10px;">如何反馈使用中遇到的问题？<br>
        <span style="display: block;color: #cbcbcb;margin-top: 10px;">系统中遇到的任何问题都可以反馈给PE部门对接人</span>
      </div>
    </div>
    <!-- <HelloWorld>
      <slot>hello</slot>
    </HelloWorld> -->
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'Risk2',
  data(){
    return{
      tableData: [{
          kehu: '阿里巴巴',
          name: '王先生，刘先生',
          adm: '马先生'
        }, {
          kehu: '腾讯',
          name: '柴先生',
          adm: '李先生'
        }],
      tableData2: [{
          weizhi: '上海一号',
          others:<a href="#" style="color:lightblue">所有相关客户</a>
        }, {
          weizhi: '上海二号>1F>101模块',
          others:<a href="#" style="color:lightblue">所有相关客户</a>
        }],
      tableData3: [{
          its: 'ECP'
        }, {
          its: 'BGP'
        }],
      tableData4: [{
          type: '设备',
          name:'这是设备名称',
          number:'GAD23368',
          message:'类型:'
        }, {
          type: '资产',
          name:'设备名称',
          number:'GAD23368',
          message:'类型'
        }],
      tableData5: [{
          type: '事件单',
          name:'XXX事件',
          number:'INC0000000001',
          zhuangtai:'处理中'
        }, {
          type: '故障单',
          name:'XXX故障',
          number:'INC0000000001',
          zhuangtai:'已关闭'
        }],
    }
  },
  components: {
    HelloWorld
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    
}
</script>

<style  scoped lang="stylus">
.fl{float: left}
.fr{float: right}
.total{
  background-color: #f2f2f2;
}
.left-wrap{
  padding: 20px;
  margin-right: 200px;
  border: 1px solid #dadada;
  height: 100%;
  background-color: white;
}
#riskTitle{
  width: 100%;
  height: 20px;
  border-top: 1px solid #999;
}
textarea{
  width: 100%;
}
select{
  width:90%
}
div a{
  text-decoration :none; 
}
 
.sel{
  width: 25%
}
table{
  border-collapse:collapse; 
  width: 100%;
  height: 30px;
}
table,th,td{
  border: 1px solid #999;
  text-align: center
}
th{
  background-color: #f2f2f2;
}
</style>

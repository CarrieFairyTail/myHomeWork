<template>
  <div id="app">
    <!-- <i class="el-icon-edit"></i> -->
    <el-row >
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" style="height:50px">
          <H1>Hello 梧飞</H1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <h2>which boss do you like?</h2>
          <el-radio-group v-model="radio2">
            <el-radio :label="3">刘姥姥</el-radio>
            <el-radio :label="6">陆师傅</el-radio>
            <el-radio :label="9">帅气的我</el-radio>
          </el-radio-group>
        </div>
        </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <h2>where are you from?</h2>
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="南京"></el-radio-button>
        </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <h2>what things do you like?</h2>
          <el-checkbox-group v-model="checkList" :min=1 :max=3 >
            <el-checkbox label="玩" border></el-checkbox>
            <el-checkbox label="除了玩" border></el-checkbox>
            <el-checkbox label="还是玩" border></el-checkbox>
            <el-checkbox label="写代码" border disabled></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <h2>what you want to search?</h2>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input10" clearable>
          <!-- clearable可消除输入内容 -->
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <h2>what do you want to say?</h2>
          <el-input
          type="textarea"
          :rows="1"
          placeholder="请输入内容"
          v-model="textarea">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-input v-model="input11">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="鲜肉" value="1"></el-option>
              <el-option label="咸肉" value="2"></el-option>
              <el-option label="腊肉" value="3"></el-option>
            </el-select>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          restaurants:
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete><br>
          计数器：
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          delious：
          <el-select v-model="value" placeholder="请选择" clearable>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="block">
            <span class="demonstration">hover 触发子菜单</span>
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions2"
              @change="handleChange2">
            </el-cascader>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
         
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data(){
    return{
      radio2:3,
      radio3:'上海',
      checkList:['写代码','玩'],
      input10:'',
      input11:'',
      textarea:'hello',
      select:'鲜肉',
      state1:'',
      num:1,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled:'true'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
      }],
      value:''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      // 计数
      handleChange(value) {
        console.log(value);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style>
/* #app {
  
} */
.el-row {
    margin-bottom: 5px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    background: #252323;
    padding: 20px;
    color: antiquewhite
  }
  .bg-purple {
    background: #5d6063;
  }
  .bg-purple-light {
    background: #abacaf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 100px;
    text-align: center
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-radio {
    color: white
  }
  .el-checkbox {
    color: white
  }
</style>

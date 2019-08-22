<template>
  <div id="index">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <div class="header">
      <span @click="handleClick">万国数据</span>
      <!-- 搜索框 -->
      <cube-input v-model="value" ></cube-input>
    </div>
    <div>
      <cube-select v-model="dataCenter" :options="datacenterOptions"/>
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
      <!-- unicode -->
      <span class="iconfont iconBirthday-Cake"></span>
      <!-- sy -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconDonute"></use>
      </svg>
    </div>
    <cube-button @click="showDialog">点击</cube-button>
    <div id="myChart" style="width:300px;height:300px"></div>
    <div id="chart1" style="width:300px;height:300px"></div>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
  },
  data() {
    return {
      value:'请输入',
      current: '快车',
      labels: [
        '快车',
        '小巴',
        '专车',
        '顺风车',
        '代驾',
        '公交',
        '自驾租车',
        '豪华车',
        '二手车',
        '出租车'
      ],
      dataCenter: '',
      datacenterOptions: []
    }
  },
  mounted(){
    this.drawLine();
    this.$chart.line1('chart1');
  },
  methods: {
    showDialog() {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: '没事儿'
      }).show()
    },
    changeHandler(cur) {
      this.current = cur
    },
    // 绘制图表
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    },
    handleClick() {
      // 拿到该行对应的result_id $router传值
      this.$router.push({
        path: 'indexTwo',
      })
    },
  }
}
</script>

<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.header {
  width: 100%;
  height: 100px;
  background-color: #b30017;
  color:antiquewhite
}
.cube-input {
  margin: 20px 10px;
  width: 50%;
  border-radius: 50% 
}
.cube-input-field {
  /* border-radius: 60rem */
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

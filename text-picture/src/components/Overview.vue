<template>
  <div>
    <div>
      <div style="float:left">
        <i class="iconfont iconCheeseCake"></i>概览
      </div>
      <div class="top_nar">
        <ul>
          <li>前天</li>
          <li>昨天</li>
          <li>今天</li>
          <li>明天</li>
        </ul>
      </div>
    </div>
    <!-- 图标 -->
    <div id="myChart" style="width:300px;height:300px">

    </div>
    <div id="chart1">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Overview',
  data() {
    return {
      msg: '概览'
    }
  },
  mounted() {
    this.drawLine()
    this.$chart.line1('chart1');
  },
  methods: {
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
    }
  }
}
</script>
<style lang="stylus" scoped>
.iconCheeseCake
  color #999
ul li
  list-style none
  margin-right 10px
  float left
.top_nar
  float right
</style>

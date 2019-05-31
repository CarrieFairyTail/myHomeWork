<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <div class="header">
      万国数据
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
    <!-- <cube-button @click="showDialog">点击</cube-button> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
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
    }
  }
}
</script>

<style>
#app {
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

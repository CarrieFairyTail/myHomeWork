<template>
  <div id="team">
    <div id="page" style="width:90%;height:100%;border:1px solid black;margin:0 auto">
      <!-- 上边 -->
      <div class="top">
        <!-- 左边 -->
        <div class="logo fl">logo</div>
        <!-- 右边 -->
        <div class="title fl">
          <div class="right-wrap">
            标题
          </div>
        </div>
      </div>
      <!-- 下边 -->
      <div style="border:1px solid black;margin-top:5px">
        <el-row :gutter=5>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <div class="qcontainer">
                <div class="film">
                  <div class="face front"><img :src="imgUrl"></div>
                  <div class="face back">
                    <h3>这是柯基!!</h3>
                    <span>很可爱，很多人说刘昊然很像他，像吗？像</span>
                  </div>
                </div>
					    </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <div class="qcontainer">
                <div class="film">
                  <div class="face front"><img :src="imgUrl"></div>
                  <div class="face back">
                    <h3>这是柯基!!</h3>
                    <span>很可爱，很多人说刘昊然很像他，像吗？像</span>
                  </div>
                </div>
					    </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <div class="qcontainer">
                <div class="film">
                  <div class="face front"><img :src="imgUrl"></div>
                  <div class="face back">
                    <h3>这是柯基!!</h3>
                    <span>很可爱，很多人说刘昊然很像他，像吗？像</span>
                  </div>
                </div>
					    </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <div class="qcontainer">
                <div class="film">
                  <div class="face front"><img :src="imgUrl"></div>
                  <div class="face back">
                    <h3>这是柯基!!</h3>
                    <span>很可爱，很多人说刘昊然很像他，像吗？像</span>
                  </div>
                </div>
					    </div>
            </div>
          </el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import keji_img from './assets/keji.jpg'

export default {
  name: 'Team',
  data(){
    return{
      imgUrl:keji_img
    }
  },
  components: {
    HelloWorld
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
      .bg-purple {
        background: gray  
      }
      .grid-content {
        min-height: 500px;
      }  
    }
  }
  
  .fl{
    float left
  }
  .fr{
    float right
  }
  
  .top{
    position relative
    height:40px;
    background-color yellow
    .logo{
      position absolute
      left 0
      width 3%
      height 100%
      background-color gray 
    }
    .title{
      width 100%
      height 100%
      .right-wrap{
        height 100%
        background-color red 
        margin-left 3%
      }
    } 
  }

  .qcontainer{
    -webkit-perspective:400;
    -moz-perspective:400;
	  float:left;
    width:100%;
    margin-right:18px;
    margin-bottom: 10px;
    .film{
      width:100%;
      height:500px;
      -webkit-transform-style:preserve-3d;
      -webkit-transition:1.5s;
      -moz-transform-style:preserve-3d;
      -moz-transition:1.5s;
      .face{
        position:absolute;
        -webkit-backface-visibility:hidden;
        -moz-backface-visibility:hidden;
        h3{
          color:white;
          text-align:center;
        }
        img {
          width 100%;
          height 100%;
        }
      } 
      .back{
        -webkit-transform:rotateY(180deg);
        -moz-transform:rotateY(180deg);
        background:brown
        width:100%;
        height:100%;
      }
    }
    // 父级引用&
    &:hover .film{
      -webkit-transform:rotateY(180deg);
      -moz-transform:rotateY(180deg);
    }
  }
  
  
  
</style>

<template>
  <div id="login">
    <form action="#" method="post">
      <div>登陆（密码/短信验证）</div>
      <img src="./login/logo.png" alt="logo">
      <div>
        账号：<input type="text" placeholder="请输入账号"><br>
        密码：<input type="password" placeholder="请输入密码">
      </div>
      <div>
        <input type="submit" value="确认">
        <input type="reset" value="重置">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {

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
  margin-top: 60px;
}
</style>

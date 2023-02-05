<template>
  <div class="loginForm" id="LoginForm" style="padding: 7px 5px; overflow: hidden; background-color: rgb(40, 38, 58);">
    <div class="header" @click="signclose" >Login</div>
    <div class="form-wrapper">
      <input type="text" name="username" placeholder="username" class="input-item">
      <input type="password" name="password" placeholder="password" class="input-item">
      <div class="btn">Login</div>
    </div>
    <div class="msg">
      Don't have account?
      <a href="#">Sign up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    signclose() {
      let elementById = document.getElementById("LoginForm");
      elementById.style.display = "none";
    }
  }
}
</script>

<style scoped>
.loginForm {
  font-family: 微软雅黑;
  position: fixed;
  background-color: white;
  top: 20%;
  left: 30%;
  width: 500px;
  height: 400px;
  border-radius: 1em;
  text-align: center;
  z-index: 999;
  display: none;
}

.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  /*line-height: 200px;*/
}
.input-item {
  display: block;
  width: 80%;
  margin-bottom: 20px;
  margin-left: 10%;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  margin-left: 10%;
  width: 80%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}

</style>
<template>
  <el-container>
    <el-header>
      <header class="ant-layout-header">
        <div class="layout-header">
          <div class="layout-header-left">
            <a class="icon-box">
              <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAA4CAYAAABZhPX/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBOTlDQjNBODJGRTExRUI5NzZBRTJEQjBFRUYxNzI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBOTlDQjNCODJGRTExRUI5NzZBRTJEQjBFRUYxNzI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REE5OUNCMzg4MkZFMTFFQjk3NkFFMkRCMEVFRjE3MjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REE5OUNCMzk4MkZFMTFFQjk3NkFFMkRCMEVFRjE3MjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lUIqtAAAgpklEQVR42uyd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"></a>
            <div class="menu-list">
              <div class="menu-item">
                <div class="item boxhome  item-line" @click="boxhome"><i class="el-icon-suitcase"></i>盲盒</div>
              </div>
              <div class="menu-item">
                <div class="item dream  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>幸运开箱</div>
              </div>
              <div class="menu-item">
                <div class="item doubox  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>箱子对战</div>
              </div>
              <div class="menu-item">
                <div class="item exchange  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>汰换</div>
              </div>
              <div class="menu-item">
                <div class="item roll  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>ROLL房</div>
              </div>
              <div class="menu-item">
                <div class="item mall  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>商城</div>
              </div>
              <div class="menu-item">
                <div class="item backpack  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>背包</div>
              </div>
              <div class="menu-item pr">
                <div class="item charge  item-line"><i class="el-icon-star-on" style="margin-right: 3px"></i>合作伙伴</div>
              </div>
              <div class="menu-item">
                <div class="item vip"><i class="el-icon-star-on" style="margin-right: 3px"></i>优质会员</div>
              </div>
            </div>
            <div class="new_fission"></div>
          </div>
          <div class="log-btns">
            <span @click="showToolBtn" v-show="true">登陆</span>
            <div class="btns-line"></div>
            <span @click="register">注册</span>
          </div>
        </div>
        <LoginForm/>
      </header>

      <header class="layout-header-slider">
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
      </header>
    </el-header>
    <el-main>
      <div class="layout-main-background">
        <div class="layout-main-out">
          <div class="message-layout">
            <div class="message-box">
              <div class="x0 x1 x2 ">
                <div style="transition: width 150ms linear 0s; height: 22px; width: 939.375px;">
                  <div class="x0 x3 x4 x5" style="opacity: 1; transform: translateY(0px); position: absolute;">
                    <div class="message-info">
                      <div>本网站所有盲盒均为消遣娱乐、请勿沉迷，每次开启盲盒为独立计算，多次开启盲盒并不意味某区间概率累加；请理性消费，切勿上头！</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-view></router-view>
<!--          <ContentShow/>-->
        </div>
      </div>
    </el-main>
    <!--    <el-footer>Footer</el-footer>-->
  </el-container>
</template>

<script>
import ContentShow from "@/components/ContentShow";
import BoxHome from "@/views/BoxHome";
import LoginForm from "@/views/LoginForm";
export default {
  name: "Login",
  components: {LoginForm,ContentShow, BoxHome},
  data() {
    return {

    }
  },
  methods: {
    showToolBtn() {
      let elementById = document.getElementById("LoginForm");
      elementById.style.display = "block";

    },
    register() {

    },
    boxhome() {
      this.$router.push("BoxHome")
    }
  }
}
</script>

<style scoped>
.el-container {
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
}

/***************   Header start*********************/
.ant-layout-header {
  box-sizing: border-box;
  flex: 0 0 auto;
  color: rgba(0, 0, 0, .85);
  line-height: 64px;
  background: #001529;
  height: 100px;
  width: 100px;
  padding: 0 !important;
}

.ant-layout-header .layout-header {
  margin: 0;
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  padding: 0 50px;
  width: 100%;
  height: 100px;
  background: url(//oss.86skins.cn/releases/hp/static/static/nav_bg.9d038.png);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.layout-header-left {
  margin: 0;
  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.log-btns {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --antd-wave-shadow-color: #1890ff;
  --scroll-bar: 0;
  --swiper-navigation-size: 44px;
  --swiper-theme-color: #007aff;
  font-variant: tabular-nums;
  font-feature-settings: "tnum", "tnum";
  user-select: none;
  line-height: 64px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #b5bbc2;
  display: flex;
  align-items: center;
  margin-right: 20px;
}


.btns-line {
  width: 2px;
  height: 14px;
  background: #b5bbc2;
  margin: 0 20px;
}

.menu-list {
  margin: 0;
  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  height: inherit;
}

.menu-list .menu-item {
  height: 64px;
  width: 80px;
  color: #E9EEF3;
}

.log-btns span {
  cursor: pointer;
}
/****************  header end  *********************/



/****************  main start  *********************/
.el-main {
  padding: 0!important;
  background: rgb(0,17,42);
}
.layout-main-out .message-layout .message-box {

  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
  width: 1450px;
  height: 38px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
}

.x2 {
  vertical-align: top;
}

.x1 {
  position: relative;
}

.x0 {
  display: inline-block;
}

.x4 {
  top: 0px;
}

.x3 {
  left: 0px;
}

.message-info {

  font-size: 14px!important;
  font-weight: 400;
  font-stretch: normal;
  letter-spacing: 0;
  color: #2ffaf8;
  display: flex;
  align-items: center;
}
/****************  main start  *********************/



/****************  header start  *********************/
.el-header {
  padding: 0!important;
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 200px !important;
}

.layout-main-background {
  box-sizing: border-box;
  background-image:url('../assets/img_3.png');
  background-repeat:no-repeat;/*图片不重复*/
  background-size:100%;

}

.icon-box {
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  touch-action: manipulation;
  display: block;
  text-decoration: none;
  color: #000;
  box-sizing: border-box;
  width: 300px;
  height: 64px;
}

.icon-box img {
  vertical-align: middle;
  border-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
  width: 260px;
  height: 64px;
  margin-right: 10px;
}

.layout-header-slider {
  background: rgba(0, 0, 0, .85);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --antd-wave-shadow-color: #1890ff;
  --scroll-bar: 0;
  --swiper-navigation-size: 44px;
  --swiper-theme-color: #007aff;
  position: fixed;
  height: 100px;
  width: 100%;
  display: flex;
}
.layout-main-out {
  background: rgba(0,17,42,0.98);
}
.layout-main-out .message-layout{

  padding: 0;
  font-size: 14px;
  box-sizing: border-box;
  width: 1450px;
  height: 38px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
}






/****************  header end  *********************/

</style>
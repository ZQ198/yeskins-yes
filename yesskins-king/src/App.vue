<template>
  <div id="app">
    <router-view v-show="true"/>
  </div>
</template>
<script>
import Main from "@/components/Main";
export default {
  components: {Main}
}
</script>
<style>
#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  --antd-wave-shadow-color: #1890ff;
  --scroll-bar: 0;
  --swiper-navigation-size: 44px;
  --swiper-theme-color: #007aff;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: "tnum","tnum";
  user-select: none;
  color: #fff;
  font-family: "Microsoft YaHei";
}
</style>

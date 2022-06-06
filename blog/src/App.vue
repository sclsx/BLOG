<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <AppNav/>
    <!-- 主体部分 -->
    <div id="main">
      <!-- 左侧导航栏 -->
      <div class="left">
        <AppSide/>
      </div>
      <!-- 右侧主体栏 -->
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import AppNav from "./components/AppNav.vue"
import AppSide from "./components/AppSide.vue"
export default {
  name: 'App',
  components:{
    AppNav,
    AppSide
  }
}
</script>

<style>
/* 引入样式 */
@import "./assets/css/reset.css";
  body {
    background: url("./img/bg-left.png") no-repeat 0 20px fixed,
    url("./img/bg-right.png") no-repeat right 20px fixed;
    background-color: #f3f3f3;
  }
  /* 主体部分样式 */
  #main {
    
    width: 100%;
    max-width: 1300px;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 65px auto 0;
    display: flex;
  }
  /* 主体左侧 */
  #main .left{
    width: 270px;
    /* height: 500px; */
    margin-right: 15px;
    min-height: 721px;
  }
  /* 主体右侧 */
  #main .right{
    flex:1;
    min-height: 721px;
  }
</style>

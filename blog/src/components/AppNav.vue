<template>
    <div id="AppNav">
        <div class="container">
            <!-- logo -->
            <div class="logo">
                <a href="/">Katrina.com</a>
            </div>
            <!-- 导航 -->
            <div class="nav">
                <router-link to="/">首页</router-link>
                <router-link to="/article">文章</router-link>
                <!-- <router-link to="/message">日志</router-link> -->
                <router-link to="/link">友链</router-link>
                <router-link to="/about">关于</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AppNav',
}
</script>

<style scoped>
#AppNav {
    width: 100%;
    height: 50px;
    box-shadow: 0 0 5px #999;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    font-family: LSX;
}
.container {
    max-width: 1300px;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
/* logo */
.logo {
    display: flex;
    width: 130px;
    height: 50px;
}
.logo a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 42px;
    font-size: 30px;
    letter-spacing: 5px;
    color: rgba(0, 0, 0, .7);
}
/* 导航 */
.nav {
    display: flex;
    height: 50px;
}
.nav a {
    font-size: 20px;
    display: block;
    height: 48px;
    border-bottom: 2px solid transparent;
    padding: 0 25px;
    color: #777;
    line-height: 48px;
    font-weight: bolder;
    transition: all .3s;
}
.nav a:hover{
    color: #00b7ff;
    border-bottom: 2px solid #00b7ff;
}
</style>
<template>
    <div id="PersonalPage">
        <!-- 左侧顶部 -->
        <div class="top">
            <!-- 头像 -->
            <router-link to="/admin">
                <div class="img"></div>
            </router-link>
            
            <!-- 名字 -->
            <div class="name">
                <p>Katrina</p>
                <p>Web Developer</p>
            </div>
            <div class="clear"></div>
            <!-- 跳转图标 -->
            <div class="contact">
                <!-- github -->
                <a href="https://github.com/sclsx" class="iconfont icon-github-fill" target="_blank"></a>
                <!-- 微博二维码 -->
                <el-popover
                    placement="bottom"
                    width="150"
                    title="微博"
                    trigger="click"
                    >
                    <a class="iconfont icon-weibo" target="_blank" slot="reference"></a>
                    <img style="display:block" src="../../img/weibo.jpg" width="150" height="150">
                </el-popover>
                <!-- qq二维码 -->
                <el-popover
                    placement="bottom"
                    width="150"
                    title="QQ"
                    trigger="click"
                    >
                    <a class="iconfont icon-QQ" target="_blank" slot="reference"></a>
                    <img style="display:block" src="../../img/qq.jpg" width="150" height="150">
                </el-popover>
                <!-- 微信二维码 -->
                <el-popover
                    placement="bottom"
                    width="150"
                    title="微信"
                    trigger="click"
                    >
                    <a class="iconfont icon-weixin" target="_blank" slot="reference"></a>
                    <img style="display:block" src="../../img/wechat.jpg" width="150" height="150">
                </el-popover>
                <!-- gitee -->
                <a href="https://gitee.com/lsx1324566" class="iconfont icon-gitee-fill-round" target="_blank"></a>
            </div>
        </div>
        <div class="clear"></div>
        <!-- 跳转源码 -->
        <div class="bottom">
            <a href="https://github.com/sclsx/BLOG" target="_blank">Source Code</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'PersonalPage'
}
</script>

<style scoped>
.clear {
    width: 0;
    height: 0;
    clear: both;
}
#PersonalPage{
    width: 100%;
    height: 220px;
    transition: all .3s;
}
#PersonalPage:hover{
    box-shadow: #ccc 0px 10px 10px;
}
/* 顶部 */
#PersonalPage .top{
    width: 100%;
    background-color: #97FFFF;
    float: left;
}
/* 顶部图片 */
#PersonalPage .top .img{
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-top: 20px;
    margin-left: 30px;
    overflow: hidden;
    background: url('../../img/carol.jpg') no-repeat 50%/cover;
}
/* 顶部姓名 */
.name {
    float:right;
    margin-top: 29px;
    margin-right: 30px;
}
.name p:nth-child(1){
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 5px;
}
.name p:nth-child(2){
    color: #555;
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 12px;
    margin-top: 5px;
}
/* 图标 */
.contact {
    margin-top: 15px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
}
.contact a {
    display: block;
    font-size: 20px;
    color: #525252;
    transform: color .3s;
    cursor: pointer;
}
/* 底部 */
.bottom {
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
}
.bottom a {
    width: 60%;
    display: block;
    widows: 65%;
    height: 40px;
    border-radius: 23px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    font-weight: 700;
    color: #000;
    letter-spacing: 1px;
    background-color: #8DEEEE;
}
</style>
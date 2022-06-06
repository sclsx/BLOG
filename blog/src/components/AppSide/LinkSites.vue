<template>
    <div id="LinkSites">
        <h4>Link Sites</h4>
        <ul>
            <li><a href="https://www.ruanyifeng.com/blog/" target="_blank"><span>阮一峰博客</span><span>ruanyifeng.com</span></a></li>
            <li><a href="https://www.bilibili.com/" target="_blank"><span>哔哩哔哩</span><span>bilibili.com</span></a></li>
            <li><a href="https://www.baidu.com/" target="_blank"><span>百度</span><span>baidu.com</span></a></li>
            <li><a href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a" target="_blank"><span>阿里巴巴矢量库</span><span>iconfont.cn</span></a></li>
            <li><a href="https://v3.bootcss.com/" target="_blank"><span>bootstrap</span><span>bootcss.com</span></a></li>
            <li><a href="https://juejin.cn/" target="_blank"><span>稀土掘金</span><span>juejin.cn</span></a></li>
            <li><a href="https://github.com/" target="_blank"><span>GitHub</span><span>github.com</span></a></li>
            <li><a href="https://cn.vuejs.org/" target="_blank"><span>Vue官方文档</span><span>cn.vuejs.org</span></a></li>
            <li><a href="https://element.eleme.cn/#/zh-CN" target="_blank"><span>Element UI</span><span>element.eleme.cn</span></a></li>
        </ul> 
    </div>
</template>

<script>
export default {
    name:'LinkSites'
}
</script>

<style scoped>
#LinkSites {
    box-sizing: border-box;
    margin-top:15px;
    width: 100%;
    box-shadow: 0 0 4px #ddd;
    background-color: #fff;
    padding: 20px;
    transition: all .3s;
    border-radius: 5px;
}
#LinkSites:hover{
    box-shadow: #ccc 0px 10px 10px;
}
#LinkSites h4{
    width: 100%;
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    font-size: 16px;
}
#LinkSites ul {
    margin-top: 12px;
}
#LinkSites ul li {
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 3px;
}
#LinkSites ul li a {
    display: block;
    flex: 1;
    color: #787977;
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    border-radius: 5px;
}
#LinkSites ul li a:hover {
    background-color: #f5f5f5;
}
#LinkSites ul li span:nth-child(2){
    margin-left: 10px;
    font-size: 12px;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 3px;
}
</style>
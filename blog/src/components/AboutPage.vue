<template>
    <div id="About">
        <article>
            <h2>ABOUT ME</h2>
            <p>我是一个喜欢前端开发的大三学生😏</p>
            <p>谢谢你来到我的个人博客！我叫Katrina</p>
        </article>
        <article>
            <h2>ABOUT SITE</h2>
            <p class="code"><span>前 &nbsp;端：</span><span>Vue + Element</span></p>
            <p class="code"><span>后 &nbsp;端：</span><span>Node + Nuxt + Express + Mongodb</span></p>
            <p class="border"><span>服务器：</span><a href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6" target="_blank">阿里云ECS</a></p>
            <p>这个博客我在2021年就开始构思了，终于在2022年上线了！😂</p>
            <p>做这个博客的动机是在学习ES6的时候无意间看到了阮一峰的博客，发现他经常在博客中分享自己学到的知识，和对身边事情的看法，让我萌生出了做一个个人博客的想法，我想要分享自己的所思所闻所感</p>
        </article>
        <article>
            <h2>ABOUT COPYRIGHT</h2>
            <p>源码开源：<a href="https://github.com/sclsx/BLOG" target="_blank">github</a></p>
            <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
        </article>
        <article>
            <h2>OTHER</h2>
            <p>我不仅是一个程序员，我还喜欢音乐，尤其R&B和摇滚，我爱听陶喆，丁世光，方大同，王力宏，最喜欢的乐队是The Beatles（甲壳虫乐队）</p>
        </article>
    </div>
</template>

<script>
export default {
    name:'AboutPage'
}
</script>

<style lang="less" scoped>
    article {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    font-family: LSX;
    border-radius: 5px;
    transition: all .3s;
    &:hover{
        box-shadow: #ccc 0px 10px 10px;
    }

    h2{
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 24px;
        border-left: 5px solid #97FFFF;
        text-indent: 10px;
    }

    p{
        text-indent: 2em;
        color: #444;
        font-size: 14px;
        letter-spacing: 4px;
        line-height: 30px;
        a{
            color: #409eff;
            &:hover{
                text-decoration: underline;
            }
        }
    }

    p.code{
        color: #bd4147;
        background-color: rgba(27, 31, 35, .05);
        font-weight: 700;
    }

    p.border{
        border-bottom: 1px dotted rgb(170, 170, 170);
    }
}
</style>
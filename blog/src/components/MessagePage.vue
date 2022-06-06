<template>
    <div id="Message">
        <article>
            <h2>最新日志</h2>
            <ul>
                <li><span>2022年6月1日</span>>>><a href="">啦啦啦</a></li>
                <li><span>2022年6月1日</span>>>><a href="">哈哈哈</a></li>
                <li><span>2022年6月1日</span>>>><a href="">嘻嘻嘻</a></li>
                <li><span>2022年6月1日</span>>>><a href="">哦哦哦</a></li>
            </ul>
        </article>
    </div>
</template>

<script>
export default {
    name:'MessagePage'
}
</script>

<style lang="less" scoped>
#Message{
    article{
        box-sizing: border-box;
        position: relative;
        width: 100%;
        margin-bottom: 15px;
        padding: 25px 20px;
        background-color: #fff;
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
        ul {
            margin: 20px;
            li{
                list-style: square;
                font-size: 16px;
                a{
                    text-decoration: underline;
                }
            }
        }
    }
}    
</style>
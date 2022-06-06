<template>
    <div id="Article">
        <article v-for="item in articleData" :key="item._id" class="infinite-list-item">
            <h2>{{item.title}}</h2>
            <div class="time">
                <p class="date">{{new Date(item.date).getDate()}}</p>
                <p class="m-y">
                    <span>{{new Date(item.date).getMonth()+1}}</span>
                    <span>{{new Date(item.date).getFullYear()}}</span>
                </p>
            </div>
            <div class="show">
                <div class="img" :style="{backgroundImage: `url(${baseURL}${item.cover})`}"></div>
                <div class="des">{{item.des}}</div>
            </div>
            <div class="r-b">
                <router-link :to="`/article/${item._id}`">阅读全文</router-link>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name:'ArticlePage',
    data(){
        return{
            articleData: [],
            baseURL: 'http://localhost:4000',
        }
    },
    methods: {
        async getArticles() {
            let {data} = await this.$axios({
                method: 'GET',
                url: '/get/article'
            })
            if (data.code) {
                return this.$message.error(data.msg)
            }
            this.articleData = data.data
        }
    },
    mounted() {
        this.getArticles()
    }
}
</script>

<style lang="less" scoped>
#Article{
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
        .time{
            position: absolute;
            top: 0;
            right: 10px;
            width: 60px;
            .date{
                font-weight: bolder;
                font-size: 40px;
                text-align: center;
                color: #6bc30d;
            }
            .m-y{
                display: flex;
                justify-content: space-between;
            }
        }
        .show{
            display: flex;
            width: 100%;
            height: 250px;
            .img{
                box-sizing: border-box;
                width: 50%;
                padding: 1%;
                background-size: cover;
                background-position: 50%;
            }
            .des{
                box-sizing: border-box;
                padding: 1%;
                width: 50%;
            }
        }
        .r-b{
            position: absolute;
            right: 20px;
            bottom: 20px;
            p{
                position: relative;
                top: -10px;
                color: #aaa;
                font-size: 12px;
                margin-bottom: 10px;
            }
            a{
                padding: 10px 20px;
                background-color: #409eff;
                color: #fff;
                transition: opacity .3s;
                border-radius: 5px;
                &:hover{
                    opacity: .8;
                }
            }
        }   
    }
}
</style>
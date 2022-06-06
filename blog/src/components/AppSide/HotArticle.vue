<template>
    <div id="HotArticle">
        <h4>Hot Article</h4>
        <ul>
            <li v-for="(item,index) in hotArticle" :key="item._id">
                <i>{{index + 1}}</i>
                <router-link :to="`/article/${item._id}`" target="_blank">{{item.title}}</router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    name:'HotArticle',
    data() {
        return {
            hotArticle: []
        }
    },
    methods: {
        async getArticle() {
            let {data} = await this.$axios({
                method: 'GET',
                url: '/get/article'
            })
            if(data.code) return
            this.hotArticle = data.data.slice(0,3)
        }
    },
    created() {
        this.getArticle()
    }
}
</script>

<style scoped>
#HotArticle {
    box-sizing: border-box;
    margin-top:15px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    transition: all .3s;
    border-radius: 5px;
}
#HotArticle:hover{
    box-shadow: #ccc 0px 10px 10px;
}
#HotArticle h4{
    width: 100%;
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    font-size: 16px;
}
#HotArticle ul {
    margin-top: 12px;
}
#HotArticle ul li {
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 3px;
}
#HotArticle ul li i {
    display: block;
    width: 22px;
    height: 22px;
    margin:9px 15px 0 0;
    border-radius: 50%;
    line-height: 16px;
    font-size: 16px;
    color:#fff;
    text-align: center;
    font-weight: 100;
    font-style: normal;
    padding-top: 4px;
    box-sizing: border-box;
    user-select: none;
}
#HotArticle ul li i:nth-child(1){
    background-color: #79CDCD;
}
#HotArticle ul li i:nth-child(2){
    background-color: #8DEEEE;
}
#HotArticle ul li i:nth-child(3){
    background-color: #97FFFF;
}
#HotArticle ul li a {
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
#HotArticle ul li a:hover {
    background-color: #f5f5f5;
}
</style>
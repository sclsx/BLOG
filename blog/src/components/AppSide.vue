<template>
    <div id="AppSide">
        <!-- 引入PersonalPage组件 -->
        <PersonalPage/>
        
        <div 
            class="sticky"
            :class="{'fixed':ifFixed}"
            >
            <!-- 引入热门文章组件 -->
            <HotArticle/>
            <!-- 引入网络链接组件 -->
            <LinkSites/>
        </div>
    </div>
</template>

<script>
import PersonalPage from './AppSide/PersonalPage.vue'
import HotArticle from './AppSide/HotArticle.vue'
import LinkSites from './AppSide/LinkSites.vue'
export default {
    name:'AppSide',
    components:{
        PersonalPage,
        HotArticle,
        LinkSites
    },
    data(){
        return {
            ifFixed: false
        }
    },
    methods: {
        scrollFn(){
            let scrollTop = document.documentElement.scrollTop
            this.ifFixed = scrollTop >= 235
        }
    },
    mounted(){
        this.scrollFn()
        window.addEventListener("scroll",()=>{
            this.scrollFn()
        })
    }
}
</script>

<style>
.sticky.fixed{
    position: fixed;
    top: 50px;
    width: 270px;
}
</style>
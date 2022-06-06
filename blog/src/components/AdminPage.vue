<template>
    <div id="AdminPage">
        <article>
            <el-tabs tab-position="left">
                <el-tab-pane label="发表文章" name="first">
                    <ArticleAdd/>
                </el-tab-pane>
                <el-tab-pane label="文章管理" name="second">
                    <ArticleManger/>
                </el-tab-pane>
                <el-tab-pane label="添加友链" name="third">
                    <LinkAdd/>
                </el-tab-pane>
                <el-tab-pane label="友链管理" name="fourth">
                    <LinkManger/>
                </el-tab-pane>
                <el-tab-pane label="反馈收集" name="fifth">
                    <ContactManger/>
                </el-tab-pane>
            </el-tabs>
        </article>
    </div>
</template>

<script>
import LinkAdd from "./Admin/LinkAdd.vue"
import LinkManger from "./Admin/LinkManger.vue"
import ArticleAdd from "./Admin/ArticleAdd.vue"
import ArticleManger from "./Admin/ArticleManger.vue"
import ContactManger from "./Admin/ContactManger.vue"
export default {
    name: "AdminPage",
    data(){
        return {
            activeName: 'fifth'
        }
    },
    components: {
        LinkAdd,
        LinkManger,
        ArticleAdd,
        ContactManger,
        ArticleManger
    },
    async created() {
    //向后端发请求，验证管理员权限
        let {data} = await this.$axios({
            method: "POST",
            url: "/adminServer/check"
        })
        if (data.code){
            this.$router.go(-1)
            this.$message.error("请以管理员账号登录")
        }
    }
}
</script>

<style lang="less" scoped>
#AdminPage{
    article {
        min-height: 721px;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 15px;
        box-shadow: 0 0 4px #ddd;
        padding: 25px 20px;
        background-color: #fff;
        font-family: LSX;
        border-radius: 5px;
        transition: all .3s;
        &:hover{
            box-shadow: #ccc 0px 10px 10px;
        }

        h2 {
        margin-bottom: 15px;
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 24px;
        border-left: 5px solid #97FFFF;
        text-indent: 10px;
        }
    }
}
</style>
<template>
    <div id="ArticleManger">
        <el-table
            :data="articleData"
            border
            style="width: 100%">
            <el-table-column
                prop="title"
                label="标题"
            >
            </el-table-column>
            <el-table-column
                prop="des"
                label="描述"
            >
                <template #default="scope">
                    <el-input v-model="scope.row.des"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
            >
                <template #default="scope">
                    <el-button type="danger" size="small" @click="deleteArticle(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'ArticleManger',
    data() {
        return {
            articleData: []
        }
    },
    methods: {
        async getArticles() {
            let {data} = await this.$axios({
                method: 'GET',
                url: '/get/article'
            })
            if(data.code) {
                return this.$message.error(data.msg)
            }
            this.articleData = data.data
        },
        async deleteArticle(id){
            let {data} = await this.$axios({
                method: 'delete',
                url: '/adminServer/article/delete',
                data: {id}
            })
            if(data.code) {
                return this.$message.error(data.msg)
            }
            this.$message.success('删除完成'),
            this.getArticles()
        }
    },
    created() {
        this.getArticles()
    },
}
</script>

<style>

</style>
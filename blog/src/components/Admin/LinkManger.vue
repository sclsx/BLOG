<template>
    <div id="LinkManger">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="name"
                label="名称"
            >
            </el-table-column>
            <el-table-column
                prop="home"
                label="首页"
            >
            </el-table-column>
            <el-table-column
                prop="logo"
                label="图标"
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
                    <el-button type="danger" size="small" @click="deleteLink(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "LinkManger",

    data() {
        return {
            tableData: []
        }
    },
    methods: {
        async getLinkData() {
            let {data} = await this.$axios({
                method: 'GET',
                url: '/get/link'
            })
            if(data.code) {
                return this.$message.error(data.msg)
            }
            this.tableData = data.data
        },
        async deleteLink(item){
            let {data} = await this.$axios({
                method: 'delete',
                url: '/adminServer/link/delete',
                data: {
                    _id: item._id
                }
            })
            if(data.code) {
                return this.$message.error(data.msg)
            }
            this.$message.success('删除完成'),
            this.getLinkData()
        }
    },
    created() {
            this.getLinkData()
        }
}
</script>

<style lang="less" scoped>

</style>
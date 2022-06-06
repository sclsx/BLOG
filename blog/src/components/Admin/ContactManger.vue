<template>
    <div id="ContactManger">
        <el-table
        :data="contactData"
        style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                >
            </el-table-column>
            <el-table-column
                prop="email"
                label="Email">
            </el-table-column>
            <el-table-column
                prop="subject"
                label="主题">
            </el-table-column>
            <el-table-column
                prop="message"
                label="消息">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'ContactManger',
    data() {
        return {
            contactData: []
        }
    },
    methods: {
        async getContactData() {
            let {data} = await this.$axios({
                method: 'GET',
                url: '/adminServer/contact'
            })
            if (data.code) {
                return this.$message.error(data.msg)
            }
            this.contactData = data.data
        }
    },
    created() {
        this.getContactData()
    }
}
</script>

<style>

</style>
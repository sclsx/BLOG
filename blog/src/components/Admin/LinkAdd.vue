<template>
    <div id="LinkAdd">
        <el-form 
        :model="ruleForm" 
        status-icon 
        :rules="rules" 
        ref="ruleForm" 
        >
            <el-form-item label="名称" prop="name">
                <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="首页" prop="home">
                <el-input v-model="ruleForm.home" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图标" prop="logo">
                <el-input v-model="ruleForm.logo"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="des">
                <el-input v-model="ruleForm.des"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "LinkAdd",
    data() {
        return {
            ruleForm: {
                name: '',
                home: '',
                logo: '',
                des: ''

            },
            rules: {
                name: [
                    {required: true, message: '请输入名称'}
                ],
                des: [
                    {required: true, message: '请输入描述'}
                ],
                home: [
                    {required: true, type: 'url', message: '请输入一个合理的网址'}
                ],
                logo: [
                    {required: true, type: 'url', message: '请输入一个合理的网址'}
                ]
            }
        };
    },
    methods: {
        ...mapActions(['getLinkData']),
        submit() {
            this.$refs.ruleForm.validate(async v => {
                if (v) {
                    let {data} = await this.$axios({
                        method: "POST",
                        url: "/adminServer/link/add",
                        data: this.ruleForm
                })

                if (data.code) {
                    return this.$message.error(data.msg)
                }

                this.$message.success("添加成功")
                this.$refs.ruleForm.resetFields()
                this.getLinkData(this)
                } else {
                    return false
                }
            })
        },
        reset() {
            this.$refs.ruleForm.resetFields();
        }
    }
}
</script>

<style lang="less" scoped>

</style>
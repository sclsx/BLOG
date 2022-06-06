<template>
    <div id="ArticleAdd">
        <el-form 
        :model="ruleForm"  
        ref="ruleForm" 
        label-position="top"
        >
            <el-form-item label="标题">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="ruleForm.des"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-upload
                    class="upload-demo"
                    drag
                    :action="`${baseURL}/adminServer/article/md`"
                    :auto-upload="false"
                    :on-change="fileChange"
                    :limit="1"
                    :before-remove="beforeRemove"
                    :on-success="md_upload_success"
                    ref="mdForm"
                    :with-credentials="true"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item label="封面">
                <el-upload
                    class="avatar-uploader"
                    :action="`${baseURL}/adminServer/article/cover`"
                    :show-file-list="false"
                    :on-change="coverChange"
                    :on-success="cover_upload_success"
                    :auto-upload="false"
                    ref="imgForm"
                    :with-credentials="true"
                    >
                        <div 
                        v-if="imageUrl" 
                        class="avatar"
                        :style="{backgroundImage: `url(${imageUrl})`}"
                        >
                        </div>
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'ArticleAdd',
    data() {
        return {
            ruleForm: {
                title: '',
                des: '',
                md: '',
                cover: ''
            },
            imageUrl: '',
            baseURL: 'http://localhost:4000'
        }
    },
    methods: {
        //提交按钮
        async submitForm() {
            this.$refs.mdForm.submit()
        },
        async submit() {
            let {data} = await this.$axios({
                method: "POST",
                url: "/adminServer/article/add",
                data: this.ruleForm
            })

            if (data.code) {
                return this.$message.error(data.msg)
            }

            //跳转到对应的文章页面
            this.$router.push(`/article/${data.data.id}`)
        },

        //文件上传的检测
        fileChange(file, fileList) {
            if (file.status !== 'ready') return
            if(/^(.+)\.md$/.test(file.name)){
                if(this.ruleForm.title) return
                this.ruleForm.title = RegExp.$1
            }else {
                this.$message.error('只能上传md文件')
                console.log('no')
                fileList.pop()
            }
        },
        //删除md文件之前的钩子
        beforeRemove(){
            this.ruleForm.title = ''
        },
        //md上传成功的钩子
        md_upload_success(res) {
            //md上传失败
            if (res.code) {
                return this.$message.error("上传md失败，请检查后端报错")
            }
            //md上传成功
            this.ruleForm.md = res.url
            //判断是否有封面图
            if (this.imageUrl) {
                //有封面图，触发封面图的上传
                this.$refs.imgForm.submit()
            } else {
                //没有封面图，直接发表文章
                this.submit()
            }
        },
        //添加封面的钩子
        coverChange(file, fileList) {
            if (file.status !== 'ready') return
            const isJPG = /^image\/(jpeg|png)$/.test(file.raw.type);
            const isLt2M = file.raw.size / 1024 / 1024 < 2;
            if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                if (isJPG && isLt2M) {
                    this.imageUrl = URL.createObjectURL(file.raw);
                } else {
                    this.imageUrl = ""
                    fileList.pop()
                }
        },
        cover_upload_success(res) {
            if (res.code) {
                return this.$message.error("上传封面失败，请检查后端报错")
            }
                this.ruleForm.cover = res.url
                this.submit()
            }
        }
    }
</script>

<style lang="less" scoped>
#ArticleAdd {
    /deep/.avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    /deep/.avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    /deep/.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    /deep/.avatar {
        width: 178px;
        height: 178px;
        display: block;
        background: none center center/cover;
    }
} 
</style>
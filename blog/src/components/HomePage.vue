<template>
    <div id="Home">
        <!-- 个人信息部分 -->
        <article class="hello">
        <h2>HELLO!</h2>
        <p class="des">
            你好！欢迎来到我的博客！我是一名大三的学生，喜欢做自己的网页，热衷于研究JavaScript、NodeJS、Vue。这是我的主页！我会在这里发表一些不成熟的技术文章，记录一些日常与我的看法，博客目前使用的是Vue搭建的，如果对源码感兴趣的话可以<a href="https://github.com/sclsx/test" target="_blank">点击这里</a>提出宝贵的建议。</p>
        <div class="info">
            <div class="personal">
                <h3>personal information</h3>
                <ul>
                    <li>
                        <p>NICKNAME</p>
                        <p>Carol</p>
                    </li>
                    <li>
                        <p>ADDRESS</p>
                        <p>翻斗花园2号楼1001室</p>
                    </li>
                    <li>
                        <p>EMAIL</p>
                        <p>790317@qq.com</p>
                    </li>
                    <li>
                        <p>GITHUB</p>
                        <p><a href="https://github.com/" target="_blank">https://github.com/</a></p>
                    </li>
                </ul>
            </div>
            <div class="skills">
                <h3>skills</h3>
                <ul>
                    <li>
                        <p class="lang">
                            <span>HTML5 & CSS3</span>
                            <span>90%</span>
                        </p>
                        <p class="level">
                            <span style="width: 90%"></span>
                        </p>
                    </li>
                    <li>
                        <p class="lang">
                            <span>Javascript</span>
                            <span>85%</span>
                        </p>
                        <p class="level">
                            <span style="width: 85%"></span>
                        </p>
                    </li>
                    <li>
                        <p class="lang">
                            <span>Vue</span>
                            <span>80%</span>
                        </p>
                        <p class="level">
                            <span style="width: 80%"></span>
                        </p>
                    </li>
                    <li>
                        <p class="lang">
                            <span>NodeJS</span>
                            <span>70%</span>
                        </p>
                        <p class="level">
                            <span style="width: 70%"></span>
                        </p>
                    </li>
                    <li>
                        <p class="lang">
                            <span>Axios</span>
                            <span>60%</span>
                        </p>
                        <p class="level">
                            <span style="width: 60%"></span>
                        </p>
                    </li>
                    <li>
                        <p class="lang">
                            <span>小程序</span>
                            <span>50%</span>
                        </p>
                        <p class="level">
                            <span style="width: 50%"></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        </article>
        <!-- 文章部分 -->
        <article class="article">
            <h2>ARTICLE</h2>
            <p class="des">热门文章推荐。<router-link to="/article">更多文章</router-link>请访问文章页</p>
            <div class="content" v-if="hotArticle.length">
                <div class="left_article">
                    <div class="art">
                        <img src="../img/1.jpg">
                        <p>{{hotArticle[0].title}}</p>
                        <div class="cover">
                            <router-link :to="`/article/${hotArticle[0]._id}`" target="_blank">
                                <p>Tag: HTML</p>
                                <p>View More</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="art">
                        <img src="../img/3.jpg">
                        <p>{{hotArticle[1].title}}</p>
                        <div class="cover">
                            <router-link :to="`/article/${hotArticle[1]._id}`" target="_blank">
                                <p>Tag: HTML</p>
                                <p>View More</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right_article">
                    <div class="art">
                        <img src="../img/2.jpg">
                        <p>{{hotArticle[2].title}}</p>
                        <div class="cover">
                            <router-link :to="`/article/${hotArticle[2]._id}`" target="_blank">
                                <p>Tag: HTML</p>
                                <p>View More</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <!-- work部分 -->
        <article class="work">
          <h2>Learning Experience</h2>
          <ul>
            <li>
              <div class="left_work">
                <p class="time">2021-2022</p>
              </div>
              <div class="right_work">
                <h3>HTML</h3>
              </div>
            </li>
            <li>
              <div class="left_work">
              </div>
              <div class="right_work">
                <h3>CSS</h3>
              </div>
            </li>
            <li>
              <div class="left_work">
                <p class="time">2021-2022</p>
              </div>
              <div class="right_work">
                <h3>AJAX</h3>
              </div>
            </li>
            <li>
              <div class="left_work">
                <p class="time">2021-2022</p>
              </div>
              <div class="right_work">
                <h3>VUE</h3>
              </div>
            </li>
          </ul>
        </article>
        <!-- contact -->
        <article class="contact" id="contact">
          <h2>CONTACT ME</h2>
          <p class="des">有任何问题请联系我吧，收到消息后会给您回复邮件哦</p>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="Your Name" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Your Email" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Subject" prop="subject">
              <el-input v-model="ruleForm.subject"></el-input>
            </el-form-item>
            <el-form-item label="Your Message" prop="message">
              <el-input v-model="ruleForm.message"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Send</el-button>
            </el-form-item>
          </el-form>
        </article>
    </div>
</template>

<script>
export default {
    name:'HomePage',
    data() {
      return {
        ruleForm: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          message: [
            { required: true, message: '请输入信息', trigger: 'blur' }
          ]
        },
        hotArticle: []
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let {data} = await this.$axios({
              method: 'POST',
              url: '/contact',
              data: this.ruleForm
            })
            if (data.code) {
              return this.$message.error(data.msg)
            }
            this.$message.success('发送成功')
            this.$refs[formName].resetFields()
          } else {
            return false;
          }
        });
      },
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

<style lang="less" scoped>
#Home {
  article {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    font-family: LSX;
    transition: all .3s;
    border-radius: 5px;
    &:hover{
      box-shadow: #ccc 0px 10px 10px;
    }

    h2 {
      margin-bottom: 15px;
      font-size: 30px;
      letter-spacing: 3px;
      padding-top: 10px;
    }

    p.des {
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;

      a {
        text-decoration: underline;
        color: #aaa;
      }
    }
  }

  article.hello {
    .info {
      display: flex;
      width: 100%;

      & > div {
        display: flex;
        flex-direction: column;
        width: 50%;
      }

      h3 {
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 22px;
        color: #666;
      }

      .personal {
        overflow: hidden;
        display: flex;

        ul {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          li {
            display: flex;

            p:nth-child(1) {
              width: 40%;
              font-weight: 700;
            }

            p:nth-child(2) {
              width: 60%;
            }

            a {
              text-decoration: none;
            }
          }
        }
      }

      .skills {
        ul li {
          margin-bottom: 20px;

          p.lang {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            letter-spacing: 2px;

            span:nth-child(1) {
              font-size: 14px;
            }

            span:nth-child(2) {
              font-size: 12px;
              color: #999;
            }
          }

          p.level {
            width: 100%;
            height: 5px;
            background-color: #ececec;

            span {
              display: block;
              height: 100%;
              background-color: #bfe2e6;
            }
          }
        }
      }
    }
  }

  article.article {
    div.content {
      display: flex;

      .left_article,
      .right_article {
        box-sizing: border-box;
        width: 50%;
        padding-right: 1px;

        .art {
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          padding-bottom: 1px;

          img {
            display: block;
            width: 100%;
          }

          > p {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            background-color: rgba(0, 0, 0, .1);
            font-weight: 700;
            line-height: 30px;
            color: #fff;
            text-align: center;
            transition: bottom .3s;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          div.cover {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;

            a {
              display: block;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, .5);
              opacity: 0;
              transition: opacity .3s;

              p {
                position: absolute;
                transition: .3s;
                font-weight: 700;
              }

              p:nth-child(1) {
                top: 20%;
                width: 100%;
                text-align: center;
                color: #fff;
                font-size: 22px;
                text-transform: uppercase;
              }

              p:nth-child(2) {
                left: 50%;
                bottom: 20%;
                width: 30%;
                height: 32px;
                border-radius: 16px;
                text-align: center;
                line-height: 32px;
                transform: translateX(-50%);
                color: #000;
                background-color: #bfe2e6;
              }
            }
          }

          &:hover div.cover a {
            opacity: 1;

            p:nth-child(1) {
              top: 32%;
            }

            p:nth-child(2) {
              bottom: 32%;
            }
          }
        }
      }
    }
  }

  article.work {
    ul{
      margin-top: 40px;
      li{
        display: flex;
        div.left_work{
          width: 200px;
          p.time{
            position: relative;
            top: -12px;
            width: 160px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            background-color: #bfe2e6;
            &::after{
              content: "";
              position: absolute;
              top: 0;
              right: -30px;
              width: 0;
              height: 0;
              border: 15px solid transparent;
              border-left-color: #bfe2e6;
            }
          }
        }
        div.right_work{
          box-sizing: border-box;
          flex: 1;
          padding-left: 20px;
          padding-right: 40px;
          padding-bottom: 40px;
          border-left: 2px solid #dfe2e6;
          h3{
            position: relative;
            margin-bottom: 20px;
            margin-top: -10px;
            line-height: 25px;
            font-size: 20px;
            &::before{
              position: absolute;
              content: "";
              top: 10px;
              left: -23px;
              width: 4px;
              height: 4px;
              background-color: #000;
            }
          }
          p.img{
              margin-bottom: 20px;
            }
            p.company{
              color: #000;
              margin-bottom: 20px;
            }
            p.content{
              color: #777;
              letter-spacing: 1px;
              font-size: 16px;
            }
        }
        &:last-child div.right_work{
          border-color: transparent;
        }
      }
    }
  }

  article.contact {
    .el-form {
      padding: 0 40px;
      .el-button {
        display: block;
        width: 100px;
        height: 40px;
        margin-top: 35px;
        border: 0;
        border-radius: 20px;
        background-color: #8DEEEE;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 2px;
        color: #000;
        outline: none;
      }
    }
  }
}
</style>
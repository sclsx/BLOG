<template>
    <div id="ArticleDetail">
        <article>
            <main id="mdToHTML"></main>
        </article>
    </div>
</template>

<script>
export default {
    name: 'ArticleDetail',
    data() {
        return {
            baseURL: 'http://localhost:4000'
        }
    },
    async mounted() {
        let id = this.$route.params.detail
        let {data} = await this.$axios({
            method: 'GET',
            url: '/get/articleID',
            params: {id}
        })
        let res = await this.$axios({
            method: 'GET',
            url: `${data.data.md}`
        })
        editormd.markdownToHTML('mdToHTML', {
            markdown: res.data,
            emoji: 'true'
        })
    }
}
</script>

<style lang="less" scoped>
#ArticleID {
    #mdToHTML {
        box-sizing: border-box;
    }
}   
</style>
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue"
import ArticlePage from "../components/ArticlePage.vue"
import AboutPage from "../components/AboutPage.vue"
import LinkPage from "../components/LinkPage.vue"
import MessagePage from "../components/MessagePage.vue"
import ArticleDetail from "../components/ArticleDetail.vue"
import AdminPage from "../components/AdminPage.vue"
export default new VueRouter({
    routes:[
        {
            name:'HomePage',
            path:'/',
            component:HomePage
        },
        {
            name:'ArticlePage',
            path:'/article',
            component:ArticlePage
        },
        {
            name:'AboutPage',
            path:'/about',
            component:AboutPage
        },
        {
            name:'LinkPage',
            path:'/link',
            component:LinkPage
        },
        {
            name:'MessagePage',
            path:'/message',
            component:MessagePage
        },
        {
            name:'ArticleDetail',
            path:'/article/:detail',
            component:ArticleDetail
        },
        {
            name:'AdminPage',
            path:'/admin',
            component:AdminPage
        },
    ]
})
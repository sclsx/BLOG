import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router/index"
// 引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from "axios"
// 引入矢量图
import './assets/font/iconfont.css'
// 引入字体
import "@/assets/text/text.css";

Vue.use(ElementUI);
Vue.use(VueRouter)

const baseURL = 'http://localhost:4000'
// 配置axios
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

new Vue({
    el:'#app',
    render: h => h(App),
    router:router
    // beforeCreate(){
    //     Vue.prototype.$bus = this
    // }
})
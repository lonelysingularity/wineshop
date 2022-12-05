import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from "./store";
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


createApp(App).use(pinia).use(router).use(Antd).mount('#app')

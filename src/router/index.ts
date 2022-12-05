import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
    path: '/home',
    component: () => import('@/view/Home.vue')
},
    {
        path: '/',
        redirect: '/hello'
    },
    {
        path: '/hello',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/order',
        component: () => import('@/view/Order.vue')
    },
    {
        path: '/message',
        component: () => import('@/view/Message.vue')
    },
    {
        path: '/cooperation',
        component: () => import('@/view/Cooperation.vue')
    },
    {
        path: '/about',
        component: () => import('@/view/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/abc/'),  // 设置为history模式，就是路径里面没有#,  createWebHashHistory 是默认的，括号里面的就是基础路径，可以理解为项目名称，就是请求路径的基础url
    routes
})
export default router

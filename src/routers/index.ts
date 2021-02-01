import store from '@/store';
import {createRouter,createWebHistory} from 'vue-router'

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'Home',
            component: require('./views/Home.vue'),
        },
        {
            path: '/create',
            name: 'create',
            component: require('./views/CreatePost.vue'),
            meta: { requiredLogin: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: require('./views/Login.vue'),
            meta: { redirectAlreadyLogin: true} //添加元信息完成权限管理
        }
    ]
})
//导航守卫
router.beforeEach((to,from,next) => {
    console.log(to.meta);
    if(to.meta.requiredLogin && !store.state.user.isLogin){
        next({name:'login'});
    }else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin){
        next({name:'/'});
    }else{
        next()
    }
    // if(to.name !== 'login' && !store.state.user.isLogin){
    //     next({name:'login'});
    // }else{
    //     next()
    // }
})
export default router;
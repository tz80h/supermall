import Vue from 'vue'
import Router from 'vue-router'

const Home =()=> import( '@/views/home/Home')
const ShopCart =()=> import( '@/views/shopcart/ShopCart')
const Category =()=> import( '@/views/category/Category')
const Profile =()=> import( '@/views/profile/Profile')

//因为vue-router是一个插件, 所以可以通过Vue.use()来安装路由功能
//1.通过Vue.use(插件), 安装插件
Vue.use(Router)

//2.创建路由映射，配置路由和组件之间的映射关系
const routes = [
  {
    //首页的第一种定义方式
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]


//3.将router对象传递到Vue实例
const router  = new Router({
  //将路由和组件之间的映射关系传递给路由器对象
  routes,
  mode:'history', //将默认的has路由模式改为history路由模式。
  
})

export default router
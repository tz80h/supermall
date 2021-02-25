<template>
  <tab-bar>
      <!-- 使用循环无法正常显示片，怎么解决？
         <tab-bar-item v-for="item in tabBarItems" :path="item.path" :key="item.name">
        <img :src="'～assets/images/tabbar/' + item.name +'.svg'" :alt="item.text" slot="item-icon">
        <img :src="'～assets/images/tabbar/' + item.name +'_active.svg'" :alt="item.text" slot="item-icon-active">
        <span slot="item-text">{{item.text}}</span>
      </tab-bar-item> -->
      <tab-bar-item path="/home">
        <img src="@/assets/images/tabbar/home.svg" alt="首页" slot="item-icon">
        <img src="@/assets/images/tabbar/home_active.svg" alt="首页" slot="item-icon-active">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="@/assets/images/tabbar/category.svg" alt="分类" slot="item-icon">
        <img src="@/assets/images/tabbar/category_active.svg" alt="分类" slot="item-icon-active">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="@/assets/images/tabbar/shopcart.svg" alt="购物车" slot="item-icon">
        <img src="@/assets/images/tabbar/shopcart_active.svg" alt="购物车" slot="item-icon-active">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="@/assets/images/tabbar/profile.svg" alt="我的" slot="item-icon">
        <img src="@/assets/images/tabbar/profile_active.svg" alt="我的" slot="item-icon-active">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  data(){
    return {
      /* tabBarItems:[
        {
          name:'home',
          path: '/home',
          color:null,
          text: '首页'
        },
        {
          name:'category',
          path: '/category',
          color:null,
          text: '分类'
        },
        {
          name:'shopcart',
          path: '/shopcart',
          color:null,
          text: '购物车'
        },
        {
          name:'profile',
          path: '/profile',
          color:null,
          text: '我的'
        }
      ] */
    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

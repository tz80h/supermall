<template>
  <div>
    <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
    <h2>我是首页标题</h2>
    <p>我是首页内容,哈哈哈</p>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'Home',
  components:{
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>

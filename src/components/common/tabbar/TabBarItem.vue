<template>
  <div class="tab-bar-item" @click="gotoClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default: 'deepPink'
    }
  },
  data(){
    return {
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    gotoClick(){
      //单击第一次时this.$route.path与this.path是不相同的。
      //接着route-view中对应的件显示后，this.$route.path与this.path是相等的。
      if(this.isActive) return; 
      /* console.log('gotoClick=>', ', this.path:',this.path,', this.$route.path: ', this.$route.path)
      console.log('push'); */
      this.$router.push(this.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    margin-top: 3px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin: 0 auto;
  }
</style>

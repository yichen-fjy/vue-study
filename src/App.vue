<template>
  <div id="app">
    <img src="./assets/logo.png" ref="img_node">
    <div v-text='html'></div>
    <div v-html='html'></div>
    <div v-show='isShow'>显示隐藏</div>
    <button @click='isShow=!isShow'>点击切换</button>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{ item.name }}</li>
    </ul>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'Hello',
      html: '<a href="https://baidu.com">百度</a>',
      isShow: true,
      arr: [{ name: 'a' },{ name: 'b' }]
    };
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

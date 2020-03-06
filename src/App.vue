<template>
  <div id="app">
    <app-header></app-header>    
    <app-main></app-main> 
    <app-footer></app-footer> 
  </div>
</template>

<script>
import appHeader from '@/components/AppHeader';
import appMain from '@/components/AppMain';
import appFooter from '@/components/AppFooter';

export default {
  name: 'App',
  data(){
    return{
     
    };
  },
  methods:{

  },
  components:{
    appHeader,
    appFooter,
    appMain,
  },
}
</script>

<style lang="scss">
@import './assets/css/css.css';
</style>

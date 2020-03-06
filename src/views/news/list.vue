<template>
  <div class="list_right">
      <div class="list_tit"><span><i>◆</i></span>您现在所在的位置：<a href="##">首页</a>&gt;行业资讯</div>
        <ul class="news_list">
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li>
          <li><em>{{ newsListData.time }}</em><a href="##" target="_blank">{{ newsListData.content }}</a></li> 
        </ul>
        <div class="page">
          <a class="page_Cur" href="##">1</a>
            <a href="##">2</a>
            <a href="##">3</a>
            <a href="##">4</a>
            <a href="##">5</a>
            <span>...</span>
            <a href="##">18</a>
            <a href="##">19</a>
            <a href="##">20</a>
        </div>
    </div>
</template>

<script>
import { getNewsList } from '@/api/newslist';

export default {
  data () {
    return {
      newsListData: {},
    }
  },
  created(){
    this.getNewsList();
  },
  methods: {
    getNewsList(){
      var _this=this;
      getNewsList({
        params:{
          a:1
        },
      }).then(function(res){
        console.log(res);
        _this.newsListData = res.data;
      }).catch(function(err){
        console.log(err);
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

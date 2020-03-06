<template>
  <div class="list_right">
      <div class="list_tit"><span><i>◆</i></span>您现在所在的位置：<a href="##">首页</a>&gt;行业资讯</div>
        <div class="product">
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
            <dl>
              <dt><a href="##"><img src="@/assets/img/1.jpg" width="125" height="125" alt="产品" /></a></dt>
                <dd>
                  <h4><a href="##">{{ productListData.name }}</a></h4>
                    <p>{{ productListData.introduce }}</p>
                </dd>
            </dl>
        </div>
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
import { getProductList } from '@/api/productlist';

export default {
  data () {
    return {
      productListData: {},
    }
  },
  created(){
    this.getProductList();
  },
  methods: {
    getProductList(){
      var _this=this;
      getProductList({
        params:{
          a:1
        },
      }).then(function(res){
        console.log(res);
        _this.productListData = res.data;
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

<template>
<div class="clearFix">
  <div class="main_left">
      <div class="main_tit main_L_tit">
          <h3>栏目导航<i>NAVIGATION</i></h3>
        </div>
        <ul class="main_L_nav">
          <li><a href="##">公司简介</a></li>
            <li><a href="##">产品介绍</a></li>
            <li><a href="##">行业资讯</a></li>
            <li><a href="##">联系我们</a></li>
        </ul>
        <a class="main_L_contact" href="##"><img src="@/assets/img/contact.jpg" width="184" height="70" alt="联系我们" /></a>
        <ul class="main_L_address">
          <li>联系地址：{{ contentData.address }}</li>
          <li>办公电话：{{ contentData.officeTel }}</li>
          <li>联系电话：{{ contentData.contactTel }}</li>
          <li>邮政编码：{{ contentData.postcode }}</li>
          <li>电子邮件：{{ contentData.email }}</li>
        </ul>
    </div>
    
    <router-view/>
</div>
</template>

<script>
import { getContact } from '@/api/contact';

export default {
  data () {
    return {
      contentData: {},
    }
  },
  created(){
    this.getContact();
  },
  methods: {
    getContact(){
      var _this = this;
      getContact({
        params: {
          a: 1
        },
      }).then(function(res){
        console.log(res);
        _this.contentData = res.data;
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

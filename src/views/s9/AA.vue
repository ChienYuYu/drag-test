<template>
  <div class="wrap">
    <h3 class="title">場域設備資訊</h3>
    <div class="top">
      <p>場域名稱： <span>{{ '研發中心及晶圓十二B廠' }}</span></p>
      <p>場域地址： <span>{{ '300-75 新竹科學園區園區二路168號' }}</span></p>
    </div>
    <div class="middle">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
    </div>
    <div class="bottom">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolore? Natus laboriosam sapiente facere veniam vero soluta ad? Laboriosam consequuntur facilis aperiam similique? Eos tempora qui totam, commodi sunt quo similique porro quae soluta sint harum pariatur aliquam voluptatem, quas saepe, molestiae ad? Saepe fugit, iste cum nisi itaque modi ipsam culpa sed distinctio. Dolorum exercitationem minus cumque consequatur nemo assumenda dolorem praesentium labore, excepturi error quod sed quae quos amet quisquam non optio impedit!</p>
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="scss" scoped>
.wrap{
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.title{
  margin: 0;
}
  .top{
    p{
      font-size: 16px;
      text-align: start;
    }
  }
  .middle{
    .box{
      width: 33%;
      height: 100px;
      background: #3a65ca;
      margin: 1%;
    }
    display: flex;
  }
  .bottom{
    font-size: 16px;
  }
</style>
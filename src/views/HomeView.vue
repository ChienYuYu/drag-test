<template>
  <div class="wrapper">
    <div class="box box1" draggable="true">
      <h2>box1</h2>
    </div>
    <div class="box box2" draggable="true">
      <h2>box2</h2>
    </div>
    <div class="box box3" draggable="true">
      <h2>box3</h2>
    </div>
    <div class="box box4" draggable="true">
      <h2>box4</h2>
    </div>
    <div class="box box5" draggable="true">
      <h2>box5</h2>
    </div>
    <div class="box box6" draggable="true">
      <h2>box6</h2>
    </div>
  </div>
</template>

<script>

export default {
  components: {}
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
.wrapper{
  .box{
    width: 500px;
    height: 400px;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .box1{
    background: #fa0;
  }
  .box2{
    background: #0af;
  }
  .box3{
    background: #a0f;
  }
  .box4{
    background: #0fa;
  }
  .box5{
    background: #f0a;
  }
  .box6{
    background: #af0;
  }
}
</style>

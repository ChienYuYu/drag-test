<template>
  <div class="wrap">
    <h3 class="title">本季營收</h3>
    <div class="top"></div>
    <div class="middle">
    </div>
    <div class="bottom">
      <BarChart/>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";

  export default {
    components: { BarChart },
  }
</script>

<style lang="scss" scoped>
.wrap{
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.title{}
  .top{
    height: 20%;
    background:#666;
  }
  .middle{
    background:#aaa;
    height: 30%;
  }
  .bottom{
    height: 45%;
  }
</style>
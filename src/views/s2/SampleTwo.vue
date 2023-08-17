<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="box box1" :style="{order:divOrder[0]}">
        <div class="click-mask" draggable="true" @dragstart="dragStartHandler($event)"
        @dragover.prevent @drop="dropHandler($event)"></div>
        <LineChart />
      </div>

      <div class="box box2" :style="{order:divOrder[1]}">
        <div class="click-mask" draggable="true" @dragstart="dragStartHandler($event)"
        @dragover.prevent @drop="dropHandler($event)"></div>
        <BarChart />
      </div>

      <div class="box box3" :style="{order:divOrder[2]}">
        <div class="click-mask" draggable="true" @dragstart="dragStartHandler($event)"
        @dragover.prevent @drop="dropHandler($event)"></div>
        <DougHnut />
      </div>


      <div class="box box3" :style="{order:divOrder[3]}">
        <div class="click-mask" draggable="true" @dragstart="dragStartHandler($event)"
        @dragover.prevent @drop="dropHandler($event)"></div>
        <!-- <DougHnut /> -->
        <img src="https://cdn.pixabay.com/photo/2013/07/12/19/15/pie-chart-154411_1280.png" alt="">
      </div>
      
    </div>
    
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
import BarChart from '@/components/BarChart.vue'
import DougHnut from '@/components/DougHnut.vue'


export default {
  components: { LineChart, BarChart, DougHnut },
  data() {
    return {
      Order: ['0','1','2','3','4','5'],
      dragIndex: null,
      dropIndex: null,
    }
  },
  computed:{
    divOrder() {
      return this.Order
    },
  },
  methods:{
    dragStartHandler(e) {
      console.log(e.target.parentElement.style.order);
      this.dragIndex = e.target.parentElement.style.order
    },
    dropHandler(e) {
      this.dropIndex = e.target.parentElement.style.order
      const tempArr = [...this.Order];
      let src = tempArr.indexOf(this.dragIndex); // 找出拖曳的元素索引值
      let dst = tempArr.indexOf(this.dropIndex); // 找出放置的元素索引值
      if(src == -1 || dst == -1) { // 有時候拖曳 src dst indexOf會變-1導致後續異常，所以加個判斷跳出
        return
      }
      tempArr[dst] = this.dragIndex;
      tempArr[src] = this.dropIndex;
      this.Order = tempArr;
      
      console.log('srcccccc', src);
      console.log('dstttttt', dst);
    },
  },
  
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
img{
  width: 100%;
}

.wrapper{
  // height: calc(100vh - 50px);
  // overflow: auto;
}
.wrap{
  display: flex;
  flex-wrap: wrap;
  .box{
    width: 400px;
    height: 400px;
    border: 1px solid #777;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .click-mask{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      // background: #000;
    }
  }
  
}
</style>

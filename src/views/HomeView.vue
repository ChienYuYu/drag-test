<template>
  <div class="wrapper">
    <div class="box box1" draggable="true" :style="{order:divOrder[0]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box1</h2>
    </div>
    <div class="box box2" draggable="true" :style="{order:divOrder[1]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box2</h2>
    </div>
    <div class="box box3" draggable="true" :style="{order:divOrder[2]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box3</h2>
    </div>
    <div class="box box4" draggable="true" :style="{order:divOrder[3]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box4</h2>
    </div>
    <div class="box box5" draggable="true" :style="{order:divOrder[4]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box5</h2>
    </div>
    <div class="box box6" draggable="true" :style="{order:divOrder[5]}"
    @dragstart="dragStartHandler($event)" @dragover.prevent @drop="dropHandler($event)">
      <h2>box6</h2>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
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
      this.dragIndex = e.target.style.order
    },
    dropHandler(e) {
      this.dropIndex = e.target.style.order
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
.wrapper{
  display: flex;
  flex-wrap: wrap;
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

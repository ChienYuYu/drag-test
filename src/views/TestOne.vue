<template>
  <div class="container">
    <div class="item" v-for="(item, index) in items" :key="item.key"
      :style="{ background: item.color}" draggable="true"
      @dragstart="handleDragStart($event, item)" @dragover.prevent="handleDragOver($event, item)"
      @dragenter="handleDragEnter($event, item)" @dragend="handleDragEnd($event, item)">
      <h2>box{{ index+1 }}</h2>
    </div>
  </div>
</template>

<script>
export default {
 data () {
  return {
   items: [
    { key: 1, color: '#ffebcc'},
    { key: 2, color: '#ffb86c'},
    { key: 3, color: '#f01b2d'},
    { key: 4, color: '#fa0'},
    { key: 5, color: '#af0'},
    { key: 6, color: '#f0a'},
   ],
     
    dragging: null
  }
 },
 methods:{
  handleDragStart(e,item){
    this.dragging = item;
  },
  handleDragEnd(){
    this.dragging = null
  },
  //首先把div变成可以放置的元素，即重写dragenter/dragover
  handleDragOver(e) {
    e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
  },
  handleDragEnter(e,item){
    e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
    if(item === this.dragging){
      return
    }
    const newItems = [...this.items]
    console.log(newItems)
    const src = newItems.indexOf(this.dragging)
    const dst = newItems.indexOf(item)
  
    newItems.splice(dst, 0, ...newItems.splice(src, 1))
  
    this.items = newItems
  }
 }
}
</script>
  
<style scoped>
  .container{
    border:1px dashed #333;
    width: 95%;
    height: calc(100vh - 50px);
    margin: 0 auto;
    position: absolute;
    left: 0;
    display:flex;
    flex-wrap: wrap;
  }
  .item {
   /* margin-top: 10px; */
   transition: all linear .3s;
   width: 500px;
   height: 400px;
  }


</style>
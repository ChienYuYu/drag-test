<template>
  <div class="container">
    <div class="set_area">
      <div class="drag_area">
        <!-- 6 -->
        <draggable v-if="true" v-model="itemArray" class="drag_six"
          :move="handleMove" @end="handleDragEnd">
          <component :is="itemArray[0].view" class="item item1" />
          <component :is="itemArray[1].view" class="item item2" />
          <component :is="itemArray[2].view" class="item item3" />
          <component :is="itemArray[3].view" class="item item4" />
          <component :is="itemArray[4].view" class="item item5" />
          <component :is="itemArray[5].view" class="item item6" />
        </draggable>
      </div>
    </div>
    <h2 style="width: 500px; margin:30px auto; text-align:center; color:#fff;">{{ showArray }}</h2>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import AA from './AA.vue'
import BB from './BB.vue'
import CC from './CC.vue'
import DD from './DD.vue'
import EE from './EE.vue'
import FF from './FF.vue'

  export default {
    components: {
      draggable,AA,BB,CC,DD,EE,FF
    },
    data() {
      return {
        itemArray: [
          {id: 1, itemName: 'A', view:'AA'},
          {id: 2, itemName: 'B', view:'BB'},
          {id: 3, itemName: 'C', view:'CC'},
          {id: 4, itemName: 'D', view:'DD'},
          {id: 5, itemName: 'E', view:'EE'},
          {id: 6, itemName: 'F', view:'FF'},
        ],
      }
    },
    computed: {
      showArray() {
        return this.itemArray.map((item) => item.itemName)
      },
    },
    methods: {
      ///////////解決原插件拖曳只是插入索引位置 而不是交換索引位置問題////////////////////
      // https://okamuuu.com/posts/xjni9lf5h ////////////////////////////////////////
      handleDragEnd() {
        this.futureItem = this.itemArray[this.futureIndex]
        this.movingItem = this.itemArray[this.movingIndex]
        const _items = Object.assign([], this.itemArray)
        _items[this.futureIndex] = this.movingItem
        _items[this.movingIndex] = this.futureItem
        this.itemArray = _items
        this.movingIndex = ""// 清空 20231209
        this.futureIndex = ""// 清空 20231209
      },
      handleMove(e) {
        const { index, futureIndex } = e.draggedContext
        this.movingIndex = index
        this.futureIndex = futureIndex
        return false // disable sort
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container{
    height: calc(100vh - 50px);
    width: calc(100% - 300px);
    // background: rgb(100, 144, 239);
    position: fixed;
    overflow: auto;
    .area_set_btn{
      width: 100px;
      height: 50px;
      display: block;
      margin-left:auto;
      margin-right: 10px;
      margin-top: 20px;
    }

    div.set_area{ // 拖曳Modal的css
      width: 96%;
      margin: .5% auto;

      .drag_area{
        // 6 =====
        .drag_six{
          height: 780px;
          padding:0 1rem;
          display: grid;
          grid-auto-rows:1fr;
          grid-auto-columns:1fr;
          .item{
            outline: 1px solid #fff;
            font-size: 38px;
            color: #fff;
            text-align: center;
            &:hover{
              background: #ffffff27;
            }
          }
          .item1{
            grid-area:1/1/2/2;
          }
          .item2{
            grid-area:1/2/2/3;
          }
          .item3{
            grid-area:1/3/2/4;
          }
          .item4{
            grid-area:2/1/3/2;
          }
          .item5{
            grid-area:2/2/3/3;
          }
          .item6{
            grid-area:2/3/3/4;
          }
        }
      }
    }
  }
</style>
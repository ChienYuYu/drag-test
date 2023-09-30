<template>
  <div class="container">
    <button type="button" class="area_set_btn" @click="dragModal = !dragModal">版面設定</button>
    <div class="set_area" v-if="dragModal">
      <!--  -->
      <div class="num_wrap">
        <button type="button" @click="selectNumHandler(3)" :class="{active: nowSet ==3}">3</button>
        <button type="button" @click="selectNumHandler(4)" :class="{active: nowSet ==4}">4</button>
        <button type="button" @click="selectNumHandler(5)" :class="{active: nowSet ==5}">5</button>
        <button type="button" @click="selectNumHandler(6)" :class="{active: nowSet ==6}">6</button>
      </div>
      <!--  -->
      <div class="drag_area">
        <!-- 3 -->
        <draggable v-if="nowSet == 3" v-model="itemArray" class="drag_three"
          :move="handleMove" @end="handleDragEnd">
          <div class="item item1">{{itemArray[0].itemName}}</div>
          <div class="item item2">{{itemArray[1].itemName}}</div>
          <div class="item item3">{{itemArray[2].itemName}}</div>
        </draggable>
        <!-- 4 -->
        <draggable v-if="nowSet == 4" v-model="itemArray" class="drag_four"
          :move="handleMove" @end="handleDragEnd">
          <div class="item item1">{{itemArray[0].itemName}}</div>
          <div class="item item2">{{itemArray[1].itemName}}</div>
          <div class="item item3">{{itemArray[2].itemName}}</div>
          <div class="item item4">{{itemArray[3].itemName}}</div>
        </draggable>
        <!-- 5 -->
        <draggable v-if="nowSet == 5" v-model="itemArray" class="drag_five"
          :move="handleMove" @end="handleDragEnd">
          <div class="item item1">{{itemArray[0].itemName}}</div>
          <div class="item item2">{{itemArray[1].itemName}}</div>
          <div class="item item3">{{itemArray[2].itemName}}</div>
          <div class="item item4">{{itemArray[3].itemName}}</div>
          <div class="item item5">{{itemArray[4].itemName}}</div>
        </draggable>
        <!-- 6 -->
        <draggable v-if="nowSet == 6" v-model="itemArray" class="drag_six"
          :move="handleMove" @end="handleDragEnd">
          <div class="item item1">{{itemArray[0].itemName}}</div>
          <div class="item item2">{{itemArray[1].itemName}}</div>
          <div class="item item3">{{itemArray[2].itemName}}</div>
          <div class="item item4">{{itemArray[3].itemName}}</div>
          <div class="item item5">{{itemArray[4].itemName}}</div>
          <div class="item item6">{{itemArray[5].itemName}}</div>
        </draggable>
      </div>
      <button type="button" class="confirm_btn">設定</button>
      <!-- <div class="result">
        {{ itemArray }}
      </div> -->
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

  export default {
    components: {draggable},
    data() {
      return {
        dragModal:true,
        nowSet:3,
        itemArray: [
        {id: 1, itemName: 'A'},
        {id: 2, itemName: 'B'},
        {id: 3, itemName: 'C'},
        {id: 4, itemName: 'D'},
        {id: 5, itemName: 'E'},
        {id: 6, itemName: 'F'},
        ],
        resultArray: [],
      }
    },
    computed: {},
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
      },
      handleMove(e) {
        const { index, futureIndex } = e.draggedContext
        this.movingIndex = index
        this.futureIndex = futureIndex
        return false // disable sort
      },
      /////////////////////////////////////
      selectNumHandler(num) {
        this.nowSet = num;
      },
      setResult() {
        this.resultArray = this.itemArray;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container{
    height: calc(100vh - 50px);
    width: calc(100% - 300px);
    background: rgb(100, 144, 239);
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
    div.set_area{
      width: 80%;
      height: 760px;
      margin: 0 auto;
      background: #3c3f56;
      .num_wrap{
        display: flex;
        justify-content: center;
        button{
          width: 100px;
          height: 60px;
          background: rgb(43, 92, 215);
          color: #fff;
          border: none;
          margin: 10px;
        }
        button.active{
          background: rgb(62, 144, 226);
        }
      }
      .drag_area{
        // 3 =====
        .drag_three{
          height: 600px;
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
            line-height: 300px;
          }
          .item2{
            grid-area:2/1/3/2;
            line-height: 300px;
          }
          .item3{
            grid-area:1/2/3/3;
            line-height: 600px;
          }
        }
        // 4 =====
        .drag_four{
          height: 600px;
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
            line-height: 300px;
          }
          .item2{
            grid-area:1/2/2/3;
            line-height: 300px;
          }
          .item3{
            grid-area:2/1/3/2;
            line-height: 300px;
          }
          .item4{
            grid-area:2/2/3/3;
            line-height: 300px;
          }
        }
        // 5 =====
        .drag_five{
          height: 600px;
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
            grid-area:1/1/2/3;
            line-height: 300px;
          }
          .item2{
            grid-area:1/3/2/5;
            line-height: 300px;
          }
          .item3{
            grid-area:1/5/2/7;
            line-height: 300px;
          }
          .item4{
            grid-area:2/1/3/4;
            line-height: 300px;
          }
          .item5{
            grid-area:2/4/3/7;
            line-height: 300px;
          }
        }
        // 6 =====
        .drag_six{
          height: 600px;
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
            line-height: 300px;
          }
          .item2{
            grid-area:1/2/2/3;
            line-height: 300px;
          }
          .item3{
            grid-area:1/3/2/4;
            line-height: 300px;
          }
          .item4{
            grid-area:2/1/3/2;
            line-height: 300px;
          }
          .item5{
            grid-area:2/2/3/3;
            line-height: 300px;
          }
          .item6{
            grid-area:2/3/3/4;
            line-height: 300px;
          }
        }
      }
      button.confirm_btn{
        width: 100px;
        height: 40px;
        // margin-top: 10px;
        display: block;
        margin: 20px auto 0;
      }
    }
  }
</style>
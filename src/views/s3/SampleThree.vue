<template>
  <div class="wrapper">
    <div class="wrap">
      <div
        class="box box1"
        :style="{ order: divOrder[0] }"
        draggable="true"
        @dragstart="dragStartHandler($event)"
        @dragover.prevent
        @drop="dropHandler($event)"
      >
        <LineChart />
      </div>

      <div
        class="box box2"
        :style="{ order: divOrder[1] }"
        draggable="true"
        @dragstart="dragStartHandler($event)"
        @dragover.prevent
        @drop="dropHandler($event)"
      >
        <BarChart />
      </div>

      <div
        class="box box3"
        :style="{ order: divOrder[2] }"
        draggable="true"
        @dragstart="dragStartHandler($event)"
        @dragover.prevent
        @drop="dropHandler($event)"
      >
        <DougHnut />
      </div>
    </div>
    <div class="save">
      <button type="button" @click="saveOrder">儲存排序</button>
      <p>{{ this.Order }}</p>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import BarChart from "@/components/BarChart.vue";
import DougHnut from "@/components/DougHnut.vue";

export default {
  components: { LineChart, BarChart, DougHnut },
  data() {
    return {
      Order: ["0", "1", "2"],
      dragIndex: null,
      dropIndex: null,
    };
  },
  mounted() {
    this.initOrder();
  },
  computed: {
    divOrder() {
      return this.Order;
    },
  },
  methods: {
    dragStartHandler(e) {
      console.log(e.target.style.order);
      this.dragIndex = e.target.style.order;
    },
    dropHandler(e) {
      console.log(e);
      console.log(e.target.parentElement.style.order);
      this.dropIndex = e.target.parentElement.style.order;
      const tempArr = [...this.Order];
      let src = tempArr.indexOf(this.dragIndex); // 找出拖曳的元素索引值
      let dst = tempArr.indexOf(this.dropIndex); // 找出放置的元素索引值
      if (src == -1 || dst == -1) {
        // 有時候拖曳 src dst indexOf會變-1導致後續異常，所以加個判斷跳出
        return;
      }
      tempArr[dst] = this.dragIndex;
      tempArr[src] = this.dropIndex;
      this.Order = tempArr;

      console.log("srcccccc", src);
      console.log("dstttttt", dst);
    },
    initOrder() {
      if(localStorage.getItem('showOrder') == null) {
        this.Order = ['0', '1', '2']
      } else {
        this.Order = JSON.parse(localStorage.getItem('showOrder'));
      }
    },
    saveOrder() {
      console.log('bbtn');
      localStorage.setItem('showOrder', JSON.stringify(this.Order));
      alert('已儲存~~')
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
}

.wrapper {
  height: calc(100vh - 50px);
  // overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  .box {
    width: 400px;
    height: 400px;
    border: 1px solid #777;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
}
.save {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    font-size: 24px;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background:#333;
    color: #eee;
  }
  p{
    margin-top: 20px;
    font-size: 40px;
    color: #fff;
  }
}
</style>

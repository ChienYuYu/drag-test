<template>
  <div class="wrap">
    <h3 class="title">按鈕測試</h3>
    <div class="top"></div>
    <div class="middle">
      <button @click="test">點我</button>
    </div>
    <div class="bottom"></div>
    <transition>
      <div v-if="showModal" class="test_modal">
        <button @click="test">關閉</button>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        showModal: false,
      }
    },
    methods: {
      test() {
        this.showModal = !this.showModal;
      }
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.title{}
  .top{}
  .middle{
    padding-top: 20px;
  }
  .bottom{}
  
  .test_modal{
    position: absolute;
    width: 80%;
    height: 70%;
    background: #ccc;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    font-size: 30px;
    padding: .5rem 1rem;
  }
</style>
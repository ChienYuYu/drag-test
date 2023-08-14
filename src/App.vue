<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="wrap">
      <div class="side-menu"></div>
      <div class="content-area">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  margin: 0;
}

.header{
  height: 50px;
  width: 100%;
  background: #888;
  position: fixed;
}
.wrap{
  display: flex;
}
.side-menu{
  width: 300px;
  height: calc(100vh - 50px);
  background: #555;
  position: fixed;
  top: 50px;
}

.content-area{
  position: relative;
  width: 100%;
  margin-left: 300px;
  margin-top: 50px;
  /* border: 1px solid #111; */
  /* display: flex;
  flex-wrap: wrap; */
}

</style>

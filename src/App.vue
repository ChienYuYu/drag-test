<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="wrap">
      <div class="side-menu">
        <router-link to="/">sample1</router-link>
        <router-link to="/sample2">sample2</router-link>
        <router-link to="/sample3">sample3</router-link>
        <!-- <router-link to="/sample6">sample6</router-link> -->
        <router-link to="/sample7">sample7</router-link>
        <router-link to="/sample8">sample8</router-link>
        <router-link to="/sample9">sample9</router-link>
      </div>
      <div class="content-area">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
  background: #444;
  position: fixed;
}
.wrap{
  display: flex;
}
.side-menu{
  width: 300px;
  height: calc(100vh - 50px);
  background: #333;
  position: fixed;
  z-index: 99;
  top: 50px;
  padding-top: 20px;
  a{
    text-decoration: none;
    color: #fff;
    font-size: 30px;
    display: block;
    text-align: center;
    padding: 1rem 0;
    &:hover{
      background: rgb(49, 123, 159);
    }
  }
}

.content-area{
  position: relative;
  width: 100%;
  width: calc(100% - 300px);
  margin-left: 300px;
  height: calc(100vh - 50px);
  margin-top: 50px;
  background: radial-gradient(circle, rgba(70,70,70,1) 0%, rgba(0,0,0,1) 100%);
  overflow: auto;
}


.router-link-exact-active{
  background: rgb(27, 91, 123);
}

</style>

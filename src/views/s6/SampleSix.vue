<template>
  <div class="container">
    <h1>Sample 6</h1>
    <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false" class="box-wrap">
      <div v-for="element in myArray" :key="element.id" class="box">
        <!-- {{ element.name }} -->
        <img :src="element.pic">
      </div>
    </draggable>
    {{ myArray }}
    <hr>
    <!--  -->
    <draggable v-model="myArray2" group="people" @start="drag = true" @end="drag = false" class="box-wrap">
      <!-- <div v-for="element in myArray2" :key="element.id" class="box">
        {{ element.name }}
      </div> -->
      <div class="box box1">
        {{ myArray2[0].name }}
      </div>
      <div class="box box2">
        {{ myArray2[1].name }}
      </div>
      <div class="box box3">
        {{ myArray2[2].name }}
      </div>
    </draggable>
    <!--  -->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {draggable},
  data() {
    return {
      myArray: [
        {id:1, name: 'John Cena', pic:'https://images.generated.photos/zwNr9Nz6oRNzD17Ze4E1kvxxm9SUhYRhmb8a7oaL4KQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYyODUxLmpwZw.jpg'},
        {id:2, name: 'Kane', pic:'https://images.generated.photos/pnLbbVu9LuZUFr1RVedPMGJHWeP7E-oPVMCAvqp3eH4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI2NzkzLmpwZw.jpg'},
        {id:3, name: 'The Rock', pic:'https://images.generated.photos/gXmGFwrnucBVBd1D5iz9C92zuk6Hb6jh87gdwcfCIBE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjY5NTYyLmpwZw.jpg'},
      ],
      myArray2: [
        {id: 1, name: 'Cena'},
        {id: 2, name: 'Kane'},
        {id: 3, name: 'Batista'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background: #ddd;
  // height: calc(100vh - 50px);
  height: auto;
}
.box-wrap{
  border: 5px solid #f00;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box{
  height: 300px;
  width: 300px;
  border: 1px solid #000;
  background: rgb(246, 214, 148);
  &:hover{
    background: #ced1a81b;
  }
  img{
    width: 100%;
  }
}

</style>
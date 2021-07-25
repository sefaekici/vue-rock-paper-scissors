<template>
  <div id="app">
    <app-score-area :score="score"></app-score-area>
    <app-select-hand :selectedHand="selectedHand"></app-select-hand>
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
import SelectHand from "./components/SelectHand.vue"
export default {
  data(){
    return{
      score:0,
      selectedHand:null,
    }
  },
  components:{
    appScoreArea:ScoreArea,
    appSelectHand:SelectHand,
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

<template>
  <div id="app">
    <app-score-area></app-score-area>
    <app-hand-options :selectedHand="selectedHand"></app-hand-options>
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
import HandOptions from "./components/HandOptions.vue"
export default {
  data(){
    return{
      score:0,
      selectedHand:null,
    }
  },
  components:{
    appScoreArea:ScoreArea,
    appHandOptions:HandOptions
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

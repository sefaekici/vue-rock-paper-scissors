<template>
  <div id="app">
    <app-score-area></app-score-area>
    <app-hand-options :selectedHand="selectedHand"></app-hand-options>
    <app-confirm-button></app-confirm-button>
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
import HandOptions from "./components/HandOptions.vue"
import ConfirmButton from "./components/ConfirmButton.vue"
export default {
  data(){
    return{
      score:0,
      selectedHand:null,
    }
  },
  components:{
    appScoreArea:ScoreArea,
    appHandOptions:HandOptions,
    appConfirmButton:ConfirmButton
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

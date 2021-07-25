<template>
  <div id="app">
    <h3>{{selectedHand}}</h3>
    <app-score-area></app-score-area>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
import SelectHand from "./components/SelectHand.vue"
import WinOrDefeat from "./components/WinOrDefeat.vue";
export default {
  data(){
    return{
      score:0,
      selectedHand:null,
      currentComponent:'app-select-hand'
    }
  },
  components:{
    appScoreArea:ScoreArea,
    appSelectHand:SelectHand,
    appWinOrDefeat:WinOrDefeat,
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

<template>
  <div id="app">
    <app-score-area></app-score-area>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
import SelectHand from "./components/SelectHand.vue"
import WinOrDefeat from "./components/WinOrDefeat.vue";
export default {
  components:{
    appScoreArea:ScoreArea,
    appSelectHand:SelectHand,
    appWinOrDefeat:WinOrDefeat,
  },
  computed:{
    currentComponent(){
      return this.$store.getters.getCurrentComponent;
    },
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

<template>
  <div id="app">
    <app-score-area></app-score-area>


  </div>
</template>

<script>
import ScoreArea from "./components/ScoreArea.vue"
export default {
  components:{
    appScoreArea:ScoreArea,
  }
}
</script>


<style lang="scss">
@import "./assets/scss/app.scss"
</style>

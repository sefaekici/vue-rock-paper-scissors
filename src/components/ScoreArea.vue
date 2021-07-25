<template>
    <div class="score-area">
      <div class="area-header">
          <span>ROCK PAPER SCISSORS</span>
      </div>
      <div class="score">
          <span>SCORE</span>
          <h3>{{score}}</h3>
      </div>
    </div>
</template>

<script>
export default {
    props:["score"]
}
</script>

<style lang="scss" scoped>
    .score-area{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 450px;
        height: 120px;
        background: #52616B;
        color: #F0F5F9;
        border-radius: 10px;
        padding: 25px 20px;

        .area-header{
            width: 100px;
            font-size: 25px;
            text-align: start;
        }

        .score{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #F0F5F9;
            color: #52616B;
            width: 90px;
            height: 90px;
            border-radius: 10px;
            span{
                font-size: 11px;
                margin-bottom: 5px;
            }
            h3{
                font-size: 35px;
            }
        }
    }
</style>



<template>
    <div class="hand-options">
        <button @click="setSelectedHand('paper')" :class="{'selected-card':selectedHand=='paper'}"><img src="../assets/paper.png" alt="paper"></button>
        <button @click="setSelectedHand('rock')" :class="{'selected-card':selectedHand=='rock'}"><img src="../assets/rock.png" alt="rock"></button>
        <button @click="setSelectedHand('scissors')" :class="{'selected-card':selectedHand=='scissors'}"><img src="../assets/scissors.png" alt="scissors"></button>
    </div>
</template>


<script>
export default {
    props:["selectedHand"],
    methods:{
        setSelectedHand(val){
            this.selectedHand=val;
            console.log(this.selectedHand);
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/_colors.scss";
    .hand-options{
        margin-top: 2rem;
        width: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        button{
            width: 150px;
            height: 150px;
            margin-top: 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: $buttons-background-color;
            transition: opacity .3s;
            cursor: pointer;
            &:hover{
                opacity: .7;
            }
            &:nth-child(1){
                margin-right: 1rem;
                border: 15px solid $paper-border-color;
            }
            &:nth-child(2){
                border: 15px solid $rock-border-color;
            }

            &:nth-child(3){
                border: 15px solid $scissors-border-color;
            }
        }

        .selected-card{
            img{
                filter: blur(3px);
            }
        }
    }
</style>
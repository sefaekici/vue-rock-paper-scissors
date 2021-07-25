<template>
    <div class="hand-options">
        <button><img src="../assets/paper.png" alt="paper"></button>
        <button><img src="../assets/rock.png" alt="rock"></button>
        <button><img src="../assets/scissors.png" alt="scissors"></button>
    </div>
</template>



<style lang="scss" scoped>
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
            background: #F0F5F9;
            transition: opacity .3s;
            &:hover{
                opacity: .7;
            }
            &:nth-child(1){
                margin-right: 1rem;
                border: 15px solid #303841;
            }
            &:nth-child(2){
                border: 15px solid #07689F;
            }

            &:nth-child(3){
                border: 15px solid #1FAB89;
            }
        }
    }
</style>
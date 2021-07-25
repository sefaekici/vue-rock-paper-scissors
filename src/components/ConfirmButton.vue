<template>
    <div class="done-button">
        <button>CONFIRM</button>
    </div>
    
</template>




<style lang="scss" scoped>
     .done-button{
         margin-top: 1.7rem;
         button{
             cursor: pointer;
             width: 200px;
             height: 60px;
             border-radius: 5px;
             background: #07689F;
             color: #fff;
             font-size: 20px;
             border: none;
             transition: background 0.4s,color 0.4s;
             &:hover{
                 background: #fff;
                 color: #07689F;
             }
         }
     }
</style>
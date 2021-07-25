<template>
    <div class="select-hand">
        <app-hand-options></app-hand-options>
        <app-confirm-button></app-confirm-button>
    </div>
</template>



<script>
import HandOptions from "./HandOptions.vue"
import ConfirmButton from "./ConfirmButton.vue"
export default {
     components:{
         appHandOptions:HandOptions,
         appConfirmButton:ConfirmButton,
     },
}
</script>
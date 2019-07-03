<template>
   <div class="app-footer">
       <p>{{msg}}</p>
   </div>
</template>

<script>
export default {

   name: '',
   data() {

       return { 

           msg: "copyright 2019 Vue Demo!"

       }

   }
}
</script>

<style scoped>
    .app-footer p {

        text-align: center;
        background-color: #222;
        color: lightgreen;
        padding: 10px;
        margin: 10px;

    }
</style>
<template>
   <div class="app-header">
       <h2 @click = "alert">{{msg}}</h2>
   </div>
</template>

<script>
export default {

   name: '',
   data() {

       return { 

           msg: "Vue Demo"

       }

   },
   methods: {

       alert() {

           this.$emit("alert", "LJL666")

       }

   },
//    // 声明周期
//    beforeCreate: function() {

//        console.log(this.msg);

//    },
//    created: function() {

//        console.log(this.msg);

//    }
}
</script>

<style scoped>
    .app-header h2 {

        text-align: center;
        background-color: lightgreen;
        color: #222;
        padding: 30px;
        margin: 10px;

    }
</style>
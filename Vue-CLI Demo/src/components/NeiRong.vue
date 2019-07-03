<template>
   <div class="neirong">
       <ul>
           <li v-for="msg in msgs" :key="msg" @click="msg.show = !msg.show">
               <h3>{{msg.name}}</h3>
               <p v-show="msg.show">{{msg.position}}</p>
           </li>
       </ul>
   </div>
</template>

<script>
export default {

   name: '',
   data() {

       return { 

           msgs: [

                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false },
                { name: "张三", position: "Web前端工程师", show: false }

            ]

       }

   }
}
</script>

<style scoped>
.neirong {

    margin: 10px;

}
ul {

    display: flex;
    flex-wrap: wrap;
    user-select: none;

}
li {

    flex: 1 1 200px;
    margin: 15px;
    height: 200px;
    border: 1px solid #222;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;

}
</style>
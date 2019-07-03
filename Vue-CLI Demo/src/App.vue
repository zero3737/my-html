<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/two">Two</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'App'

}
</script>

<style scoped>
a {

  text-decoration: none;
  color: #fff;

}
ul {

  margin: 10px;
  background-color: #000;
  padding: 15px;

}
ul::after {

  content: "";
  display: block;
  clear: both;

}
ul > li {

  float: left;
  margin: 0 15px;


}
ul > li:hover {

  background-color: #999;

}
</style>
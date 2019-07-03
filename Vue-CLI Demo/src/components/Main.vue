<template>
  <div id="">
    <Header @alert = "alert"></Header>
    <NeiRong></NeiRong>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import NeiRong from "./NeiRong";

export default {

  name: '',
  components: {

    Header,
    Footer,
    NeiRong

  },
  methods: {

    alert(e) {

      console.log(e);

    }

  }

}
</script>

<style>
* {

  margin: 0;
  padding: 0;
  list-style: none;

}
</style>

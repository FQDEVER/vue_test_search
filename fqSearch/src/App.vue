<template>
  <div id="app">
    <!-- <panel></panel> -->
    <router-view/>
  </div>
</template>


<script>
// import panel from './components/detail.vue';

export default {
  name: 'App',
  // components:{
  //   panel
  // }
}
</script>

<style>

html {
  height: 100%;
  width:  100px;
}

#app {
  color: #2c3e50;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  position: absolute;
  left: 0;
}


</style>

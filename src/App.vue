<template>
  <div id="app">
    <router-view />
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>
<script>
import Footer from './commonality/footer';
export default {
  components:{
    Footer
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

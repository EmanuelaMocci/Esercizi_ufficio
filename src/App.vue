<template>
  <div id="app" style="background-color: #d3e1e9" class="min-h-screen">
    <Navbar />
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Countdown' }">Countdown</router-link> |
      <router-link :to="{ name: 'Posts' }">Posts</router-link> |
      <router-link :to="{ name: 'Table' }">Table</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2e5d8f;
}
</style>

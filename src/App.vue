<template>
  <div id="app">
    <div id="nav">

      <router-link to="/books">Books</router-link> |
      <router-link to="/authors">Authors</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
// import Card from './components/Card.vue';
import Books from './components/Books.vue';
import Authors from './components/Authors.vue';

export default {
  name: 'app',
  components: {
    Books,
    Authors
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  color: #42b983;
}
</style>

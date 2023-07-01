<template>

<div id="app">

  <nav>
    <router-link v-bind:to="{name: 'products'}" class="btn btn-primary m-2">Products</router-link>
    <router-link v-bind:to="{name: 'add-product'}" class="btn btn-primary m-2">Add Product</router-link>

    <router-view></router-view>
  </nav>

</div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav{
  padding: 10px;
}

</style>

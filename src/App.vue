<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-link to='/order'>Order</router-link>
    <router-link to='/admin'>Admin</router-link>
    <router-link to='/about'>About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>

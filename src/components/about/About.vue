<template>
  <div>
    <div class="divLeft">
      <router-link :to="{name: 'concantLink'}">Concant</router-link>
      <router-link :to="{name: 'historyLink'}">History</router-link>
    </div>
    <div class="divRight">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .divLeft, .divRight{
    float: left;
    border: 1px solid #666;
  }
  .divLeft{
    width: 30%;
  }
  .divRight{
    width: 60%;
  }
</style>

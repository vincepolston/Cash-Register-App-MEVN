<template>
<ul class="nav nav-pills navbar-dark bg-dark justify-content-end">
  <li class="nav-item">
    <router-link to="/" class="nav-link">Shop</router-link>
  </li>
  <li class="nav-item">
  <router-link to="/admin" class="nav-link">Admin</router-link>
  </li>
  <li class="nav-item">
  <router-link to="/example-chart" class="nav-link">Example Chart</router-link>
  </li>
</ul>

<router-view/>

</template>

<style>
</style>

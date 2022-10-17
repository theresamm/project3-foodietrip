<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Foodie Trip</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" v-on:click="changePage('restaurants')">Restaurants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" v-on:click="changePage('add')">New Restaurant</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Log In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
    <AllRestaurants v-if="page === 'restaurants'"/>
    <NewRest v-if="page === 'add'"/>
    </div>
  </div>
</template>

<script>

import AllRestaurants from './components/AllRestaurants.vue'
import NewRest from './components/NewRest.vue'

export default {
  name: 'App',
  components: {
    AllRestaurants,
    NewRest
  },
  data:function (){
    return{
      'page':'restaurants'
    }
  },
  methods: {
    changePage(newPage){
      this.page = newPage;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

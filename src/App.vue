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
    <AllRestaurants v-if="page === 'restaurants'"
    v-on:edit-rest="onEditRest" v-on:delete-rest="onDeleteRest"/>
    <NewRest v-if="page === 'add'" v-on:add-new-rest="changePage('restaurants')"/>
    <EditRest v-if="page === 'edit'"
    v-bind:reviewId="restaurantUpdate"
    v-on:restaurant-update="changePage('restaurants')"
    />
    <DeleteRest v-if="page === 'delete'"
    v-bind:reviewId="restaurantDelete"
    v-on:restaurant-delete="changePage('restaurants')"
    />
    </div>
  </div>
</template>

<script>

import AllRestaurants from './components/AllRestaurants.vue';
import NewRest from './components/NewRest.vue';
import EditRest from './components/EditRest.vue';
import DeleteRest from './components/DeleteRest.vue'

export default {
  name: 'App',
  components: {
    AllRestaurants,
    NewRest,
    EditRest,
    DeleteRest
  },
  data:function (){
    return{
      'page':'restaurants',
      restaurantUpdate: 0,
      restaurantDelete: 0
    };
  },
  methods: {
    changePage(newPage){
      this.page = newPage;
    },
    onEditRest(reviewId){
      this.restaurantUpdate = reviewId;
      this.changePage("edit");
    },
    onDeleteRest(reviewId){
      this.restaurantDelete = reviewId;
      this.changePage("delete");
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

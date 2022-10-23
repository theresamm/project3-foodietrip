<template>

<div class="rest-selected">
<div class="card m-3" v-if="restaurants !== null">
  <img v-bind:src="restaurants.image" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{restaurants.name}}</h5>
    <p class="card-text">{{restaurants.cuisine}}<br>{{restaurants.location}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <li class="list-group-item">An item</li>
  </div>
</div>
</div>

</template>

<script>
import axios from "axios";
const baseAPI = "http://127.0.0.1:3000/";

export default {
    name:"SelectRest",
    props:["reviewId"],
    
    async created(){
        const response = await axios.get(baseAPI + "restaurants/" + this.reviewId);
        this.restaurants = response.data;
    },
    data: function (){
        return{
            restaurants: null,
        };
    },
    
}
</script>

<style>
</style>
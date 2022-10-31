<template>

<div>
<div class="rest-selected">
<div class="card" v-if="restaurants !== null">
<div class="p-2"></div>
<h1 class="card-title">{{restaurants.name}}</h1><h4><span class="badge bg-success">Rating: {{restaurants.rating}}</span></h4>
<div class="p-2"></div>
  <img v-bind:src="restaurants.image" class="card-img-top" alt="">
  <div class="card-body">
    <h5>Cuisine: <span class="badge rounded-pill bg-info text-dark">{{restaurants.cuisine}}</span></h5>
    <h5 class="card-text">Location: {{restaurants.location}}</h5>
    <h5 class="card-text">Bestsellers: {{restaurants.bestseller}}</h5>
    <h5 class="card-text">Average Cost: P{{restaurants.average_cost}}</h5>
    <h5 class="card-text">Store Hours: {{restaurants.store_hours}}</h5>
    <h5 class="card-text">Features: {{restaurants.features}}</h5>
    <h5>Meals: <span class v-for="(meals, index) in restaurants.meals" :key="index">{{meals}}, </span></h5>
    <h5>Contacts: <span class v-for="(contact, index) in restaurants.contact" :key="index">{{contact}} </span></h5>
  <h5 class="card-text">Features: {{restaurants.features}}</h5>
</div>
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
.card-title{
    text-align:center;
}
.card{
    border-radius:10px;
     display: flex;
  justify-content: center;
    align-items: center;
}
.card-img-top{
    max-width: 60%;
    height: auto;
    position: relative;
    align-items: center;
    border-radius:10px;
}


</style>
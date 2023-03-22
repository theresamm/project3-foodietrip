<template>

<div>
<div class="rest-selected">
<div class="card" v-if="restaurants !== null">
<div class="p-2"></div>
<h1 class="card-title">{{restaurants.name}}</h1><h4><span class="badge badge-rate">Rating: {{restaurants.rating}}</span></h4>
<div class="p-2"></div>
  <img v-bind:src="restaurants.image" class="card-img-top" alt="">
  <div class="card-body">
    <h5>Cuisine: <span class="badge badge-cuisine rounded-pill">{{restaurants.cuisine}}</span></h5>
    <h5 class="card-text">Location: {{restaurants.location}}</h5>
    <h5 class="card-text">Bestsellers: {{restaurants.bestseller}}</h5>
    <h5 class="card-text">Average Cost: P{{restaurants.average_cost}}</h5>
    <h5 class="card-text">Store Hours: {{restaurants.store_hours}}</h5>
    <h5 class="card-text">Features: {{restaurants.features}}</h5>
    <h5>Meals: <span class v-for="(meals, index) in restaurants.meals" :key="index">{{meals}}, </span></h5>
    <h5>Contacts: <span class v-for="(contact, index) in restaurants.contact" :key="index">{{contact}} </span></h5>
  <h5 class="card-text">Features: {{restaurants.features}}</h5>
  <h5 class="card-text">Parking: {{restaurants.parking}}</h5>
  <button class="mt-3 btn btn-sm btn-edit" v-on:click="edit(restaurants._id)">Edit</button><button class="mt-3 ms-2 btn btn-sm btn-delete" v-on:click="del(restaurants._id)">Delete</button>
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
    methods:{
        edit(reviewId){
            this.$emit("edit-rest", reviewId);
        },
        del(reviewId){
            this.$emit("delete-rest", reviewId);
        },
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
    border-style:solid !important;
    border-color:#FAC7CC !important;
    border-width: 5px !important;
}
.card-img-top{
    max-width: 60%;
    height: auto;
    position: relative;
    align-items: center;
    border-radius:10px;
}
.badge-rate{
    align-items: center !important;
    position: relative;
  z-index: 10;
  background-color: #fcfe9c;
  color: #EF4F5F !important;
  font-weight: bold !important;
}

</style>
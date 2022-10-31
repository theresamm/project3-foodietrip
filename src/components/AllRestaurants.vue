<template>
<div>

<div class="banner"><img src="../assets/restaurant.jpg">
<div class="banner-text">
<h1>Foodie Trip</h1>
<h4>Discover the best restaurants in the Philippines</h4>
<div class="search-name">
<input type="text" v-model="search" placeholder="Search Restaurant Name"/>
</div>
</div>
</div>


<div class="p-3"></div>
<div class="card mb-3" v-for="r in searchRes" v-bind:key="r._id">
  <div class="row g-0">
    <div class="col-md-5">
      <img v-bind:src="r.image" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h4><a class="card-title text-black" v-on:click="sel(r._id)" href="#">{{r.name}}</a></h4>
        <h5>Cuisine: <span class="badge rounded-pill bg-info text-dark badge-cuisine">{{r.cuisine}}</span></h5>
        <h5 class="card-text">Location: {{r.location}}</h5>
        <h5><span class>Bestsellers: {{r.bestseller}}</span></h5>
        <h5 class="card-text">Average Cost: P{{r.average_cost}}</h5>
        <h4><span class="badge bg-success badge-rating">Rating: {{r.rating}}</span></h4> 
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import axios from "axios";

const baseAPI = "http://127.0.0.1:3000/";

export default {
    name: "AllRestaurants",

    data: function (){
        return{
            restaurants: [],
            search: "",
        };
    },
    async created(){
        const response = await axios.get(baseAPI + "restaurants");
        this.restaurants = response.data;
    },
    methods:{
        edit(reviewId){
            this.$emit("edit-rest", reviewId);
        },
        del(reviewId){
            this.$emit("delete-rest", reviewId);
        },
        sel(reviewId){
            this.$emit("select-rest", reviewId);
        },
    },
    computed:{
        searchRes(){
            return this.restaurants.filter((r)=>
            r.name.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },
};
</script>

<style>
.banner{
  position: relative;
  text-align: center;
  color: white;
}
.banner>img{
  width: 100%;
}
.banner-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.search-name{
    font-family: Trebuchet MS, sans-serif;
    display: block;
    font-size:20px;
    border:none;
    position: center;
    border-radius:20px;
}

.badge-rating{
  position: absolute;
  top:0;
  right: 0px;
  z-index: 10;
}

</style>
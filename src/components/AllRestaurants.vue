<template>
<div>

<div class="banner"><img src="../assets/restaurant.jpg" alt="Photo by Antony Trivet - Pexels.com">
<div class="banner-text">
<h1>Foodie Trip</h1>
<h4>Discover the best restaurants in the Philippines</h4>
<div class="search-name">
<input type="text" v-model="search" placeholder="Search Restaurant Name"/>
</div>
</div>
</div>

<div class="p-3"></div>

<div class="filter-select">
<form class="filter-list row g-5">

<div class="col-md-4">
<label> Select type of cuisine: </label>
<select class="filter-cuisine form-select" v-model="cuisine">
<option value="">Select Cuisine</option>
<option value="Filipino">Filipino</option>
<option value="American">American</option>
<option value="Italian">Italian</option>
<option value="French">French</option>
<option value="Japanese">Japanese</option>
<option value="Korean">Korean</option>
</select>
</div>

<div class="col-md-4">
<label> Select rating: </label>
<select class="filter-rating form-select" v-model="rating">
<option value="">Select Rating</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>


</form>
</div>



<div class="p-3"></div>

<div class="card mb-3" v-for="r in searchRes" v-bind:key="r._id">
  <div class="card-border row g-0">
    <div class="col-md-5">
      <img v-bind:src="r.image" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h4><a class="card-title" v-on:click="sel(r._id)" href="#">{{r.name}}</a></h4>
        <h5>Cuisine: <span class="badge rounded-pill badge-cuisine">{{r.cuisine}}</span></h5>
        <h5 class="card-text">Location: {{r.location}}</h5>
        <h5><span class>Bestsellers: {{r.bestseller}}</span></h5>
        <h5 class="card-text">Average Cost: P{{r.average_cost}}</h5>
        <h4><span class="badge badge-rating">Rating: {{r.rating}}</span></h4> 
        <button class="mt-3 btn btn-sm btn-edit" v-on:click="edit(r._id)">Edit</button><button class="mt-3 ms-2 btn btn-sm btn-delete" v-on:click="del(r._id)">Delete</button>
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
            cuisine:"",
            rating:"",
            
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
        searchRes: function(){
           let selection = this.restaurants.filter((r)=>{
            return r.name.toLowerCase().includes(this.search.toLowerCase())
            });
            selection = selection.filter((r)=>{
            return r.cuisine.includes(this.cuisine)
            });
           selection = selection.filter((r)=>{
            if(this.rating){return r.rating == this.rating}
            else {return true}
            });

            return selection;
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
  background-color: #fcfe9c;
  color: #EF4F5F !important;
  font-weight: bold !important;
}

.btn-edit{
  position: absolute;
  bottom:10px;
  right: 80px;
  z-index: 10;
  border-style:solid !important;
  border-color:#EF4F5F !important;
  border-width: 2px !important;
  color: #EF4F5F !important;
  font-weight: bold !important;
}

.btn-delete{
  position: absolute;
  bottom:10px;
  right: 10px;
  z-index: 10;
  border-style:solid !important;
  border-color:#EF4F5F !important;
  background-color: #EF4F5F !important;
  color: white !important;
  font-weight: bold !important;
}


.form-select{
  position: center;
   text-align: center;
}



.card-border{
  border-style:solid;
  border-color:#FAC7CC;
 
}

.badge-cuisine{
background-color: #EF4F5F !important;
}

.card-title{
color: #EF4F5F;
}


.card-title:hover{
  color: white;
  background-color: #EF4F5F;
  padding: 5px;
}

.filter-select{
  color: #EF4F5F;
  font-weight: bold;
  position: relative;
}

.filter-cuisine{
  border-style:solid !important;
  border-color:#FAC7CC !important;
  background-color: #EF4F5F !important;
  color: white !important;
  font-weight: bold !important;
  border-width: 2px !important;
}
.filter-rating{
  border-style:solid !important;
  border-color:#FAC7CC !important;
  background-color: #EF4F5F !important;
  color: white !important;
  font-weight: bold !important;
  border-width: 2px !important;
}

</style>
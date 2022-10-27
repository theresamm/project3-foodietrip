<template>
<div>
<h2>Restaurants</h2>
<input type="text" v-model="search"/>
<button class="submit mt-3 ms-2" v-on:click="searchRes(r._id)">Search</button>

<div class="p-3"></div>
<div class="card mb-3" v-for="r in searchRes" v-bind:key="r._id">
  <div class="row g-0">
    <div class="col-md-5">
      <img v-bind:src="r.image" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h4><a class="card-title text-black" v-on:click="sel(r._id)" href="#">{{r.name}}</a></h4>
        <h5 class="card-text">{{r.cuisine}}<br>{{r.location}}</h5>
        <h5><span class="badge bg-success">Rating: {{r.rating}}</span></h5>
       <button class="mt-3 btn btn-primary btn-sm" v-on:click="edit(r._id)">Edit</button><button class="mt-3 ms-2 btn btn-danger btn-sm" v-on:click="del(r._id)">Delete</button>
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
</style>
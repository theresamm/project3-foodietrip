<template>
<div>
<h2>Restaurants</h2>
<input type="text" v-model="search"/>
<button class="submit mt-3 ms-2" v-on:click="searchRes(r._id)">Search</button>
<ul class="list-group">
<li class="list-group-item" v-for="r in searchRes" v-bind:key="r._id">
    {{r.name}} 
    <ul>
    {{r.cuisine}}
    </ul>
    <ul>
    {{r.location}}
    </ul>
    <ul>
    {{r.rating}}
    </ul>
    <button class="mt-3 btn btn-primary btn-sm" v-on:click="edit(r._id)">Edit</button><button class="mt-3 ms-2 btn btn-danger btn-sm" v-on:click="del(r._id)">Delete</button>
    </li>
</ul>
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
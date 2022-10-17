<template>
<div>
<h2>Restaurants</h2>
<ul>
<li v-for="r in this.restaurants" v-bind:key="r._id">
    {{r.name}} {{r.cuisine}} {{r.location}} {{r.rating}}
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
        };
    },
    async created(){
        const response = await axios.get(baseAPI + "restaurants");
        this.restaurants = response.data;
    },
};
</script>

<style>
</style>
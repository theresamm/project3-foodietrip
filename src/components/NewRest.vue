<template>
<div>
<h2>New Restaurant</h2>
<div class="mt-3">
<label>Restaurant Name</label>
<input type="text" class="form-control" v-model="name"/>
</div>

<div class="mt-3">
<label>Cuisine</label>
<input type="text" class="form-control" v-model="cuisine"/>
</div>

<div class="mt-3">
<label>Location</label>
<input type="text" class="form-control" v-model="location"/>
</div>

<div class="mt-3">
<label>Rating</label>
<input type="text" class="form-control" v-model="rating"/>
</div>

<button class="mt-3 btn btn-primary" v-on:click="process">Create</button>
</div>
</template>

<script>
import axios from "axios";
const baseAPI = "http://127.0.0.1:3000/";

export default {
    name: "NewRest",

    data:function(){
        return{
            name:"",
            cuisine:"",
            location:"",
        };
    },
    methods:{
        async process(){
            const newRest = {
                name: this.name,
                cuisine: this.cuisine,
                location:this.location,
                rating:this.rating
            };
            await axios.post(baseAPI+"restaurants", newRest)
            alert("New Restaurant Added");
        },
    },
}
</script>

<style>
</style>
<template>
<div>
<h2>Update Restaurant</h2>
<div class="mt-3">
<label>Restaurant Name</label>
<input type="text" class="form-control" v-model="restaurant.name"/>
</div>

<div class="mt-3">
<label>Cuisine</label>
<input type="text" class="form-control" v-model="restaurant.cuisine"/>
</div>

<div class="mt-3">
<label>Location</label>
<input type="text" class="form-control" v-model="restaurant.location"/>
</div>

<div class="mt-3">
<label>Rating</label>
<input type="text" class="form-control" v-model="restaurant.rating"/>
</div>

<button class="mt-3 btn btn-primary" v-on:click="process">Update</button>

</div>
</template>

<script>
import axios from "axios";
const baseAPI = "http://127.0.0.1:3000/";

export default{
    props:["reviewId"],
    async created(){
        const response = await axios.get(baseAPI + "restaurants/" + this.reviewId);
        this.restaurant  = response.data;   
    },
    data:function (){
        return{
            restaurant:{},
        };
    },
    methods:{
        async process(){
            const updatedRest = {
                name: this.restaurant.name,
                cuisine: this.restaurant.cuisine,
                location: this.restaurant.location,
                rating: this.restaurant.rating
            };
            await axios.put(
                baseAPI + "restaurants/" + this.reviewId,
                updatedRest
            );
            this.$emit("restaurant-update");
        },
    },
};
</script>

<style scoped>
</style>
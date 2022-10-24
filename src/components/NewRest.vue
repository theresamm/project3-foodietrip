<template>
<div>
<h2>New Restaurant</h2>
<div class="mt-3">
<label class="form-labels">Restaurant Name : </label>
<input type="text" class="form-control" v-model="name" placeholder="Name"/>
</div>

<div class="mt-3">
<label class="form-labels">Cuisine : </label>
<input type="text" class="form-control" v-model="cuisine" placeholder="Type of Cuisine"/>
</div>

<div class="mt-3">
<label class="form-labels">Location : </label>
<input type="text" class="form-control" v-model="location" placeholder="City Address / Province"/>
</div>

<div class="mt-3">
<label class="form-labels">Image : </label>
<input type="text" class="form-control" v-model="image" placeholder="URL link"/>
</div>

<div class="mt-3">
<label class="form-labels">Bestsellers : </label>
<input type="text" class="form-control" v-model="bestseller" placeholder="Type in the food separated by comma"/>
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Meals : </label>
<input class="ms-2" type="checkbox" name="meals" value="Breakfast" v-model="meals"/> Breakfast 
<input class="ms-2" type="checkbox" name="meals" value="Lunch" v-model="meals"/> Lunch 
<input class="ms-2" type="checkbox" name="meals" value="Dinner" v-model="meals"/> Dinner
<input class="ms-2" type="checkbox" name="meals" value="Merienda" v-model="meals"/> Merienda
</div>

<div class="mt-3">
<label class="form-labels">Average Cost : </label>
<input type="text" class="form-control" v-model="average_cost" placeholder="Average Cost for 2 persons meal"/>
</div>

<div class="mt-3">
<label class="form-labels">Store Hours : </label>
<input type="text" class="form-control" v-model="store_hours" placeholder="Example: 9:00 AM - 6:00 PM"/>
</div>

<div class="mt-3">
<label class="form-labels">Features : </label>
<input type="text" class="form-control" v-model="features" placeholder="Store Amenties"/>
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Parking : </label>
<input type="radio" name="parking" value="Parking Area" v-model="parking"/> Parking Area
<input type="radio" name="parking" value="No Parking Area" v-model="parking"/> No Parking Area
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Contact : </label>
<input class="ms-2" type="checkbox" name="contact" value="Phone" v-model="contact"/> Phone
<input class="ms-2" type="checkbox" name="contact" value="E-mail" v-model="contact"/> E-mail
<input class="ms-2" type="checkbox" name="contact" value="Website" v-model="contact"/> Website    
<input class="ms-2" type="checkbox" name="contact" value="Facebook" v-model="contact"/> Facebook
<input class="ms-2" type="checkbox" name="contact" value="Instagram" v-model="contact"/> Instagram
<input class="ms-2" type="checkbox" name="contact" value="Viber" v-model="contact"/> Viber
</div>

<div>
<div class="col-md-2">
<label class="form-labels">Ratings : </label>
<select class="form-select" v-model="rating">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
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
            image:"",
            bestseller:"",
            meals:[],
            average_cost:"",
            store_hours:"",
            features:"",
            parking:"",
            contact:[],
            rating:""
        };
    },
    methods:{
        async process(){
            const newRest = {
                name: this.name,
                cuisine: this.cuisine,
                location:this.location,
                image:this.image,
                bestseller:this.bestseller,
                meals:this.meals,
                average_cost:this.average_cost,
                store_hours:this.store_hours,
                features:this.features,
                parking:this.parking,
                contact:this.contact,
                rating:this.rating
            };
            await axios.post(baseAPI+"restaurants", newRest)
            this.$emit('add-new-rest');
        },
    },
}
</script>

<style>
.form-control{
    max-width: 700px!important;
}
</style>
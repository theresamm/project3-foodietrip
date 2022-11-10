<template>
<div>
<div class="delete-title"><h2>DELETE RESTAURANT</h2></div>
<div class="mt-3">
<label class="form-labels">Restaurant Name : </label>
<input type="text" class="form-control" v-model="restaurant.name"/>
</div>

<div class="mt-3">
<label class="form-labels">Cuisine : </label>
<input type="text" class="form-control" v-model="restaurant.cuisine"/>
</div>

<div class="mt-3">
<label class="form-labels">Location : </label>
<input type="text" class="form-control" v-model="restaurant.location"/>
</div>

<div class="mt-3">
<label class="form-labels">Image : </label>
<input type="text" class="form-control" v-model="restaurant.image"/>
</div>

<div class="mt-3">
<label class="form-labels">Bestsellers : </label>
<input type="text" class="form-control" v-model="restaurant.bestseller"/>
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Meals : </label>
<input class="ms-2" type="checkbox" name="meals" value="Breakfast" v-model="restaurant.meals"/> Breakfast 
<input class="ms-2" type="checkbox" name="meals" value="Lunch" v-model="restaurant.meals"/> Lunch 
<input class="ms-2" type="checkbox" name="meals" value="Dinner" v-model="restaurant.meals"/> Dinner
<input class="ms-2" type="checkbox" name="meals" value="Merienda" v-model="restaurant.meals"/> Merienda
</div>

<div class="mt-3">
<label class="form-labels">Average Cost : </label>
<input type="text" class="form-control" v-model="restaurant.average_cost"/>
</div>

<div class="mt-3">
<label class="form-labels">Store Hours : </label>
<input type="text" class="form-control" v-model="restaurant.store_hours"/>
</div>

<div class="mt-3">
<label class="form-labels">Features : </label>
<input type="text" class="form-control" v-model="restaurant.features"/>
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Parking : </label>
<input type="radio" name="parking" value="Parking Area" v-model="restaurant.parking"/> Parking Area
<input type="radio" name="parking" value="No Parking Area" v-model="restaurant.parking"/> No Parking Area
</div>

<div class="mt-3">
<label class="form-labels form-check-inline">Contact : </label>
<input class="ms-2" type="checkbox" name="contact" value="Phone" v-model="restaurant.contact"/> Phone
<input class="ms-2" type="checkbox" name="contact" value="E-mail" v-model="restaurant.contact"/> E-mail
<input class="ms-2" type="checkbox" name="contact" value="Website" v-model="restaurant.contact"/> Website    
<input class="ms-2" type="checkbox" name="contact" value="Facebook" v-model="restaurant.contact"/> Facebook
<input class="ms-2" type="checkbox" name="contact" value="Instagram" v-model="restaurant.contact"/> Instagram
<input class="ms-2" type="checkbox" name="contact" value="Viber" v-model="restaurant.contact"/> Viber
</div>

<div>
<div class="col-md-2">
<label class="form-labels">Ratings : </label>
<select class="form-select" v-model="restaurant.rating">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
</div>

<button class="mt-3 btn btn-del" v-on:click="process">Delete</button>
<button class="mt-3 btn btn-cancel" v-on:click="cancelButton">Cancel</button>


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
            const deleteRest = {
                name: this.restaurant.name,
                cuisine: this.restaurant.cuisine,
                location: this.restaurant.location,
                image: this.restaurant.image,
                bestseller: this.restaurant.bestseller,
                meals: this.restaurant.meals,
                average_cost: this.restaurant.average_cost,
                store_hours: this.restaurant.store_hours,
                features: this.restaurant.features,
                parking: this.restaurant.parking,
                contact: this.restaurant.contact,
                rating: this.restaurant.rating
            };
            await axios.delete(
                baseAPI + "restaurants/" + this.reviewId,
                deleteRest
            );
            this.$emit("restaurant-delete");
        },
        cancelButton: function(){
            this.$emit("restaurant-cancel");
        }
    },
};
</script>

<style>
.delete-title{
    color: #EF4F5F;
    background-color: #FAC7CC;
    font-weight: 900 !important;
    font-family: Trebuchet MS, sans-serif;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    border-radius:20px;
}
.btn-del{
z-index: 10;
  border-style:solid !important;
  border-color:#EF4F5F !important;
  background-color: #EF4F5F !important;
  color: white !important;
  font-weight: bold !important;
}
.btn-cancel{
    position: relative;
    left: 10px;
    z-index: 10;
    border-style:solid !important;
    border-color:#FAC7CC !important;
    background-color: #FAC7CC !important;
    color: #EF4F5F !important;
    font-weight: bold !important;
}


</style>
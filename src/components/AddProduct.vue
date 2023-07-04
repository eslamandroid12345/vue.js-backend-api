<template>

  <div class="container">
  <form @submit.prevent="addProduct">
    <div class="form-group">

      <label for="exampleInputEmail1">Title</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.title">
      <smal v-if="errors && errors.title">{{errors.title[0]}}</smal>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Price</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.price">
      <smal v-if="errors && errors.price">{{errors.price[0]}}</smal>

    </div>



    <div class="form-group">
      <label for="exampleInputEmail1">Description</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.description">
      <smal v-if="errors && errors.description">{{errors.description[0]}}</smal>

    </div>

    <button type="submit" class="btn btn-primary">Save Data</button>
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "AddProduct",

  data(){
    return {

      product:{
        title: "",
        price: "",
        description: "",
      },

      errors: {}

    }
  },


  methods: {

    async addProduct(){

      try {

      await axios.post('http://127.0.0.1:8000/api/store-product',{
           title: this.product.title,
           price: this.product.price,
           description: this.product.description,
         });

        this.$router.push('/products');

      }catch (errors) {

        this.errors = errors.response.data.errors

      }

    }

  }
}
</script>

<style scoped>

</style>
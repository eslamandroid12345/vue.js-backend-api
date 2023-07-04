<template>
<div class="container">
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th scope="col">created_at</th>
      <th scope="col">updated_at</th>
      <th scope="col">action</th>
    </tr>
    </thead>


    <tbody>
    <tr v-for="product in products" :key="product.id">

      <td>{{product.id}}</td>
      <td>{{product.title}}</td>
      <td>{{product.price}}</td>
      <td>{{product.description}}</td>
      <td>{{product.created_at}}</td>
      <td>{{product.updated_at}}</td>
      <td>

        <router-link :to="{name:'edit-product',params:{id:product.id}}" type="button" class="btn btn-primary">Edit</router-link>
        <button @click="deleteProduct(product.id)" type="button" class="btn btn-primary">Delete</button>
      </td>
    </tr>

    </tbody>
  </table>
</div>

</template>

<script>

import axios from "axios";
export default {
  name: "AllProducts",

  data(){

    return {

      products : []
    }
  },

  created() {

    this.getProducts();

  },

  methods: {


   async getProducts(){

      try {

        const response = await axios.get('http://127.0.0.1:8000/api/all-products');
          this.products = response.data.data;


        console.log(response.data);

      }catch (error) {

        console.log(error)
      }

    },

    async deleteProduct(id) {

      try {

        await axios.delete(`http://127.0.0.1:8000/api/delete-product/${id}`);
        await this.getProducts();

      }catch (error) {

        console.log(error)
      }


    }

  }
}
</script>

<style scoped>

</style>
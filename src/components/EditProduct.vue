<template>
  <form @submit.prevent="updateProduct">
    <div class="form-group">

      <label for="exampleInputEmail1">Title</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.title">
      <small id="emailHelp" class="form-text text-muted">Title of product</small>
    </div>


    <div class="form-group">

      <label for="exampleInputEmail1">Price</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.price">
      <small id="emailHelp" class="form-text text-muted">Price</small>
    </div>



    <div class="form-group">

      <label for="exampleInputEmail1">Description</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="product.description">
      <small id="emailHelp" class="form-text text-muted">Description</small>
    </div>

    <button type="submit" class="btn btn-primary">Save Data</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProduct",

  data(){
    return {

      product:{
        title: "",
        price: "",
        description: ""
      }

    }
  },

  created() {

    this.getProductById();
  },

  methods: {


    async getProductById(){

      try {

      const response =  await axios.get(`http://127.0.0.1:8000/api/show-product/${this.$route.params.id}`);
      this.product.title = response.data.data.title;
      this.product.price = response.data.data.price;
      this.product.description = response.data.data.description;

      console.log(response.data);

      }catch (error) {

        console.log(error)
      }


    },

    async updateProduct(){

      try {

        await axios.post(`http://127.0.0.1:8000/api/update-product/${this.$route.params.id}`,{
          title: this.product.title,
          price: this.product.price,
          description: this.product.description,
        });

        this.$router.push('/products');

      }catch (error) {

        console.log(error)
      }

    }

  }
}
</script>

<style scoped>

</style>
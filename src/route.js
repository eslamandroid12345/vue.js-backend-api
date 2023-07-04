import AllProducts from "@/components/AllProducts.vue";
import AddProduct from "@/components/AddProduct.vue";
import EditProduct from "@/components/EditProduct.vue";
import { createRouter, createWebHistory } from 'vue-router'

//npm install vue bootstrap bootstrap-vue
const routes = [

    {
        name: 'products',
        path: '/products',
        component : AllProducts

    },

    {
        name: 'add-product',
        path: '/add-product',
        component : AddProduct

    },

    {
        name: 'edit-product',
        path: '/edit-product/:id',
        component : EditProduct

    },

];


const router = new createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router
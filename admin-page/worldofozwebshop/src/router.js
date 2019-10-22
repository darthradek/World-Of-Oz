import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/products/Products'
import Colors from './views/colors/Colors'
import Brands from './views/brands/Brands'
import BrandsCreate from './views/brands/BrandsCreate'
import BrandsUpdate from './views/brands/BrandsUpdate'
import ProductTypes from './views/producttypes/ProductTypes'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/colors',
            name: 'colors',
            component: Colors
        },
        {
            path: '/brands',
            name: 'brands',
            component: Brands
        },
        {
            path: '/brandscreate',
            name: 'brandscreate',
            component: BrandsCreate
        },
        {
            path: '/brandsupdate/:brandId',
            name: 'brandsupdate',
            component: BrandsUpdate
        },
        {
            path: '/producttypes',
            name: 'producttypes',
            component: ProductTypes
        }
    ]
})
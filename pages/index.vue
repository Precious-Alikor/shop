<template>
    <div>
        <Heading />

        <Navbar />

        <div class="grid lg:grid-cols-1">
            <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="true">

                <Slide :key="1">
                    <div class="card-one grid lg:grid-cols-2">
                        <div class="flex items-center">
                            <div class="card-text text-start">
                                <h2 class="text-2xl mb-4">Men Collection 2018</h2>
                                <h1 class="text-6xl font-bold">NEW ARRIVALS</h1>
                                <button class="py-3 px-7 text-white text-xs rounded-3xl mt-8">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide :key="2">
                    <div class="card-two grid lg:grid-cols-2">
                        <div class="flex items-center">
                            <div class="card-text text-start">
                                <h2 class="text-2xl mb-4">Men Collection 2018</h2>
                                <h1 class="text-6xl font-bold">NEW SEASONS</h1>
                                <button class="py-3 px-7 text-white text-xs rounded-3xl mt-8">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide :key="3">
                    <div class="card-three grid lg:grid-cols-2">
                        <div class="flex items-center">
                            <div class="card-text text-start">
                                <h2 class="text-2xl mb-4">Women Collection 2018</h2>
                                <h1 class="text-6xl font-bold">NEW SEASONS</h1>
                                <button class="py-3 px-7 text-white text-xs rounded-3xl mt-8">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>


        <div class="mx-6 lg:mx-32">
            <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-6 my-20 catalog">
                <NuxtLink to="#">
                    <div class="border border-gray-200 relative">
                        <div class="absolute top-8 left-8">
                            <h3 class="text-2xl font-bold">Women</h3>
                            <p class="mt-1 text-xs" style="color: #333333;">Spring 2023</p>
                        </div>
                        <img src="../assets/img/banner-01.png" alt="img" class="object-fit-contain">
                    </div>
                </NuxtLink>
                <NuxtLink to="#">
                    <div class="border border-gray-200 relative">
                        <div class="absolute top-8 left-8">
                            <h3 class="text-2xl font-bold">Men</h3>
                            <p class="mt-1 text-xs" style="color: #333333;">Spring 2023</p>
                        </div>
                        <img src="../assets/img/banner-02.png" alt="img" class="object-fit-contain">
                    </div>
                </NuxtLink>
                <NuxtLink to="#">
                    <div class="border border-gray-200 relative">
                        <div class="absolute top-8 left-8">
                            <h3 class="text-2xl font-bold">Accessories</h3>
                            <p class="mt-1 text-xs" style="color: #333333;">New Trend</p>
                        </div>
                        <img src="../assets/img/banner-03.png" alt="img" class="object-fit-contain">
                    </div>
                </NuxtLink>
            </div>
        </div>


        <div class="mx-6 lg:mx-32">
            <h1 class=" text-xl md:text-3xl lg:text-3xl font-bold">PRODUCT OVERVIEW</h1>
            <div class="flex lg:justify-between mt-7">
                <div class="flex flex-wrap">
                    <h6 class="me-6 text-sm leading-8" @click="toggleType(OPTION_1)"
                        :class="type === OPTION_1 ? 'active' : ''">
                        All
                        Products</h6>
                    <h6 class="me-6 text-sm leading-8" @click="toggleType(OPTION_2)"
                        :class="type === OPTION_2 ? 'active' : ''">
                        Women</h6>
                    <h6 class="me-6 text-sm leading-8" @click="toggleType(OPTION_3)"
                        :class="type === OPTION_3 ? 'active' : ''">
                        Men</h6>
                    <h6 class="me-6 text-sm leading-8" @click="toggleType(OPTION_4)"
                        :class="type === OPTION_4 ? 'active' : ''">
                        Bag</h6>
                    <h6 class="me-6 text-sm leading-8" @click="toggleType(OPTION_5)"
                        :class="type === OPTION_5 ? 'active' : ''">
                        Shoes</h6>
                    <h6 class="text-sm leading-8" @click="toggleType(OPTION_6)" :class="type === OPTION_6 ? 'active' : ''">
                        Watch
                    </h6>
                </div>
                <div class="flex">
                    <!-- <div class="border border-gray-300 py-1 px-3 text-sm me-3">
                    Filter
                </div>
                <div class="border border-gray-300 py-1 px-3 text-sm">
                    Search
                </div> -->
                </div>
            </div>
        </div>

        <div v-if="type === OPTION_1">
            <Products />
        </div>

        <div v-if="type === OPTION_2">
            <WomenSec />
        </div>

        <div v-if="type === OPTION_3">
            <MenSec />
        </div>

        <div v-if="type === OPTION_4">
            <h1 class="py-12 text-center text-3xl">COMING SOON!</h1>
        </div>

        <div v-if="type === OPTION_5">
            <Shoes />
        </div>

        <div v-if="type === OPTION_6">
            <Watch />
        </div>



    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { useQueryParamsTabSwitch } from '../composables/useQuery'

const toggleType = (_type) => {
    type.value = _type
}

const tabs = [
    "All Products",
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Watch"
]

const type = useQueryParamsTabSwitch(tabs);
const OPTION_1 = tabs[0]
const OPTION_2 = tabs[1]
const OPTION_3 = tabs[2]
const OPTION_4 = tabs[3]
const OPTION_5 = tabs[4]
const OPTION_6 = tabs[5]
</script>

<style scoped>
.nav-menu h6 {
    font-size: 12px;
}

.card-one {
    width: 100%;
    height: 85vh;
    background-image: url(../assets/img/mens-new-arrival.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* padding: 0 8rem; */
    animation-delay: 4s;
}

.card-two {
    width: 100%;
    height: 85vh;
    background-image: url(../assets/img/mens-new-season.webp);
    background-size: cover;
    background-repeat: no-repeat;
    /* padding: 0 8rem; */
    animation-delay: 4s;
}

.card-three {
    width: 100%;
    height: 85vh;
    background-image: url(../assets/img/womens-new-season.webp);
    background-size: cover;
    background-repeat: no-repeat;
    /* padding: 0 8rem; */
    animation-delay: 4s;
}

.card-text h1 {
    font-family: 'Playfair Display', serif;
    color: #333333;
}

.card-text h2,
h3 {
    color: #333333;
}

h6 {
    color: #888888;
    cursor: pointer;
    font-size: 12px;
}

.active {
    text-decoration: underline;
    text-decoration-color: #888888;
    text-underline-offset: 3px;
    color: #000;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

button {
    background-color: #717fe0;
}
</style>
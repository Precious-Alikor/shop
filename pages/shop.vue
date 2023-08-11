<template>
    <div>
        <Heading />

        <Navbar style="border-bottom: 1px solid rgb(229, 229, 229);"/>

        <div class="mx-6 lg:mx-32">
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
                        Watches
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
h6 {
    color: #888888;
    cursor: pointer;
    font-size: 12px;
}

.active {
    text-decoration: underline;
    text-decoration-color: #888888;
    text-underline-offset: 3px;
}
.product-name {
    color: #999999;
}

.product-price {
    color: #666666;
}
</style>
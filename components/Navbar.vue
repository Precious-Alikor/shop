<template>
    <div>
        <div class="mx-6 lg:mx-32 py-6">
            <div class="flex justify-betwwen items-center">
                <div class="flex items-center">
                    <img src="../assets/img/logo-01.webp" alt="img" class="h-3 me-5">
                    <div class="flex">
                        <NuxtLink to="/">
                            <h6 class="mx-3">Home</h6>
                        </NuxtLink>
                        <NuxtLink to="/shop">
                            <h6 class="mx-3">Shop</h6>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <h6 class="mx-3">Features</h6>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <h6 class="mx-3">Blog</h6>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <h6 class="mx-3">About</h6>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <h6 class="mx-3">Contact</h6>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h6 {
    font-size: 12px;
    color: #333333;
}
</style>
<template>
    <footer class="py-16">
        <div class="container-lg">
            <div class="grid lg:grid-cols-4">
                <div>
                    <h5 class="font-semibold mb-5 text-white">CATEGORIES</h5>
                    <h6>Women</h6>
                    <h6>Men</h6>
                    <h6>Shoes</h6>
                    <h6>Watches</h6>
                </div>
                <div>
                    <h5 class="font-semibold mb-5 text-white">HELP</h5>
                    <h6>Track Order</h6>
                    <h6>Returns</h6>
                    <h6>Shipping</h6>
                    <h6>FAQs</h6>
                </div>
                <div>
                    <h5 class="font-semibold mb-5 text-white">GET IN TOUCH</h5>
                    <h6>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on
                        (+1)
                        96 716 6879</h6>
                </div>
                <div class="mx-auto me-0">
                    <h5 class="font-semibold mb-5 text-white">NEWSLETTER</h5>
                    <div class="w-56 h-8 border-b border-gray-600">
                        <input type="text" placeholder="email@example.com"
                            class="text-xs w-full h-full placeholder-text bg-transparent border border-transparent focus:outline-0 placeholder-gray-500">
                    </div>
                    <button class="py-2 px-10 text-white text-sm rounded-3xl mt-4">SUBSCRIBE</button>
                </div>
            </div>


            <div class="flex mt-12 mb-2 justify-center">
                <img src="../assets/img/icon-pay-01.webp" alt="icon" class="h-5">
                <img src="../assets/img/icon-pay-02.webp" alt="icon" class="h-5">
                <img src="../assets/img/icon-pay-03.webp" alt="icon" class="h-5">
                <img src="../assets/img/icon-pay-04.webp" alt="icon" class="h-5">
                <img src="../assets/img/icon-pay-05.webp" alt="icon" class="h-5">
            </div>


        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
    background-color: #222222;
}

footer h6 {
    color: #b2b2b2;
    font-size: 13px;
    line-height: 30px;
}

input {
    color: #b2b2b2;
}

.placeholder-text::placeholder {
    color: #b2b2b2;
}

button {
    background-color: #717fe0;
}
</style>
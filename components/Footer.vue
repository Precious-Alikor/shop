<template>
    <footer class="py-16">
        <div class="mx-6 lg:mx-32">
            <div class="grid md:grid-cols-2 lg:grid-cols-4">
                <div class="mb-12 lg:mb-0">
                    <h5 class="font-semibold mb-2 mb-6 md:md-5 lg:mb-5 text-white">CATEGORIES</h5>
                    <h6>Women</h6>
                    <h6>Men</h6>
                    <h6>Shoes</h6>
                    <h6>Watches</h6>
                </div>
                <div class="mb-12 lg:mb-0">
                    <h5 class="font-semibold mb-2 mb-6 md:md-5 lg:mb-5 text-white">HELP</h5>
                    <h6>Track Order</h6>
                    <h6>Returns</h6>
                    <h6>Shipping</h6>
                    <h6>FAQs</h6>
                </div>
                <div class="mb-12 lg:mb-0">
                    <h5 class="font-semibold mb-2 mb-6 md:md-5 lg:mb-5 text-white">GET IN TOUCH</h5>
                    <h6 class="md:pe-10">Any questions? Let us know in
                        store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on
                        (+1)
                        96 716 6879</h6>
                </div>
                <div class="mb-12 lg:mb-0 lg:ps-10">
                    <h5 class="font-semibold mb-2 mb-6 md:md-5 lg:mb-5 text-white">NEWSLETTER</h5>
                    <div class="w-11/12 h-8 inputSec">
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

.inputSec {
    border-bottom: 1px solid #b2b2b2;
}

input:focus {
    border-bottom: 1px solid #717fe0;
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
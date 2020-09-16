<template>
    <div class="keys-logo">
        <div class="keys-logo__slider swiper-container">
            <div class="swiper-wrapper">
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-1.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-2.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-3.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-4.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-5.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-6.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-7.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-1.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-2.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-3.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-4.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-5.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-6.png" alt="" /></div>
                <div class="logo-slide swiper-slide"><img src="@/assets/img/logo/logo-7.png" alt="" /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: "Logo",
        data() {
            return{

            }
        },
        mounted() {
            let vertical = new Swiper('.keys-logo__slider', {
                direction: 'vertical',
                slidesPerView: "auto"
            })
        }
    }
</script>

<style scoped>
    .keys-logo__slider{
        height: 100vh;
        overflow: hidden;
    }
</style>
<template>
    <div class="keys-logo">
        <div  v-swiper:mySwiper="swiperOptions" class="keys-logo__slider swiper-container">
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
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Logo",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return{
                swiperOptions:{
                    direction: 'vertical',
                    slidesPerView: 7,
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 3,
                            direction: 'horizontal',
                            spaceBetween: 20,
                        },
                        600:{
                            direction: 'vertical',
                            slidesPerView: 7,
                            spaceBetween: 0,
                        },
                        1300:{
                          direction: 'vertical',
                          slidesPerView: 5,
                          spaceBetween: 0,
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .keys-logo__slider{
        height: 100vh;
        overflow: hidden;
    }
    .keys-logo__slider .logo-slide{
        margin-bottom: 0;
    }
</style>
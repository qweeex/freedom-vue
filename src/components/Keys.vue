<template>
    <section class="keys">
        <div class="keys-container">
            <div class="keys-row">
                <Logo/>
                <div :class="{ hiddenContent: showPopup }" class="keys-content">
                    <div v-swiper:mySwiper="swiperOptions" class="keys-content__slider swiper-container">
                        <div class="swiper-wrapper">
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-1.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR и маркетинговое<br />сопровождение<br />ресторана Nikolas</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-2.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR, SMM и event для сети<br />винных баров Brix</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-1.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR и маркетинговое<br />сопровождение<br />ресторана Nikolas</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-2.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR, SMM и event для сети<br />винных баров Brix</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-1.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR и маркетинговое<br />сопровождение<br />ресторана Nikolas</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content-slide swiper-slide">
                                <div class="content-slide__wrapper">
                                    <div class="slider-img"><img src="@/assets/img/keys-2.png" alt="" /></div>
                                    <div class="slider-content">
                                        <div class="content-title">
                                            <span>PR, SMM и event для сети<br />винных баров Brix</span>
                                        </div>
                                        <div class="content-link"><a v-on:click="PopupShow()">Читать подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Add Scrollbar -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>
                <div :class="{ hiddenContent: showPopup }" class="keys-title">
                    <p class="keys-title__text">наши<br />кейсы</p>
                </div>
            </div>
        </div>
        <div class="PopupKeys" v-if="false" :class="{ PopupKeysActive: showPopup }">
            <div class="PopupKeys-wrapper">
                <div class="PopupKeys-close">
                    <div class="PopupKeys-close__btn" v-on:click="PopupHidden()"><span>Вернуться назад</span></div>
                </div>
                <div class="PopupKeys-content">
                    <div class="PopupKeys-content__top">
                        <div class="top-title">
                            <div class="top-title__title"><span>PR, SMM и event для сети винных баров Brix</span></div>
                            <div class="top-title__desc"><span>Полное сопровождение проекта:</span></div>
                        </div>
                        <div class="top-img"><img src="@/assets/img/popupImg.png" alt="" /></div>
                    </div>
                    <div class="PopupKeys-content__bottom">
                        <div class="bottom-list">
                            <ul>
                                <li>Создание пула релевантных СМИ.</li>
                                <li>Создание информационных поводов.</li>
                                <li>Организация временного двухнедельного моно-меню раз в 1,5 - 2 месяца.</li>
                                <li>Организация и проведение регулярных ужинов с бренд-шефом сети.</li>
                                <li>Фотоотчеты мероприятий.</li>
                                <li>Написание пресс-релизов.</li>
                                <li>Организация фотосессий сезонных и временных меню.</li>
                                <li>Организация и проведение дегустаций с ресторанными критиками и журналистами.</li>
                                <li>Ведение соц сетей (Facebook и Instagram).</li>
                                <li>Обработка входящих запросов журналистов.</li>
                            </ul>
                        </div>
                        <div class="bottom-result">
                            <div class="result-title"><p class="result-title__text">Результат</p></div>
                            <div class="result-desc">
                                <p>
                                    Создание пула из 50 релевантных журналистов, организация 3 моно-меню, проведение 5 ужинов с
                                    бренд-шефов, проведение 13 фотосессий, выход 11 пресс-релизов, обеспечение выхода 59 публикаций,
                                    прирост в соц сетях (Facebook 5007 подписчиков, Instagram 6383 подписчиков)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import Logo from "./Keys/Logo";
    export default {
        name: "Keys",
        components: {
            Logo,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                showPopup: false,
                swiperOptions:{
                    direction: 'vertical',
                    slidesPerView: 2,
                    spaceBetween: 0,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: false,
                    },
                }
            }
        },
        methods: {
            PopupShow(){
                this.showPopup = true;
            },
            PopupHidden(){
                this.showPopup = false;
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
        }
    }
</script>

<style lang="less" scoped>
    .PopupKeysActive{
        right: 0;
    }
    .hiddenContent{
        opacity: 0;
        transition: all 0.4s;
    }
    .keys-content__slider{
        height: 100vh;
        overflow: hidden;
    }
    /*  Удалить потом  */
    .keys-content__slider .content-slide{
        margin-bottom: 0;
    }
</style>
<template>
    <section class="header" >
        <div class="header-container">
            <div class="header-logo">
                <a href="/"><img src="@/assets/img/logo.svg" alt="" /></a>
            </div>
            <div class="header-menu">
                <nav>
                    <a href="#service" class="header-menu__link">Услуги</a>
                    <a href="#about" class="header-menu__link">О нас</a>
                    <a href="#keys" class="header-menu__link">Кейсы</a>
                    <a href="#consulting" class="header-menu__link">Консультации</a>
                    <a href="#contact" class="header-menu__link">Контакты</a>
                </nav>
            </div>
            <div class="header-lang">
                <div class="header-lang__list">
                    <a href="" class="header-lang__link lang-active">Ru</a> <a href="" class="header-lang__link">En</a>
                    <a href="" class="header-lang__link">Port</a>
                </div>
            </div>
            <div class="header-site">
                <a href=""><span>Перейти на</span> <img src="@/assets/img/site.svg" alt="" /></a>
            </div>
            <div class="header-music">
                <img src="@/assets/img/music.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header-container{
        position: relative;
    }
    .header{
      transition: all 0.4s;
    }
</style>
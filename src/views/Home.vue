<template>
    <div class="wrapper">
        <section class="main">
            <Header/>
            <div class="main-line"><img src="@/assets/img/scroll-line.svg" alt="" /></div>
            <div class="main-content">
                <div class="main-content__img">
                    <svg width="743" height="351" viewBox="0 0 743 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4 58.5L79.95 58.5V79.05L36.9 79.05V103.95L76.95 103.95V123.15L36.9 123.15L36.9 168H11.4L11.4 58.5ZM125.513 127.5L125.513 168H100.463L100.463 59.25C111.463 57.75 123.463 57 136.463 57C151.463 57 162.613 59.85 169.913 65.55C177.313 71.15 181.013 79.15 181.013 89.55C181.013 96.25 179.063 102.3 175.163 107.7C171.263 113 166.113 116.8 159.713 119.1V119.4C164.913 122.3 169.163 128.25 172.463 137.25L184.013 168H157.763L147.413 138.3C146.013 134.1 144.313 131.25 142.313 129.75C140.313 128.25 137.213 127.5 133.013 127.5L125.513 127.5ZM125.513 108.75L133.913 108.75C140.913 108.75 146.263 107.3 149.963 104.4C153.663 101.4 155.513 97.25 155.513 91.95C155.513 81.55 148.663 76.35 134.963 76.35C131.363 76.35 128.213 76.65 125.513 77.25V108.75ZM226.304 79.05L226.304 101.4H267.854V120.75H226.304V147.45L270.854 147.45V168L200.804 168L200.804 58.5L270.854 58.5V79.05H226.304ZM317.711 79.05V101.4H359.261V120.75H317.711V147.45H362.261V168H292.211V58.5L362.261 58.5V79.05H317.711ZM473.167 111.75C473.167 130.15 468.067 144.4 457.867 154.5C447.767 164.5 433.517 169.5 415.117 169.5C404.017 169.5 393.517 168.75 383.617 167.25V59.25C393.517 57.75 404.017 57 415.117 57C433.517 57 447.767 61.85 457.867 71.55C468.067 81.15 473.167 94.55 473.167 111.75ZM448.867 111.75C448.867 88.55 438.267 76.95 417.067 76.95C414.167 76.95 411.367 77.25 408.667 77.85V148.65C411.367 149.25 414.167 149.55 417.067 149.55C438.267 149.55 448.867 136.95 448.867 111.75ZM498.947 72.15C509.047 62.05 522.547 57 539.447 57C556.347 57 569.797 62.05 579.797 72.15C589.897 82.25 594.947 95.95 594.947 113.25C594.947 130.55 589.897 144.25 579.797 154.35C569.797 164.45 556.347 169.5 539.447 169.5C522.547 169.5 509.047 164.45 498.947 154.35C488.947 144.25 483.947 130.55 483.947 113.25C483.947 95.95 488.947 82.25 498.947 72.15ZM517.697 139.5C522.897 145.5 530.147 148.5 539.447 148.5C548.747 148.5 555.947 145.5 561.047 139.5C566.247 133.5 568.847 124.75 568.847 113.25C568.847 101.75 566.247 93 561.047 87C555.947 81 548.747 78 539.447 78C530.147 78 522.897 81 517.697 87C512.597 93 510.047 101.75 510.047 113.25C510.047 124.75 512.597 133.5 517.697 139.5ZM697.211 100.95H696.911L677.711 142.95H654.611L635.411 100.95H635.111V168L610.961 168V58.5H637.061L666.011 123H666.311L695.261 58.5H721.961V168H697.211V100.95Z" fill="#171717"/>
                        <path d="M25.152 278.975L25.152 315H10.742L10.742 220.025C19.8247 218.715 29.4313 218.06 39.562 218.06C51.614 218.06 60.7403 220.636 66.941 225.789C73.1417 230.854 76.242 238.103 76.242 247.535C76.242 268.932 64.0153 279.63 39.562 279.63C34.9333 279.63 30.13 279.412 25.152 278.975ZM25.152 267.316C29.5187 268.015 33.8853 268.364 38.252 268.364C45.9373 268.364 51.8323 266.705 55.937 263.386C60.0417 259.98 62.094 255.133 62.094 248.845C62.094 242.557 60.0853 237.797 56.068 234.566C52.0507 231.247 46.112 229.588 38.252 229.588C33.274 229.588 28.9073 229.894 25.152 230.505L25.152 267.316ZM105.62 275.7L105.62 315H91.2098L91.2098 220.025C99.4191 218.715 108.152 218.06 117.41 218.06C129.986 218.06 139.461 220.374 145.837 225.003C152.212 229.632 155.4 236.051 155.4 244.26C155.4 250.897 153.697 256.574 150.291 261.29C146.885 266.006 142.256 269.237 136.405 270.984V271.246C140.16 273.517 143.653 278.713 146.885 286.835L158.02 315H143.086L132.213 286.835C130.379 282.119 128.326 279.106 126.056 277.796C123.872 276.399 119.68 275.7 113.48 275.7H105.62ZM105.62 264.434H113.48C131.994 264.434 141.252 258.146 141.252 245.57C141.252 240.243 139.243 236.269 135.226 233.649C131.296 230.942 124.92 229.588 116.1 229.588C112.17 229.588 108.676 229.894 105.62 230.505V264.434Z" fill="#171717"/>
                        <path d="M204.978 315L240.741 219.37H248.601L284.495 315H277.421L266.417 284.739H222.794L211.79 315H204.978ZM224.89 279.237H264.452L244.802 225.134H244.54L224.89 279.237ZM339.822 223.693C326.722 223.693 316.417 227.579 308.906 235.352C301.483 243.125 297.771 253.736 297.771 267.185C297.771 280.547 301.57 291.158 309.168 299.018C316.766 306.791 327.115 310.677 340.215 310.677C349.909 310.677 358.511 308.974 366.022 305.568V265.875H329.735V260.373H372.31V309.236C362.791 313.952 351.961 316.31 339.822 316.31C325.063 316.31 313.229 311.856 304.321 302.948C295.5 294.04 291.09 282.119 291.09 267.185C291.09 252.251 295.413 240.33 304.059 231.422C312.792 222.514 324.539 218.06 339.298 218.06C350.564 218.06 360.433 220.68 368.904 225.92L366.415 230.898C358.468 226.095 349.603 223.693 339.822 223.693ZM400.634 225.003V260.373L445.567 260.373V265.875L400.634 265.875V309.367H448.187V315H394.084V219.37L448.187 219.37V225.003L400.634 225.003ZM469.946 315V219.37H477.413L532.171 305.044H532.433V219.37H538.983V315H531.385L476.627 229.326H476.365V315H469.946ZM603.32 223.693C590.919 223.693 581.05 227.623 573.714 235.483C566.466 243.343 562.841 253.91 562.841 267.185C562.841 280.372 566.553 290.94 573.976 298.887C581.4 306.747 591.181 310.677 603.32 310.677C612.84 310.677 621.617 308.057 629.651 302.817L632.14 307.926C623.844 313.515 614.106 316.31 602.927 316.31C588.779 316.31 577.426 311.856 568.867 302.948C560.396 294.04 556.16 282.119 556.16 267.185C556.16 252.076 560.352 240.112 568.736 231.291C577.208 222.47 588.605 218.06 602.927 218.06C614.106 218.06 623.844 220.855 632.14 226.444L629.651 231.553C621.791 226.313 613.014 223.693 603.32 223.693ZM649.188 219.37L680.104 267.578H680.366L711.151 219.37H718.749L683.51 273.342V315H676.698V273.342L641.459 219.37H649.188Z" fill="#171717"/>
                    </svg>

                    <div class="main-line__left"></div>
                    <div class="main-line__right"></div>
                </div>
            </div>
            <div class="main-bottom"></div>
        </section>
        <section class="big-bg">
            <section class="service" id="service">
                <div class="service-container">
                    <div class="service-title"><p class="service-title__text">наши услуги</p></div>
                    <div class="service-list">
                        <div class="service-card card-1">
                            <div class="card-title">
                                <p class="card-title__text">Связи с<br />общественностью</p>
                            </div>
                            <ul class="card-list">
                                <li>формирование положительного имиджа компании</li>
                                <li>подготовка и проведение PR-кампаний</li>
                                <li>работа со СМИ</li>
                                <li>подготовка пресс-релизов</li>
                                <li>организация пресс-туров</li>
                                <li>проведение мероприятий для прессы</li>
                                <li>комментарийные программы</li>
                                <li>антикризисный пиар</li>
                                <li>мониторинг СМИ и аналитика</li>
                                <li>написание текстовых материалов любой тематики и сложности</li>
                                <li>письменные и устные переводы</li>
                            </ul>
                        </div>
                        <div class="service-card card-2">
                            <div class="card-title"><p class="card-title__text">Мероприятия</p></div>
                            <ul class="card-list">
                                <li>организация бизнес, культурных и спортивных мероприятий</li>
                                <li>проведение форумов, конференций и экспертных мероприятий</li>
                                <li>разработка партнерских пакетов и поиск информационных партнеров</li>
                            </ul>
                        </div>
                        <div class="service-card card-3">
                            <div class="card-title">
                                <p class="card-title__text">Создание фото и<br />видео контента</p>
                            </div>
                            <ul class="card-list">
                                <li>проведение предметных, интерьерных и репортажных фотосессий</li>
                                <li>съемки видео роликов и постпродакшн</li>
                                <li>создание рекламного и корпоративного контента</li>
                            </ul>
                        </div>
                        <div class="service-card card-4">
                            <div class="card-title"><p class="card-title__text">Digital & SMM</p></div>
                            <ul class="card-list">
                                <li>ведение аккаунтов в соц сетях</li>
                                <li>работа с лидерами мнений</li>
                                <li>настройка и ведение рекламных кампаний</li>
                            </ul>
                        </div>
                        <div class="service-card card-5">
                            <div class="card-title"><p class="card-title__text">Дизайн и брендинг</p></div>
                            <ul class="card-list">
                                <li>разработка логотипа и фирменного стиля</li>
                                <li>создание инфографик</li>
                                <li>оформление презентаций</li>
                                <li>креатив и дизайн рекламных материалов</li>
                                <li>дизайн упаковки</li>
                            </ul>
                        </div>
                        <div class="service-card card-6">
                            <div class="card-title"><p class="card-title__text">Работа с государственными структурами</p></div>
                            <ul class="card-list">
                                <li>разработка проектов совместно с органами государственной власти</li>
                                <li>формирование положительного образа компании</li>
                                <li>весь спектр информационной и it поддержки некоммерческого сектора</li>
                                <li>grassroots технологии</li>
                            </ul>
                        </div>
                        <div class="service-card card-7">
                            <div class="card-title"><p class="card-title__text">Международные проекты</p></div>
                            <ul class="card-list">
                                <li>PR-сопровождение иностранных брендов на российском рынке</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="service-line">
                    <div class="service-line__wrapper">
                        <div class="service-line__text">
                            <marquee class="marquee-black marquee-line"
                            >СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА</marquee
                            ><marquee class="marquee-white marquee-line"
                        >СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА СВОБОДА КОММУНИКАЦИЯ ДЛЯ ВАШЕГО БИЗНЕСА</marquee
                        >
                        </div>
                        <div class="service-line__block"></div>
                    </div>
                </div>
            </section>
            <section class="about" id="about">
                <div class="about-container">
                    <div class="about-start">
                        <svg class="about-start__svg" width="287" height="142" viewBox="0 0 287 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="svg-top" d="M-17 7.5H284.5" stroke="#171717" stroke-width="15"/>
                            <path class="svg-right" d="M279 141.5L279 0" stroke="#171717" stroke-width="15"/>
                        </svg>
                        <div class="about-start__line"></div>
                    </div>
                    <div class="about-title"><p class="about-title__text">о нас</p></div>
                    <div class="about-content">
                        <div class="about-content__title">
                            <span>бутиковое агентство профессионалов<br />в сфере коммуникаций, которые обожают<br />свое дело</span>
                        </div>
                        <div class="about-content__desc">
              <span
              >Freedom PR - бутиковое агентство профессионалов в сфере коммуникаций, которые обожают свое дело. Наша
                команда состоит из 7 сотрудников и 10 подрядчиков и вместе мы осуществляем интересные проекты разных
                масштабов Уже 5 лет мы придумываем полезные стратегии коммуникаций и продвижения, состоящие из идей и
                инструментов, которые помогают вашему бизнесу. Мы мастера кропотливой работы, всем сердцем любим своих
                клиентов и являемся для них надежным партнером, который всегда рядом.</span
              >
                        </div>
                    </div>
                    <div class="about-master">
                        <div class="about-master__img"><img src="@/assets/img/foto-1.png" alt="" /></div>
                        <div class="about-master__title">
                            <p class="name">Юлиана Титаева</p>
                            <p class="role">руководитель агентства </p>
                        </div>
                        <div class="about-master__desc">
              <span
              >9 лет опыта работы, в том числе, в крупнейших международных PR-агентствах. Полностью контролирует
                деятельность агентства и развитие бизнеса. Владеет английским и португальским.</span
              >
                        </div>
                    </div>
                    <div class="about-partners">
                        <div class="about-partners__content">
                            <div class="about-partners__title">
                                <p class="name">Антон Вербов</p>
                                <p class="role">партнер</p>
                            </div>
                            <div class="about-partners__desc">
                <span
                >Специалист в области связей с общественностью и органами государственной власти. 15 лет опыта работы.
                  Прошел путь от помощника главного редактора до начальника Управления коммуникационных проектов РИА
                  Новости. Отвечает за совместные проекты с государственными структурами и некоммерческим сектором.
                  Владеет английским.</span
                >
                            </div>
                        </div>
                        <div class="about-partners__img"><img src="@/assets/img/foto-2.png" alt="" /></div>
                    </div>
                </div>
            </section>
            <section class="cf"></section>
            <Keys/>
        </section>
        <section class="reviews">
            <div class="reviews-title"><p class="reviews-title__text">ОТЗЫВЫ</p></div>
            <div class="reviews-had"><img src="@/assets/img/hands.svg" alt="" /></div>
            <div class="reviews-list">
                <div class="reviews-row">
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                    <div class="reviews-item">
                        <div class="item-img"><img src="@/assets/img/reviews.png" alt="" /></div>
                        <div class="item-text">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam penatibus vitae ac, eget.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="work">
            <div class="work-title"><p class="work-title__text">Как мы работаем</p></div>
            <div class="work-list">
                <div class="work-wrapper">
                    <div class="work-item item-1" data-id="1">
                        <div class="work-item__img"><img src="@/assets/img/work/work-1.png" alt="" /></div>
                        <div class="work-item__content">
                            <div class="content-title">
                                <span>ЗНАКОМСТВО<br />ДРУГ С ДРУГОМ</span>
                            </div>
                            <div class="content-desc">
                <span
                >Мы получаем от вас заполненный бриф и после встречаемся, либо организовываем конференц-колл. Изучаем
                  специфику деятельности вашей компании и цели, которые вы хотите достигнуть.</span
                >
                            </div>
                        </div>
                    </div>
                    <div class="work-item item-2" data-id="2">
                        <div class="work-item__img"><img src="@/assets/img/work/work-2.png" alt="" /></div>
                        <div class="work-item__content">
                            <div class="content-title">
                                <span>Разработка<br />стратегии</span>
                            </div>
                            <div class="content-desc">
                <span
                >В срок до 2 недель разрабатываем стратегию продвижения и формируем предложение с четкими KPIs и
                  сроками. Проводим презентацию очно или онлайн, обсуждаем детали и при необходимости
                  корректируем.</span
                >
                            </div>
                        </div>
                    </div>
                    <div class="work-item item-3" data-id="3">
                        <div class="work-item__img"><img src="@/assets/img/work/work-3.png" alt="" /></div>
                        <div class="work-item__content">
                            <div class="content-title">
                                <span>Подписнание<br />договора</span>
                            </div>
                            <div class="content-desc">
                <span
                >Все утвержденные KPIs и сроки работ прописываются в контракте и после получения предоплаты мы
                  начинаем работу .</span
                >
                            </div>
                        </div>
                    </div>
                    <div class="work-item item-4" data-id="4">
                        <div class="work-item__img"><img src="@/assets/img/work/work-4.png" alt="" /></div>
                        <div class="work-item__content">
                            <div class="content-title">
                                <span>Реализация<br />стратегии</span>
                            </div>
                            <div class="content-desc">
                <span
                >Команда агентства работает над проектом, а аккаунт-менеджер всегда с вами на связи. Он обсуждает и
                  контролирует все текущие вопросы, передает информацию от вас команде и наоборот и является
                  ответственным за исполнение всех договоренностей.</span
                >
                            </div>
                        </div>
                    </div>
                    <div class="work-item item-5" data-id="5">
                        <div class="work-item__img"><img src="@/assets/img/work/work-5.png" alt="" /></div>
                        <div class="work-item__content">
                            <div class="content-title">
                                <span>Предоставление<br />отчетности</span>
                            </div>
                            <div class="content-desc">
                                <span>Каждый месяц мы присылаем подробный понятный отчет, в котором вы видите результаты работы.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="document">
            <div class="document-title">
                <p class="document-title__text">ХОЧУ<br />ЗАПОЛНИТЬ БРИФ</p>
            </div>
            <div class="document-img"><img src="@/assets/img/brif.svg" alt="" /></div>
        </section>
        <section class="phone">
            <div class="phone-img"><img src="@/assets/img/phone.svg" alt="" /></div>
            <div class="phone-title">
                <p class="phone-title__text">ХОЧУ, чтобы<br />мне перезвонили</p>
            </div>
        </section>
        <section class="contact">
            <div class="contact-container">
                <div class="contact-row">
                    <div class="contact-wrapper">
                        <div class="contact-title"><p class="contact-title__text">Наши контакты</p></div>
                        <div class="contact-block">
                            <div class="block-title"><p class="block-title__text">Мы всегда на связи</p></div>
                            <div class="block-wrap">
                                <a href="">+7 (495) 150-32-16</a> <a href="">+7 (495) 150-32-16</a> <a href="">hello@freedom-pr.com</a>
                            </div>
                        </div>
                        <div class="contact-form">
                            <div class="form-title"><p class="form-title__text">Хотите работать у нас?</p></div>
                            <div class="form-desc"><p class="form-desc__text">заполните форму и мы свяжемся с Вами</p></div>
                            <div class="form-wrapper">
                                <div class="form-input"><input name="" placeholder="имя" /></div>
                                <div class="form-input"><input name="" placeholder="телефон" /></div>
                                <div class="form-input"><input name="" placeholder="e-mail" /></div>
                                <div class="form-submit"><button>Отправить</button></div>
                            </div>
                            <div class="form-policy">
                                <p class="form-policy__text">
                                    Нажав кнопку “Отправить” вы даете согласие<br />на обработку Ваших <a href="">персональных данных</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-img"><img src="@/assets/img/contact.png" alt="" /></div>
                </div>
                <div class="contact-row">
                    <div class="contact-privat">
                        <p class="contact-privat__text">© 2020 “FREEDOM PR”. All rights reserved.<br />Privacy policy</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import anime from 'animejs/lib/anime.es.js';

    import Header from '@/components/Header';
    import Keys from '@/components/Keys';

    export default {
        name: "Home",
        components: {
            Header,
            Keys
        },
        mounted() {
            this.MainAnimate();
            this.AboutAnimate();
        },
        data(){
            return{
                about: {
                    start: false,
                    played: false
                }
            }
        },
        methods: {
            MainAnimate(){

                let LineLeft = document.querySelector('.main-line__left');
                let LineRight = document.querySelector('.main-line__right');

                window.addEventListener('scroll', function () {
                    let pageY = window.pageYOffset;
                    let mainHeight = document.querySelector('.main').offsetHeight;

                    let calcLine = () =>{

                        if (pageY < mainHeight){
                            return pageY / 100 * 10;
                        }

                    };
                    // Left line
                    anime({
                        targets: LineLeft,
                        height: calcLine() + "%"
                    });
                    anime({
                        targets: LineRight,
                        height: calcLine() + "%"
                    });
                });
            },
            AboutAnimate(){
                window.addEventListener('scroll', function () {
                    let AboutTopOffset = document.querySelector('.about').getBoundingClientRect().top + document.body.scrollTop;

                });
            }
        }
    }
</script>

<style scoped lang="less">
    .about-start{
        position: absolute;
        left: -302px;
        top: 125px;
        &__line{
            position: absolute;
            right: 0;
            top: px;
            width: 15.5px;
            background: #171717;
            display: block;
            content: '';
        }
    }
    .main-content__img{
        position: relative;
        .main-line__left{
            position: absolute;
            top: 314px;
            width: 14.2px;
            background: #171717;
            height: 0%;
            left: 11px;
        }
        .main-line__right{
            position: absolute;
            top: 314px;
            width: 14.4px;
            background: #171717;
            height: 0%;
            left: 91px;
        }
    }
</style>
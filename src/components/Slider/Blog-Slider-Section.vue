<template>
    <section class="blog__section">
        <div class="container">
            <div class="row">

                <h2 class="blog__title">{{ data.home.main.blog.title }}</h2>

                <div class="blog__cards">
                    <swiper :modules="modules" navigation :autoplay="true" :grabCursor="true" class="blog__cards-slider" :loop="true" :breakpoints="breakPoints">
                        <swiper-slide class="blog__slide" v-for="(slide, idx) in data.home.main.blog.blogCards" :key="idx">
                            <img :src="require(`@/assets/${slide.image}`)" alt="" class="blog__slide-img">

                            <div class="blog__slide-desc">
                                <p class="blog__slide-title">{{ slide.title }}</p>
                                <p class="blog__slide-text" v-show="windowSize > 1080">{{ slide.text }}</p>
                            </div>

                        </swiper-slide>
                    </swiper>
                </div>

                <Link name="весь блог" path="/blog"/>
            </div>
        </div>
    </section>
</template>

<script>
import data from "@/assets/json/data.json";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SmLinkVue from '../Sm-Link.vue';

import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    name: 'Blog Section',
    data() {
        return {
            data,
            modules: [Navigation, A11y],
            windowSize: window.innerWidth,
            breakPoints: {
                920: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                684: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Link: SmLinkVue
    },
    mounted() {
        window.onresize = () => {
            this.windowSize = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scoped>
.blog__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
    }

    .blog__cards {
        width: 100%;
        margin-top: 30px;

        &-slider {
            width: 100%;
            padding-bottom: 100px;
        }

        .blog__slide {
            max-height: 400px;
            height: 100%;
            position: relative;

            &-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &-desc {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(41, 45, 51, 0.6);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: end;
                padding: 50px;
                row-gap: 10px;
            }

            &-title {
                font-size: calc(20px + 8 * (100vw / 1920)) !important;
                color: var(--main-white-color);

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-text {
                font-size: 16px;
                color: var(--main-white-color);

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }
}

@media (max-width: 1080px) {
    .blog__slide {
        &-desc {
            padding: 20px !important;
        }

        &-title {
            line-height: 25px;
        }
    }
}

@media (max-width: 684px){
    .blog__slide {
        &-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-transform: capitalize;
        }
    }
}

@media (max-width: 320px) {
    .blog__slide {
        &-title {
            font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920)) !important;
        }
    }
}
</style>
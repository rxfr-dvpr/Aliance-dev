<template>
    <section class="center__slider-section">
        <div class="container">
            <div class="row">

                <div class="center__slider-content">
                    <h2 class="center__slider-title">{{ title }}</h2>

                    <div class="center__slider-desc">
                        <p class="center__slider-text" v-for="(text, idx) in texts" :key="idx"> {{ text }} </p>
                    </div>
                </div>

            </div>
        </div>

        <swiper :navigation="true" :modules="modules" class="center-slider" :loop="true" :centeredSlides="true" :grabCursor="true" 
        :autoplay="{ delay: 1500, disableOnInteraction: false}" :speed="800" :breakpoints="breakPoints">

            <swiper-slide class="center-slide" v-for="(slide, idx) in slider" :key="idx">
                <img :src="require(`@/assets/${slide.image}`)" alt="" class="center-slide-img">
            </swiper-slide>
        </swiper>

    </section>
</template>

<script>
import data from '@/assets/json/data.json';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Navigation, Autoplay } from "swiper";

export default {
    name: "Center Slider",
    data() {
        return {
            data,
            title: data.about.main.center.content.title,
            texts: data.about.main.center.content.texts,
            modules: [Navigation, Autoplay],
            slider: data.about.main.center.slider,
            breakPoints: {
                1024: {
                    slidesPerView: 3.3,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 2.8,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2.3
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>

<style lang="scss" scoped>
.center__slider-section {
    width: 100%;

    .center__slider-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        .center__slider-title {
            max-width: 600px;
            width: 100%;
        }

        .center__slider-desc {
            width: 100%;
            display: flex;
            column-gap: 40px;
            row-gap: 20px;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .center__slider-text {
            max-width: 635px;
            width: 100%;
            color: var(--text-color);

            &::first-letter {
                text-transform: uppercase;
            }

        }
    }

    .center-slider {
        max-width: 1920px;
        width: 100%;
        padding: 50px 0 90px;

        .center-slide {
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
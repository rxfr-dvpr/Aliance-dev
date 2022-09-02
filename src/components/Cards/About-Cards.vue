<template>
    <section class="about__cards-section">
        <div class="container">
            <div class="row">
                <swiper
                  :modules="modules"
                  navigation
                  class="about__cards-slider"
                  :breakpoints="breakPoints"
                  :class="{'dark-theme': darkerTheme}"
                >
                  <swiper-slide class="about__cards-slide" v-for="(slide, idx) in data.home.header.cards" :key="idx" :class="{'darker-border': darkerTheme}">
                      <span v-html="slide.icon"></span>
                      <p class="about__cards-slide-text" :class="{'dark-text': darkerTheme}">{{ slide.text }}</p>
                  </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    name: "About Slider",
    data() {
        return {
            data,
            modules: [Navigation, A11y],
            breakPoints: {
                1300: {
                    slidesPerView: 5
                },
                992: {
                    slidesPerView: 3.5
                },
                720: {
                    slidesPerView: 3
                },
                480: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1.4
                }
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        darkerTheme: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.about__cards-section {
    width: 100%;

    .about__cards-slider {
        width: 100%;

        .about__cards-slide {
            padding: 30px 50px;
            row-gap: 25px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            border-top: 1px solid rgba(235, 235, 240, 0.2);
            border-left: 1px solid rgba(235, 235, 240, 0.2);
            border-bottom: 1px solid rgba(235, 235, 240, 0.2);

            &:last-of-type {
                border-right: 1px solid rgba(235, 235, 240, 0.2);
            }

            &.darker-border {
                border-color: #EBEBF0;
            }

            & span {
                color: var(--main-blue-color);
                font-size: 30px;
            }

            &-text {
                font-size: 16px;
                color: var(--main-white-color);

                &::first-letter {
                    text-transform: uppercase;
                }

                &.dark-text {
                    color: var(--primary-color);
                }
            }
        }
    }
}

@media (max-width: 400px) {
    .about__cards-slide {
        padding: 20px 30px !important;
    }
}

@media (max-width: 1299px) {
    .about__cards-slider {
        padding-bottom: 50px;
    }
}

</style>
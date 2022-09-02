<template>
    <section class="work__steps-section">
        <div class="container">
            <div class="row">
                <h2 class="work__steps-title">{{ data.home.main.steps.title }}</h2>
                
                <!-- <div class="work__steps-cards">
                    <div class="work__steps-card" >
                        <p class="work__steps-card-num">{{ idx <= 9 ? `0${idx + 1}` : idx + 1 }}</p>
                        <p class="work__steps-card-title">{{ card.title }}</p>
                        <p class="work__steps-card-text">{{ card.text }}</p>

                        <Link name="Оставить заявку" path="/contact" v-show="idx == 0 ? true : false"/>                
                    </div>
                </div> -->

                <swiper
                  :modules="modules"
                  navigation
                  class="work__steps-slider"
                  :breakpoints="breakPoints"
                  :spaceBetween="30"
                >
                  <swiper-slide class="work__steps-slide" v-for="(card, idx) in data.home.main.steps.stepsCards" :key="idx">
                        <p class="work__steps-slide-num">
                            {{ idx <= 9 ? `0${idx + 1}` : idx + 1 }}
                        </p>

                        <p class="work__steps-slide-title">{{ card.title }}</p>
                        <p class="work__steps-slide-text">{{ card.text }}</p>

                        <Link name="Оставить заявку" path="/contact" v-show="idx == 0 ? true : false"/>
                  </swiper-slide>
                </swiper>
            </div>
        </div>

    </section>
</template>

<script>
import data from '@/assets/json/data.json';
import SmLinkVue from '../Sm-Link.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
    name: "Work Steps",
    data() {
        return {
            data,
            modules: [Navigation, A11y],
            breakPoints: {
                1300: {
                    slidesPerView: 4
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
                    slidesPerView: 1.2,
                }
            }
        }
    },
    components: {
        Link: SmLinkVue,
        Swiper,
        SwiperSlide
    }
}
</script>

<style lang="scss" scoped>
.work__steps-section {
    width: 100%;

    .row {
        row-gap: 50px;
        flex-direction: column;
        align-items: flex-start;
    }

    .work__steps-slider {
        width: 100%;
        padding-bottom: 60px;

        .work__steps-slide {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;

            &-num {
                width: 100%;
                font-family: var(--title-font);
                font-size: 48px;
                color: var(--main-blue-color);
                display: flex;
                column-gap: 30px;
                align-items: center;

                &::after {
                    content: '';
                    width: 100%;
                    height: 1px;
                    background: #EBEBF0;
                }
            }

            &-title {
                width: 100%;
                font-size: calc(20px + 8 * (100vw / 1920));
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-text {
                color: var(--text-color);
                font-size: calc(14px + 2 * (100vw / 1920));

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }
    }
}

@media (max-width: 320px) {
    .work__steps-slide {

        &-text {
            font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
        }

        &-text {
            font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

</style>
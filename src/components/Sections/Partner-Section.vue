<template>
    <section class="partners__section">
        <div class="container">
            <div class="row">

                <div class="partners__desc">
                    <h2 class="partners__desc-title">{{ data.home.main.partner.title }}</h2>

                    <div class="partners__services">

                        <p class="partners__service" v-for="(service, idx) in data.home.main.partner.services " :key="idx">
                            <span class="service__icon" v-html="service.icon"></span> 
                            {{ service.text }}
                        </p>

                    </div>
                </div>

                <div class="partners__images">
                    <router-link to="/blog" class="partners__img-box" v-for="(img, idx) in data.home.main.partner.images" :key="idx">
                        <img :src="require(`@/assets/${img}`)"  alt="" class="partners__img">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: "Partners Section",
    data() {
        return {
            data
        }
    }    
}
</script>

<style lang="scss" scoped>
.partners__section {
    width: 100%;

    .row {
        column-gap: 20px;
        row-gap: 30px;
        flex-wrap: unset;
    }

    .partners__desc {
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 40px;

        .partners__services {
            width: 100%;
            display: flex;
            column-gap: 50px;
            row-gap: 20px;
            flex-wrap: wrap;

            .partners__service {
                max-width: 310px;
                min-width: 310px;
                width: 100%;
                display: flex;
                gap: 25px;
                align-items: center;

                &::first-letter {
                    text-transform: uppercase;
                }

                & > .service__icon {
                    max-width: 30px;
                    min-width: 30px;
                    width: 100%;
                    font-size: calc(25px + 3 * (100vw / 1920)) !important;
                    color: var(--main-blue-color);
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    .partners__images {
        max-width: 720px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        .partners__img-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid 1px #EBEBF0;
            padding: 30px 0;

            .partners__img {
                max-width: 70px;
                width: 100%;
                filter: grayscale(100%);
                transition: .4s;
            }

            &:hover .partners__img {
                filter: grayscale(0);
            }
        }
    }
}


@media (max-width: 1390px){
    .partners__images {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 1024px){
    .partners__section {
        .row {
            flex-direction: column;
            align-items: center;

            .partners__images {
                max-width: 600px;
            }
            
        }
    }
}

@media (max-width: 684px){
    .partners__service {
        min-width: 100% !important;
    }
}

@media (max-width: 320px) {
    .service__icon {
        font-size: calc(25px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920)) !important;
    }
}


</style>
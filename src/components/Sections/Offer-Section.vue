<template>
    <section class="offer__section">
        <div class="container">
            <div class="row">

                <img :src="require(`@/assets/${data.home.main.offer.image}`)" alt="" class="offer-img">

                <div class="offer__desc">
                    <h3 class="offer__desc-title">{{ data.home.main.offer.title }}</h3>
                    <p class="offer__desc-text">{{ data.home.main.offer.text }}</p>

                    <form class="offer-form" @submit.prevent="pushInfo">
                        <input type="text" class="offer-name-inp" placeholder="Имя" required maxlength="30" v-model="name">

                        <input type="number" class="offer-number-inp" id="number-inp" required placeholder="+_ (___) __-__-___" v-model="number">

                        <button class="offer__submit-btn blue-link">отправить заявку</button>

                        <p class="rule-text"><span><i class="fas fa-shield-check"></i></span>  {{ data.home.main.offer.rule }}</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
import data from "@/assets/json/data.json";

export default {
    name: "Offer Section",
    data() {
        return {
            data,
            name: '',
            number: ''
        }
    },
    methods: {
        pushInfo() {
            if (this.name && this.number) {
                sessionStorage.setItem('name', this.name)
                sessionStorage.setItem('number', this.number)

                this.name = ""
                this.number = ""
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.offer__section {
    width: 100%;
    background: #F0F2F5;
    padding: 100px 0;
    overflow: hidden;

    .row {
        justify-content: flex-end;
        align-items: center;
        column-gap: 100px;
        row-gap: 50px;
        position: relative;
    }

    .offer-img {
        max-width: 350px;
        width: 100%;
        position: absolute;
        top: -25%;
        left: 0;
        transform: rotate(20deg);
    }

    .offer__desc {
        max-width: 840px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        &-title {
            font-size: calc(36px + 24 * (100vw / 1920));
        }

        &-text {
            max-width: 640px;
            width: 100%;
            color: var(--text-color);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .offer-form {
        width: 100%;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        align-items: center;
        
        input {
            max-width: 405px;
            width: 100%;
            padding: 20px 10px 20px 30px;
            outline: none;
            border: 1px solid #E4E4EB;
            font-size: 16px;
            color: var(--text-color);

            &::placeholder {
                font-size: 16px;
                color: var(--text-color);                
            }
        }

        .offer__submit-btn {
            border: 0;
            cursor: pointer;
        }

        .rule-text {
            max-width: 460px;
            width: 100%;
            display: flex;
            column-gap: 10px;
            font-size: 14px;
            color: var(--text-color);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

@media (max-width: 1350px){

    .offer__section {

        .row {
            justify-content: center;
        }

        .offer-img {
            display: none;
        }
    }
}

@media (max-width: 320px){
    .offer__desc {
        &-title {
            font-size: calc(36px + (24px + 24px * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (min-width: 1920px){
    .offer__desc {
        &-title {
            font-size: 60px !important;
        }
    }
}
</style>
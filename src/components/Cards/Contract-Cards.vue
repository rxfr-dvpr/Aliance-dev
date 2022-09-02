<template>
    <div class="contract__cards">

        <router-link to="/contract/product" class="contract__card" v-for="(card, idx) in data.home.main.contract.contractCards" :key="idx">
            <p class="contract__card-title">{{ card.title }}</p>

            <p class="contract__card-text">{{ card.text }}</p>

            <img :src="require(`@/assets/${card.image}`)" alt="" class="contract__card-img">
        </router-link>

    </div>
</template>

<script>
import data from "@/assets/json/data.json";

export default {
    name: "Contract Cards",
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
.contract__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .contract__card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 0 0 50px;
        border: 1px solid #EBEBF0;
        row-gap: 15px;
        transition: .4s;

        &-title {
            font-size: calc(20px + 8 * (100vw / 1920));
            transition: .4s;
            padding-right: 40px;
            
            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-text {
            max-width: 320px;
            width: 100%;
            color: var(--text-color);
            margin-bottom: 160px;
            padding-right: 40px;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-img {
            max-width: 500px;
            width: 100%;
            margin-top: auto;
            filter: grayscale(100%);
            transition: .3s;
        }

        &:hover {
            border-color: var(--main-blue-color);

            .contract__card-title {
                color: var(--main-blue-color);
            }

            .contract__card-img {
                filter: grayscale(0);
            }
        }
    }
}


@media (max-width: 1070px){
    .contract__cards {
        grid-template-columns: repeat(2, 1fr);

        .contract__card {
            padding: 20px 0 0 30px;
        }
    }
}

@media (max-width: 668px){
    .contract__cards {
        grid-template-columns: repeat(1, 1fr);

        .contract__card {

            &-text {
                margin-bottom: 90px !important;
            }

            &-img {
                margin-left: auto;
            }
            
        }
    }
}

@media (max-width: 375px){
    .contract__card {
        padding: 20px 0 0 !important;

        &-title {
            padding-left: 20px;
            padding-right: 0 !important;
        }

        &-text {
            padding-left: 20px;
            margin-bottom: 90px !important;
        }
    }
}

@media (max-width: 320px){
    .contract__card {
        &-title {
            font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (min-width: 1920px){
    .contract__card {
        &-title {
            font-size: 28px !important;
        }
    }
}

</style>
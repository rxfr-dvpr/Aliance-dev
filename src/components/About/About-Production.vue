<template>
    <section class="about__production-section">
        <div class="container">
            <div class="row">

                <img :src="require(`@/assets${data.about.main.production.image}`)" alt="" class="about__production-img">

                <div class="production__desc">
                    <h2 class="production__desc-title">{{ data.about.main.production.title }}</h2>

                    <p class="production__desc-text">{{ data.about.main.production.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: "Production",
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
.about__production-section {
    width: 100%;

    .row {
        align-items: center;
        gap: 40px;
        justify-content: space-between;
        flex-wrap: unset;
    }

    .about__production-img {
        max-width: 450px;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .production__desc {
        max-width: 850px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        &-title {
            max-width: 600px;
            width: 100%;
        }

        &-text {
            color: var(--text-color);
        }
    }
}

@media (max-width: 1370px){
    .about__production-img {
        max-width: 400px !important;
    }
}

@media (max-width: 1320px){
    .production__desc {
        max-width: 750px !important;
    }
}

@media (max-width: 992px){
    .about__production-section {
        .row {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
}

</style>
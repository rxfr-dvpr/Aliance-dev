<template>
    <section class="home__mission-section">
        <div class="container">
            <div class="row">
                
                <img :src="require(`@/assets/${data.home.main.mission.image}`)" alt="" class="mission__img">

                <div class="mission__desc">
                    <h2 class="mission__desc-title">{{ data.home.main.mission.title }}</h2>

                    <p class="mission__desc-text" v-for="(text, idx) in data.home.main.mission.texts" :key="idx">{{ text }}</p>

                    <Link :name="data.home.main.mission.linkName" path="/about"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from "@/assets/json/data.json";
import SmLinkVue from '../Sm-Link.vue';

export default {
    name: "Mission Section",
    data() {
        return {
            data
        }
    },
    components: {
        Link: SmLinkVue
    }
}
</script>

<style lang="scss" scoped>
.home__mission-section {
    width: 100%;

    .container {
        max-width: 1710px;
    }

    .row {
        gap: 60px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset;
    }

    .mission__desc {
        max-width: 720px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        align-items: flex-start;

        &-title {
            max-width: 480px;
            width: 100%;
        }

        &-text {
            color: var(--text-color);
            line-height: 160%;
        }
    }

    .mission__img {
        max-width: 840px;
        width: 100%;
        object-fit: cover;
    }
}

@media (max-width: 1650px){
    .mission__img {
        max-width: 700px !important;
    }
}

@media (max-width: 1510px){
    .mission__img {
        max-width: 600px !important;
    }
}

@media (max-width: 1290px){
    .row {
        flex-direction: column;
    }
}

</style>
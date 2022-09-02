<template>
    <section class="marks__mission-section">
        <div class="container">
            <div class="row">

                <img :src="require(`@/assets/${data.marksProduct.main.mission.image}`)" alt="" class="marks__mission-img">

                <div class="marks__mission-desc">
                    <h2 class="mission__desc-title">
                        {{ data.marksProduct.main.mission.title }}
                    </h2>

                    <p class="mission__desc-text" v-for="(text, idx) in allText" :key="idx">
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: "Marks Product Mission",
    data() {
        return {
            data,
            allText: data.marksProduct.main.mission.texts
        }
    }
}
</script>

<style lang="scss" scoped>
.marks__mission-section {
    width: 100%;

    .row {
        gap: 40px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset;
    }

    .marks__mission-img {
        max-width: 600px;
        width: 100%;
        object-fit: cover;
        border-radius: 50px;
    }

    .marks__mission-desc {
        max-width: 720px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        .mission__desc-text {
            color: var(--text-color);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

@media (max-width: 1390px) {
    .marks__mission-img {
        max-width: 500px !important;
    }
}

@media (max-width: 1170px) {
    .marks__mission-img {
        max-width: 450px !important;
    }
}

@media (max-width: 992px) {
    .marks__mission-section {
        .row {
            flex-direction: column;
        }
    }
}
</style>
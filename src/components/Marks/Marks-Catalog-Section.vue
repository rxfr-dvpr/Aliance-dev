<template>
    <section class="marks__catalog-section">
        <div class="container">
            <div class="row">

                <div class="marks__catalog-desc">
                    <h2 class="marks__catalog-title">{{ title }}</h2>
                    <p class="marks__catalog-text">{{ text }}</p>

                    <ul class="marks__catalog-list">
                        <li class="marks__catalog-list-item" v-for="(item, idx) in catalogList" :key="idx" v-html="`${item.icon} ${item.text}`"></li>
                    </ul>

                    <router-link to="/contract" 
                    v-html="`${catalogLink.icon} ${catalogLink.text}`" class="catalog-link blue-link">
                    </router-link>
                </div>

                <img :src="require(`@/assets/${image}`)" alt="" class="marks__catalog-img">

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: 'Marks Catalog',
    data() {
        return {
            data,
            title: data.marksProduct.main.catalog.descr.title,
            text: data.marksProduct.main.catalog.descr.text,
            catalogList: data.marksProduct.main.catalog.descr.catalogList,
            catalogLink: data.marksProduct.main.catalog.descr.catalogLink,
            image: data.marksProduct.main.catalog.image
        }
    }
}
</script>

<style lang="scss" scoped>
.marks__catalog-section {
    width: 100%;
    background: #F0F2F5;
    padding-top: 50px;

    .container {
        max-width: 1950px;
    }

    .row {
        justify-content: end;
        align-items: center;
        gap: 40px;
        flex-wrap: unset;
    }

    .marks__catalog-desc {
        max-width: 720px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        .marks__catalog-text {
            color: var(--text-color);

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .marks__catalog-list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 10px 0;
            
            &-item {
                font-size: 16px;
                display: flex;
                column-gap: 15px;
                align-items: center;
            }
        }

        .catalog-link {
            display: flex;
            align-items: center;
            column-gap: 10px;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .marks__catalog-img {
        max-width: 900px;
        width: 100%;
        object-fit: cover;
    }
}

@media (max-width: 1520px) {
    .marks__catalog-img {
        max-width: 800px !important;
    }
}

@media (max-width: 1420px) {
    .marks__catalog-img {
        max-width: 700px !important;
    }
}

@media (max-width: 1320px) {
    .marks__catalog-img {
        max-width: 600px !important;
    }
}

@media (max-width: 1220px) {
    .marks__catalog-section {
        .row {
            flex-direction: column;
        }
    }
}

@media (max-width: 650px) {
    .marks__catalog-section {
        .container {
            padding-right: 0;
        }
    }
}

@media (max-width: 555px) {
    .marks__catalog-list {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}


</style>
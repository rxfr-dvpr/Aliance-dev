<template>
    <section class="contract__production-section">
        <div class="container">
            <div class="row">

                <div class="contract__production-desc">
                    <h2 class="contract__production-title">{{ title }}</h2>
                    <p class="contract__production-text">{{ text }}</p>

                    <ul class="contract__catalog-list">
                        <li class="contract__catalog-list-item" v-for="(item, idx) in catalogList" :key="idx" v-html="`${item.icon} ${item.text}`"></li>
                    </ul>
                </div>

                <img :src="require(`@/assets/${image}`)" alt="" class="contract__production-img">

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: "Contract Production",
    data() {
        return {
            data,
            image: data.contractProduct.main.avtohimi.image,
            title: data.contractProduct.main.avtohimi.title,
            text: data.contractProduct.main.avtohimi.text,
            catalogList: data.marksProduct.main.catalog.descr.catalogList,
        }
    }    
}
</script>

<style lang="scss" scoped>
.contract__production-section {
    width: 100%;

    .row {
        justify-content: space-between;
        gap: 40px;
        align-items: center;
        flex-wrap: unset;
    }

    .contract__production-desc {
        max-width: 720px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;

        .contract__catalog-list {
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
    }

    .contract__production-img {
        max-width: 650px;
        width: 100%;
        object-fit: cover;
        border-radius: 50px;
    }
}

@media (max-width: 1320px) {
    .contract__production-img {
        max-width: 550px !important;
    }
}

@media (max-width: 1155px) {
    .contract__catalog-list {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}
        
@media (max-width: 1024px) {
    .contract__production-section {
        .row {
            flex-direction: column;
        }
    }
}

</style>
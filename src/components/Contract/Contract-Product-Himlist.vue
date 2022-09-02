<template>
    <section class="contract__himlist-section">
        <div class="container">
            <div class="row">

                <h2 class="contract__himlist-title">{{ title }}</h2>
                <p class="contract__himlist-text">{{ text }}</p>

                <div class="contract__himlist-lists">
                    <ul class="contract__himlist-list" v-for="(list, idx) in himList" :key="idx">
                        <li class="contract__himlist-list-item" v-for="(item, id) in list" :key="id">
                            {{ item }}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import data from '@/assets/json/data.json';

export default {
    name: 'Contract Product Himlist',
    data() { 
        return {
            data,
            title: data.contractProduct.main.himlist.title,
            text: data.contractProduct.main.himlist.text,
            himList: data.contractProduct.main.himlist.list
        }
    }    
}
</script>

<style lang="scss" scoped>

.contract__himlist-section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
    }

    .contract__himlist-text {
        color: var(--text-color);

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .contract__himlist-lists {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        gap: 30px;
        flex-wrap: wrap;

        .contract__himlist-list {
            max-width: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;

            &-item {
                font-size: 16px;
                display: flex;
                align-items: center;
                column-gap: 15px;

                &::first-letter {
                    text-transform: uppercase;
                }

                &::before {
                    content: '';
                    width: 16px;
                    height: 2px;
                    background: var(--main-blue-color);    
                }
            }
        }
    }
}

@media (max-width: 1020px) {
    .contract__himlist-lists {
        justify-content: flex-start !important;
        column-gap: 50px !important;
    }
}

@media (max-width: 712px) {
    .contract__himlist-lists {
        flex-direction: column;
    }
}



</style>
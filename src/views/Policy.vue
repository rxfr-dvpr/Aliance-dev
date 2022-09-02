<template>
    <Nav :transparentNav="false"/>

    <Header pageName="policy" :pagesInfo="headerObj" :title="headerObj.page2Name"/>

    <main class="main">
        <section class="rules__section">
            <div class="container">
                <div class="row">

                    <p class="rules__text" v-for="(text, idx) in data.policy.main.rules" :key="idx">{{ text.text }}</p>

                </div>
            </div>
        </section>
    </main>
    <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import FooterVue from '@/components/Footer.vue'
import HeaderVue from '@/components/Header.vue'
import data from '@/assets/json/data.json';

export default {
    name: 'Policy',
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        Footer: FooterVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 1,
                page2Name: data.policy.header.title
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 100px;
    padding: 100px 0;

    .rules__section {
        width: 100%;

        .row {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;
        }

        .rules__text {
            color: var(--primary-color);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

.footer {
    border-top: 1px solid #EBEBF0;
}

@media (max-width: 992px) {
    .main {
        padding: 50px 0;
    }
}


</style>
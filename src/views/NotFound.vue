<template>
    <Nav :transparentNav="false"/>

    <main class="main">
        <div class="container">
            <div class="row">
                <h3 class="error-num">{{ data.notFound.num }}</h3>
                <p class="error-title">{{ data.notFound.title }}</p>
                <p class="error-text">{{ data.notFound.text }}</p>

                <router-link to="/" class="back-link blue-link">вернуться на главную</router-link>
            </div>
        </div>
    </main>

    <Footer :borderTop="true"/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import data from '@/assets/json/data.json';
import FooterVue from '@/components/Footer.vue';

export default {
    name: "Not Found",
    components: {
        Nav: NavVue,
        Footer: FooterVue
    },
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    padding: 150px 0;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 20px;
        justify-content: center;
    }

    .error-num {
        color: var(--main-blue-color);
        font-size: calc(200px + 100 * (100vw / 1920));
        font-weight: 600;
    }

    .error-title {
        font-size: calc(20px + 8 * (100vw / 1920));

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .error-text {
        max-width: 480px;
        width: 100%;

        &::first-letter {
            text-transform: uppercase;
        }
    }
}

.footer {
    border-top: 1px solid #EBEBF0;
}

@media (min-width: 1920px){
    .error-num {
        font-size: 300px !important;
    }
}

@media (max-width: 320px){
    .error-num {
        font-size: calc(200px + (100 + 100 * 0.7) * ((100vw - 320px)/ 1920));
    }

    .error-title {
        font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920));
    }
}
</style>
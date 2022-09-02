<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

    <Header pageName="marks" :pagesInfo="headerObj" :title="headerObj.page2Name"/>

    <main class="main">
        <section class="marks__cards-section">
            <div class="container">
                <div class="row">
                    <MarksCards/>
                </div>
            </div>
        </section>

        <OfferSection/>

    </main>

    <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import FooterVue from '@/components/Footer.vue'
import OfferSectionVue from '@/components/Sections/Offer-Section.vue'
import data from '@/assets/json/data.json';
import HeaderVue from '@/components/Header.vue';
import MarksCardsVue from '@/components/Cards/Marks-Cards.vue';

export default {
    name: "Marks",
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        MarksCards: MarksCardsVue,
        Footer: FooterVue,
        OfferSection: OfferSectionVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 1,
                page2Name: data.marks.header.title
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
    padding: 100px 0 0;

    .marks__cards-section {
        width: 100%;
    }
}
</style>
<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

    <Header pageName="marks" :pagesInfo="headerObj" 
    :title="headerObj.page3Name" :showImg="true"/>

    <main class="main">
        <MarksMission/>
        
        <AboutCards :darkerTheme="true"/>

        <MarksCatalog/>

        <CenterSlider/>

        <WorkSteps/>

        <PartnerSection/>

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
import WorkStepsVue from '@/components/Cards/Work-Steps.vue';
import PartnerSectionVue from '@/components/Sections/Partner-Section.vue';
import AboutCardsVue from '@/components/Cards/About-Cards.vue';
import MarksMissionVue from '@/components/Marks/Marks-Product-Mission.vue';
import CenterSliderVue from '@/components/Slider/Center-Slider.vue';
import MarksCatalogSectionVue from '@/components/Marks/Marks-Catalog-Section.vue';

export default {
    name: "Marks",
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        WorkSteps: WorkStepsVue,
        PartnerSection: PartnerSectionVue,
        AboutCards: AboutCardsVue,
        MarksMission: MarksMissionVue,
        MarksCatalog: MarksCatalogSectionVue,
        CenterSlider: CenterSliderVue,
        Footer: FooterVue,
        OfferSection: OfferSectionVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 2,
                page2Name: data.marks.header.title,
                page3Name: data.marksProduct.header.title
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
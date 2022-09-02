<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

    <Header pageName="marks" :pagesInfo="headerObj" 
    :title="headerObj.page3Name" :showImg="true"/>

    <main class="main">
        <ContractProductMission/>
        
        <AboutCards :darkerTheme="true"/>

        <ContractProductProduction/>

        <ContractProductHimlist/>

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
import ContractProductMissionVue from '@/components/Contract/Contract-Product-Mission.vue';
import CenterSliderVue from '@/components/Slider/Center-Slider.vue';
import ContractProductProductionVue from '@/components/Contract/Contract-Product-Production.vue';
import ContractProductHimlistVue from '@/components/Contract/Contract-Product-Himlist.vue';

export default {
    name: "Marks",
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        WorkSteps: WorkStepsVue,
        PartnerSection: PartnerSectionVue,
        ContractProductMission: ContractProductMissionVue,
        ContractProductProduction: ContractProductProductionVue,
        ContractProductHimlist: ContractProductHimlistVue,
        AboutCards: AboutCardsVue,
        CenterSlider: CenterSliderVue,
        Footer: FooterVue,
        OfferSection: OfferSectionVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 2,
                page2Name: data.contract.header.title,
                page3Name: data.contractProduct.header.content.title
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
<template>
  <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

  <Header pageName="about" 
  :title="data.about.header.title"
   :pagesInfo="headerObj"/>

  <main class="main">
    <Production/>

    <AboutCards :darkerTheme="true"/>

    <MissionSection/>

    <CenterSlider/>

    <PartnerSection/>

    <OfferSection/>

  </main>

  <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import ProductionVue from '@/components/About/About-Production.vue'
import AboutCardsVue from '@/components/Cards/About-Cards.vue'
import MissionSectionVue from '@/components/Home/Home-Mission.vue'
import PartnerSectionVue from '@/components/Sections/Partner-Section.vue'
import OfferSectionVue from '@/components/Sections/Offer-Section.vue'
import FooterVue from '@/components/Footer.vue'
import HeaderVue from '@/components/Header.vue'
import data from '@/assets/json/data.json';
import CenterSliderVue from '@/components/Slider/Center-Slider.vue'

export default {
  name: "About",
  components: {
    Nav: NavVue,
    Header: HeaderVue,
    Production: ProductionVue,
    AboutCards: AboutCardsVue,
    MissionSection: MissionSectionVue,
    PartnerSection: PartnerSectionVue,
    OfferSection: OfferSectionVue,
    CenterSlider: CenterSliderVue,
    Footer: FooterVue
  },
  data() {
    return {
      data,
      headerObj: {
        count: 1, 
        page2Name: data.about.header.title
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
  padding-top: 100px;

  .about__cards-slide-text {
    color: unset;
  }
}
</style>
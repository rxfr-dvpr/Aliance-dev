<template>
  <Nav :transparentNav="mainNotVisited"/>

  <header class="header">
    <div class="container">
      <div class="row">

        <div class="header__content">
          <h1 class="header__content-title">{{ data.home.header.content.title }}</h1>

          <p class="header__content-text">{{ data.home.header.content.text }}</p>

          <router-link to="/about" class="header__content-link blue-link">
            {{ data.home.header.content.linkText }}
          </router-link>
        </div>
        
      </div>
    </div>

    <CardsCarousel/>


    <img src="../assets/images/home/header/header-bg.png" alt="" class="header__bg-img">
    <span class="header__bg-filter"></span>
  </header>

  <main class="main">
    <WorkSteps/>

    <section class="contract__section">
      <div class="container">
        <div class="row">
          <h2 class="contract__title">{{ data.home.main.contract.title }}</h2>

          <ContractCards/>
        </div>
      </div>
    </section>

    <section class="marks__section">
      <div class="container">
        <div class="row">

          <h2 class="marks__title">{{ data.home.main.marks.title }}</h2>

          <MarksCards/>
        </div>
      </div>
    </section>

    <MissionSection/>
    
    <PartnerSection/>

    <BlogSection/>

    <OfferSection/>

  </main>
  
  <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import data from '@/assets/json/data.json';
import AboutCardsVue from '@/components/Cards/About-Cards.vue';
import WorkStepsVue from '@/components/Cards/Work-Steps.vue';
import ContractCardsVue from '@/components/Cards/Contract-Cards.vue';
import MarksCardsVue from '@/components/Cards/Marks-Cards.vue';
import MissionSectionVue from '@/components/Home/Home-Mission.vue';
import PartnerSectionVue from '@/components/Sections/Partner-Section.vue';
import BlogSectionVue from '@/components/Slider/Blog-Slider-Section.vue';
import OfferSectionVue from '@/components/Sections/Offer-Section.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  name: "Home",
  components: {
    Nav: NavVue,
    CardsCarousel: AboutCardsVue,
    WorkSteps: WorkStepsVue,
    ContractCards: ContractCardsVue,
    MarksCards: MarksCardsVue,
    MissionSection: MissionSectionVue, 
    PartnerSection: PartnerSectionVue, 
    BlogSection: BlogSectionVue, 
    OfferSection: OfferSectionVue,
    Footer: FooterVue 
  },
  data() {
    return {
      data,
      mainNotVisited: true
    }
  },
  mounted() {
    
    this.mainNotVisited = window.scrollY ? false : true

    window.addEventListener('scroll', () => {
      this.mainNotVisited = window.scrollY ? false : true
    })
  }
}

</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  position: relative;
  height: max-content;
  padding-top: 245px;

  .row {
    row-gap: 100px;

  }

  &__bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: cover;
  }

  &__bg-filter {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(41, 45, 51, 0.6);
    z-index: -1;
  }

  &__content {
    max-width: 1080px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
    margin-bottom: 100px;

    &-title {
      color: var(--main-white-color);
    }

    &-text {
      max-width: 720px;
      width: 100%;
      color: var(--main-white-color);
      line-height: 160%;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 150px;  
  padding: 150px 0 0;

  .contract__section {
    width: 100%;

    .row {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 50px;
    }
  }

  .marks__section {
    width: 100%;

    .row {
      row-gap: 50px;
    }
  }

}

@media (max-width: 1440px){}
@media (max-width: 1320px){}
@media (max-width: 1290px){}
@media (max-width: 1170px){}
@media (max-width: 1140px){}
@media (max-width: 1024px){}
@media (max-width: 992px){
  .header {
    padding-top: 150px;
  }
}
@media (max-width: 850px){}
@media (max-width: 768px){
  .main {
    row-gap: 100px;
  }
}
@media (max-width: 734px){}
@media (max-width: 684px){}
@media (max-width: 667px){}
@media (max-width: 576px){}
@media (max-width: 480px){}
@media (max-width: 414px){}
@media (max-width: 412px){}
@media (max-width: 375px){}
@media (max-width: 360px){}
@media (max-width: 320px){}

</style>

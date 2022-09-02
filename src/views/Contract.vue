<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

    <Header pageName="contract" :pagesInfo="headerObj" :title="headerObj.page2Name"/>

    <main class="main">

        <section class="contract__cards-section">
            <div class="container">
                <div class="row">

                    <ContractCards/>

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
import HeaderVue from '@/components/Header.vue'
import data from '@/assets/json/data.json';
import ContractCardsVue from '@/components/Cards/Contract-Cards.vue'

export default {
    name: "Contract",
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        Footer: FooterVue,
        OfferSection: OfferSectionVue,
        ContractCards: ContractCardsVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 1,
                page2Name: data.contract.header.title
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

    .contract__cards-section {
        width: 100%;
    }
}
</style>
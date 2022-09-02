<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>
    
    <Header pageName="contact" :title="headerObj.page2Name" :pagesInfo="headerObj"/>

    <main class="main">
        <section class="address__map-section">
            <div class="container">
                <div class="row">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1890.1112196717138!2d37.62151996211857!3d55.71100032834314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661615095613!5m2!1sru!2s" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="address-map"></iframe>

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

export default {
    name: 'Contact',
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        Footer: FooterVue,
        OfferSection: OfferSectionVue
    },
    data() {
        return {
            data,
            headerObj: {
                count: 1,
                page2Name: data.contact.header.title
            }
        }
    },
    mounted() {
        setTimeout(() => {
            console.clear()        
        }, 2000);
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

    .address__map-section {
        width: 100%;
    }
}

@media (max-width: 992px) {
    .address-map {
        height: 450px;
    }
}

@media (max-width: 668px) {
    .main {
        padding: 60px 0;
    }

    .address-map {
        height: 350px;
    }
}
</style>
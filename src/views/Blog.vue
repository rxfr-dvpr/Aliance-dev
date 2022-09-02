<template>
    <Nav :transparentNav="false" :activePage="headerObj.page2Name"/>

    <Header pageName="blog" :pagesInfo="headerObj" :title="headerObj.page2Name"/>

    <main class="main">

        <section class="blog__cards-section">
            <div class="container">
                <div class="row">

                    <div class="blog__card-content" v-for="(content, idx) in blogCards" :key="idx" v-show="content.showen">
                        <router-link to="/blog/more" class="blog__card" v-for="(card, id) in content.cards" :key="id">
                            <img :src="require(`@/assets/${card.image}`)" alt="" class="blog__card-img">

                            <div class="blog__card-desc">
                                <p class="blog__card-title">{{ card.title }}</p>
                                <p class="blog__card-text">{{ card.text }}</p>
                            </div>
                        </router-link>
                    </div>

                    <div class="pagination__btns">
                        <button class="pagination-btn" v-for="(btn, idx) in blogCards" :key="idx" :class="btn.showen ? 'active' : ''" @click="show(idx)">
                            {{idx + 1}}
                        </button>
                    </div>

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
    name: "Blog",
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
                page2Name: data.blog.header.title
            },
            blogCards: data.blog.main.blogCardsSection
        }
    },
    methods: {
        show(id) {
            this.blogCards.forEach(card => {
                card.showen = false
            });

            this.blogCards[id].showen = true
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

    .blog__cards-section {
        width: 100%;

        .row {
            gap: 30px;
        }

        .blog__card-content {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 30px;
            row-gap: 10px;
        }

        .blog__card {
            max-width: 705px;
            width: 100%;
            max-height: 400px;
            height: max-content;
            position: relative;

            &-img {
                width: 100%;
                object-fit: cover;
            }

            &-desc {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(41, 45, 51, 0.6);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: end;
                padding: 50px;
                row-gap: 10px;
            }

            &-title {
                font-size: calc(20px + 8 * (100vw / 1920));
                color: var(--main-white-color);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                text-transform: capitalize;
            }

            &-text {
                color: var(--main-white-color);

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        .pagination__btns {
            display: flex;
            column-gap: 10px;
            margin-left: auto;

            button {
                min-width: 50px;
                max-width: 50px;
                width: 100%;
                min-height: 50px;
                max-height: 50px;
                height: 100%;
                cursor: pointer;
                border: solid 2px transparent;
                background: transparent;
                font-size: 17px;
                font-weight: 600;
                outline: none;
                transition: .4s;

                &:hover {
                    color: var(--main-white-color);
                    background: var(--main-blue-color);
                    border-color: var(--main-blue-color);
                }

                &.active {
                    color: var(--main-blue-color);
                    border-color: var(--main-blue-color);

                    &:hover {
                        color: var(--main-white-color);
                    }
                }
            }
        }
    }
}

@media (min-width: 1920px){
    .blog__card-title {
        font-size: 28px !important;
    }
}

@media (max-width: 1320px) {
    .blog__card-desc {
        padding: 30px !important;
    }
}

@media (max-width: 1024px) {
    .main {
        padding: 70px 0;
    }

    .blog__card-desc {
        padding: 20px !important;

        .blog__card-text {
            display: none;
        }
    }
}

@media (max-width: 875px) {
    .blog__card-content {
        grid-template-columns: repeat(1, 1fr) !important;
        justify-items: center;

        .blog__card {
            max-width: 600px !important;
        }
    }
}

@media (max-width: 320px) {
    .blog__card-title {
        font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920)) !important;
    }
}
</style>
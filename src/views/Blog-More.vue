<template>
    <Nav activePage="Блог" :transparentNav="false"/>

    <Header pageName="blog" :pagesInfo="headerObj" :title="headerObj.page3Name" 
    :headerBgImg="headerBgImgUrl"/>

    <main class="main">

        <section class="blog__about-section">
            <div class="container">
                <div class="row">

                    <div class="share__fixed-sidebar">
                        <div class="share__content">
                            <p class="share__content-title">{{ data.blogMore.main.about.shareLinks.title }}:</p>

                            <div class="share-links">
                                <a :href="link.url" class="share-link" v-for="(link, idx) in data.blogMore.main.about.shareLinks.links" :key="idx" v-html="link.icon" target="_blank">
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="share__info-content">

                        <div class="share__info-desc" v-for="(info, idx) in data.blogMore.main.about.content.info" :key="idx">
                            <h3 class="share__desc-title">{{ info.title }}</h3>

                            <p class="share__desc-text" v-for="(infoText, id) in info.texts" :key="id">
                                {{ infoText.text }}
                            </p>
                        </div>

                        <img :src="require(`@/assets/${shareImg}`)" alt="" class="share__info-img">

                        <div class="share__consult-desc">
                            <p class="share__consult-title">{{ consultTitle }}</p>

                            <ul class="share__consult-list">
                                <li class="share__consult-list-item"
                                v-for="(item, idx) in consultList" :key="idx">
                                    {{ item.text }}
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <BlogSliderSection/>
        
        <OfferSection/>

    </main>

    <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import OfferSectionVue from '@/components/Sections/Offer-Section.vue'
import FooterVue from '@/components/Footer.vue'
import BlogSliderSectionVue from '@/components/Slider/Blog-Slider-Section.vue'
import data from '@/assets/json/data.json';
import HeaderVue from '@/components/Header.vue'

export default {
    name: "Blog More",
    components: {
        Nav: NavVue,
        Header: HeaderVue,
        OfferSection: OfferSectionVue,
        Footer: FooterVue,
        BlogSliderSection: BlogSliderSectionVue
    },
    data() {
        return {
            data,
            shareImg: data.blogMore.main.about.content.image,
            consultTitle: data.blogMore.main.about.content.consultInfo.title,
            consultList: data.blogMore.main.about.content.consultInfo.list,
            headerObj: {
                count: 2,
                page2Name: data.blog.header.title,
                page3Name: data.blogMore.header.title
            },
            headerBgImgUrl: 'images/blogMore/header/header-img.png'
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
    padding: 100px 0;
    row-gap: 100px;

    .blog__about-section {
        width: 100%;

        .row {
            justify-content: space-between;
            gap: 30px;
            flex-wrap: unset;
        }

        .share__fixed-sidebar {
            max-width: 230px;
            width: 100%;
            position: relative;

            .share__content {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 20px;
                position: sticky;
                top: 15%;
                left: 0;
                height: max-content;
                transition: .4s;

                .share-links {
                    max-width: max-content;
                    display: flex;
                    gap: 10px;

                    .share-link {
                        min-width: 50px;
                        max-width: 50px;
                        width: 100%;
                        min-height: 50px;
                        max-height: 50px;
                        height: 100%;
                        color: var(--main-blue-color);
                        border: solid 2px rgba(235, 235, 240, 1);
                        font-size: 20px;
                        display: grid;
                        place-items: center;
                        transition: .4s;
                        background: var(--main-white-color);

                        &:hover {
                            border-color: var(--main-blue-color);
                        }
                    }
                }

                &-title {
                    font-size: 16px;
                    color: var(--text-color);
                    font-weight: 600;
                    text-transform: capitalize;
                }
            }
        }

        .share__info-content {
            max-width: 960px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 50px;

            .share__info-desc {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 20px;

                .share__desc-title {
                    font-size: calc(30px + 6 * (100vw / 1920));
                    
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                .share__desc-text {

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }

            .share__info-img {
                max-width: 960px;
                width: 100%;
                object-fit: cover;
            }

            .share__consult-desc {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 20px;

                .share__consult-title {
                    font-size: 20px;
                    
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                .share__consult-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    row-gap: 10px;

                    &-item {
                        font-size: calc(14px + 2 * (100vw / 1920));
                        display: flex;
                        column-gap: 15px;
                        align-items: center;

                        &::first-letter {
                            text-transform: uppercase;
                        }

                        &::before {
                            content: '';
                            max-width: 20px;
                            min-width: 20px;
                            width: 100%;
                            height: 2px;
                            background: var(--main-blue-color);
                        }
                    }
                }

            }
        }
    }
}

@media (max-width: 684px){
    .blog__about-section {
        .row {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
}

@media (max-width: 320px){
    .share__desc-title {
        font-size: calc(30px + (6 + 6 * 0.7) * ((100vw - 320px)/ 1920));
    }

    .share__consult-list-item {
        font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
    }
}
</style>
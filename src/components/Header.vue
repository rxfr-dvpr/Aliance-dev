<template>
    <header class="header" :class="[`${pageName}__header`, {'no-img': !this.showImg}, {'bg-img-has': headerBgImg}]">
        <div class="container">
            <div class="row">

                <div class="header__desc" :class="`${pageName}__header-content-desc`">

                    <h1 class="header__desc-title" :class="`${pageName}__header-title`">
                        {{ title }}
                    </h1>

                    <p class="header__desc-pages">
                        <router-link to="/">главная</router-link>
                        <span>&mdash;</span>
                        <span class="last-active"
                        v-html="pagesInfo.count == 1 ? pagesInfo.page2Name 
                            : pagesInfo.count == 2 ? 
                            `${pagesInfo.page2Name}  <span>&mdash;</span>  <span>${pagesInfo.page3Name}</span>`
                            : pagesInfo.page2Name">
                        </span>
                    </p>
                </div>

                <img :src="headerImg" alt="" class="header__img" v-show="showImg">
            </div>
        </div>

        <img :src="headerBgImg ? require(`@/assets/${headerBgImg}`) : ''" alt="" v-show="headerBgImg" class="header__bg-img">
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            headerImg: require('@/assets/images/product/header/header-content-img.png')
        }
    },
    props: {
        pageName: {
            type: String,
            default: "section",
            required: true
        },
        title: {
            type: String,
            default: 'title'
        },
        pagesInfo: {
            type: Object,
            default: {
                count: 1,
                page2Name: 'page',
                page3Name: 'page'
            }
        },
        showImg: {
            type: Boolean,
            default: false
        },
        headerBgImg: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    padding: 155px 0 0;
    background: #F0F2F5;
    position: relative;

    .row {
        align-items: center;
        justify-content: space-between;
    }

    .header__desc {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
        z-index: 5;

        &-pages {
            display: flex;
            align-items: center;
            color: var(--text-color);
            text-transform: capitalize;
            gap: 10px;
            padding-bottom: 10px;
            font-size: calc(12px + 3 * (100vw / 1920));
            font-weight: 500;
            flex-wrap: wrap;
            
            & > .last-active {
                color: var(--primary-color);
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }

            a {
                color: var(--text-color);
            }
        }
    }

    .header__img {
        max-width: 480px;
        width: 100%;
        object-fit: cover;
    }

    &.no-img {
        padding-bottom: 50px;
    }

    .header__bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.bg-img-has {
        &::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(41, 45, 51, 0.6);
        }

        .header__desc {

            &-pages {
                color: var(--main-white-color);

                & > .last-active {
                    color: var(--main-white-color);
                }

                a {
                    color: var(--main-white-color);
                }
            }

            &-title {
                color: var(--main-white-color);
            }
        }
    }
}

.policy__header-content-desc {
    word-break: break-all;
}  


@media (max-width: 992px){
    .header {
        padding-bottom: 50px;

        &__img {
            display: none;
        }
    }
    
}

@media (max-width: 320px){
    .header__desc {
        &-pages {
            font-size: calc(12px + (3 + 3 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

</style>
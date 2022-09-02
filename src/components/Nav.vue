<template>
    <nav class="nav" :class="{'bg-white-nav': !transparentNav}">
        <div class="container-fluid">
            <div class="row">

                <button class="nav__mobile-btn" @click="navOpened = !navOpened" 
                :class="{'nav-opened': navOpened}">
                    <span class="nav-btn-line"></span>
                    <span class="nav-btn-line"></span>
                    <span class="nav-btn-line"></span>
                </button>

                <router-link to="/" class="logo"><img :src="transparentNav ? require('@/assets/images/logo-white.svg') : require('@/assets/images/logo.svg')" alt="" class="logo-img"></router-link>
                
                <div class="nav__collapse" :class="[{'mobile-nav': windowSize <= 1440}, {'nav-opened': navOpened}]">
                    <ul class="nav__list">
                        <li class="nav__item" v-for="(link, idx) in data.navLinks" :key="idx"
                        :class="{active: activePage == link.name}">
                            <router-link :to="link.path" class="nav__list-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <a :href="`tel:${data.number}`" class="contact-number"><i class="fas fa-phone-alt"></i> {{ data.number }}</a>
                </div>

                <ConsultBtn/>
            </div>
        </div>
    </nav>
</template>

<script>
import ConsultBtnVue from './ConsultBtn.vue'
import data from '@/assets/json/data.json'

export default {
    name: 'Nav',
    data() {
        return {
            data,
            windowSize: window.innerWidth,
            navOpened: false
        }
    },
    props: {
        transparentNav: {
            type: Boolean,
            default: true
        },
        activePage: {
            type: String,
            default: 'page'
        }
    },
    components: {
        ConsultBtn: ConsultBtnVue
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
        })
    }
}
</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    border-bottom: 1px solid rgba(235, 235, 240, 0.2);;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    max-height: 91px;
    min-height: 91px;
    height: 100%;
    transition: .4s;
    z-index: 2022;

    .logo {
        max-width: 240px;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        border-right: 1px solid rgba(235, 235, 240, 0.2);
        padding: 0 20px;

        img {
            max-width: 140px;
            width: 100%;
            object-fit: cover;
        }
    }

    .row {
        align-items: center;
        column-gap: 30px;
        flex-wrap: unset;
        justify-content: space-between;
    }

    &__collapse {
        max-width: 1235px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    &__list {
        max-width: 850px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: center;

        .nav__item {
            height: max-content;
            padding-bottom: 5px;

            &.active {
                color: var(--main-blue-color) !important; 
                border-bottom: 2px solid var(--main-blue-color);
            }
        }

        &-link {
            color: var(--main-white-color);
            font-size: 16px;
            transition: .4s;
            white-space: nowrap;

            &:hover {
                color: var(--main-blue-color);
            }

            & > a::first-letter {
                text-transform: capitalize;
            }
        }
    }

    .contact-number {
        color: var(--main-white-color);
        font-size: 16px;
        font-weight: 500;
        transition: .4s;
        display: flex;
        align-items: center;
        column-gap: 10px;
        white-space: nowrap;

        &:hover {
            color: var(--main-blue-color);
        }

        & > i {
            color: var(--main-blue-color);
        }
    }

    &.bg-white-nav {
        background: var(--main-white-color);
        border-bottom-color: #EBEBF0;

        .nav__list-link {
            color: var(--primary-color);

            &:hover {
                color: var(--main-blue-color);
            }
        }

        .contact-number {
            color: var(--primary-color);
            font-weight: 600;
        }

        .logo {
            border-right: 1px solid #EBEBF0;
        }

        .nav__mobile-btn {
            border-color: #EBEBF0;

            span {
                background-color: var(--primary-color);
            }
        }
    }

    .nav__mobile-btn {
        display: none;
    }
}

@media (max-width: 1440px){
    .nav {
        max-height: 81px;
        min-height: 81px;

        .row {
            justify-content: space-between;
            gap: 0;
        }   

        &__mobile-btn {
            max-width: 80px;
            min-width: 80px;
            width: 100%;
            height: 100%;
            border: 0;
            border-right: 1px solid rgba(235, 235, 240, 0.2);
            display: flex !important;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            row-gap: 6px;
            background: transparent;
            padding-left: 25px;
            cursor: pointer;

            .nav-btn-line {
                display: block;
                max-width: 30px;
                min-width: 30px;
                width: 100%;
                height: 2px;
                background: var(--main-white-color);
                transition: .4s;
            }

            span {
                &:nth-of-type(2) {
                    max-width: 20px;
                    min-width: 20px;
                }
            }

            &.nav-opened {

                & > span {
                    &:first-of-type {
                        transform: translateY(8px) rotate(45deg);
                    }

                    &:last-of-type {
                        transform: translateY(-8px) rotate(-45deg) ;
                    }

                    &:nth-of-type(2) {
                        opacity: 0;
                    }
                }
            }
        }

        .logo {
            border: 0 !important;
            margin-right: auto;
        }

        .nav__collapse.mobile-nav {
            max-width: max-content;
            position: absolute;
            top: 81px;
            left: 0;
            height: 100vh;
            background: var(--main-white-color);
            flex-direction: column;
            align-items: flex-start;
            justify-content: start;
            padding: 15px 15px;
            overflow-y: auto;
            transition: .4s;
            transform: translatex(-100%);

            .nav__list {
                max-width: max-content;
                flex-direction: column;
                align-items: flex-start;
                overflow-y: auto;
                padding-top: 15px;

                &-link {
                    color: var(--primary-color);

                    &:hover {
                        color: var(--main-blue-color);
                    }
                }
            }

            .contact-number {
                color: var(--primary-color);
                font-weight: 600;
            }

            &.nav-opened {
                transform: translateY(0);
            }
        }
    }
}

@media (max-width: 414px){
    .nav__collapse.mobile-nav {
        max-width: 100% !important;
    }
}

</style>
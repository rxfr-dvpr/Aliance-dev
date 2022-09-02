<template>
    <button class="consult__btn" @click="!name && !number ? showPhoneModal = true : showThanksModal = true" v-html="windowSize <= 1440 ? `<i class='fas fa-phone-alt'></i>`: 'получить консультацию' "></button>

    <Transition name="modal-content">
        <div class="phone__modal-content" v-show="showPhoneModal" @click="hideModalFunc">
            <Transition name="modal">
                <PhoneModal  v-show="showPhoneModal" :userName="name" :userNumber="number" @changeTitle="name = $event" @changeNumber="number = $event" @submitedUser="submitedUser" @closeModal="hideModalFunc"/>
            </Transition>
        </div>
    </Transition>

    <Transition name="modal-content">
        <div class="thanks__modal-content" v-show="showThanksModal">
            <Transition name="modal">
                <ThanksModal  v-show="showThanksModal" @closeThanksModal="showThanksModal = false"/>
            </Transition>
        </div>
    </Transition>

</template>

<script>
import PhoneModalVue from './Modal/Phone-Modal.vue'
import ThanksModalVue from './Modal/Thanks-Modal.vue'

export default {
    name: "Phone Modal",
    data() {
        return {
            showPhoneModal: false,
            showThanksModal: false,
            name: sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '',
            number: sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '',
            windowSize: window.innerWidth
        }
    },
    components: {
        PhoneModal: PhoneModalVue,
        ThanksModal: ThanksModalVue
    },
    methods: {
        hideModalFunc() {
            this.showPhoneModal = false

            setTimeout(() => {
                this.name = ""
                this.number = ""     
            }, 200);
        },
        submitedUser() {
            if (this.name != "" && this.number != "") {
                sessionStorage.setItem('name', this.name)
                sessionStorage.setItem('number', this.number)

                this.showPhoneModal = false

                setTimeout(() => {
                    this.showThanksModal = true                       
                }, 100);
            }
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
        })
    }
}
</script>

<style lang="scss" scoped>
.consult__btn {
    max-width: 300px;
    min-width: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main-blue-color);
    color: var(--main-white-color);
    font-size: 16px;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    transition: .4s;
    padding: 0 30px;

    &:hover {
        background: var(--link-hover-color);
    }
}

@media (max-width: 1440px) {
    .consult__btn {
        max-width: max-content;
        font-size: 20px;
    }
}

.phone__modal-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(41, 45, 51, 0.5);
    padding: 15px 50px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: .5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: .4s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
}


.thanks__modal-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(41, 45, 51, 0.5);
    padding: 15px 50px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 576px){
    .phone__modal-content,
    .thanks__modal-content  {
        padding: 15px;
    }
}

</style>
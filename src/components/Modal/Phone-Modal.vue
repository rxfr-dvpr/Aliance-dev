<template>
    <div class="phone__modal" @click.stop>
        <div class="phone__modal-dashboard">
            <h4 class="phone__modal-title modal-title">{{ data.modals.phoneModal.title }}</h4>

            <button class="hide-modal-btn" @click="$emit('closeModal')">
                <i class="far fa-times"></i>
            </button>
        </div>

        <p class="phone__modal-text">{{ data.modals.phoneModal.text }}</p>

        <form action="" class="phone__modal-form" @submit.prevent="submitUser">
            <input type="text" class="user__name-inp" :value="userName" @input="$emit('changeTitle', $event.target.value)" placeholder="Имя" required maxlength="15">

            <input type="number" class="user__number-inp" :value="userNumber" @input="$emit('changeNumber', $event.target.value)" placeholder="+_ (___) __-__-___" required>

            <button class="submit__btn">отправить заявку</button>
        </form>

        <p class="rule-text"><span><i class="fas fa-shield-check"></i></span> {{ data.modals.phoneModal.rule }}</p>
    </div>
</template>

<script>
import data from '/src/assets/json/data.json'

export default {
    name: "Phone Modal",
    data() {
        return {
            data,
        }
    },
    props: {
        userName: {
            type: String,
            default: ""
        },
        userNumber: {
            type: String,
            default: ""
        }
    },
    methods: {
        submitUser() {
            if (this.userName != "" && this.userNumber != "") {
                this.$emit('submitedUser')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.phone__modal {
    max-width: 460px;
    width: 100%;
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    background: var(--main-white-color);

    &-dashboard {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hide-modal-btn {
            min-width: 40px;
            max-width: 40px;
            min-height: 40px;
            max-height: 40px;
            width: 100%;
            height: 100%;
            background: var(--main-white-color);
            border: 1px solid #EBEBF0;
            font-size: 22px;
            color: #828A99;
            cursor: pointer;
        }
    }

    &-text {
        font-size: 14px;
        color: var(--text-color);

        &::first-letter {
            text-transform: capitalize;
        }
    }

    .submit__btn {
        max-width: 400px;
        min-width: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--main-blue-color);
        color: var(--main-white-color);
        font-size: calc(14px + 2 * (100vw / 1920));
        padding: 20px;
        text-transform: capitalize;
        border: none;
        cursor: pointer;    
    }

    &-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;

        input {
            width: 100%;
            background: var(--main-white-color);
            border: 2px solid #E4E4EB;
            padding: 15px 25px;
            outline: none;
            font-size: calc(14px + 2 * (100vw / 1920));

            &::placeholder {
                color: var(--text-color);
                font-size: calc(14px + 2 * (100vw / 1920));
            }
        }
    }

    .rule-text {
        font-size: calc(12px + 2 * (100vw / 1920));
        color: var(--text-color);
        display: flex;
        column-gap: 10px;

        &::first-letter {
            text-transform: capitalize;
        }
    }

}

@media (max-width: 576px){
    .phone__modal {
        padding: 30px;
    }
}

@media (max-width: 320px){
    .phone__modal {

        .rule-text {
            font-size: calc(12px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
        }

        &-form {

            input {
                font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));

                &::placeholder {
                    font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
                }
            }

            .submit__btn {
                font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
            }
        }
    }
}

</style>
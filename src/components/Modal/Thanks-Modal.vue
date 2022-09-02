<template>
    <div class="thanks__modal">
        <img src="@/assets/images/modal/thanksModal/thanks-illu.svg" alt="" class="thanks__modal-img">

        <h4 class="thanks__modal-title modal-title">{{ data.modals.thanksModal.title }}</h4>

        <p class="thanks__modal-text">{{ data.modals.thanksModal.text }}</p>

        <button class="close__modal-btn" @click="$emit('closeThanksModal')">вернуться на главную</button>
    </div>
</template>

<script>
import data from '/src/assets/json/data.json'

export default {
    name: "Thanks Modal",
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
.thanks__modal {
    max-width: 460px;
    width: 100%;
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    background: var(--main-white-color);

    &-img {
        width: 100%;
        object-fit: cover;
    }

    &-text {
        font-size: 14px;
        color: var(--text-color);

        &::first-letter {
            text-transform: capitalize;
        }
    }

    .close__modal-btn {
        max-width: 400px;
        min-width: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--main-blue-color);
        color: var(--main-white-color);
        font-size: 16px;
        padding: 20px;
        text-transform: capitalize;
        border: none;
        cursor: pointer; 
    }
}

@media (max-width: 576px){
    .thanks__modal {
        padding: 30px;
    }
}

@media (max-width: 320px){
    .thanks__modal {

        .close__modal-btn {
            font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

</style>
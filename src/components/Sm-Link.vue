<template>
    <router-link :to="path" class="sm-link">{{ name }}</router-link>
</template>

<script>
export default {
    name: "Small Link",
    props: {
        name: {
            type: String,
            defult: "ссылка"
        },
        path: {
            type: String,
            defult: "/"
        }
    }
}
</script>

<style lang="scss" scoped>
.sm-link {
    max-width: max-content;
    width: 100%;
    font-size: calc(14px + 2 * (100vw / 1920));
    color: var(--main-blue-color);
    column-gap: 20px;
    margin-top: auto;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-weight: 600;
    text-transform: capitalize;
    
    &::first-letter {
        text-transform: uppercase;
    }

    &::before {
        content: '';
        width: 40px;
        height: 2px;
        background: var(--main-blue-color);
        transition: .4s;
    }

    &:hover::before {
        width: 60px;
    }
}

@media (max-width: 320px){
    .sm-link {
        font-size: calc(14px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
    }
}

</style>
<template>
    <div class="outter">
        <div class="pic animate__animated animate__fadeInUp">
            <img :src="head" />
        </div>
        <div
            class="command animate__animated animate__fadeIn"
            style="animation-delay: 0.5s"
        >
            <div class="name" v-text="name"></div>
            <div class="command-detail">
                <p v-for="item in details" :key="item.id" v-text="item"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        head: String,
        name: String,
        details: Array,
    },
};
</script>

<style lang='scss' scoped>
.outter {
    font-size: 14px;
    text-align: left;
    width: 100%;
    min-height: 280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-indent: 2em;
    > .pic {
        height: 200px;
        > img {
            display: block;
            max-height: 100%;
            width: auto;
        }
    }
    > .command {
        white-space: pre-wrap;
        padding: 15px;
        min-width: calc(100% - 200px);
        > .name {
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: 600;
        }
        > p {
            max-width: 100%;
        }
    }
}
</style>
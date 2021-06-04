<template>
    <div class="outter animate__animated animate__slideInLeft">
        <div class="title" v-text="title"></div>
        <div class="label">
            <div
                v-for="(item, index) of labels"
                :key="item"
                v-text="item"
                :style="`background-color: ${color[index % 4]};`"
            ></div>
        </div>
        <div class="authors" v-text="authors"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: ["#FFB800", "#009688", "#2F4056", "#FF5722"],
        };
    },
    props: {
        title: String,
        labels: Array,
        authors: String,
    },
};
</script>

<style lang="scss" scoped>
.outter {
    --animate-duration: 1200ms;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100px;
    margin-bottom: 20px;
    border-bottom: 1px solid #000;
    > .title {
        font-size: 20px;
        color: #333333;
    }
    > .label {
        display: flex;
        justify-content: flex-start;
        color: #fff;
        font-size: 14px;
        background-clip: padding-box;
        > div {
            padding: 4px;
            border-radius: 2px;
        }
        > div:not(:last-child) {
            margin-right: 18px;
            position: relative;
            &::after {
                content: "";
                height: 1em;
                width: 1px;
                background-color: #666666;
                position: absolute;
                right: -9px;
            }
        }
    }
    > .authors {
        font-size: 16px;
        color: #666666;
    }
}
</style>
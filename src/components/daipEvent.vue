<template>
    <div class="outter">
        <div class="time">
            <div v-text="year"></div>
            <div v-text="month"></div>
        </div>
        <div class="content">
            <div class="title" v-text="title"></div>
            <div class="pic"><img :src="imgsrc" /></div>
            <div class="text">
                <p v-text="text"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        year: String,
        month: String,
        title: String,
        imgsrc: String,
        text: String,
    },
};
</script>

<style lang='scss' scoped>
.outter {
    display: flex;
    height: 250px;
    > .time {
        flex: 1;
        position: relative;
        > div:first-child {
            // 年
            font-size: 20px;
            font-weight: 600;
            padding: 10px;
        }
        > div:last-child {
            // 月
            font-size: 14px;
        }
        &::after {
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: #2c3e50;
            right: 10px;
            top: 0;
        }
    }
    .content {
        flex: 5;
        position: relative;
        > .title {
            text-align: left;
            font-size: 20px;
            position: absolute;
            top: 0;
            left: 40px;
        }
        > .pic {
            height: 170px;
            position: absolute;
            bottom: 40px;
            left: 40px;
            > img {
                display: block;
                max-height: 100%;
                width: auto;
            }
        }
        > .text {
            width: 30em;
            position: absolute;
            right: 240px;
            top: 40px;
            > p {
                text-indent: 2em;
                text-align: left;
                line-height: 1.5em;
            }
        }
    }
}
</style>
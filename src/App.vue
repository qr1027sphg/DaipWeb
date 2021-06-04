<template>
    <div id="app">
        <header>
            <daip-header :countVisitor="count"></daip-header>
        </header>
        <article>
            <router-view />
        </article>
        <footer>
            <!-- <div
                style="
                    width: 300px;
                    margin: 0 auto;
                    padding: 10px 0;
                    height: 100%;
                "
            >
                <div
                style="
                    width: 300px;
                    margin: 0 auto;
                    padding: 10px 0;
                    height: 100%;
                "
            >
                <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50023102500512"
                    style="
                        display: inline-block;
                        text-decoration: none;
                        height: 20px;
                        line-height: 20px;
                    "
                    ><img src="./assets/beian.png" style="float: left" />
                    <p
                        style="
                            float: left;
                            height: 20px;
                            line-height: 20px;
                            margin: 0px 0px 0px 5px;
                            color: #939393;
                        "
                    >
                        xxx
                    </p></a
                >
            </div>

            <div>网站备案号：渝ICP备20003884号-2</div> -->
        </footer>
    </div>
</template>

<script>
import DaipHeader from "@/components/daipHeader.vue";

export default {
    components: {
        "daip-header": DaipHeader,
    },
    data() {
        return {
            count: null,
        };
    },
    mounted() {
        this.$axios({
            url: "/data/count/viewcount",
            method: "get",
        }).then(
            (res) => {
                console.log("访问量", res.data.count);
                this.count = res.data.count;
            },
            (err) => {
                console.log(err);
            }
        );
    },
};
</script>

<style>
html,
body {
    font-size: 16px;
    margin: 0;
    min-width: 1280px;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    -moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
article {
    margin-top: 180px;
    max-width: 1260px;
    margin: 180px auto 0;
}
</style>

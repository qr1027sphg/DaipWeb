<template>
    <div class="outter animate__animated animate__fadeInDown">
        <h4>Data description</h4>
        <p>
            GPLA-12 is a new acoustic leakage dataset of gas pipelines involving
            12 categories over 684 training/testing acoustic signals. We collect
            acoustic leakage signals on the basis of an intact gas pipe system
            with external artificial leakages, and then preprocess the collected
            data with structured tailoring which are turned into GPLA-12.
            GPLA-12 dedicates to serve as a feature learning dataset for
            time-series tasks and classifications.
        </p>
        <div>
            <div>
                <p style="text-align: right">data_v1  <a
                        href="https://github.com/Deep-AI-Application-DAIP/new-acoustic-leakage-dataset-GPLA-12/tree/main/data/data_v1"
                        target="_blank"
                        @click="onClick">Download</a></p>
                <p style="text-align: right">data_v2 <a
                        href="https://github.com/Deep-AI-Application-DAIP/new-acoustic-leakage-dataset-GPLA-12/tree/main/data/data_v2"
                        target="_blank"
                        @click="onClick">Download</a></p>
                <p style="text-align: right;margin-right: 15px">当前下载量：{{ downloadCount }}</p>
            </div>
        </div>
        <div>
            <h4 style="text-align: left">Citation information:</h4>
            <p
                style="
                    text-indent: 0;
                    font-weight: 600;
                    line-height: 1.8em;
                    padding-left: 2rem;
                "
            >
                @article{jie2021li3694650,<br />
                title={GPLA-12: An Acoustic Signal Dataset of Gas Pipeline
                Leakage},<br />
                author={Jie Li, Lizhong Yao},<br />
                journal={arXiv},<br />
                pages={arXiv—3694650},<br />
                year={2021}<br />
                }
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            downloadCount: null,
        };
    },
    methods: {
        onClick() {
            this.$axios({
                url: "/data/count/downloadcount",
                method: "get",
            }).then(
                (res) => {
                    console.log("下载", res);
                    this.downloadCount = res.data.count;
                },
                (err) => {
                    console.log(err);
                }
            );
        },
    },
    mounted() {
        this.$axios({
            url: "/data/count/getdown",
            method: "get",
        }).then(
            (res) => {
                console.log("下载", res);
                this.downloadCount = res.data.count;
            },
            (err) => {
                console.log(err);
            }
        );
    },
};
</script>

<style lang="scss" scoped>
.outter {
    width: 900px;
    height: 450px;
    margin: auto;
    > h3,
    p {
        text-align: left;
        text-indent: 2em;
        letter-spacing: 1px;
    }
    a {
        text-decoration: none;
        color: currentColor;
        margin-right: 1em;
    }
    /*正常的未被访问过的链接*/
    a:link {
        text-decoration: none;
    }
    /*已经访问过的链接*/
    a:visited {
        text-decoration: none;
    }
    /*鼠标划过(停留)的链接*/
    a:hover {
        text-decoration: underline;
    }
    /* 正在点击的链接*/
    a:active {
        text-decoration: none;
    }
}
</style>
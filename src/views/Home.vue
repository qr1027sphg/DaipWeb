<template>
    <div>
        <daip-swiper class="animate__animated animate__fadeIn"></daip-swiper>
        <div class="com" ref="com">
            <h3>团队介绍</h3>
            <p>
                DAIP是一个开放的团队，由一群对科学研究有激情、兴趣和志向的人组成。
            </p>
            <p>
                我们自由地聚集在一起，基于相似的愿景而合作。在利节博士的带领下，DAIP团队致力于人工智能在机器视觉、语音识别、故障诊断等领域的理论研究和工程应用研发。
            </p>
            <p>欢迎加入我们的大家庭，在这里实现你的科研梦想。</p>
        </div>
        <div class="paper" ref="paper">
            <div></div>
            <div>
                <h3>发表论文</h3>
                <p>精益求精</p>
                <p>Daip团队发表各类论文</p>
                <p>以科研带动实际项目落地</p>
            </div>
        </div>
        <div class="team" ref="team">
            <div>
                <h3>团队介绍</h3>
                <p>我们自由地聚集在一起</p>
                <p>基于相似的愿景而合作</p>
                <p>在这里实现我们的梦想</p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import swiper from "@/components/daipSwiper.vue";

export default {
    components: {
        "daip-swiper": swiper,
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        let io = new IntersectionObserver(
            (entries) => {
                entries.forEach((current) => {
                    if (current.isIntersecting) {
                        current.target.style.opacity = "1";
                        io.unobserve(current.target);
                    }
                });
            },
            { threshold: [0.3] }
        );
        io.observe(this.$refs.com);
        io.observe(this.$refs.paper);
        io.observe(this.$refs.team);
        this.io = io;
    },
    destroyed() {
        this.io.disconnect();
    },
};
</script>

<style lang="scss" scoped>
h3 {
    width: 5em;
    padding: 1em 0;
    position: relative;
    margin: 0 auto 1em;
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        right: 0;
        margin: auto;
        background-color: #2c3e50;
        bottom: -0.3em;
    }
}
.com {
    transition: opacity 0.8s linear;
    padding: 1em 0;
    opacity: 0;
    > p {
        text-indent: 2em;
        margin: 0;
        line-height: 2;
    }
}
.paper {
    transition: opacity 0.8s ease-in-out;
    width: 100%;
    height: 550px;
    opacity: 0;
    display: flex;
    > div {
        flex: 1;
        &:first-child {
            background-image: url("../assets/pic/pic1.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 90% 90%;
        }
        &:last-child {
            padding: 1em 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
.team {
    transition: opacity 0.8s ease-in-out;
    width: 100%;
    height: 550px;
    opacity: 0;
    display: flex;
    > div {
        flex: 1;
        &:last-child {
            background-image: url("../assets/pic/pic2.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 90% 90%;
        }
        &:first-child {
            padding: 1em 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
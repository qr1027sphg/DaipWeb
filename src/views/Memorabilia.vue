<template>
    <div style="overflow: hidden">
        <daip-event
            class="animate__animated animate__flipInY"
            v-for="item of event"
            :key="item.id"
            :year="item.year"
            :month="item.month"
            :title="item.title"
            :text="item.text"
            :imgsrc="item.imgsrc"
        ></daip-event>
    </div>
</template>

<script>
import event from "../components/daipEvent";
export default {
    components: {
        "daip-event": event,
    },
    data() {
        return {
            // 图片等高，切勿将过宽高比过大图片上传
            event: [
                {
                    id: 0,
                    year: "2020年",
                    month: "8月",
                    title: "“科技助力经济2020”重点专项项目研讨会",
                    text:
                        "2020年8月，利节博士参加了“科技助力经济2020”重点专项项目启动研讨会。",
                    imgsrc: require("@/assets/bigEvent/yth.jpg"),
                },
                {
                    id: 1,
                    year: "2020年",
                    month: "10月",
                    title: "厦门集美大学徐伟坚老师来访",
                    text:
                        "2020年11月，厦门集美大学徐伟坚老师来访重庆科技学院Daip实验室与Daip团队进行学术交流。",
                    imgsrc: require("@/assets/bigEvent/intel.jpg"),
                },
                {
                    id: 2,
                    year: "2020年",
                    month: "11月",
                    title: "清华大学王东教授来访",
                    text:
                        "2020年11月，清华大学王东教授来访重庆科技学院Daip实验室与Daip团队进行学术交流，王东教授对Daip实验室正在进行的项目表示了肯定。",
                    imgsrc: require("@/assets/bigEvent/wangdong.jpg"),
                },
                {
                    id: 3,
                    year: "2020年",
                    month: "11月",
                    title: "IEEE RS 优秀青年科学工作者",
                    text:
                        "2020年11月，利节博士参加2020 IEEE RS 优秀青年科学工作者会议。",
                    imgsrc: require("@/assets/bigEvent/yxqn.jpg"),
                },
                {
                    id: 4,
                    year: "2020年",
                    month: "12月",
                    title: "校友捐赠",
                    text: "2020年12月，感谢王攻文校友为DAIP实验室捐赠的空调",
                    imgsrc: require("@/assets/bigEvent/kongtiao.jpg"),
                },
                {
                    id: 5,
                    year: "2021年",
                    month: "1月",
                    title: "DAIP团队团建",
                    text: "2021年1月，DAIP团队组织团建活动。",
                    imgsrc: require("@/assets/bigEvent/2021jc.jpg"),
                },
                {
                    id: 6,
                    year: "2021年",
                    month: "5月",
                    title: "DAIP团队生日庆祝",
                    text: "2021年5月，为团队成员庆祝生日。",
                    imgsrc: require("@/assets/bigEvent/202105birth.jpg"),
                },
            ],
        };
    },
};
</script>

<style lang='scss' scoped>
</style>
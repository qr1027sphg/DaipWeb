<template>
    <!-- https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3 -->
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div
            class="swiper-pagination swiper-pagination-white"
            slot="pagination"
        ></div>
        <!-- <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
        ></div>
        <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
        ></div> -->
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "swiper/swiper-bundle.css";

export default {
    name: "swiper-example-fade-effect",
    title: "Fade effect",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOption: {
                spaceBetween: 3,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
// @import "./base.scss";

.swiper {
    height: 600px;
    .swiper-slide {
        background-position: center;
        background-size: cover;
        transition: all 0.5s ease;
        &.slide-1 {
            background-image: url("../assets/images/1.jpg");
        }
        &.slide-2 {
            background-image: url("../assets/images/2.jpg");
        }
        &.slide-3 {
            background-image: url("../assets/images/3.jpg");
        }
        &.slide-4 {
            background-image: url("../assets/images/4.png");
        }
        &.slide-5 {
            background-image: url("../assets/images/5.jpg");
        }
    }
    .swiper-slide-active:hover {
        transform: scale(1.1);
        transition: transform 0.8s cubic-bezier(0.06, 0.96, 0.76, 1),
            opacity 2s ease, visibility 3s ease;
    }
}
</style>
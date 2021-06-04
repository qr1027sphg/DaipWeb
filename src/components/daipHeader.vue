<template>
    <div class="outter" ref="header">
        <div class="logo">
            <div></div>
        </div>
        <div class="wrapper">
            <ul>
                <li><router-link to="/" tag="div">首页</router-link></li>
                <li><router-link to="/paper" tag="div">论文集</router-link></li>
                <li>
                    <router-link to="/data" tag="div" style="margin: 0 10px"
                        >GPLA-12 dataset</router-link
                    >
                </li>
                <li>
                    <router-link to="/memorabilia" tag="div"
                        >大事记</router-link
                    >
                </li>
                <li><router-link to="/about" tag="div">团队</router-link></li>
            </ul>
        </div>
        <div class="search"><a></a></div>
        <div style="font-weight: 600">网站访问量：{{ countVisitor }}</div>
    </div>
</template>

<script>
export default {
    props: {
        countVisitor: [String, Number],
    },
    mounted() {
        const that = this;
        const header = this.$refs.header;
        window.addEventListener("scroll", (e) => {
            clearTimeout(that.timer);
            that.timer = setTimeout(() => {
                if (e.target.scrollingElement.scrollTop == 0) {
                    header.style.height = "180px";
                    header.style.display = "flex";
                    setTimeout(() => {
                        header.style.opacity = "1";
                    }, 500);
                } else if (e.target.scrollingElement.scrollTop <= 200) {
                    header.style.height = "100px";
                } else if (
                    window.k &&
                    window.k - e.target.scrollingElement.scrollTop >= 0
                ) {
                    header.style.height = "100px";
                    header.style.display = "flex";
                    setTimeout(() => {
                        header.style.opacity = "1";
                    }, 500);
                } else {
                    header.style.opacity = "0";
                    setTimeout(() => {
                        header.style.display = "none";
                    }, 500);
                }
                window.k = e.target.scrollingElement.scrollTop;
            }, 10);
        });
    },
};
</script>
<style lang="scss" scoped>
.outter {
    min-width: 1200px;
    background-color: #fff;
    left: 0;
    right: 0;
    top: 0;
    z-index: 5;
    height: 180px;
    animation: open 0.5s ease-out;
    padding: 0 100px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: height 0.5s ease-out, opacity 0.5s ease-out;
    position: fixed;
    > .logo {
        flex: 2;
        > div {
            width: 220px;
            height: 100px;
            margin: auto;
            background-image: url(../assets/logo.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }
    > .wrapper {
        flex: 3;
        display: flex;
        align-items: center;
        > ul {
            margin: 0;
            padding: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            > li {
                flex: 1;
                list-style: none;
                display: inline-block;
                font-family: "Gotham-Medium";
                font-weight: 600;
                letter-spacing: 1px;
                > div {
                    display: inline;
                    position: relative;
                    letter-spacing: 1px;
                    white-space: nowrap;
                    &:hover {
                        cursor: pointer;
                    }
                    &::after {
                        content: "";
                        width: 0;
                        height: 2px;
                        background-color: currentColor;
                        display: block;
                        position: absolute;
                        left: 50%;
                        bottom: -4px;
                    }
                    &:hover::after {
                        content: "";
                        position: absolute;
                        height: 2px;
                        left: 0;
                        bottom: -4px;
                        background: currentColor;
                        transition: all 1s cubic-bezier(0.18, 0.89, 0.17, 0.88),
                            opacity 0.15s ease;
                        width: 100%;
                        display: block;
                    }
                }
                > .router-link-exact-active {
                    &::after {
                        content: "";
                        position: absolute;
                        height: 2px;
                        left: 0;
                        bottom: -4px;
                        background: currentColor;
                        transition: all 1s cubic-bezier(0.18, 0.89, 0.17, 0.88),
                            opacity 0.15s ease;
                        width: 100%;
                        display: block;
                    }
                }
            }
        }
    }
    > .search {
        flex: 1.2;
        display: flex;
        justify-content: center;
        align-items: center;
        > a {
            display: block;
            height: 24px;
            width: 24px;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTkuMTMgMTkuMjEiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ze2ZpbGw6bm9uZTt9LmNscy0ye2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtM3tzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE0LjU3IiB5PSIxNC42NSIgd2lkdGg9IjMuODUiIGhlaWdodD0iMy44NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMgMzMuMTUpIHJvdGF0ZSgtMTgwKSIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5zZWFyY2g8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9ImRlc2lnbiI+PGcgaWQ9IuWvvOiIqiI+PGcgY2xhc3M9ImNscy0yIj48bGluZSBjbGFzcz0iY2xzLTMiIHgxPSIxOC40MyIgeTE9IjE4LjUiIHgyPSIxNC41NyIgeTI9IjE0LjY1Ii8+PC9nPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iOSIgY3k9IjkiIHI9IjgiLz48L2c+PC9nPjwvZz48L3N2Zz4=)
                100% 50% no-repeat;
        }
    }
}
@keyframes open {
    0% {
        height: 0px;
    }
    100% {
        height: 180px;
    }
}
</style>
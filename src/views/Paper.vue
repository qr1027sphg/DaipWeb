<template>
    <div>
        <daip-paper
            v-for="(item, index) of papers"
            :key="item.id"
            :title="item.title"
            :labels="item.labels"
            :authors="item.authors"
            :style="`animation-delay: ${index / 2}s`"
        ></daip-paper>
    </div>
</template>

<script>
import paper from "@/components/daipPaper.vue";
export default {
    components: {
        "daip-paper": paper,
    },
    data() {
        return {
            papers: [
                {
                    id: 0,
                    title:
                        "A novel framework for gear safety factor prediction",
                    labels: [
                        "E-PCA",
                        "gear reliability",
                        "GAN",
                        "vehicle transmission",
                    ],
                    authors: "Authors: Jie Li; Song Liu; Haibo He; Lusi Li;",
                },
                {
                    id: 1,
                    title:
                        "A novel generative model with Bounded-GAN for reliability classification of gear safety",
                    labels: [
                        "GAN",
                        "generative model",
                        "gear reliability",
                        "MCL",
                    ],
                    authors:
                        "Authors: Jie Li; Xiaochao Fan; Guorong Chen; Zheng Gao; Mengliang Chen; Li Li;",
                },
                {
                    id: 2,
                    title:
                        "A DNN for Small Leakage Detection of Positive Pressure Gas Pipelines in the Semiconductor Manufacturing",
                    labels: [
                        "semiconductor manufacturing",
                        "sound signa",
                        "DNN",
                    ],
                    authors:
                        "Authors:Jie Li;Guorong Chen;Mengliang Chen;Xiaochao Fan;Zheng Gao;Li Li",
                },
                {
                    id: 3,
                    title:
                        "Gaussian-based Models for Small Leak Identification of Gas Transportation Pipes",
                    labels: [
                        "Small leak",
                        "Gaussian distribution",
                        "transportation pipes",
                        "power spectrum density",
                    ],
                    authors:
                        "Authors:Jie Li;Guorong Chen;Chunliang Liu;Jing Tang",
                },
                {
                    id: 4,
                    title:
                        "A Generative Model based on Bootstrapping and Artificial Neural Nets for Transmission Gears Safety",
                    labels: [
                        "Gear Safety",
                        "Bootstrapping",
                        "(GAN)",
                        "artificial neural nets",
                    ],
                    authors:
                        "Authors:Jie Li;Guorong Chen;Jianwei Luo;Jun Peng;Qian Xiong;Xiaoxia Du",
                },
                {
                    id: 5,
                    title:
                        "A Novel Framework for Gear Safety Factor Prediction",
                    labels: [
                        "(E-PCA)",
                        "(GAN)",
                        "vehicle transmission",
                        "gear reliability",
                    ],
                    authors:
                        "Authors:Jie Li , Member, IEEE, Song Liu , Haibo He , Fellow, IEEE, and Lusi Li , Student Member, IEEE",
                },
                {
                    id: 6,
                    title:
                        "A Novel Generative Model With Bounded-GAN for Reliability Classification of Gear Safety",
                    labels: [
                        "(GAN)",
                        "generative model",
                        "gear reliability",
                        "mean–covariance labeling",
                    ],
                    authors:
                        "Authors:Jie Li;Guorong Chen;Mengliang Chen;Xiaochao Fan;Zheng Gao;Li Li",
                },
                {
                    id: 7,
                    title:
                        "A pipe leakage detection method for water floor warm system using multiple linear regression models",
                    labels: [
                        "water floor warm",
                        "pipe leakage",
                        "multiple linear regression model",
                    ],
                    authors:
                        "Authors:Jie Li ;Meng Lu ;Wu Han ;Guorong Chen;Min Gao;Xukun Xia",
                },
                {
                    id: 8,
                    title:
                        "Adversarial Domain Adaptation via Category Transfer",
                    labels: [
                        "adversarial domain adaptation",
                        "distribution discrepancy",
                        "complex structures",
                        "category-invariant feature representations",
                    ],
                    authors: "Authors:Lusi Li, Haibo He;Jie Li;Guang Yang",
                },
                {
                    id: 9,
                    title:
                        "CGAN-MBL for Reliability Assessment With Imbalanced Transmission Gear Data",
                    labels: [
                        "(CGAN)",
                        "distribution estimation",
                        "gear reliability, imbalance learning",
                        "labeling scheme",
                    ],
                    authors:
                        "Authors:Jie Li;Guorong Chen;Mengliang Chen;Xiaochao Fan;Zheng Gao;Li Li",
                },
                {
                    id: 10,
                    title:
                        "Cooperation of Multi-level Supply Chain with Perishable Products based on Model Predictive Control",
                    labels: [
                        "perishable products",
                        "multi-level supply chain",
                        "model predictive control",
                        "cooperation",
                        "dynamic programming",
                    ],
                    authors: "Authors:Jie Li;Yi Chai;Dong-li Fu",
                },
                {
                    id: 11,
                    title:
                        "Cooperative Prediction for Multi-production Multi-level Supply Chain Optimization",
                    labels: [
                        "Multi-production Multi-level Supply Chain",
                        "Cooperative Prediction",
                        "Model Predictive Control",
                    ],
                    authors: "Authors:Jie Li; Yi Chai; Xianke Luo",
                },
                {
                    id: 12,
                    title:
                        "Distributed Multi-ant Algorithm for Capacity Vehicle Route Problem",
                    labels: [
                        "capacity vehicle route problem",
                        "distributed multi-ant algorithm",
                        "cellular ants",
                        "performance potential",
                    ],
                    authors: "Authors:Jie Li, Yi Chai and Cao Yuan",
                },
                {
                    id: 13,
                    title:
                        "EDOS: Entropy Difference-based Oversampling Approach for Imbalanced Learning",
                    labels: [],
                    authors:
                        "Authors:Lusi Li , Haibo He , Jie Li† , and Weijun Li",
                },
                {
                    id: 14,
                    title:
                        "Entropy-based Sampling Approaches for Multi-class Imbalanced Problems",
                    labels: [
                        "Imbalanced learning",
                        "oversampling",
                        "undersampling",
                        "hybrid sampling",
                    ],
                    authors: "Author:Jie Li",
                },
                {
                    id: 15,
                    title:
                        "Information Generative Bayesian Adversarial Networks: A Representation Learning Model for Transmission Gear Parameters",
                    labels: [
                        "Conditional information",
                        "gear parameters",
                        "GAN",
                        "interpretable representation",
                    ],
                    authors: "Author:Jie Li",
                },
                {
                    id: 16,
                    title:
                        "MFCC-DSR: A Novel Feature Extraction Approach for Small Leak Identification of Gas Pipes",
                    labels: [
                        "Acoustic signal",
                        "Mel frequency Cepstral coefficients",
                        "discrete stochastic resonance",
                        "gas pipes",
                    ],
                    authors:
                        "Authors:Jie Li, Jun Peng, Guorong Chen, Jianwei Luo and Xiaoxia Du1",
                },
                {
                    id: 17,
                    title:
                        "Multi-cellular-ant Algorithm for Large Scale Capacity Vehicle Route Problem",
                    labels: [
                        "multi-cellular-ant algorithm",
                        "cooperation",
                        "decomposition",
                        "capacitated vehicle routing problem",
                    ],
                    authors:
                        "Authors:Jie Li, Yi Chai, Penghua Li, and Hongpeng Yin",
                },
                {
                    id: 18,
                    title:
                        "Multi-level Supply Chain Optimization with Uncertain Time Delay by Time-stamping Predictive Control",
                    labels: [
                        "Uncertain Time Delay",
                        "Inventory Control",
                        "Multi-level Supply Chain",
                        "TimeStamping Predictive Control",
                    ],
                    authors: "Authors:Jie Li and Mian Peng",
                },
                {
                    id: 19,
                    title:
                        "Time-stamping Predictive Strategy for Multi-echelon Inventory Control with Uncertain Lead Time",
                    labels: [
                        "Multi-echelon inventory",
                        "supply chain",
                        "time-stamping predictive strategy",
                        "uncertain order delay",
                        "uncertain production delay",
                    ],
                    authors: "Author:Jie Li",
                },
                {
                    id: 20,
                    title:
                        "Toward Optimal Risk-Averse Configuration for HESS With CGANs-Based PV Scenario Generation",
                    labels: [
                        "CGANs",
                        "CVaR",
                        "coordinated control",
                        "HESS",
                        "risk-averse configuration",
                        "PV",
                    ],
                    authors: "Author:Jie Li",
                },
                {
                    id: 21,
                    title: "改进Parzen窗解决高维数据聚类的方法研究",
                    labels: [
                        "high-dimensional dataset",
                        "Parzen window",
                        "clustering",
                    ],
                    authors: "作者:柴 毅 ，利 节 ，唐 婧",
                },
                {
                    id: 22,
                    title: "输气管道微泄漏检测的深度神经网络模型研究",
                    labels: ["微泄漏", "半导体", "声音信号", "神经网络"],
                    authors: "作者:利 节，高 铮，陆 猛，李 莉，夏煦坤",
                },
                {
                    id: 23,
                    title: "正压气体输送管道的微泄漏检测方法研究",
                    labels: ["微泄漏", "输气管道", "音波信号", "识别"],
                    authors: "作者:利节，范小超，宋海吟，唐婧，刘春亮，夏煦坤",
                },
                // 教研论文
                {
                    id: 24,
                    title: "大学计算机基础课的翻转课堂教学实践探索",
                    labels: [
                        "高等教育",
                        "课程教学模式",
                        "大学计算机基础",
                        "翻转课堂",
                    ],
                    authors: "作者:熊茜，雷亮，利节，伍建全",
                },
                {
                    id: 25,
                    title:
                        "基于CDIO的物联网专业“RFID技术与应用” 课程实践教学研究",
                    labels: ["RFID", "实践教学", "应用型本科"],
                    authors:
                        "作者:利 节，陈国荣，冯骊骁，熊 茜，金尚柱，赖军辉",
                },
                {
                    id: 26,
                    title: "物联网专业“RFID 技术与应用”课程建设实践",
                    labels: [
                        "RFID",
                        "技术与应用",
                        "课程建设",
                        "应用创新型人才",
                    ],
                    authors: "作者:利节，向毅，陈国荣，熊茜",
                },
                // 学生论文
                {
                    id: 27,
                    title: "混凝土形变检测装置",
                    labels: ["混凝土", "电阻应变片", "单片机", "数据采集"],
                    authors: "作者:王涔丁，高 铮，刘 松，陈国荣，利 节",
                },
                {
                    id: 28,
                    title: "巨型脂质体制备过程的多参数寻优算法",
                    labels: [
                        "巨型脂质体制备",
                        "多参数寻优",
                        "遗传算法",
                        "反馈神经网络算法",
                    ],
                    authors: "作者:高敏，夏煦坤，关帅，奚磊，陈国荣，利节",
                },
                {
                    id: 29,
                    title: "无创血红蛋白检测装置的结构设计与实现",
                    labels: ["血红蛋白", "无创", "硬件结构"],
                    authors: "作者:陆猛，高铮，李莉，夏煦坤，利 节，陈国荣",
                },
            ],
        };
    },
};
</script>

<style scoped>
</style>
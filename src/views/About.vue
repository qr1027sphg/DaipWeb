<template>
    <div>
        <div class="title animate__animated animate__fadeInDown">导师团队</div>
        <daip-team
            v-for="item of tutor"
            :key="item.id"
            :head="item.head"
            :name="item.name"
            :details="item.command"
        ></daip-team>
        <div class="title animate__animated animate__fadeInDown">
            研究生团队
        </div>
        <daip-team
            v-for="item of graduate"
            :key="item.id"
            :head="item.head"
            :name="item.name"
            :details="item.command"
        ></daip-team>
        <div class="title animate__animated animate__fadeInDown">
            本科生团队
        </div>
        <daip-team
            v-for="item of handsome"
            :key="item.id"
            :head="item.head"
            :name="item.name"
            :details="item.command"
        ></daip-team>
    </div>
</template>

<script>
import team from "@/components/daipTeam.vue";
export default {
    components: {
        "daip-team": team,
    },
    data() {
        return {
            tutor: [
                {
                    id: -1,
                    head: require("@/assets/team/lijie.jpg"),
                    name: "利节",
                    command: [
                        "重庆市人工智能学会智慧交通专业委员会委员。IEEE 3rd International Conference on Safe Production and Informatization (IICSPI 2020)程序委员会主席，IEEE 2nd International Conference on Safe Production and Informatization (IICSPI 2019) 技术程序委员会委员，1st International Conference on Cognitive Communication Systems and Networks (MIC-Cognitive 2020，希腊) 技术程序委员会委员，1st International Conference on Artificial Intelligence and Intelligent Systems (MIC-ArtInt 2020，希腊) 技术程序委员会委员。",
                        "2012年2月至2014年4月在中国科学院重庆绿色智能技术研究院任助理研究员。2014年5月到重庆科技学院任讲师，2019年9月评为副教授。2015年、2017年先后访问清华大学、美国罗德岛大学。2017年4月至2020年1月在中国兵器集团重庆青山工业有限责任公司担任博士后工作。",
                        "近十年来主持国家自然基金、省部级项目9项，在IEEE Transactions on Industrial Informatics、IEEE Transactions on Industrial Electronics等期刊上发表学术论文20余篇(其中影响因子5.0上2篇)，出版著作2部，申请发明专利30余项，获重庆市自然科学三等奖1项。",
                    ],
                },
                {
                    id: -2,
                    head: require("@/assets/team/zhangqian.jpg"),
                    name: "张倩",
                    command: [
                        "2018年毕业于重庆大学，工学博士。研究生研究方向为信号与信息处理，博士研究方向为环境监测。曾参与国家级项目2项，省部级项目3项；发表论文10余篇，其中，以第一作者发表论文5篇，其中SCI论文1篇，EI论文2篇；专利授权2项。2018年12月进入重庆科技学院智能技术与工程学院任专职教师，研究方向是人工智能。",
                        "现主持项目两项： \n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[1] 重庆市教委科学技术研究项目“基于传感网的卫生填埋场堆体形变预估研判建模研究”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[2] 重庆市，“无人机高清超视距图传关键技术研究”\n",
                        "作为项目主研人参与研究项目：\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[1] 国家科技支撑项目，“典型南方城市生物质废物处置与燃气化利用技术集成与示范”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[2] 中央高校基金，“物联网的混合传输”（CDJZR1016000）\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[3] 科技部—国家重点研发计划项目“大数据分析辅助青蒿素智能制造产业升级及综合运用关键技术研发”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[4] 重庆市，“基地柑橘产业智慧采摘管理平台技术开发”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[5] 重庆市，“十四五”应急管理科技自主创新发展研究\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[6] 重庆市，“重庆市渝北区生活垃圾分类模式评估及优化的对策措施”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[7] 重庆市，“重庆广播电视发射塔建设项目电磁辐射环境评价”\n" +
                        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0[8] 重庆市，“《建筑智能感知设施建设标准》项目”\n",
                    ],
                },
            ],
            graduate: [
                {
                    id: 0,
                    head: require("@/assets/team/gaomin.jpg"),
                    name: "高敏",
                    command: [
                        "高敏，重庆科技学院，硕士研究生二年级，目前主要研究对抗生成网络的相关算法研究。",
                        "教育经历 2019/09-至今， 重庆科技学院，智能技术与工程学院，硕士，导师：利节 2012/09-2016/07，重庆科技学院，电气与信息工程学院，本科，导师：利节 2017/02-2019/09，中科院重庆绿色智能技术研究院-智能安全中心，算法工程师",
                        "参加的项目或比赛 1)2020年研究生科技创新计划项目，YKJCX1920804，基于CycleGAN的桥隧人车识别与跟踪方法研究，2019/12-2020/12，1万元，进行中，主持人，指导教师:利节 2)大学生科技创新训练计划项目，2015076，人体血红蛋白无创检测系统，2015/5-2016/5，5000元，结题，主持人，指导教师：利节。 3）2018年微软亚研发布的亿万级人脸识别大赛（刘鹏程，林鸿清，高敏），保持一个月第一名的记录。",
                        "期刊论文 Gao, Min(#) ，Xia, Xukun ，Guan, Shuai ，Xi, Lie ，Chen, Guorong ，Li, Jie(*) ，Multi-parameter Optimal Algorithm for Preparation of Giant Vesicles. 科技资讯，2016.2.13，434：115~116",
                    ],
                },
                {
                    id: 1,
                    head: require("@/assets/team/liuyao.jpg"),
                    name: "刘垚",
                    command: [
                        "2018级研究生，研三，石油在线分析与控制工程领域，主要研究方向为油气管道泄露检测， 专利一项，发表论文3篇。",
                    ],
                },
                {
                    id: 2,
                    head: require("@/assets/team/huangluoluo.jpg"),
                    name: "黄珞珞",
                    command: [
                        "重庆科技学院，硕士研究生二年级，目前主要研究图像处理中的目标检测和人群计数。",
                        "教育经历 2019/09-至今，重庆科技学院，智能技术与工程学院，硕士，导师:陈国荣 2015/09-2019/06，重庆科技学院，本科，专业:计算机科学与技术",
                    ],
                },
                {
                    id: 3,
                    head: require("@/assets/team/hehongli.jpg"),
                    name: "何宏黎",
                    command: [
                        "重庆科技学院在校研究生",
                        "掌握Python、Java、C#等多类编程语言。 参与2016年全国物联网职业技能大赛，获得一等奖（负责Android部分） 近年来担任Python、C#、Java相关项目的研发人员，具有一定项目经验。 主要研究深度学习关于实际场景的应用，涉及的基础模型有：CNN、GAN，以及一些扩展的网络模型，有着一定的算法基础。 发表论文2篇",
                    ],
                },
                {
                    id: 4,
                    head: require("@/assets/team/wukai.jpg"),
                    name: "吴凯",
                    command: [
                        "吴凯，重庆科技学院，硕士研究生二年级，目前主要研究图像处理方面的相关算法。",
                        "教育经历 2019/09-至今， 重庆科技学院，智能技术与工程学院，硕士，导师：施金良 2015/09-2019/06，辽宁工程技术大学，本科，专业：自动化",
                        "获奖经历 1）大学期间获得省优秀毕业生 2）大学期间担任团委副书记 3）获得一次国家奖学金 4）正在写一篇会议论文当中。",
                    ],
                },
                {
                    id: 5,
                    head: require("@/assets/team/zhouxiang.jpg"),
                    name: "周相",
                    command: [
                        "四川广安人，中共党员，工学学士，1995年8月生，2018年毕业于重庆科技学院机电系。",
                        "本科期间，GPA3.75，担任班级班长，获“国家励志奖学金”、“三好学生”、“优秀学生干部”、“优秀共产党员”、“重庆市优秀大学毕业生”等荣誉。 曾工作于宏华集团有限公司，从事石油钻机电气控制系统的调试工作。",
                    ],
                },
                {
                    id: 6,
                    head: require("@/assets/team/zhuwenwen.jpg"),
                    name: "朱文文",
                    command: [
                        "朱文文，山东青岛人，重庆科技学院智能学院硕士研究生，大学时曾任学生干部、学生会部长、社团负责人等职务，喜欢学习新鲜事物并主动去了解行业内最新动向，大学期间参与过多种学科创新及软件设计大赛 并发表论文，科研方向：人工智能、深度学习等。",
                        "我曾为生命如此短暂而悲伤，曾为花草树木凋残而遗憾， 也曾为生活的艰辛而彷徨，但我却一直保持着一颗阳光的心，吾自信拨云见日，竟有一日，我自云白山青， 满怀热情。坚持做自己认为正确的事，坚决不从众作恶",
                    ],
                },
                {
                    id: 7,
                    head: require("@/assets/team/liaohongcheng.jpg"),
                    name: "廖宏程",
                    command: [
                        "廖宏程，重庆江津人，性格外向，乐于助人。 重庆科技学院智慧安全硕士研究生 本科期间加入物联网工作室，参与过一定数量的项目。参加过学校科研立项并结项。曾在期刊上发表过两篇专业相关的文章。",
                        "座右铭：百二秦关终属楚，三千越甲可吞吴。",
                    ],
                },
                {
                    id: 8,
                    head: require("@/assets/team/wangyifan.jpg"),
                    name: "王艺凡",
                    command: [
                        "王艺凡，22岁，山西运城人，本科毕业于中北大学，现重庆科技学院智慧安全硕士研究生，开朗乐观，比较佛系，乐于助人。本科期间参与完成过智能草莓园，基于RetinaFace人脸识别等项目的实现。",
                        "目前的人生感悟：运气是努力的附属品。没有经过实力的原始积累，给你运气你也抓不住。上天给予每个人的都一样，但每个人的准备却不一样。不要羡慕那些总能撞大运的人，你必须很努力，才能遇上好运气！",
                    ],
                },
                {
                    id: 9,
                    head: require("@/assets/team/zhangxiang.jpg"),
                    name: "张祥",
                    command: [
                        "张祥，又叫毛克儿 1997年生，辽宁人。 重庆科技学院智慧安全硕士研究生。",
                        "曾在在中软国际实习，参与开发中国邮政储蓄银行数据管理平台。认真对待每一个开发过的网站。",
                        "热爱生活，热爱读书，喜欢写文章。",
                    ],
                },
                {
                    id: 12,
                    head: require("@/assets/team/xiongcong.webp"),
                    name: "熊聪",
                    command: [
                        "湖北人，重庆科技学院硕士研究生一年级，导师：曾孝平，目前主要研究方向研究方向FPGA嵌入式。",
                        "会当击水三千里，人生自信二百年。",
                    ],
                },
                {
                    id: 13,
                    head: require("@/assets/team/wangcending.jpg"),
                    name: "王涔丁",
                    command: [
                        "2018美国大学生数学建模大赛 （MCM）                  Successful Participant ",
                        "2018美国大学生数学建模大赛（校内赛）                           二等奖",
                        "《B/S架构的汽车变速器齿轮设计平台》 ",
                        "该项目利用B/S架构完成汽车公司内部使用的前端平台，主要包括内部成员的齿轮设计，齿轮修改，剩余库存等功能。",
                    ],
                },
                {
                    id: 14,
                    head: require("@/assets/team/qinrui.jpg"),
                    name: "覃锐",
                    command: [
                        "来自广西南宁，重庆科技学院硕士研究生，本科期间独立完成多个游戏项目的制作，以及基于Android和ios的app设计与开发。 ",
                        "全国计算机技术与软件专业技术资格证书 初级程序员",
                        "座右铭：只有想不到，没有做不到 ",
                    ],
                },
                {
                    id: 15,
                    head: require("@/assets/team/yandingjiang.jpg"),
                    name: "颜定江",
                    command: [
                        "家乡:四川达州万源市。",
                        "曾工作于南京中科创达、南京英莫特信息科技、深圳市创维群欣安防科技有限公司，从事领域为汽车车联网、物联网、及安卓智能手机。 ",
                        "主要工作为嵌入式/安卓Linux驱动程序设计。研究兴趣方向，人工智能、智能感知、深度学习。",
                        "个人爱好，英语（口语交流、喜欢英文文学作品《瓦尔登湖》）、跑步锻炼、古筝。 ",
                    ],
                },
                {
                    id: 16,
                    head: require("@/assets/team/huangqilin.jpg"),
                    name: "黄琦麟",
                    command: [
                        "重庆人，现重庆科技学院智慧安全硕士研究生，开朗乐观，乐于助人，追求完美主义。",
                        "本科期间参与完成过游梁式抽油机远程检测节能系统，基于PyTorch深度学习框架的电商客服机器人等项目的实现。",
                        "座右铭：流水不争先，争的是滔滔不绝。 ",
                    ],
                },
                {
                    id: 17,
                    head: require("@/assets/team/huangxiaowei.jpg"),
                    name: "黄晓薇",
                    command: [
                        "浙江丽水人   性格活泼开朗，乐于助人，现重庆科技学院智慧安全硕士研究生。",
                        "本科期间， GPA 4.08 ，担任学生干部 ，多次获得“优秀学生干部”、“优秀团干部”及“优秀学生”荣誉称号。本科被评为省级优秀毕业生。",
                        "愿能不断地去成就更好的自己。 ",
                    ],
                },
                {
                    id: 18,
                    head: require("@/assets/team/wuxianhai.jpg"),
                    name: "  吴仙海",
                    command: [
                        "22岁，福建泉州人。本科毕业于闽江学院，现重庆科技学院智慧安全硕士研究生。",
                        "乐于助人，性格外向，对未知事物具有强烈好奇心。课余时间喜欢夜跑、下象棋、读些历史文献，看些大型历史纪录片。",
                        "座右铭：每个优秀的人，都有一段沉默时光。那段时光是付出了很多努力，却得不到结果的日子，我们把他们叫做扎根。 ",
                    ],
                },
                {
                    id: 19,
                    head: require("@/assets/team/wurui.jpg"),
                    name: "  吴瑞",
                    command: [
                        "江苏南京人，1998年生，2021级重庆科技学院智能学院硕士研究生。",
                        "研究方向：人工智能。",
                    ],
                },
                {
                    id: 20,
                    head: require("@/assets/team/duzhongkai.jpg"),
                    name: "  杜忠凯",
                    command: [
                        "曾获中国智能制造挑战赛华北二赛区特等奖，有一定硬件编程经验",
                    ],
                },
            ],
            handsome: [
                {
                    id: 10,
                    head: require("@/assets/team/chenkeyu.jpg"),
                    name: "陈柯宇",
                    command: [
                        "陈柯宇，重庆人，重庆科技学院本科软件工程三年级，目前单身，曾任院学生会干部，热爱编码，对新技术有强烈的学习热情，目前致力于前端各项技术，希望做出真正优秀的软件产品。",
                        " 座右铭：苟有恒，何必三更眠、五更起；最无益，莫过一日曝、十日寒。",
                    ],
                },
                {
                    id: 11,
                    head: require("@/assets/team/luorao.png"),
                    name: "罗尧",
                    command: [
                        "本科在读",
                        "浑水摸鱼，啥也不会",
                    ],
                },
            ],
        };
    },
};
</script>

<style lang='scss' scoped>
.title {
    font-size: 20px;
    letter-spacing: 8px;
    font-weight: 800;
    position: relative;
    text-align: left;
    margin-top: 30px;
    &::after {
        content: "";
        position: absolute;
        width: 20%;
        height: 1px;
        background-color: currentColor;
        bottom: -3px;
        left: 0;
    }
}
</style>
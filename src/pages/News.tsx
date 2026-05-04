import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: '蓝鲸动力荣获全国博士后创新创业大赛金奖',
    date: '2026-04-15',
    category: '公司新闻',
    summary: '在第二届全国博士后创新创业大赛中，我司凭借海下无线供电技术荣获创新赛金奖。',
    content: `在第二届全国博士后创新创业大赛中，无锡蓝鲸动力科技有限公司凭借"海下无线供电系统"项目，从全国数千个参赛项目中脱颖而出，荣获创新赛金奖。

该项目针对海洋工程领域移动装备供电难题，创新性地提出了深海环境下高效无线电能传输解决方案。系统可在300米水深环境下稳定工作，传输效率达到90%以上，填补了国内该领域的技术空白。

大赛评委认为，该项目技术先进、应用前景广阔，对于推动我国海洋工程装备智能化发展具有重要意义。此次获奖是对蓝鲸动力技术实力的充分肯定，也是公司发展历程中的重要里程碑。

未来，蓝鲸动力将继续加大研发投入，推动海下无线供电技术的产业化应用，为我国海洋强国建设贡献力量。`,
    tags: ['获奖', '海洋工程', '技术创新'],
  },
  {
    id: '2',
    title: '海上光伏巡检机器人无线充电系统成功部署',
    date: '2026-03-28',
    category: '项目动态',
    summary: '我司为某海上光伏电站提供的巡检机器人无线充电系统正式投入运营。',
    content: `近日，无锡蓝鲸动力科技有限公司为某海上光伏电站提供的巡检机器人无线充电系统正式投入商业运营。该系统采用我司自主研发的SW-10000海下无线充电桩，可为海上光伏巡检机器人提供全天候、全自动的能源补给服务。

该系统具有以下特点：
1. IP68防护等级，可抵御海上高盐雾、高湿度环境
2. 支持100-250mm充电距离，机器人对接容错率高
3. 10kW大功率输出，满足快速充电需求
4. 远程监控管理，实时掌握设备运行状态

项目投运后，巡检机器人可实现7×24小时不间断作业，巡检覆盖率提升至100%，大幅提升了光伏电站的运维效率。该项目的成功实施，标志着蓝鲸动力在海洋工程领域的技术实力得到市场认可。`,
    tags: ['海上光伏', '巡检机器人', '项目交付'],
  },
  {
    id: '3',
    title: '无线供电技术在低空经济领域的应用前景',
    date: '2026-03-10',
    category: '行业资讯',
    summary: '随着低空经济的发展，无线供电技术将为无人机物流、巡检等场景提供重要支撑。',
    content: `随着国家低空经济政策的持续推进，无人机在物流配送、城市巡检、应急救援等领域的应用日益广泛。然而，续航时间短一直是制约无人机大规模应用的瓶颈问题。

无线供电技术为这一难题提供了创新解决方案。通过在关键节点部署无线充电设施，无人机可在飞行过程中快速补能，大幅延长作业半径和续航时间。

蓝鲸动力针对低空经济场景，推出了系列化无线充电产品：
- LW-500：适用于小型物流无人机
- LW-2000：适用于中型巡检无人机
- LW-5000：适用于大型运输无人机

公司正在与多家无人机物流企业开展合作，共同推进低空充电网络建设。预计未来几年，无线充电将成为无人机基础设施的重要组成部分。`,
    tags: ['低空经济', '无人机', '行业趋势'],
  },
  {
    id: '4',
    title: '蓝鲸动力发布新一代移动式充电机器人',
    date: '2026-02-20',
    category: '产品发布',
    summary: 'MR-15000移动式充电机器人正式发布，支持15kW超大功率输出。',
    content: `无锡蓝鲸动力科技有限公司正式发布新一代移动式充电机器人MR-15000。该产品最大功率输出达15kW，是目前市场上功率最大的移动充电设备之一。

MR-15000采用SLAM+视觉+RTK多传感器融合导航技术，可在复杂环境下自主规划路径，为多种移动装备提供灵活的补能服务。产品主要特点包括：

1. 超大功率：15kW输出，满足特种装备快速补能需求
2. 智能导航：多传感器融合，厘米级定位精度
3. 集群协同：支持多台设备协同作业，提升充电效率
4. 全天候作业：-30℃~+70℃宽温工作，适应各种环境

该产品可广泛应用于工业现场、应急抢险、大型活动保障等场景，为移动装备提供"送电上门"服务。`,
    tags: ['新产品', '充电机器人', '大功率'],
  },
  {
    id: '5',
    title: '公司与某电力集团签署战略合作协议',
    date: '2026-02-05',
    category: '公司新闻',
    summary: '双方将在电力系统巡检无人机充电网络建设方面开展深度合作。',
    content: `无锡蓝鲸动力科技有限公司与某大型电力集团正式签署战略合作协议。根据协议，双方将在电力系统巡检无人机充电网络建设、智能变电站巡检机器人供电系统等领域开展深度合作。

合作内容包括：
1. 共同开发适用于电力巡检场景的专用无线充电设备
2. 建设覆盖输电线路的分布式充电网络
3. 推进智能变电站无人化运维解决方案
4. 开展技术交流与人才培养合作

该合作的达成，标志着蓝鲸动力在工业与民生领域的市场拓展取得重要突破。公司将以此为契机，进一步提升产品技术水平，为电力行业智能化转型提供有力支撑。`,
    tags: ['战略合作', '电力巡检', '市场拓展'],
  },
  {
    id: '6',
    title: '无线供电技术助力智能变电站无人化运维',
    date: '2026-01-18',
    category: '技术动态',
    summary: '我司无线供电技术在智能变电站巡检机器人中的应用案例分享。',
    content: `智能变电站是电网发展的重要方向，而巡检机器人是实现变电站无人化运维的关键装备。然而，传统有线充电方式在变电站强电磁环境下可靠性差，严重影响机器人作业效率。

蓝鲸动力针对这一问题，开发了具有强电磁兼容特性的LW-2000无线充电设备。该产品采用特殊电磁屏蔽设计，可在变电站复杂电磁环境下稳定工作，主要技术优势包括：

1. 抗干扰能力强：通过EMC四级测试，适应强电磁环境
2. 充电可靠性高：无裸露电极，避免接触不良问题
3. 维护成本低：无机械磨损，使用寿命长达10年以上
4. 部署灵活：无需改造现有场地，即装即用

目前，该产品已在多个智能变电站成功应用，帮助客户实现了完全无人化巡检，设备异常发现率达到99%以上。`,
    tags: ['智能变电站', '无人化运维', '电磁兼容'],
  },
];

const categories = ['全部', '公司新闻', '项目动态', '行业资讯', '产品发布', '技术动态'];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const filteredNews = activeCategory === '全部'
    ? newsItems
    : newsItems.filter(n => n.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900" />
        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              新闻<span className="gradient-text">动态</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              了解蓝鲸动力最新动态、行业资讯与技术发展
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-ocean-500/20 text-ocean-400 border border-ocean-500/30'
                    : 'bg-dark-800/50 text-gray-400 border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card overflow-hidden hover-lift cursor-pointer group"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                    <span className="text-4xl opacity-30">📰</span>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-400 text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ocean-400 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">{news.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {news.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs text-gray-500">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-dark-800 rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-dark-800/95 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-400 text-xs font-medium">
                    {selectedNews.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedNews.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">{selectedNews.title}</h2>
                <div className="prose prose-invert max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                  {selectedNews.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-dark-700 text-gray-400 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

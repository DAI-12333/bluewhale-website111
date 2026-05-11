import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, Shield, Waves, Gauge, ArrowRight, ChevronRight,
  Award, TrendingUp, Users, Globe
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { productImages } from '../config/images';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-50px' }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-600/30 rounded-full blur-3xl" />
        </div>

        <div className="relative section-container pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-500/10 border border-ocean-500/20 text-ocean-400 text-sm mb-8">
                <Zap className="w-4 h-4" />
                <span>移动装备无线供电系统专家</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                为移动装备提供
                <span className="gradient-text block mt-2">全天候能源补给</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                无锡蓝鲸动力科技有限公司专注于水下机器人、无人机等移动装备的无线供电系统研发与制造，
                提供"发电-输电-供电"全场景一体化解决方案
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/products" className="btn-primary text-base px-8 py-4">
                  探索产品
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
                <Link to="/contact" className="btn-outline text-base px-8 py-4">
                  联系我们
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { icon: Zap, value: '10kW', label: '最大功率输出' },
                { icon: Shield, value: '6+', label: '核心专利技术' },
                { icon: Globe, value: '3', label: '全国/省级奖项' },
                { icon: Users, value: '24/7', label: '全天候服务' },
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <stat.icon className="w-8 h-8 text-ocean-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Advantages */}
      <section className="section-padding bg-dark-800/50">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心优势</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              以创新技术驱动，解决移动装备续航短、供电难、维护成本高的行业痛点
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: '高功率电能变换',
                desc: '支持500W至10kW宽功率范围，满足不同规模移动装备的供电需求，转换效率高达95%以上',
              },
              {
                icon: Shield,
                title: '强兼容抗偏移',
                desc: '采用先进的磁耦合谐振技术，支持大偏移距离充电，设备对接容错率高，适应复杂环境',
              },
              {
                icon: Waves,
                title: '环境自适应',
                desc: '智能感知环境变化，自动调节输出功率，适应水下、高空、恶劣天气等复杂工况',
              },
              {
                icon: Gauge,
                title: '实时状态监测',
                desc: '全链路数字化监控，实时反馈充电状态、设备健康度，支持远程运维与故障预警',
              },
              {
                icon: TrendingUp,
                title: '一体式设计',
                desc: '集成发电、输电、供电功能于一体，模块化设计便于部署，大幅降低安装维护成本',
              },
              {
                icon: Award,
                title: '全场景覆盖',
                desc: '覆盖交通运输、海洋工程、工业民生等多领域，提供定制化解决方案',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...staggerItem}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-ocean-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">产品中心</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              全系列无线供电产品，为不同应用场景提供专业解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: '陆上无线充电桩',
                desc: '适用于无人机、AGV、巡检机器人等陆地移动装备的无线充电',
                specs: ['功率范围: 500W-5kW', '充电距离: 50-200mm', '防护等级: IP65'],
                image: productImages['land-3'],
                link: '/products?category=land',
              },
              {
                title: '海下无线充电桩',
                desc: '专为水下机器人、AUV等海洋装备设计，支持深海作业环境',
                specs: ['功率范围: 1kW-10kW', '工作水深: 0-300m', '防护等级: IP68'],
                image: productImages['sea-3'],
                link: '/products?category=sea',
              },
              {
                title: '移动式充电机器人',
                desc: '自主导航的移动充电平台，为多种装备提供灵活补能服务',
                specs: ['功率范围: 500W-2kW', '导航方式: SLAM+视觉', '续航: 8小时'],
                image: productImages['mobile-3'],
                link: '/products?category=mobile',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-ocean-400" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={product.link}
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 text-ocean-400 hover:text-ocean-300 font-medium transition-colors"
                  >
                    了解详情
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-dark-800/50">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">应用场景</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              深耕交通运输、海洋工程、工业民生三大领域，为行业客户提供专业解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '交通运输',
                desc: '为电动车辆、无人机等提供高效无线充电，推动绿色交通发展',
                icon: Zap,
                link: '/applications?field=transport',
              },
              {
                title: '海洋工程',
                desc: '为海上光伏巡检机器人、水下机器人等提供可靠能源保障',
                icon: Waves,
                link: '/applications?field=ocean',
              },
              {
                title: '工业与民生',
                desc: '为电力巡检无人机、智能变电站机器人等提供全天候供电',
                icon: Gauge,
                link: '/applications?field=industry',
              },
            ].map((app, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to={app.link} className="glass-card p-8 hover-lift block h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <app.icon className="w-8 h-8 text-ocean-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{app.desc}</p>
                  <span className="inline-flex items-center gap-2 text-ocean-400 font-medium">
                    查看案例
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">新闻动态</h2>
              <p className="text-gray-400">了解公司最新动态与行业资讯</p>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-ocean-400 hover:text-ocean-300 font-medium mt-4 md:mt-0"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '荣获全国博士后创新创业大赛金奖',
                date: '2023-10',
                category: '公司新闻',
                desc: '在第二届全国博士后创新创业大赛中，我司凭借海下无线供电技术荣获创新赛金奖',
              },
              {
                title: '海上光伏巡检机器人无线充电系统成功部署',
                date: '2026-03',
                category: '项目动态',
                desc: '我司为某海上光伏电站提供的巡检机器人无线充电系统正式投入运营',
              },
              {
                title: '无线供电技术在低空经济领域的应用前景',
                date: '2026-03',
                category: '行业资讯',
                desc: '随着低空经济的发展，无线供电技术将为无人机物流、巡检等场景提供重要支撑',
              },
            ].map((news, index) => (
              <motion.article
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover-lift cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-ocean-500/10 text-ocean-400 text-xs">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-ocean-400 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{news.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-dark-800/50 to-dark-900">
        <div className="section-container">
          <motion.div
            {...fadeInUp}
            className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-600/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                开启无线供电新时代
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                无论您是需要为水下机器人、无人机还是其他移动装备提供能源补给，
                我们都能为您提供专业的无线供电解决方案
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" onClick={scrollToTop} className="btn-primary text-base px-8 py-4">
                  免费咨询
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
                <Link to="/products" onClick={scrollToTop} className="btn-outline text-base px-8 py-4">
                  浏览产品
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

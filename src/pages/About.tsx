import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

export default function About() {
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
              关于<span className="gradient-text">蓝鲸动力</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              无锡蓝鲸动力科技有限公司成立于2026年，是一家专注于移动装备无线供电系统研发与制造的高科技企业。
              公司致力于为水下机器人、无人机等移动装备提供全天候、全自动的能源补给保障。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-white mb-6">企业简介</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  无锡蓝鲸动力科技有限公司总部位于江苏省无锡市滨湖区，是国内领先的移动装备无线供电系统解决方案提供商。
                  公司核心团队由来自国内知名高校的博士、硕士组成，在无线电能传输领域拥有深厚的技术积累。
                </p>
                <p>
                  公司秉承"科技创新、服务社会"的经营理念，专注于为海洋工程、低空经济、工业自动化等领域提供专业的无线供电解决方案。
                  我们的产品广泛应用于海上光伏巡检、电力系统巡检、智能变电站等场景，为客户解决了移动装备续航短、供电难、维护成本高的痛点。
                </p>
                <p>
                  未来，蓝鲸动力将继续深耕无线供电技术，推动行业标准化发展，为构建绿色、智能的能源补给生态贡献力量。
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, label: '核心团队', value: '博士/硕士领衔' },
                  { icon: Award, label: '技术奖项', value: '3项全国/省级' },
                  { icon: Shield, label: '核心专利', value: '6件+' },
                  { icon: TrendingUp, label: '功率覆盖', value: '500W-15kW' },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4">
                    <item.icon className="w-8 h-8 text-ocean-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-lg font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-ocean-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">企业愿景</h3>
              <p className="text-gray-400 leading-relaxed">
                成为全球领先的移动装备无线供电系统提供商，以技术创新推动能源补给方式的变革，
                为构建绿色、智能、高效的能源生态贡献力量，让无线供电技术惠及各行各业。
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-ocean-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">企业使命</h3>
              <p className="text-gray-400 leading-relaxed">
                专注于移动装备无线供电技术的研发与创新，为客户提供安全、可靠、高效的能源补给解决方案，
                解决移动装备续航短、供电难、维护成本高的行业痛点，助力客户实现智能化、自动化升级。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">发展历程</h2>
            <p className="text-gray-400">蓝鲸动力的成长足迹</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2026',
                title: '公司成立',
                desc: '无锡蓝鲸动力科技有限公司正式成立，聚焦移动装备无线供电系统研发',
              },
              {
                year: '2026',
                title: '技术突破',
                desc: '成功研发海下无线充电桩原型机，支持300米水深作业',
              },
              {
                year: '2026',
                title: '荣获金奖',
                desc: '在第二届全国博士后创新创业大赛中荣获创新赛金奖',
              },
              {
                year: '2026',
                title: '产品量产',
                desc: '陆上无线充电桩、海下无线充电桩正式进入量产阶段',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 md:gap-8 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-ocean-500 shrink-0" />
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-ocean-500/50 to-transparent mt-2" />
                </div>
                <div className="glass-card p-6 flex-1 -mt-2">
                  <span className="text-ocean-400 font-semibold">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心业务</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              覆盖"发电-输电-供电"全场景，为移动装备提供一体化能源解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '水下机器人供电',
                desc: '为ROV、AUV等水下机器人提供安全可靠的水下无线充电解决方案，支持深海作业',
                icon: '🌊',
              },
              {
                title: '无人机供电',
                desc: '为巡检无人机、物流无人机等提供高效便捷的无线充电服务，延长续航时间',
                icon: '🚁',
              },
              {
                title: '智能装备供电',
                desc: '为AGV、巡检机器人、服务机器人等智能装备提供灵活可靠的能源补给',
                icon: '🤖',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center hover-lift"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Layout */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">战略布局</h2>
            <p className="text-gray-400">聚焦海洋工程与低空经济两大战略方向</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">海洋工程</h3>
                  <p className="text-sm text-gray-500">Ocean Engineering</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  海上风电巡检机器人无线充电系统
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  海上光伏巡检机器人能源补给方案
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  水下机器人深海充电基站
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  海洋观测设备能源管理系统
                </li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚁</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">低空经济</h3>
                  <p className="text-sm text-gray-500">Low-Altitude Economy</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  电力系统巡检无人机充电网络
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  物流配送无人机自动充电站
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  应急抢险无人机快速补能系统
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">•</span>
                  城市空中交通能源基础设施
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

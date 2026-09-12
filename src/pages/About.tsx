import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import { fadeIn, fadeInOnMount } from '../components/motionPresets';
import { applicationImages } from '../config/images';

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900" />
        <div className="relative section-container">
          <motion.div
            {...fadeInOnMount}
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
            <motion.div {...fadeIn}>
              <SectionHeader align="left" eyebrow="Company Profile" title="企业简介" />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  无锡蓝鲸动力科技有限公司总部位于江苏省无锡市新吴区，是国内领先的移动装备无线供电系统解决方案提供商。
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
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, label: '核心团队', value: '博士/硕士领衔' },
                  { icon: Award, label: '技术奖项', value: '3项全国/省级' },
                  { icon: Shield, label: '核心专利', value: '6件+' },
                  { icon: TrendingUp, label: '功率覆盖', value: '500W-10kW' },
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

      {/* Development History */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeIn} className="mb-16">
            <SectionHeader eyebrow="Milestones" title="发展历程" description="蓝鲸动力的成长足迹" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: '2023',
                title: '荣获金奖',
                desc: '在第二届全国博士后创新创业大赛中荣获创新赛金奖',
              },
              {
                year: '2025',
                title: '技术突破',
                desc: '成功研发海下无线充电桩原型机，支持300米水深作业',
              },
              {
                year: '2026',
                title: '公司成立',
                desc: '无锡蓝鲸动力科技有限公司正式成立，聚焦移动装备无线供电系统研发',
              },
              {
                year: '2026',
                title: '产品量产',
                desc: '陆上无线充电桩、海下无线充电桩正式进入量产阶段',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
          <motion.div {...fadeIn} className="mb-16">
            <SectionHeader
              eyebrow="Core Business"
              title="核心业务"
              description={'覆盖"电能变换-无线传输-智能供电"全场景，为移动装备提供一体化能源解决方案'}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '水下机器人供电',
                desc: '为ROV、AUV等水下机器人提供安全可靠的水下无线充电解决方案，支持深海作业',
                image: applicationImages['ocean-2'],
              },
              {
                title: '无人机供电',
                desc: '为巡检无人机、物流无人机等提供高效便捷的无线充电服务，延长续航时间',
                image: applicationImages['transport-2'],
              },
              {
                title: '智能装备供电',
                desc: '为AGV、巡检机器人、服务机器人等智能装备提供灵活可靠的能源补给',
                image: applicationImages['industry-2'],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}

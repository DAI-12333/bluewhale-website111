import { motion } from 'framer-motion';
import { Zap, Shield, Waves, Lock, CheckCircle, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

const technologies = [
  {
    icon: Zap,
    title: '高功率电能变换技术',
    subtitle: 'High Power Conversion',
    description: '采用先进的电力电子技术，实现高效率、高功率密度的电能变换，支持500W至15kW宽功率范围输出。',
    features: [
      '软开关技术降低开关损耗，提升转换效率至95%+',
      '多电平拓扑结构，输出波形质量高',
      '模块化设计，支持功率灵活扩展',
      '智能功率分配，多设备协同充电',
    ],
    specs: [
      { label: '转换效率', value: '≥95%' },
      { label: '功率范围', value: '500W-15kW' },
      { label: '输出电压', value: 'DC 24V-800V' },
      { label: '工作频率', value: '20kHz-100kHz' },
    ],
  },
  {
    icon: Shield,
    title: '强兼容抗偏移无线供电技术',
    subtitle: 'Anti-Offset Wireless Power',
    description: '基于磁耦合谐振原理，采用多线圈阵列设计和自适应阻抗匹配技术，实现大偏移距离下的高效能量传输。',
    features: [
      '多线圈阵列设计，扩大有效充电区域',
      '自适应阻抗匹配，实时优化传输效率',
      '支持水平/垂直方向大偏移充电',
      '异物检测功能，保障充电安全',
    ],
    specs: [
      { label: '充电距离', value: '50-300mm' },
      { label: '水平偏移', value: '±150mm' },
      { label: '传输效率', value: '≥90%' },
      { label: '对准容错', value: '±30°' },
    ],
  },
  {
    icon: Waves,
    title: '环境自适应技术',
    subtitle: 'Environment Adaptive',
    description: '智能感知环境参数变化，自动调节系统工作状态，确保在复杂环境下的稳定可靠运行。',
    features: [
      '温度自适应调节，-40℃至+85℃宽温工作',
      '湿度/盐雾防护，适应海洋环境',
      '振动抑制算法，保障设备稳定',
      '智能故障诊断与自愈功能',
    ],
    specs: [
      { label: '工作温度', value: '-40℃~+85℃' },
      { label: '防护等级', value: 'IP65-IP68' },
      { label: '工作水深', value: '0-300m' },
      { label: '抗振动', value: 'IEC 60068-2-6' },
    ],
  },
];

const patents = [
  { name: '一种水下无线电能传输系统', type: '发明专利', status: '已授权' },
  { name: '一种抗偏移无线充电线圈结构', type: '发明专利', status: '已授权' },
  { name: '一种高功率密度电能变换器', type: '发明专利', status: '已授权' },
  { name: '一种自适应阻抗匹配电路', type: '发明专利', status: '已授权' },
  { name: '一种多设备协同充电控制方法', type: '发明专利', status: '已授权' },
  { name: '一种无线充电异物检测装置', type: '实用新型', status: '已授权' },
];

const awards = [
  {
    title: '全国博士后创新创业大赛金奖',
    level: '国家级',
    year: '2026',
    desc: '第二届全国博士后创新创业大赛创新赛金奖',
  },
  {
    title: '江苏省科技进步奖',
    level: '省级',
    year: '2026',
    desc: '无线供电技术创新应用奖项',
  },
  {
    title: '无锡市优秀创业企业',
    level: '市级',
    year: '2026',
    desc: '无锡市优秀创业企业称号',
  },
];

export default function Technology() {
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
              核心<span className="gradient-text">技术</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              以三大核心技术体系为支撑，构建完整的无线供电技术生态，
              为移动装备提供安全、高效、可靠的能源补给解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">技术体系</h2>
            <p className="text-gray-400">三大核心技术，构建完整解决方案</p>
          </motion.div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Header */}
                  <div className="p-8 bg-gradient-to-br from-primary-900/50 to-ocean-900/50">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center mb-6">
                      <tech.icon className="w-7 h-7 text-ocean-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-sm text-ocean-400">{tech.subtitle}</p>
                  </div>

                  {/* Description */}
                  <div className="p-8">
                    <p className="text-gray-400 leading-relaxed mb-6">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-ocean-400 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="p-8 bg-dark-900/50">
                    <h4 className="text-sm font-semibold text-white mb-4">技术参数</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {tech.specs.map((spec, i) => (
                        <div key={i} className="p-3 rounded-lg bg-dark-800/50">
                          <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
                          <div className="text-lg font-semibold text-ocean-400">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心专利</h2>
            <p className="text-gray-400">6件核心专利，构筑技术护城河</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <Lock className="w-6 h-6 text-ocean-400" />
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                    {patent.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{patent.name}</h3>
                <p className="text-sm text-gray-500">{patent.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">荣誉奖项</h2>
            <p className="text-gray-400">3项全国和省级奖励，彰显技术实力</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center hover-lift"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-yellow-400" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm mb-4">
                  {award.level}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{award.desc}</p>
                <span className="text-sm text-gray-500">{award.year}年</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Comparison */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">技术优势</h2>
            <p className="text-gray-400">与传统供电方式对比，突显竞争优势</p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-gray-400 font-medium">对比维度</th>
                    <th className="text-center p-6 text-ocean-400 font-semibold">蓝鲸无线供电</th>
                    <th className="text-center p-6 text-gray-400 font-medium">传统有线充电</th>
                    <th className="text-center p-6 text-gray-400 font-medium">电池更换</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: '自动化程度', ours: '全自动', traditional: '需人工插拔', battery: '需人工更换' },
                    { dim: '充电效率', ours: '≥90%', traditional: '≥95%', battery: '-' },
                    { dim: '维护成本', ours: '低', traditional: '中', battery: '高' },
                    { dim: '设备寿命', ours: '长（无机械磨损）', traditional: '中', battery: '短' },
                    { dim: '恶劣环境', ours: '适应性强', traditional: '接口易损坏', battery: '操作困难' },
                    { dim: '安全性', ours: '高（无裸露电极）', traditional: '中', battery: '中' },
                    { dim: '部署灵活性', ours: '高', traditional: '低', battery: '中' },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-white font-medium">{row.dim}</td>
                      <td className="p-6 text-center text-ocean-300">{row.ours}</td>
                      <td className="p-6 text-center text-gray-400">{row.traditional}</td>
                      <td className="p-6 text-center text-gray-400">{row.battery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

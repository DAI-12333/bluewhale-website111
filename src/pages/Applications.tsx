import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, X, CheckCircle,
  Truck, Ship, Factory
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { applicationImages } from '../config/images';

interface CaseStudy {
  id: string;
  title: string;
  field: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  features: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'transport-1',
    title: '智慧物流园区AGV无线充电系统',
    field: 'transport',
    description: '为某大型物流园区提供AGV小车无线充电解决方案，实现24小时不间断作业。',
    challenge: '传统接触式充电需要AGV精确停靠，影响作业效率；充电触点磨损严重，维护成本高。',
    solution: '部署LW-2000陆上无线充电桩，采用抗偏移设计，支持±150mm对准容错，AGV无需精确停靠即可充电。',
    result: '充电效率提升40%，设备维护成本降低60%，AGV可用率达到99.5%。',
    features: ['24小时无人值守', '多设备并行充电', '智能调度管理', '实时状态监控'],
  },
  {
    id: 'transport-2',
    title: '无人机物流配送充电网络',
    field: 'transport',
    description: '为城市无人机物流配送系统建设分布式充电网络，支持多机型、多批次快速补能。',
    challenge: '无人机续航时间短，需要频繁充电；不同机型充电接口不统一，兼容性差。',
    solution: '建设LW-500/LW-2000混合充电站网络，采用标准化无线充电接口，支持多机型自动识别。',
    result: '无人机日均配送次数提升3倍，充电等待时间缩短至5分钟以内。',
    features: ['多机型兼容', '5分钟快速补能', '分布式部署', '云端统一管理'],
  },
  {
    id: 'ocean-1',
    title: '海上光伏巡检机器人无线充电系统',
    field: 'ocean',
    description: '为海上光伏电站提供巡检机器人无线充电解决方案，解决海上环境供电难题。',
    challenge: '海上环境恶劣，盐雾腐蚀严重；传统有线充电接口易损坏，维护困难；机器人续航无法满足大面积巡检需求。',
    solution: '部署SW-10000海下无线充电桩，采用IP68防护等级和海水腐蚀防护设计，支持300米水深作业。',
    result: '巡检覆盖率提升至100%，设备故障率降低80%，年维护成本节省200万元。',
    features: ['IP68深海防护', '盐雾腐蚀抵抗', '自动对接充电', '远程状态监控'],
  },
  {
    id: 'ocean-2',
    title: '水下观测网AUV能源补给站',
    field: 'ocean',
    description: '为海底观测网络中的AUV提供自动能源补给，支持长期自主观测任务。',
    challenge: 'AUV续航有限，需要定期回收充电；深海环境压力大，传统充电方式不可靠。',
    solution: '建设SW-5000深水充电基站，配备自动对接系统，AUV可自主完成充电过程。',
    result: 'AUV连续作业时间从8小时延长至72小时，观测数据获取量提升8倍。',
    features: ['300米深水作业', '自动对接系统', '72小时续航', '数据实时回传'],
  },
  {
    id: 'industry-1',
    title: '电力系统巡检无人机充电网络',
    field: 'industry',
    description: '为电力系统巡检无人机提供分布式无线充电网络，保障输电线路巡检效率。',
    challenge: '输电线路分布广，无人机续航难以覆盖；野外环境恶劣，充电设施维护困难。',
    solution: '沿输电线路部署LW-2000无线充电桩，采用太阳能+市电混合供电，支持恶劣环境工作。',
    result: '巡检效率提升5倍，人工巡检成本降低70%，故障发现及时率提升至98%。',
    features: ['太阳能混合供电', '恶劣环境适应', '自动巡检调度', '故障预警系统'],
  },
  {
    id: 'industry-2',
    title: '智能变电站巡检机器人充电系统',
    field: 'industry',
    description: '为智能变电站提供巡检机器人无线充电系统，实现变电站无人化运维。',
    challenge: '变电站电磁环境复杂，对充电设备干扰大；机器人需要24小时待命，充电可靠性要求高。',
    solution: '部署LW-2000抗干扰无线充电设备，采用电磁屏蔽设计，确保在强电磁环境下稳定工作。',
    result: '变电站实现完全无人化巡检，设备异常发现率提升至99%，运维成本降低50%。',
    features: ['强电磁兼容', '24小时待命', '异常自动报警', '无人化运维'],
  },
];

const fields = [
  { id: 'all', label: '全部场景', icon: Zap },
  { id: 'transport', label: '交通运输', icon: Truck },
  { id: 'ocean', label: '海洋工程', icon: Ship },
  { id: 'industry', label: '工业与民生', icon: Factory },
];

export default function Applications() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const activeField = searchParams.get('field') || 'all';

  const filteredCases = activeField === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.field === activeField);

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
              应用<span className="gradient-text">场景</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              深耕交通运输、海洋工程、工业民生三大领域，为行业客户提供专业的无线供电解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Field Filter */}
      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-wrap gap-3">
            {fields.map((field) => (
              <button
                key={field.id}
                onClick={() => setSearchParams(field.id === 'all' ? {} : { field: field.id })}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeField === field.id
                    ? 'bg-ocean-500/20 text-ocean-400 border border-ocean-500/30'
                    : 'bg-dark-800/50 text-gray-400 border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                <field.icon className="w-4 h-4" />
                {field.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card overflow-hidden hover-lift cursor-pointer group"
                  onClick={() => setSelectedCase(caseItem)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={applicationImages[caseItem.id]} 
                      alt={caseItem.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-400 text-xs font-medium">
                        {fields.find(f => f.id === caseItem.field)?.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ocean-400 transition-colors line-clamp-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{caseItem.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
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
                <div>
                  <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-400 text-xs font-medium mb-2 inline-block">
                    {fields.find(f => f.id === selectedCase.field)?.label}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{selectedCase.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">项目概述</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedCase.description}</p>
                </div>

                {/* Challenge */}
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h3 className="text-lg font-semibold text-red-400 mb-3">行业痛点</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-xl bg-ocean-500/5 border border-ocean-500/10">
                  <h3 className="text-lg font-semibold text-ocean-400 mb-3">解决方案</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedCase.solution}</p>
                </div>

                {/* Result */}
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/10">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">实施效果</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedCase.result}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">核心功能</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCase.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-ocean-400 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

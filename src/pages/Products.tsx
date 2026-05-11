import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Shield, Waves, Gauge, X,
  Maximize2, CheckCircle
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { productImages } from '../config/images';

interface Product {
  id: string;
  name: string;
  category: string;
  power: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  applications: string[];
}

const products: Product[] = [
  {
    id: 'land-1',
    name: 'LW-500 陆上无线充电桩',
    category: 'land',
    power: '500W',
    description: '适用于小型无人机、巡检机器人的入门级无线充电设备，部署灵活，性价比高。',
    features: [
      '一体式设计，即装即用',
      '支持50-100mm充电距离',
      'IP65防护等级',
      '实时充电状态监测',
    ],
    specs: {
      '输出功率': '500W',
      '输入电压': 'AC 220V±10%',
      '输出电压': 'DC 24V/48V',
      '充电距离': '50-100mm',
      '传输效率': '≥90%',
      '工作温度': '-20℃~+60℃',
      '防护等级': 'IP65',
      '尺寸': '300×300×150mm',
      '重量': '8kg',
    },
    applications: ['小型无人机', '室内巡检机器人', 'AGV小车'],
  },
  {
    id: 'land-2',
    name: 'LW-2000 陆上无线充电桩',
    category: 'land',
    power: '2kW',
    description: '中型无人机、户外巡检机器人的主力充电设备，支持更远的充电距离和更高的功率输出。',
    features: [
      '强兼容抗偏移设计',
      '支持100-200mm充电距离',
      '智能功率调节',
      '远程监控与管理',
    ],
    specs: {
      '输出功率': '2kW',
      '输入电压': 'AC 220V±10%',
      '输出电压': 'DC 48V/96V',
      '充电距离': '100-200mm',
      '传输效率': '≥92%',
      '工作温度': '-30℃~+70℃',
      '防护等级': 'IP66',
      '尺寸': '450×450×200mm',
      '重量': '18kg',
    },
    applications: ['中型无人机', '户外巡检机器人', '物流机器人'],
  },
  {
    id: 'land-3',
    name: 'LW-5000 陆上无线充电桩',
    category: 'land',
    power: '5kW',
    description: '大功率陆上无线充电设备，适用于大型无人机、特种机器人等高功率需求场景。',
    features: [
      '宽功率覆盖设计',
      '多设备并行充电',
      '环境自适应调节',
      '故障自诊断功能',
    ],
    specs: {
      '输出功率': '5kW',
      '输入电压': 'AC 380V±10%',
      '输出电压': 'DC 96V/384V',
      '充电距离': '100-200mm',
      '传输效率': '≥93%',
      '工作温度': '-40℃~+85℃',
      '防护等级': 'IP66',
      '尺寸': '600×600×250mm',
      '重量': '35kg',
    },
    applications: ['大型无人机', '特种机器人', '电动车辆'],
  },
  {
    id: 'sea-1',
    name: 'SW-1000 海下无线充电桩',
    category: 'sea',
    power: '1kW',
    description: '浅水区水下机器人专用充电设备，支持50米以内水深作业，密封性能优异。',
    features: [
      '全密封防水设计',
      '海水腐蚀防护',
      '压力自适应补偿',
      '水下对接引导',
    ],
    specs: {
      '输出功率': '1kW',
      '输入电压': 'AC 220V±10%',
      '输出电压': 'DC 24V/48V',
      '充电距离': '50-150mm',
      '传输效率': '≥88%',
      '工作水深': '0-50m',
      '防护等级': 'IP68',
      '尺寸': '400×400×180mm',
      '重量': '25kg',
    },
    applications: ['浅水ROV', '水下观测设备', '养殖机器人'],
  },
  {
    id: 'sea-2',
    name: 'SW-5000 海下无线充电桩',
    category: 'sea',
    power: '5kW',
    description: '深水区水下机器人充电设备，支持300米水深，为AUV、大型ROV提供可靠能源补给。',
    features: [
      '深海耐压设计',
      '远距离无线充电',
      '自动对接系统',
      '状态实时监控',
    ],
    specs: {
      '输出功率': '5kW',
      '输入电压': 'AC 380V±10%',
      '输出电压': 'DC 48V/96V',
      '充电距离': '100-200mm',
      '传输效率': '≥90%',
      '工作水深': '0-300m',
      '防护等级': 'IP68',
      '尺寸': '550×550×220mm',
      '重量': '45kg',
    },
    applications: ['深水AUV', '大型ROV', '海底观测站'],
  },
  {
    id: 'sea-3',
    name: 'SW-10000 海下无线充电桩',
    category: 'sea',
    power: '10kW',
    description: '超大功率海下充电设备，专为海上光伏巡检机器人等大型海洋装备设计。',
    features: [
      '超大功率输出',
      '海上环境专用防护',
      '快速充电模式',
      '集群充电管理',
    ],
    specs: {
      '输出功率': '10kW',
      '输入电压': 'AC 380V±10%',
      '输出电压': 'DC 96V/384V',
      '充电距离': '100-250mm',
      '传输效率': '≥91%',
      '工作水深': '0-100m',
      '防护等级': 'IP68',
      '尺寸': '700×700×280mm',
      '重量': '65kg',
    },
    applications: ['海上光伏巡检机器人', '大型AUV', '海洋工程装备'],
  },
  {
    id: 'mobile-1',
    name: 'MR-500 移动式充电机器人',
    category: 'mobile',
    power: '500W',
    description: '自主导航移动充电平台，可为多台设备提供灵活的补能服务，适用于仓库、园区等场景。',
    features: [
      'SLAM自主导航',
      '多目标识别定位',
      '自动对接充电',
      '8小时续航能力',
    ],
    specs: {
      '输出功率': '500W',
      '电池容量': '2kWh',
      '续航时间': '8小时',
      '导航方式': 'SLAM+视觉',
      '充电距离': '50-150mm',
      '传输效率': '≥88%',
      '工作温度': '-10℃~+50℃',
      '尺寸': '500×400×1000mm',
      '重量': '50kg',
    },
    applications: ['仓库AGV', '园区巡检机器人', '服务机器人'],
  },
  {
    id: 'mobile-2',
    name: 'MR-1000 移动式充电机器人',
    category: 'mobile',
    power: '1kW',
    description: '大功率移动充电平台，支持快速充电，适用于工业现场、应急抢险等场景。',
    features: [
      '大功率快速充电',
      '多设备轮询充电',
      '远程调度管理',
      '全天候作业能力',
    ],
    specs: {
      '输出功率': '1kW',
      '电池容量': '3kWh',
      '续航时间': '6小时',
      '导航方式': 'SLAM+视觉+GPS',
      '充电距离': '50-200mm',
      '传输效率': '≥88%',
      '工作温度': '-20℃~+60℃',
      '尺寸': '600×500×1200mm',
      '重量': '80kg',
    },
    applications: ['工业现场', '应急抢险', '大型设备补能'],
  },
  {
    id: 'mobile-3',
    name: 'MR-2000 移动式充电机器人',
    category: 'mobile',
    power: '2kW',
    description: '超大功率移动充电平台，专为特种装备、大型无人机等提供快速补能服务。',
    features: [
      '超大功率输出',
      '快速充电模式',
      '集群协同作业',
      '智能路径规划',
    ],
    specs: {
      '输出功率': '2kW',
      '电池容量': '5kWh',
      '续航时间': '6小时',
      '导航方式': 'SLAM+视觉+RTK',
      '充电距离': '100-200mm',
      '传输效率': '≥90%',
      '工作温度': '-30℃~+70℃',
      '尺寸': '800×600×1400mm',
      '重量': '120kg',
    },
    applications: ['特种装备', '大型无人机', '电动车辆'],
  },
];

const categories = [
  { id: 'all', label: '全部产品', icon: Zap },
  { id: 'land', label: '陆上无线充电桩', icon: Shield },
  { id: 'sea', label: '海下无线充电桩', icon: Waves },
  { id: 'mobile', label: '移动式充电机器人', icon: Gauge },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

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
              产品<span className="gradient-text">中心</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              全系列无线供电产品，功率覆盖500W至2kW，满足不同应用场景的能源补给需求
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
                key={cat.id}
                onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-ocean-500/20 text-ocean-400 border border-ocean-500/30'
                    : 'bg-dark-800/50 text-gray-400 border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card overflow-hidden hover-lift cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={productImages[product.id]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-400 text-xs font-medium">
                        {product.power}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ocean-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 text-ocean-400 text-sm">
                      <Maximize2 className="w-4 h-4" />
                      查看详情
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
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
                  <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                  <span className="text-ocean-400 text-sm">{selectedProduct.power}</span>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">产品简介</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">产品特点</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-ocean-400 mt-0.5 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">技术参数</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-lg bg-dark-700/50">
                        <div className="text-xs text-gray-500 mb-1">{key}</div>
                        <div className="text-sm font-medium text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">适用范围</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-ocean-500/10 text-ocean-400 text-sm"
                      >
                        {app}
                      </span>
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

/**
 * 图片资源配置 - 统一管理所有静态图片资源
 * 所有图片路径在此集中定义，便于维护和更新
 */

// 首页图片
export const homeImages = {
  logo: '/1-Home Page/logo.jpg',
};

// 产品图片 - 对应9个产品
export const productImages: Record<string, string> = {
  // 陆地无线充电桩
  'land-1': '/4-Industrial center/4-1-LW-500-.jpg',
  'land-2': '/4-Industrial center/4-2-LW-2000-.jpg',
  'land-3': '/4-Industrial center/4-3-LW-5000-.jpg',
  // 海下无线充电桩
  'sea-1': '/4-Industrial center/4-4-SW-1000-.jpg',
  'sea-2': '/4-Industrial center/4-5-SW-5000-.jpg',
  'sea-3': '/4-Industrial center/4-6-SW-10000-.jpg',
  // 移动式充电机器人
  'mobile-1': '/4-Industrial center/MR-500-.jpg',
  'mobile-2': '/4-Industrial center/MR-1000-.jpg',
  'mobile-3': '/4-Industrial center/MR-2000-.jpg',
};

// 应用场景图片
export const applicationImages: Record<string, string> = {
  'transport-1': '/5-Application scenario/5-1-Intelligent Logistics Park AGV Wireless Charging System .jpg',
  'transport-2': '/5-Application scenario/5-2-Unmanned aerial vehicle logistics delivery charging network.jpg',
  'ocean-1': '/5-Application scenario/5-3-Wireless Charging System for Offshore Photovoltaic Inspection Robots .jpg',
  'ocean-2': '/5-Application scenario/5-4-Underwater observation network AUV energy replenishment station.jpg',
  'industry-1': '/5-Application scenario/5-5-Power system inspection unmanned aerial vehicle charging network.jpg',
  'industry-2': '/5-Application scenario/5-6-Intelligent Substation Inspection Robot Charging System.jpg',
};

// 新闻动态配图
export const newsImages: Record<string, string> = {
  '1': '/6-News Updates/6-1-Blue Whale Power has won the gold award in the National Postdoctoral Innovation Competition.png',
  '2': '/6-News Updates/6-2-The wireless charging system for offshore photovoltaic inspection robots has been successfully deployed.jpg',
  '3': '/6-News Updates/6-3-The application prospects of wireless power supply technology in the low-altitude economy sector.jpg',
  '4': '/6-News Updates/6-4-Blue Whale Power has launched a new generation of mobile charging robots.jpg',
  '5': '/6-News Updates/6-5-The company has signed a strategic cooperation agreement with a power group.jpg',
  '6': '/6-News Updates/6-6-Wireless power supply technology helps with unmanned operation of intelligent substations.jpg',
};

// 占位图（图片加载失败时显示）
export const placeholderImage = '/images/placeholder.jpg';

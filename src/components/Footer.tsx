import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const footerLinks = {
  products: [
    { label: '陆上无线充电桩', path: '/products?category=land' },
    { label: '海下无线充电桩', path: '/products?category=sea' },
    { label: '移动式充电机器人', path: '/products?category=mobile' },
  ],
  applications: [
    { label: '交通运输', path: '/applications?field=transport' },
    { label: '海洋工程', path: '/applications?field=ocean' },
    { label: '工业与民生', path: '/applications?field=industry' },
  ],
  company: [
    { label: '关于我们', path: '/about' },
    { label: '核心技术', path: '/technology' },
    { label: '新闻动态', path: '/news' },
    { label: '联系我们', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="蓝鲸动力" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-white">蓝鲸动力</h3>
                <p className="text-[10px] text-ocean-400">BLUEWHALE POWER</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              专注于移动装备无线供电系统的研发与制造，为水下机器人、无人机等装备提供全天候、全自动能源补给保障。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-ocean-400 shrink-0" />
                <span>江苏省无锡市新吴区清晏路32号</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-ocean-400 shrink-0" />
                <span>18313187278</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-ocean-400 shrink-0" />
                <span>2738208501@qq.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-ocean-400 shrink-0" />
                <span>周一至周五 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5">产品中心</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-ocean-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-white font-semibold mb-5">应用场景</h4>
            <ul className="space-y-3">
              {footerLinks.applications.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-ocean-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">关于公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-ocean-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 无锡蓝鲸动力科技有限公司 版权所有
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              隐私政策
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              使用条款
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

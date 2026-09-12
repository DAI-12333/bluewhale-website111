import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const footerLinks = {
  products: [
    { label: '海下无线充电桩', path: '/products?category=sea' },
    { label: '陆上无线充电桩', path: '/products?category=land' },
    { label: '移动式充电机器人', path: '/products?category=mobile' },
  ],
  applications: [
    { label: '海洋工程', path: '/applications?field=ocean' },
    { label: '工业与民生', path: '/applications?field=industry' },
    { label: '交通运输', path: '/applications?field=transport' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-x-8 gap-y-12 lg:gap-x-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="蓝鲸动力" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-white">蓝鲸动力</h3>
                <p className="text-[10px] text-ocean-400">BLUEWHALE POWER</p>
              </div>
            </Link>
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
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            版权所有 © 2026 无锡蓝鲸动力科技有限公司
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  MessageSquare, User, Building, FileText
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              联系<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              无论您有任何产品咨询、技术合作或商务洽谈需求，欢迎随时与我们联系
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">联系方式</h2>
                <p className="text-gray-400 leading-relaxed">
                  我们的专业团队将竭诚为您服务，提供及时、专业的咨询与支持。
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: '公司地址',
                    content: '江苏省无锡市滨湖区',
                    detail: '国家集成电路设计中心',
                  },
                  {
                    icon: Phone,
                    title: '联系电话',
                    content: '400-XXX-XXXX',
                    detail: '周一至周五 9:00-18:00',
                  },
                  {
                    icon: Mail,
                    title: '电子邮箱',
                    content: 'contact@bluewhale-power.com',
                    detail: '商务合作 / 技术咨询',
                  },
                  {
                    icon: Clock,
                    title: '工作时间',
                    content: '周一至周五 9:00-18:00',
                    detail: '节假日除外',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-ocean-500/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-ocean-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-4">
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-ocean-500/30 mx-auto mb-3" />
                    <p className="text-gray-500">江苏省无锡市滨湖区</p>
                    <p className="text-sm text-gray-600">地图加载中...</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">在线咨询</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">提交成功</h3>
                    <p className="text-gray-400">感谢您的留言，我们将尽快与您联系！</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500/50 transition-colors"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          <Building className="w-4 h-4 inline mr-1" />
                          公司名称
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500/50 transition-colors"
                          placeholder="请输入公司名称"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          电子邮箱 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500/50 transition-colors"
                          placeholder="请输入电子邮箱"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          联系电话
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500/50 transition-colors"
                          placeholder="请输入联系电话"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <FileText className="w-4 h-4 inline mr-1" />
                        咨询类型 *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white focus:outline-none focus:border-ocean-500/50 transition-colors"
                      >
                        <option value="">请选择咨询类型</option>
                        <option value="product">产品咨询</option>
                        <option value="technology">技术合作</option>
                        <option value="business">商务洽谈</option>
                        <option value="service">售后服务</option>
                        <option value="other">其他</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        留言内容 *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500/50 transition-colors resize-none"
                        placeholder="请详细描述您的需求..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      提交留言
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-800/30">
        <div className="section-container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">常见问题</h2>
            <p className="text-gray-400">解答您最关心的问题</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: '无线供电的充电效率如何？',
                a: '我司无线供电系统的传输效率可达90%以上，与有线充电效率接近。通过先进的磁耦合谐振技术和自适应阻抗匹配算法，确保在各种工况下保持高效率能量传输。',
              },
              {
                q: '产品是否支持定制开发？',
                a: '是的，我们提供定制化开发服务。根据客户的具体应用场景和技术要求，我们可以对产品的功率、尺寸、接口等进行定制，确保最佳适配性。',
              },
              {
                q: '海下充电设备的最大工作水深是多少？',
                a: '我司海下无线充电桩最大支持300米水深作业，采用全密封防水设计和压力自适应补偿技术，确保在深海环境下的可靠工作。',
              },
              {
                q: '产品的质保期是多久？',
                a: '我司产品标准质保期为2年，质保期内提供免费维修服务。同时提供延保服务和终身技术支持，确保客户无后顾之忧。',
              },
              {
                q: '如何进行产品选型？',
                a: '您可以通过网站的在线咨询表单或拨打客服热线与我们联系。我们的技术团队会根据您的具体应用场景、功率需求、环境条件等因素，为您推荐最合适的产品方案。',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                  <span className="text-ocean-400">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-7">
                  <span className="text-ocean-400">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  MessageSquare, User, Building, FileText
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import { fadeIn, fadeInOnMount } from '../components/motionPresets';
import TencentMap from '../components/TencentMap';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const subjectMap: Record<string, string> = {
        product: '产品咨询',
        technology: '技术合作',
        business: '商务洽谈',
        service: '售后服务',
        other: '其他',
      };
      
      const subject = subjectMap[formData.subject] || '其他';
      const emailSubject = `蓝鲸动力官网咨询 - ${subject}`;
      
      // 使用 Web3Forms API 发送邮件
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1cf01452-747f-4868-962f-644b3161f763',
          subject: emailSubject,
          to_email: '2738208501@qq.com',
          name: formData.name,
          email: formData.email,
          company: formData.company || '未填写',
          phone: formData.phone || '未填写',
          subject_type: subject,
          message: `【姓名】: ${formData.name}
【公司】: ${formData.company || '未填写'}
【邮箱】: ${formData.email}
【电话】: ${formData.phone || '未填写'}
【咨询类型】: ${subject}

【留言内容】:
${formData.message}`,
        }),
      });
      
      if (response.ok) {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('提交失败，请稍后重试或直接发送邮件至 2738208501@qq.com');
      }
    } catch (error) {
      alert('提交失败，请稍后重试或直接发送邮件至 2738208501@qq.com');
    } finally {
      setIsLoading(false);
    }
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
            {...fadeInOnMount}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              联系<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              无论您有产品咨询、技术合作还是商务洽谈需求，欢迎随时与我们联系
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeIn} className="space-y-8">
              <SectionHeader
                align="left"
                eyebrow="Get in Touch"
                title="联系方式"
                description="我们的专业团队将竭诚为您服务，提供及时、专业的咨询与支持。"
              />

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: '公司地址',
                    content: '江苏省无锡市新吴区清晏路32号',
                    detail: '',
                  },
                  {
                    icon: Phone,
                    title: '联系电话',
                    content: '18313187278',
                    detail: '周一至周五 9:00-18:00',
                  },
                  {
                    icon: Mail,
                    title: '电子邮箱',
                    content: '2738208501@qq.com',
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
                    {...fadeIn}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
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

              {/* Tencent Map */}
              <TencentMap 
                address="江苏省无锡市新吴区清晏路32号"
                center={{ lat: 31.485502, lng: 120.374540 }}
                zoom={17}
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
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
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
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
                      disabled={isLoading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className={`w-5 h-5 ${isLoading ? 'animate-pulse' : ''}`} />
                      {isLoading ? '提交中...' : '提交留言'}
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
          <motion.div {...fadeIn} className="mb-16">
            <SectionHeader
              eyebrow="FAQ"
              title="常见问题"
              description="解答您最关心的问题"
            />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: '海下无线充电桩的最大工作水深是多少？',
                a: '目前我方标准海下无线充电桩的最大支持工作水深为300米。如果贵方有更深水域（如千米级）的应用需求，则需要采用特殊的压力补偿或耐压舱设计，这属于深度定制开发范畴，需要进行额外的研发验证与测试，且成本会显著增加。如果贵方的项目对水深有更高要求，建议在项目规划阶段就将这部分额外的时间和预算纳入考虑。',
              },
              {
                q: '你们的产品能提供多高的传输功率？',
                a: '我们的产品覆盖500W至最高10kW的功率范围，网站上标示的5kW、10kW为向恒定最优负载充电时的峰值功率。需要说明的是，在实际长时间连续传输工况下，受限于系统的热管理设计及水下散热条件，实际传输功率会有一定程度的折扣。此外，在为贵方设备电池充电时，系统的实际输出功率取决于电池适配器所能接受的最大输入功率，若电池端的接受能力有限，即便充电桩功率再高，实际充电功率也会受限于此。具体持续输出能力需根据实际工况与散热条件进行评估。',
              },
              {
                q: '无线充电系统如何与机器人的电池系统配合使用？',
                a: '我们提供的是从原边（充电桩部分）到副边（接收线圈、整流器、谐振变换器等）的电能传输链路，系统可实现直流或交流恒压输出。但需要特别说明的是：系统并不包含机器人（受电体）端的电池以及电池适配器（充电器），这部分需要由客户自行准备。我们的系统仅负责将电能稳定输送至电池适配器前端，不涉及电池管理（BMS）功能。因此，客户需要提供其电池适配器的输入端参数（如输入电压、电流、功率等），以便我们进行定制匹配。',
              },
              {
                q: '产品是标准化产品还是定制化开发？',
                a: '我们所有的产品均为定制化开发。这意味着每一个项目都需要根据客户的具体工况——包括工作水深、负载特性、安装空间、耐压防腐要求、通信协议等——进行专门的设计、选材与测试。因此，我们的产品不提供标准化现货。研发周期通常较长，且整体成本较高，无法提供通用型产品。',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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

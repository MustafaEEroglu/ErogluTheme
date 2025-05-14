import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiLayout, FiCode } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: 'Web Tasarım',
    description: 'Modern ve kullanıcı dostu web siteleri tasarlıyorum. Responsive tasarım ile her cihazda mükemmel görünüm.',
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: 'Mobil Uyumluluk',
    description: 'Mobil öncelikli tasarım yaklaşımı ile projelerinizi her ekran boyutuna uygun hale getiriyorum.',
  },
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları.',
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Geliştirme',
    description: 'Next.js, React ve modern web teknolojileri ile hızlı ve SEO dostu web uygulamaları.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Sunduğum Hizmetler
          </motion.h2>
          <p className="text-xl text-gray-600">
            Modern ve profesyonel web çözümleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
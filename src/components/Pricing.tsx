import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Başlangıç',
    price: '2.999',
    features: [
      'Tek Sayfalık Web Sitesi',
      'Responsive Tasarım',
      'İletişim Formu',
      'SEO Optimizasyonu',
      '1 Ay Ücretsiz Destek',
    ],
  },
  {
    name: 'Profesyonel',
    price: '4.999',
    features: [
      'Çok Sayfalı Web Sitesi',
      'Responsive Tasarım',
      'İletişim Formu',
      'SEO Optimizasyonu',
      '3 Ay Ücretsiz Destek',
      'Blog Sayfası',
      'Admin Paneli',
    ],
    popular: true,
  },
  {
    name: 'Kurumsal',
    price: '9.999',
    features: [
      'Özel Tasarım Web Sitesi',
      'E-ticaret Entegrasyonu',
      'Özel Admin Paneli',
      'SEO Optimizasyonu',
      '6 Ay Ücretsiz Destek',
      'Blog Sayfası',
      'Sosyal Medya Entegrasyonu',
      'Analytics Raporlama',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Fiyatlandırma
          </motion.h2>
          <p className="text-xl text-gray-600">
            İhtiyacınıza en uygun paketi seçin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-lg shadow-lg relative ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Popüler
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">₺{plan.price}</span>
                <span className="text-gray-600">/başlangıç</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Paketi Seç
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 
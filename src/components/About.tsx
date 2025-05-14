import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://picsum.photos/600/400"
              alt="Profil Fotoğrafı"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hakkımda
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Merhaba! Ben [İsminiz], 5 yılı aşkın süredir web tasarım ve geliştirme alanında çalışıyorum. 
              Modern teknolojileri kullanarak, kullanıcı dostu ve etkileyici web siteleri oluşturmak benim tutkum.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Next.js, React ve modern web teknolojilerini kullanarak, müşterilerimin ihtiyaçlarına özel çözümler üretiyorum. 
              Her projede en iyi kullanıcı deneyimini sunmak için çaba gösteriyorum.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Yetenekler</h3>
                <ul className="space-y-2">
                  <li>Next.js / React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>UI/UX Tasarım</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eğitim</h3>
                <ul className="space-y-2">
                  <li>Bilgisayar Mühendisliği</li>
                  <li>Web Geliştirme Sertifikası</li>
                  <li>UI/UX Tasarım Kursu</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
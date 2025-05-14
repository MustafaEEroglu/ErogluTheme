import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'E-ticaret Sitesi',
    category: 'Web Geliştirme',
    image: 'https://picsum.photos/600/400?random=1',
    description: 'Modern bir e-ticaret platformu',
  },
  {
    title: 'Kurumsal Website',
    category: 'Web Tasarım',
    image: 'https://picsum.photos/600/400?random=2',
    description: 'Profesyonel şirket web sitesi',
  },
  {
    title: 'Mobil Uygulama UI',
    category: 'UI/UX',
    image: 'https://picsum.photos/600/400?random=3',
    description: 'Kullanıcı dostu mobil arayüz tasarımı',
  },
  {
    title: 'Blog Platformu',
    category: 'Web Geliştirme',
    image: 'https://picsum.photos/600/400?random=4',
    description: 'Kişisel blog sitesi',
  },
  {
    title: 'Portfolyo Teması',
    category: 'Web Tasarım',
    image: 'https://picsum.photos/600/400?random=5',
    description: 'Yaratıcı portfolyo teması',
  },
  {
    title: 'Dashboard Tasarımı',
    category: 'UI/UX',
    image: 'https://picsum.photos/600/400?random=6',
    description: 'Admin panel arayüzü',
  },
];

const categories = ['Tümü', 'Web Geliştirme', 'Web Tasarım', 'UI/UX'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Tümü' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Portfolyo
          </motion.h2>
          <p className="text-xl text-gray-600">
            Örnek çalışmalarım
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <span className="inline-block mt-3 text-sm bg-blue-500 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 
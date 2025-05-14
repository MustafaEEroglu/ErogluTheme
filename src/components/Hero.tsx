'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Merhaba, Ben <span className="text-blue-500">İsminiz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Web Tasarım ve Geliştirme Uzmanı
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Projelerim
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animasyonlu arka plan desenleri */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [-100, 100],
            y: [-50, 50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [100, -100],
            y: [50, -50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 
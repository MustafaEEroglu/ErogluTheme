import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FiTwitter className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: <FiInstagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LOGO</h3>
            <p className="text-gray-400">
              Modern ve etkileyici web tasarım çözümleri için doğru adres.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-gray-400 mb-2">E-posta: info@example.com</p>
            <p className="text-gray-400 mb-2">Tel: +90 123 456 7890</p>
            <p className="text-gray-400">İstanbul, Türkiye</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} İsminiz. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
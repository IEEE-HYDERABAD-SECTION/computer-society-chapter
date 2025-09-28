import React from 'react';

const IEEENavbar = () => {
  const ieeeLinks = [
    { name: 'IEEE.org', url: 'https://www.ieee.org' },
    { name: 'IEEE Xplore Digital Library', url: 'https://ieeexplore.ieee.org' },
    { name: 'IEEE Standards', url: 'https://standards.ieee.org' },
    { name: 'IEEE Spectrum', url: 'https://spectrum.ieee.org' },
    { name: 'More Sites', url: 'https://www.ieee.org/about/ieee-sites' }
  ];

  return (
    <div className="bg-orange-50 border-b border-orange-200">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-3">
        <div className="flex items-center space-x-4 ml-8">
          {ieeeLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 hover:text-orange-800 font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
              {index < ieeeLinks.length - 1 && (
                <div className="w-px h-3 bg-orange-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IEEENavbar;

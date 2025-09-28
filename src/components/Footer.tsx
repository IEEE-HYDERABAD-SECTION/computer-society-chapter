import React from 'react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/ieee-logo.png" 
                alt="IEEE Computer Society Logo" 
                className="h-24 w-auto mb-4"
              />
              <div>
                <div className="text-lg font-bold">IEEE Computer Society</div>
                <div className="text-sm text-gray-400">Hyderabad Section</div>
              </div>
            </div>
            <p className="text-gray-400">
              Advancing technology for humanity through innovation, research, and community engagement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">IEEE Xplore</a></li>
              <li><a href="https://www.computer.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Publications</a></li>
              <li><a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Standards</a></li>
              <li><a href="https://careers.ieee.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Career Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 mb-2">hyderabad@computer.org</p>
            <p className="text-gray-400 mb-4">+91 40 2345 6789</p>
            <div className="text-sm text-gray-400">
              Part of IEEE, the world's largest technical professional organization.
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IEEE Computer Society Hyderabad Section. All rights reserved. | 
            IEEE and the IEEE logo are registered trademarks of IEEE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
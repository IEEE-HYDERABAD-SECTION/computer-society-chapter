import React from 'react';
import { ChevronRight, Award, Users, Globe, Code, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const activities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Workshops",
      description: "Regular hands-on sessions on cutting-edge technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Industry Connect",
      description: "Networking events with industry professionals and leaders"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research Symposium",
      description: "Platform for sharing latest research and innovations"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Student Competitions",
      description: "Programming contests and project exhibitions"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IEEE Computer Society
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-100">
              Hyderabad Section
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-orange-50">
              Advancing technology for humanity through innovative research, 
              professional development, and community engagement in the heart of Cyberabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/membership"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
              >
                Join Us <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/events"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About IEEE Computer Society
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's leading organization of computing professionals, driving innovation 
              and excellence in technology education and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The IEEE Computer Society Hyderabad Section is dedicated to advancing the theory, 
                practice, and application of computer and information processing science and technology. 
                We foster professional growth, technological innovation, and community engagement 
                across the vibrant tech ecosystem of Hyderabad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 text-orange-500 mr-3" />
                  Professional Development Programs
                </li>
                <li className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-orange-500 mr-3" />
                  Industry-Academia Collaboration
                </li>
                <li className="flex items-center text-gray-700">
                  <Globe className="w-5 h-5 text-orange-500 mr-3" />
                  Global Networking Opportunities
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">Access to cutting-edge research and publications</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">Professional certification and career advancement</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">Networking with industry leaders and researchers</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">Exclusive workshops and technical conferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Activities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to advance your technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <div className="text-orange-500">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/activities"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Learn More About Our Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
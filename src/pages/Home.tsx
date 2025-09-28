import React from 'react';
import { ChevronRight, Award, Users, Globe, Code, BookOpen, Trophy, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
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

  // Sample gallery items for the scrolling section
  const galleryItems = [
    {
      id: 1,
      title: "AI Workshop 2024",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Tech Talk: Quantum Computing",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Nov 20, 2024"
    },
    {
      id: 3,
      title: "Student Competition",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Oct 25, 2024"
    },
    {
      id: 4,
      title: "Industry Summit",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Sep 30, 2024"
    },
    {
      id: 5,
      title: "Cybersecurity Workshop",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "Aug 15, 2024"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "IIIT Hyderabad",
      status: "Registration Open"
    },
    {
      title: "Tech Talk: Quantum Computing",
      date: "March 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      status: "Registration Open"
    },
    {
      title: "Student Project Competition",
      date: "April 10, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "BITS Pilani Hyderabad",
      status: "Registration Closing Soon"
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/cs.png)'
          }}
        ></div>
        <div className="relative max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
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
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link 
                to="/membership"
                className="bg-white text-orange-600 px-12 py-5 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center text-lg"
              >
                Join Us <ChevronRight className="w-6 h-6 ml-2" />
              </Link>
              <Link 
                to="/events"
                className="border border-white text-white px-12 py-5 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 text-lg"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't miss these exciting opportunities to learn and network
            </p>
            <Link 
              to="/events"
              className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
            >
              View All Events <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-10 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-orange-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm font-medium text-orange-500">{event.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Registration Open' ? 'bg-green-100 text-green-800' :
                    event.status === 'Registration Closing Soon' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <Link 
                  to="/events"
                  className="inline-flex items-center w-full justify-center bg-orange-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-lg"
                >
                  Learn More <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
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
            <div className="bg-white p-12 rounded-xl shadow-lg">
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

      {/* Gallery Scrolling Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A glimpse into our recent events and activities
            </p>
            <Link 
              to="/gallery"
              className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
            >
              View Full Gallery <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide gap-10 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {galleryItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex-shrink-0 w-[28rem] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Activities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to advance your technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
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

          <div className="text-center mt-20">
            <Link 
              to="/activities"
              className="bg-orange-500 text-white px-12 py-5 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-lg"
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
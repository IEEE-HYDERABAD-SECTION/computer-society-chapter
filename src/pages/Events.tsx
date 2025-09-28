import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "IIIT Hyderabad",
      description: "Comprehensive hands-on workshop covering latest ML techniques, neural networks, and practical applications in industry.",
      attendees: 150,
      status: "Registration Open"
    },
    {
      title: "Tech Talk: Quantum Computing",
      date: "March 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      description: "Expert session on quantum computing fundamentals, current research, and future prospects in the field.",
      attendees: 300,
      status: "Registration Open"
    },
    {
      title: "Student Project Competition",
      date: "April 10, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "BITS Pilani Hyderabad",
      description: "Annual competition showcasing innovative student projects across various domains of computer science.",
      attendees: 200,
      status: "Registration Closing Soon"
    },
    {
      title: "Industry Connect Summit",
      date: "April 25, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Hyderabad International Convention Centre",
      description: "Premier networking event bringing together industry leaders, researchers, and professionals.",
      attendees: 500,
      status: "Early Bird Registration"
    }
  ];

  const pastEvents = [
    {
      title: "Cybersecurity Symposium 2024",
      date: "December 15, 2024",
      location: "University of Hyderabad",
      description: "Comprehensive discussion on cybersecurity challenges and solutions.",
      attendees: 250
    },
    {
      title: "Women in Tech Conference",
      date: "November 20, 2024",
      location: "ISB Hyderabad",
      description: "Celebrating and empowering women in technology fields.",
      attendees: 180
    },
    {
      title: "Blockchain Technology Workshop",
      date: "October 10, 2024",
      location: "TCS Innovation Lab",
      description: "Deep dive into blockchain technology and its applications.",
      attendees: 120
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Join us for exciting workshops, conferences, and networking events that shape the future of technology
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss these exciting opportunities to learn and network
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">Expected Attendees: {event.attendees}</span>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center">
                  Register Now <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600">
              Highlights from our recent successful events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-orange-500">{event.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">Attendees: {event.attendees}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            We're always looking for innovative event ideas and collaboration opportunities. 
            Get in touch with us to discuss your proposal.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
            Contact Event Committee
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
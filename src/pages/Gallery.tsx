import React, { useState } from 'react';
import { X, Calendar, MapPin, Users } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop 2024",
      date: "December 15, 2024",
      location: "IIIT Hyderabad",
      attendees: 150,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive workshop on latest AI/ML techniques with hands-on sessions"
    },
    {
      id: 2,
      title: "Tech Talk: Quantum Computing",
      date: "November 20, 2024",
      location: "Virtual Event",
      attendees: 300,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Expert session on quantum computing fundamentals and applications"
    },
    {
      id: 3,
      title: "Student Project Competition",
      date: "October 25, 2024",
      location: "BITS Pilani Hyderabad",
      attendees: 200,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Annual competition showcasing innovative student projects"
    },
    {
      id: 4,
      title: "Industry Connect Summit",
      date: "September 30, 2024",
      location: "HITEC City",
      attendees: 500,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premier networking event with industry leaders"
    },
    {
      id: 5,
      title: "Cybersecurity Workshop",
      date: "August 15, 2024",
      location: "University of Hyderabad",
      attendees: 120,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hands-on cybersecurity training and best practices"
    },
    {
      id: 6,
      title: "Women in Tech Conference",
      date: "July 20, 2024",
      location: "ISB Hyderabad",
      attendees: 180,
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Celebrating and empowering women in technology"
    },
    {
      id: 7,
      title: "Blockchain Technology Seminar",
      date: "June 10, 2024",
      location: "TCS Innovation Lab",
      attendees: 100,
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Deep dive into blockchain technology and cryptocurrency"
    },
    {
      id: 8,
      title: "IoT and Smart Cities Workshop",
      date: "May 25, 2024",
      location: "IIIT Hyderabad",
      attendees: 140,
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Exploring IoT applications in smart city development"
    },
    {
      id: 9,
      title: "Data Science Bootcamp",
      date: "April 15, 2024",
      location: "BITS Pilani",
      attendees: 160,
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Intensive data science training with real-world projects"
    }
  ];

  const openModal = (item: any) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Capturing moments from our events, workshops, and community gatherings
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Browse through our collection of memorable moments and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{item.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-96 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h2>
              <p className="text-gray-700 mb-6">{selectedImage.description}</p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{selectedImage.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>{selectedImage.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-orange-500" />
                  <div>
                    <p className="font-semibold">Attendees</p>
                    <p>{selectedImage.attendees}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to be Featured?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our upcoming events and be part of our growing community. Your participation makes these moments possible!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
              View Upcoming Events
            </button>
            <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-200">
              Submit Your Photos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
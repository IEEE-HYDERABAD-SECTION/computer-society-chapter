import React from 'react';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Learn more about IEEE Computer Society Hyderabad Section and our commitment to advancing technology
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To advance the theory, practice, and application of computer and information processing 
                science and technology, and to promote cooperation and exchange of technical information 
                among our members.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading professional organization that empowers computing professionals 
                to drive innovation and technological advancement for the benefit of humanity.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700">
                Excellence, integrity, innovation, and inclusivity guide everything we do. 
                We believe in fostering a collaborative environment that promotes learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IEEE Computer Society Hyderabad Section</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The IEEE Computer Society Hyderabad Section serves as a vibrant hub for computing professionals, 
                researchers, and students in the greater Hyderabad metropolitan area. Established to foster 
                technological advancement and professional development, we bring together minds from academia, 
                industry, and research institutions.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our section is part of the global IEEE Computer Society, the world's premier organization 
                for computing professionals. We organize technical conferences, workshops, seminars, and 
                networking events that keep our members at the forefront of technological innovation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600">Events Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                  <div className="text-gray-600">Partner Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-xl text-gray-600">A legacy of innovation and excellence</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2010 - Foundation</h3>
                  <p className="text-gray-700">
                    IEEE Computer Society Hyderabad Section was established to serve the growing 
                    technology community in Hyderabad and surrounding areas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Expansion</h3>
                  <p className="text-gray-700">
                    Expanded our reach to include major educational institutions and technology 
                    companies across Telangana and Andhra Pradesh.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Digital Transformation</h3>
                  <p className="text-gray-700">
                    Successfully transitioned to hybrid events during the pandemic, reaching 
                    a broader audience through virtual platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2025 - Present</h3>
                  <p className="text-gray-700">
                    Continuing to lead technological advancement with focus on emerging technologies 
                    like AI, quantum computing, and sustainable technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
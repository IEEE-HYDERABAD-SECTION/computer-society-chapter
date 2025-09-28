import React from 'react';
import { Code, Globe, BookOpen, Trophy, Users, Award, Lightbulb, GraduationCap } from 'lucide-react';

const Activities = () => {
  const mainActivities = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Technical Workshops",
      description: "Regular hands-on sessions covering cutting-edge technologies including AI/ML, cloud computing, cybersecurity, and emerging programming paradigms.",
      features: ["Monthly workshops", "Industry expert speakers", "Hands-on coding sessions", "Certificate of participation"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Industry Connect",
      description: "Networking events that bridge the gap between academia and industry, featuring tech talks, panel discussions, and career guidance sessions.",
      features: ["Industry leader talks", "Career guidance", "Networking opportunities", "Job placement assistance"]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Research Symposium",
      description: "Annual platform for researchers to present their work, share insights, and collaborate on cutting-edge research in computer science and engineering.",
      features: ["Paper presentations", "Poster sessions", "Research collaboration", "Publication opportunities"]
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Student Competitions",
      description: "Programming contests, hackathons, and project exhibitions that challenge students and professionals to showcase their technical skills.",
      features: ["Coding competitions", "Hackathons", "Project exhibitions", "Cash prizes and recognition"]
    }
  ];

  const specialPrograms = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "Connecting experienced professionals with students and early-career professionals for guidance and career development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Certification",
      description: "IEEE certification programs and training sessions to enhance professional credentials and technical skills."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "Collaborative spaces for working on innovative projects and prototypes with access to latest tools and technologies."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student Chapters",
      description: "Supporting and coordinating with student chapters across universities to organize local events and activities."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Activities</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Comprehensive programs designed to advance your technical expertise and professional growth
          </p>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Activities
            </h2>
            <p className="text-xl text-gray-600">
              Our flagship programs that drive innovation and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mr-6">
                    <div className="text-orange-500">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-700 mb-4">{activity.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {activity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Programs
            </h2>
            <p className="text-xl text-gray-600">
              Additional initiatives to support your professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <div className="text-orange-500">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Activity Calendar
            </h2>
            <p className="text-xl text-gray-600">
              Regular schedule of our ongoing activities
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Technical Workshops</li>
                  <li>Industry Connect Sessions</li>
                  <li>Student Chapter Meetings</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quarterly</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Programming Competitions</li>
                  <li>Research Paper Reviews</li>
                  <li>Professional Certification</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annually</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Research Symposium</li>
                  <li>Major Conferences</li>
                  <li>Awards Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ready to participate in our activities? Join us and be part of the vibrant tech community in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
              Become a Member
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200">
              Volunteer with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
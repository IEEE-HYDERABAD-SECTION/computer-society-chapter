import React from 'react';
import { Users, Mail, Phone, Linkedin, Award } from 'lucide-react';

const OfficeBearers = () => {
  const executiveCommittee = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chair",
      affiliation: "IIIT Hyderabad",
      email: "rajesh.kumar@iiit.ac.in",
      phone: "+91 98765 43210",
      bio: "Dr. Rajesh Kumar is a Professor of Computer Science at IIIT Hyderabad with over 15 years of experience in machine learning and artificial intelligence research.",
      achievements: ["IEEE Senior Member", "Best Paper Award 2023", "Outstanding Educator Award"]
    },
    {
      name: "Prof. Anitha Sharma",
      position: "Vice Chair",
      affiliation: "BITS Pilani Hyderabad",
      email: "anitha.sharma@bits-pilani.ac.in",
      phone: "+91 98765 43211",
      bio: "Prof. Anitha Sharma specializes in cybersecurity and network protocols. She has published over 50 research papers in top-tier conferences.",
      achievements: ["IEEE Fellow", "Distinguished Scientist Award", "Women in Tech Leadership Award"]
    },
    {
      name: "Dr. Suresh Patel",
      position: "Secretary",
      affiliation: "University of Hyderabad",
      email: "suresh.patel@uohyd.ac.in",
      phone: "+91 98765 43212",
      bio: "Dr. Suresh Patel is an Associate Professor focusing on distributed systems and cloud computing with extensive industry collaboration experience.",
      achievements: ["IEEE Senior Member", "Excellence in Research Award", "Industry Collaboration Award"]
    },
    {
      name: "Ms. Priya Reddy",
      position: "Treasurer",
      affiliation: "TCS Innovation Lab",
      email: "priya.reddy@tcs.com",
      phone: "+91 98765 43213",
      bio: "Ms. Priya Reddy is a Senior Research Scientist at TCS Innovation Lab, working on blockchain technology and fintech solutions.",
      achievements: ["IEEE Member", "Innovation Excellence Award", "Patent Holder (5 patents)"]
    }
  ];

  const advisoryBoard = [
    {
      name: "Dr. Venkat Rao",
      position: "Past Chair",
      affiliation: "Microsoft Research India",
      specialization: "Cloud Computing & Distributed Systems"
    },
    {
      name: "Prof. Lakshmi Narayanan",
      position: "Advisory Member",
      affiliation: "ISB Hyderabad",
      specialization: "Technology Management & Innovation"
    },
    {
      name: "Dr. Kiran Reddy",
      position: "Industry Advisor",
      affiliation: "Google India",
      specialization: "Machine Learning & AI Ethics"
    }
  ];

  const committees = [
    {
      name: "Technical Committee",
      chair: "Dr. Arun Kumar",
      members: ["Prof. Sita Devi", "Dr. Ravi Shankar", "Ms. Kavya Patel"],
      focus: "Technical workshops, conferences, and research activities"
    },
    {
      name: "Membership Committee",
      chair: "Prof. Meera Joshi",
      members: ["Dr. Amit Singh", "Ms. Neha Gupta", "Mr. Rohit Sharma"],
      focus: "Member recruitment, retention, and engagement activities"
    },
    {
      name: "Student Activities Committee",
      chair: "Dr. Prasad Reddy",
      members: ["Prof. Anjali Devi", "Ms. Pooja Kumar", "Mr. Vikram Rao"],
      focus: "Student competitions, mentorship, and career development"
    },
    {
      name: "Industry Relations Committee",
      chair: "Ms. Sunita Agarwal",
      members: ["Dr. Manoj Gupta", "Mr. Sanjay Patel", "Ms. Divya Singh"],
      focus: "Industry partnerships, internships, and job placements"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Office Bearers</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Meet our dedicated leadership team driving innovation and excellence in the tech community
          </p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive Committee
            </h2>
            <p className="text-xl text-gray-600">
              Our executive leadership team guiding the chapter's strategic direction
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {executiveCommittee.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-semibold text-lg mb-2">{member.position}</p>
                    <p className="text-gray-600 mb-4">{member.affiliation}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{member.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <a href={`mailto:${member.email}`} className="hover:text-orange-500 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>{member.phone}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600">
              Experienced leaders providing strategic guidance and mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{advisor.position}</p>
                <p className="text-gray-600 mb-3">{advisor.affiliation}</p>
                <p className="text-sm text-gray-700">{advisor.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Working Committees
            </h2>
            <p className="text-xl text-gray-600">
              Specialized committees driving specific aspects of our mission
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{committee.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Committee Chair:</p>
                  <p className="font-semibold text-orange-500">{committee.chair}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Committee Members:</p>
                  <div className="flex flex-wrap gap-2">
                    {committee.members.map((member, memberIndex) => (
                      <span 
                        key={memberIndex}
                        className="px-2 py-1 bg-white text-gray-700 rounded text-sm border"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Focus Area:</p>
                  <p className="text-gray-700">{committee.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Our Leadership</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Have questions or suggestions? Our leadership team is always available to connect with members and the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
              Contact Executive Committee
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200">
              Join a Committee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeBearers;
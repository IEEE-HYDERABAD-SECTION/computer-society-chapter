import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

const OfficeBearers = () => {
  const executiveCommittee = [
    {
      name: "Rameshchandra Ketharaju",
      position: "Chapter Chair",
      affiliation: "IEEE Computer Society Hyderabad",
      email: "chair@ieee-cs-hyd.org",
      phone: "+91 40 2345 6789",
      bio: "Rameshchandra Ketharaju leads the IEEE Computer Society Hyderabad Chapter with extensive experience in technology leadership and community building.",
      achievements: ["IEEE Senior Member", "Technology Leadership Award", "Community Excellence Award"]
    },
    {
      name: "Madhu Vadlamani",
      position: "Chapter Vice Chair",
      affiliation: "IEEE Computer Society Hyderabad",
      email: "vicechair@ieee-cs-hyd.org",
      phone: "+91 40 2345 6790",
      bio: "Madhu Vadlamani supports the chapter leadership with expertise in strategic planning and member engagement initiatives.",
      achievements: ["IEEE Member", "Strategic Planning Excellence", "Member Engagement Award"]
    },
    {
      name: "Mahesh Nirati",
      position: "Chapter Secretary",
      affiliation: "IEEE Computer Society Hyderabad",
      email: "secretary@ieee-cs-hyd.org",
      phone: "+91 40 2345 6791",
      bio: "Mahesh Nirati manages chapter communications and documentation with a focus on efficient operations and member services.",
      achievements: ["IEEE Member", "Operational Excellence", "Communication Leadership"]
    },
    {
      name: "Saritha Bantu",
      position: "Chapter Treasurer",
      affiliation: "IEEE Computer Society Hyderabad",
      email: "treasurer@ieee-cs-hyd.org",
      phone: "+91 40 2345 6792",
      bio: "Saritha Bantu oversees chapter finances and budget management with expertise in financial planning and resource allocation.",
      achievements: ["IEEE Member", "Financial Management Excellence", "Resource Optimization Award"]
    }
  ];


  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Office Bearers</h1>
          <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto px-4">
            Meet our dedicated leadership team driving innovation and excellence in the tech community
          </p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive Committee
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Our executive leadership team guiding the chapter's strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {executiveCommittee.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-semibold text-base md:text-lg mb-2">{member.position}</p>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{member.affiliation}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-sm md:text-base">{member.bio}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-orange-500 transition-colors break-all">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="px-2 md:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm"
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


      {/* Contact Leadership */}
      <section className="py-12 md:py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Connect with Our Leadership</h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto px-4">
            Have questions or suggestions? Our leadership team is always available to connect with members and the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-white text-orange-500 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 text-sm md:text-base">
              Contact Executive Committee
            </button>
            <button className="border border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
              Join a Committee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeBearers;
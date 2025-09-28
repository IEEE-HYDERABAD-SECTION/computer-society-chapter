import React from 'react';
import { Award, ExternalLink, Check, Star } from 'lucide-react';

const Membership = () => {
  const membershipTiers = [
    {
      title: "Student Membership",
      price: "₹500/year",
      description: "Perfect for undergraduate and graduate students",
      features: [
        "Access to IEEE Xplore Digital Library",
        "Student discounts on conferences and events",
        "Career development resources and webinars",
        "Networking opportunities with peers",
        "Access to IEEE educational resources",
        "Student competition participation",
        "Mentorship program access",
        "Resume building workshops"
      ],
      popular: false,
      buttonText: "Join as Student",
      color: "blue"
    },
    {
      title: "Professional Membership",
      price: "₹2,500/year",
      description: "For working professionals and researchers",
      features: [
        "Full IEEE Xplore Digital Library access",
        "Professional networking events",
        "Industry certification programs",
        "Technical publications and journals",
        "Conference presentation opportunities",
        "Professional development workshops",
        "Industry expert mentorship",
        "Career advancement resources",
        "Leadership training programs",
        "Global IEEE community access"
      ],
      popular: true,
      buttonText: "Join as Professional",
      color: "orange"
    },
    {
      title: "Corporate Membership",
      price: "Contact Us",
      description: "For organizations and companies",
      features: [
        "Multiple employee memberships",
        "Corporate event partnerships",
        "Recruitment and hiring opportunities",
        "Custom training programs",
        "Industry collaboration projects",
        "Branding and sponsorship opportunities",
        "Technical consulting services",
        "Research partnership opportunities"
      ],
      popular: false,
      buttonText: "Contact Sales",
      color: "gray"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Recognition",
      description: "Gain credibility and recognition in the global computing community"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Exclusive Resources",
      description: "Access to IEEE Xplore, publications, and cutting-edge research"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Networking Opportunities",
      description: "Connect with industry leaders and like-minded professionals"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Career Development",
      description: "Professional development programs and certification opportunities"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Join the world's largest community of computing professionals and advance your career
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join IEEE Computer Society?
            </h2>
            <p className="text-xl text-gray-600">
              Unlock exclusive benefits and opportunities for professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <div className="text-orange-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Membership
            </h2>
            <p className="text-xl text-gray-600">
              Select the membership tier that best fits your needs and career stage
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                  tier.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-8">{tier.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      tier.popular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to become a member of IEEE Computer Society
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Membership</h3>
              <p className="text-gray-700">Select the membership tier that suits your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Create Account</h3>
              <p className="text-gray-700">Register on the IEEE website with your details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Payment</h3>
              <p className="text-gray-700">Pay the membership fee securely online</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start Benefiting</h3>
              <p className="text-gray-700">Access all member benefits and resources immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Take the next step in your professional journey. Join thousands of computing professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.ieee.org/membership/join/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Join IEEE Now <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200">
              Contact Us for Questions
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are the benefits of IEEE membership?</h3>
              <p className="text-gray-700">IEEE membership provides access to cutting-edge research, professional networking, career development resources, and industry recognition.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do I renew my membership?</h3>
              <p className="text-gray-700">You can renew your membership online through the IEEE website or contact our local chapter for assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I upgrade my membership tier?</h3>
              <p className="text-gray-700">Yes, you can upgrade your membership at any time by paying the difference in membership fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
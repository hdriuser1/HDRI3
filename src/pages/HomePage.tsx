import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronRight,
  Menu,
  X,
  Target,
  TrendingUp,
  Award,
  Stethoscope,
  UserCheck,
  GraduationCap,
  ArrowUp,
  Heart
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const programs = [
    {
      icon: Shield,
      title: "Substance Abuse Intervention",
      description: "Anti-drug initiatives targeting students and youth, providing prevention education and early intervention support.",
      color: "teal",
      gradient: "from-teal-600 to-teal-700",
      link: "/programs/substance-abuse-intervention"
    },
    {
      icon: Stethoscope,
      title: "STD/HIV/AIDS Intervention",
      description: "Comprehensive healthcare services for migrant workers, including STI treatments and general healthcare since 1997.",
      color: "blue",
      gradient: "from-blue-600 to-blue-700",
      link: "/programs/std-hiv-aids-intervention"
    },
    {
      icon: UserCheck,
      title: "Rehabilitation Services",
      description: "IRCA (Integrated Rehabilitation Centre for Addicts) offering de-addiction and mental health programs.",
      color: "green",
      gradient: "from-green-600 to-green-700",
      link: "/programs/rehabilitation-services"
    },
    {
      icon: GraduationCap,
      title: "Community Education",
      description: "Educational programs focused on health awareness, prevention strategies, and community empowerment.",
      color: "orange",
      gradient: "from-orange-600 to-orange-700",
      link: "/programs/community-education"
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Specialized services for women, including reproductive health education and support programs.",
      color: "pink",
      gradient: "from-pink-600 to-pink-700",
      link: "/programs/womens-health"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Direct community engagement programs providing support and resources to vulnerable populations.",
      color: "purple",
      gradient: "from-purple-600 to-purple-700",
      link: "/programs/community-outreach"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div>
                  <div className="text-2xl font-bold text-gray-900">HDRI</div>
                  <div className="text-xs text-gray-600">Since 1985</div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-teal-50">About</a>
                <a href="#programs" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-teal-50">Programs</a>
                <a href="#impact" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-teal-50">Impact</a>
                <a href="#contact" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-teal-50">Contact</a>
                <a href="#contact" className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Get Help</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-50 transition-colors">About</a>
              <a href="#programs" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-50 transition-colors">Programs</a>
              <a href="#impact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-50 transition-colors">Impact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-50 transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-teal-600 to-teal-700 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-200 mx-3 text-center">Get Help</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700 border border-teal-200">
                <Award className="h-4 w-4 mr-2" />
                Serving the community since 1985
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforming Lives Through 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Community Care</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                For over 40 years, HDRI has been dedicated to youth development, substance abuse intervention, 
                and community health programs in Kolkata and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#programs" className="group bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  Our Programs
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="group border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Support
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/image.png" 
                  alt="HDRI community outreach workers providing healthcare services"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">40+</div>
                <div className="text-gray-600 font-medium">Years of Service</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">20K+</div>
                <div className="text-gray-600 text-sm font-medium">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full text-sm font-medium text-teal-700 border border-teal-200 mb-4">
              <Users className="h-4 w-4 mr-2" />
              About Our Organization
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About HDRI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Human Development & Research Institute is a pioneering NGO founded in 1985 in Kolkata, 
              committed to enhancing community well-being through comprehensive health and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Community development through medical, educational, financial, and rehabilitation programs 
                aimed at enhancing quality of life for all.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Combating drug and alcohol abuse, HIV/STI prevention, youth development, 
                and supporting vulnerable communities.
              </p>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Serving over 20,000 individuals through targeted interventions, 
                rehabilitation services, and community outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 mb-4 shadow-sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive services designed to address critical community health and development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <Link 
                  to={program.link} 
                  className={`text-${program.color}-600 font-medium flex items-center hover:text-${program.color}-700 group-hover:translate-x-2 transition-all duration-200`}
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact" className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Our Achievements
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Four decades of dedicated service to the community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "40+", label: "Years of Service", icon: Clock },
              { number: "20K+", label: "Lives Impacted", icon: Users },
              { number: "24/7", label: "Support Available", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-100">{stat.number}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full text-sm font-medium text-teal-700 border border-teal-200 mb-4">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach out to us for support, information, or to learn more about our programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Reach out to us for support, information, or to learn more about our programs. 
                  We're here to help you or your loved ones.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91-033-25333003",
                    color: "teal"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "hdri.cal6@gmail.com",
                    color: "blue"
                  },
                  {
                    icon: MapPin,
                    title: "IRCA De-addiction Centre",
                    content: "43/C, 1st Floor, Jorabagan, Kolkata",
                    color: "green"
                  },
                  {
                    icon: Clock,
                    title: "Operating Hours",
                    content: "Tuesday - Saturday: 10:00 AM - 6:00 PM",
                    color: "orange"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`w-12 h-12 bg-${contact.color}-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{contact.title}</div>
                      <div className="text-gray-600">{contact.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3">
                <div>
                  <div className="text-2xl font-bold">HDRI</div>
                  <div className="text-sm text-gray-400">Since 1985</div>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Human Development & Research Institute - Transforming lives through compassionate care and community development.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['About Us', 'Our Programs', 'Impact', 'Contact'].map((link, index) => (
                  <a key={index} href={`#${link.toLowerCase().replace(' ', '')}`} className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <div className="space-y-3">
                {['Substance Abuse Treatment', 'HIV/STI Prevention', 'Mental Health Support', 'Community Outreach'].map((service, index) => (
                  <div key={index} className="text-gray-400">{service}</div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Emergency Contact</h4>
              <div className="space-y-3">
                <div className="text-gray-400">24/7 Support Line</div>
                <div className="text-white font-semibold text-lg">+91-033-25333003</div>
                <div className="text-gray-400">hdri.cal6@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Human Development & Research Institute. All rights reserved. | Serving the community since 1985.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default HomePage;
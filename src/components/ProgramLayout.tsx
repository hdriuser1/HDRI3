import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ProgramLayoutProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  children: React.ReactNode;
}

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ title, icon: Icon, gradient, children }) => {
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
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-teal-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <a href="/#contact" className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${gradient} py-20 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <div className="flex justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help or Have Questions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our team is here to provide support and answer any questions about our programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Phone, title: "Call Us", content: "+91-033-25333003", color: "teal" },
                { icon: Mail, title: "Email", content: "hdri.cal6@gmail.com", color: "blue" },
                { icon: MapPin, title: "Visit Us", content: "43/C, 1st Floor, Jorabagan, Kolkata", color: "green" },
                { icon: Clock, title: "Hours", content: "Tue-Sat: 10AM-6PM", color: "orange" }
              ].map((contact, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-12 h-12 bg-${contact.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{contact.title}</div>
                  <div className="text-gray-600 text-sm">{contact.content}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="/#contact" 
                className="inline-flex items-center bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-3 mb-4">
              <div>
                <div className="text-2xl font-bold">HDRI</div>
                <div className="text-sm text-gray-400">Since 1985</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Human Development & Research Institute - Transforming lives through compassionate care and community development.
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400">
                © 2024 Human Development & Research Institute. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProgramLayout;
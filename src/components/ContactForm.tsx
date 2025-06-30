import React, { useState, FormEvent } from 'react';
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Redirecting to Gmail...'
    });

    try {
      // Create Gmail compose URL with form data
      const recipient = encodeURIComponent('hdri.cal6@gmail.com');
      const subject = encodeURIComponent(`HDRI Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Dear HDRI Team,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}\n\n` +
        `---\n` +
        `This message was sent from the HDRI website contact form.`
      );
      
      // Gmail compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
      
      // Open Gmail in a new tab
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      
      // Show success message
      setStatus({
        type: 'success',
        message: 'Gmail has opened in a new tab with your pre-filled message. Simply click "Send" to submit your inquiry!'
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
        
        // Reset status after form is cleared
        setTimeout(() => {
          setStatus({
            type: 'idle',
            message: ''
          });
        }, 5000);
      }, 2000);

    } catch (error) {
      console.error('Error opening Gmail:', error);
      
      // Fallback to mailto link
      const subject = encodeURIComponent(`HDRI Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Dear HDRI Team,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}\n\n` +
        `---\n` +
        `This message was sent from the HDRI website contact form.`
      );
      
      const mailtoLink = `mailto:hdri.cal6@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setStatus({
        type: 'success',
        message: 'Your default email client should open with the pre-filled message. If Gmail didn\'t open, please check your default email settings.'
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mr-3">
          <Send className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Send us a Message</h3>
      </div>
      
      {/* Status Message */}
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 border transition-all duration-200 ${
          status.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' :
          status.type === 'error' ? 'bg-red-50 text-red-800 border-red-200' :
          'bg-blue-50 text-blue-800 border-blue-200'
        }`}>
          {status.type === 'success' && <CheckCircle className="h-5 w-5 flex-shrink-0" />}
          {status.type === 'error' && <AlertCircle className="h-5 w-5 flex-shrink-0" />}
          {status.type === 'loading' && <Loader2 className="h-5 w-5 flex-shrink-0 animate-spin" />}
          <span className="text-sm font-medium">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Program Information">Program Information</option>
            <option value="Rehabilitation Services">Rehabilitation Services</option>
            <option value="Emergency Support">Emergency Support</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 resize-vertical bg-white hover:border-gray-400"
            placeholder="Tell us how we can help you..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {status.type === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Opening Gmail...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send via Gmail
            </>
          )}
        </button>
      </form>

      {/* Alternative Contact Info */}
      <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl">
        <h4 className="text-sm font-semibold text-teal-800 mb-3 flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          How it works
        </h4>
        <div className="space-y-2 text-sm text-teal-700">
          <p>
            1. Fill out the form above with your details
          </p>
          <p>
            2. Click "Send via Gmail" to open Gmail in a new tab
          </p>
          <p>
            3. Your message will be pre-filled - just click "Send"!
          </p>
          <div className="mt-4 pt-3 border-t border-teal-200">
            <p>
              <strong>Alternative:</strong> Email directly to 
              <a href="mailto:hdri.cal6@gmail.com" className="font-semibold underline ml-1 hover:text-teal-800 transition-colors">
                hdri.cal6@gmail.com
              </a>
              {' '}or call 
              <a href="tel:+910332533003" className="font-semibold underline hover:text-teal-800 transition-colors">
                +91-033-25333003
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
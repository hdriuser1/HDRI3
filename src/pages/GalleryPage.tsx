import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - in a real application, these would come from a database or CMS
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community health workshop session",
      title: "Community Health Workshop",
      description: "Educational session on health awareness and prevention strategies"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Medical outreach program",
      title: "Medical Outreach Program",
      description: "Providing healthcare services to underserved communities"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Youth counseling session",
      title: "Youth Counseling Session",
      description: "Individual counseling for substance abuse prevention"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community gathering",
      title: "Community Gathering",
      description: "Building stronger community connections and support networks"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/6647032/pexels-photo-6647032.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Health screening camp",
      title: "Health Screening Camp",
      description: "Free health checkups and diagnostic services"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7551669/pexels-photo-7551669.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Educational workshop",
      title: "Educational Workshop",
      description: "Training session on HIV/AIDS prevention and awareness"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/6647033/pexels-photo-6647033.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Rehabilitation center",
      title: "IRCA Rehabilitation Center",
      description: "Our integrated rehabilitation facility for addiction treatment"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/7551670/pexels-photo-7551670.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Women's health program",
      title: "Women's Health Program",
      description: "Specialized healthcare services for women in the community"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6647034/pexels-photo-6647034.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community outreach team",
      title: "Community Outreach Team",
      description: "Our dedicated team reaching out to vulnerable populations"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/7551671/pexels-photo-7551671.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Group therapy session",
      title: "Group Therapy Session",
      description: "Peer support and group counseling for recovery"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mobile health unit",
      title: "Mobile Health Unit",
      description: "Bringing healthcare services directly to communities"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/7551672/pexels-photo-7551672.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Volunteer training",
      title: "Volunteer Training",
      description: "Training community volunteers for health education"
    },
    {
      id: 13,
      src: "https://images.pexels.com/photos/6647036/pexels-photo-6647036.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Family counseling",
      title: "Family Counseling",
      description: "Supporting families affected by addiction and health issues"
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/7551673/pexels-photo-7551673.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community event",
      title: "Community Event",
      description: "Annual community health fair and awareness event"
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Medical consultation",
      title: "Medical Consultation",
      description: "One-on-one medical consultations with healthcare professionals"
    },
    {
      id: 16,
      src: "https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Youth program",
      title: "Youth Development Program",
      description: "Empowering young people through education and skill development"
    },
    {
      id: 17,
      src: "https://images.pexels.com/photos/6647038/pexels-photo-6647038.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Support group meeting",
      title: "Support Group Meeting",
      description: "Peer support groups for individuals in recovery"
    },
    {
      id: 18,
      src: "https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Health education materials",
      title: "Health Education Materials",
      description: "Developing culturally appropriate educational resources"
    },
    {
      id: 19,
      src: "https://images.pexels.com/photos/6647039/pexels-photo-6647039.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community partnership",
      title: "Community Partnership",
      description: "Collaborating with local organizations for greater impact"
    },
    {
      id: 20,
      src: "https://images.pexels.com/photos/7551676/pexels-photo-7551676.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "40th anniversary celebration",
      title: "40th Anniversary Celebration",
      description: "Celebrating four decades of service to the community"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

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
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Visual documentation of our programs, community events, and the impact we've made over four decades of service to the community.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {galleryImages[selectedImage].description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Image {selectedImage + 1} of {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default GalleryPage;
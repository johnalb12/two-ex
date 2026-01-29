import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder photos - will be replaced with actual trip photos
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      caption: 'Golden Gate Bridge',
      day: 'Saturday'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800',
      caption: 'SF Skyline',
      day: 'Thursday'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=800',
      caption: 'SF Streets',
      day: 'Friday'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800',
      caption: 'City Lights',
      day: 'Saturday'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=800',
      caption: 'Concert Vibes',
      day: 'Friday'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      caption: 'Epic Moments',
      day: 'Sunday'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') navigatePhoto('next');
    if (e.key === 'ArrowLeft') navigatePhoto('prev');
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="photos" className="py-20 px-4 bg-gradient-to-b from-fog-sf to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-10 h-10 text-navy-seahawks" />
            <h2 className="text-5xl md:text-6xl font-bebas text-navy-seahawks">
              Photo Gallery
            </h2>
          </div>
          <p className="text-xl text-grey-seahawks">
            Memories from an epic weekend
          </p>
          <p className="text-sm text-grey-seahawks mt-2 italic">
            (Placeholder photos - will be filled with actual trip photos!)
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-seahawks via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-poppins font-semibold">{photo.caption}</p>
                  <p className="text-green-seahawks text-sm">{photo.day}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Photos CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-navy-seahawks text-white px-8 py-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6" />
              <span className="text-lg font-poppins">
                More photos coming after the trip!
              </span>
              <span className="text-2xl">📸</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-grey-seahawks transition-colors z-10"
          >
            <X className="w-6 h-6 text-navy-seahawks" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('prev');
            }}
            className="absolute left-4 p-3 bg-white rounded-full hover:bg-grey-seahawks transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8 text-navy-seahawks" />
          </button>

          {/* Photo */}
          <div className="max-w-5xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-poppins font-semibold">
                {selectedPhoto.caption}
              </p>
              <p className="text-green-seahawks">{selectedPhoto.day}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('next');
            }}
            className="absolute right-4 p-3 bg-white rounded-full hover:bg-grey-seahawks transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8 text-navy-seahawks" />
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md px-4 py-2 rounded-full">
            <p className="text-white font-poppins">
              {currentIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

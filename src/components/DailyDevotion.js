"use client";
import { useState, useEffect } from 'react';
import { fetchPexelsImages } from '../utils/pexels';
import { downloadFile } from '../utils/download';
import Lightbox from './Lightbox';

export default function DailyDevotion() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Ganesha');

 
const filters = [
  { label: 'सभी', query: 'hindu god authentic' },
  { label: 'गणेश', query: 'ganesha authentic' },
  { label: 'शिव', query: 'lord shiva authentic' },
  { label: 'कृष्ण', query: 'krishna authentic' },
  { label: 'हनुमान', query: 'hanuman authentic' },
  { label: 'दुर्गा', query: 'durga authentic' },
  { label: 'राम', query: 'lord ram authentic' },
];

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchPexelsImages(activeFilter, 12);
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, [activeFilter]);

  const handleDownload = (url, title) => {
    downloadFile(url, `${title}.jpg`);
  };

  return (
    <section id='img' className="section-padding light-section">
      <div className="container">
        <div className="text-center mb-10">
  <h2 className="section-title text-saffron">दिव्य गैलरी</h2>
  <p className="section-subtitle">प्रामाणिक भक्ति वॉलपेपर</p>
</div>

        <div className="filter-tags">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`filter-tag ${activeFilter === filter.query ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.query)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="wallpaper-grid">
          {loading ? (
            <div className="text-center w-full col-span-full py-20">
              <div className="loader-spinner"></div>
              <p>Loading divine images...</p>
            </div>
          ) : (
            images.map((image) => (
              <div 
                key={image.id} 
                className="wallpaper-card glass-effect premium-card animate-fade-in"
                onClick={() => setSelectedImage(image)}
              >
                <div className="wallpaper-img-wrapper">
                  <img src={image.src.large} alt={image.alt || 'Devotional'} />
                  <div className="wallpaper-actions">
                    <span className="btn-expand">Expand ⤢</span>
                  </div>
                </div>
                <div className="premium-card-overlay">
                  <span className="photographer-minimal">@{image.photographer}</span>
                </div>
              </div>
            ))
          )}
        </div>
       
      </div>

      <Lightbox 
        content={selectedImage} 
        type="image" 
        onClose={() => setSelectedImage(null)} 
        onDownload={handleDownload}
      />
    </section>
  );
}
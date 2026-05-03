"use client";
import { useState } from 'react';

export default function VideoGallery() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    { 
      id: 1, 
      title: "सनातन धर्म का वास्तविक अर्थ", 
      image: "/images/hero.png",
      // Placeholder YouTube video ID, user can replace this with their own Tejomarg video ID
      videoId: "ysz5S6PUM-U" 
    },
    { 
      id: 2, 
      title: "सच्चे साधकों की अनसुनी कहानियाँ", 
      image: "/images/sadhu.png",
      videoId: "aqz-KE-bpKQ"
    },
    { 
      id: 3, 
      title: "दैनिक ध्यान और शांति के उपाय", 
      image: "/images/hero.png",
      videoId: "jNQXAC9IVRw"
    },
  ];

  return (
    <section className="section-padding light-section">
      <div className="container">
        <h2 className="section-title">फीचर्ड वीडियो (Featured Videos)</h2>
        <p className="section-subtitle">यूट्यूब और इंस्टाग्राम पर हमारे नवीनतम विचार और ज्ञानवर्धक चर्चाएँ</p>
        
        <div className="card-grid" style={{ marginTop: '3rem' }}>
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              {playingVideo === video.id ? (
                <div style={{ width: '100%', aspectRatio: '16/9' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div 
                  className="video-thumbnail" 
                  onClick={() => setPlayingVideo(video.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={video.image} alt={video.title} />
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
              )}
              <div className="video-info">
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{video.title}</h4>
                <button 
                  onClick={() => setPlayingVideo(video.id)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--primary-saffron)', 
                    fontWeight: '600', 
                    fontSize: '0.9rem', 
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  {playingVideo === video.id ? "Now Playing" : "Watch Now \u2192"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

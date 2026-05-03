"use client";
import { useState, useEffect } from 'react';

export default function AudioPlayer({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentTrack) {
      setIsPlaying(true);
      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div className="sticky-audio-player animate-slide-up">
      <div className="player-progress-bar">
        <div className="player-progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="container player-controls-wrapper">
        <div className="player-track-info">
          <div className="track-thumb">🎵</div>
          <div className="track-details">
            <span className="track-name">{currentTrack.title}</span>
            <span className="track-artist">{currentTrack.artist}</span>
          </div>
        </div>
        
        <div className="player-main-controls">
          <button className="player-btn">⏮</button>
          <button className="player-play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="player-btn">⏭</button>
        </div>
        
        <div className="player-extra-controls">
          <span className="player-time">0:{progress < 10 ? `0${progress}` : progress} / {currentTrack.duration}</span>
          <button className="player-btn">✕</button>
        </div>
      </div>
    </div>
  );
}

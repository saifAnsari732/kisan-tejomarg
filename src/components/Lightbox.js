"use client";

export default function Lightbox({ content, type, onClose, onDownload }) {
  if (!content) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        
        <div className="lightbox-content">
          {type === 'image' ? (
            <img src={content.src.original || content.src.large} alt={content.alt} />
          ) : (
            <video controls autoPlay src={content.video_files[0].link}></video>
          )}
        </div>

        <div className="lightbox-footer">
          <div className="lightbox-info">
            <h3>{content.alt || (type === 'image' ? 'Divine Wallpaper' : 'Devotional Video')}</h3>
            <p>By {content.photographer || content.user.name}</p>
          </div>
          <button 
            className="btn btn-primary btn-pill"
            onClick={() => onDownload(type === 'image' ? (content.src.original || content.src.large) : content.video_files[0].link, `devotional-${content.id}`)}
          >
            Download {type === 'image' ? 'Image' : 'Video'} ⬇️
          </button>
        </div>
      </div>
    </div>
  );
}

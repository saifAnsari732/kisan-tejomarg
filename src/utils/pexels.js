const PEXELS_API_KEY = 'l33CykC4ZxxFtymHeo528WWImzD8oJpJnPM87wn0Ub04wHSfz8tXGEfk'; 

// High-quality, authentic Hindu Deity images from Pexels (Verified)
const FALLBACK_IMAGES = [
  'https://images.pexels.com/photos/4595295/pexels-photo-4595295.jpeg',
  'https://images.pexels.com/photos/12438508/pexels-photo-12438508.jpeg',
  'https://images.pexels.com/photos/28343163/pexels-photo-28343163.jpeg',
  'https://images.pexels.com/photos/30816806/pexels-photo-30816806.jpeg',
  'https://images.pexels.com/photos/29511741/pexels-photo-29511741.jpeg',
  'https://images.pexels.com/photos/28989766/pexels-photo-28989766.jpeg',
  'https://images.pexels.com/photos/15902534/pexels-photo-15902534.jpeg',
  'https://images.pexels.com/photos/8295790/pexels-photo-8295790.jpeg',
  'https://images.pexels.com/photos/35870462/pexels-photo-35870462.jpeg',
  'https://images.pexels.com/photos/12556091/pexels-photo-12556091.jpeg'
];

export async function fetchPexelsImages(query = 'hindu god', perPage = 25) {
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });
    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos;
    }
    throw new Error('No photos found in Pexels response');
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    return FALLBACK_IMAGES.slice(0, perPage).map((url, i) => ({
      id: i,
      src: { 
        large: url,
        original: url
      },
      photographer: 'Pexels Artist',
      alt: `Authentic Devotional Image ${i + 1}`
    }));
  }
}

export async function fetchPexelsVideos(query = 'hindu devotion', perPage = 25) {
  try {
    const response = await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=${perPage}`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });
    const data = await response.json();
    return data.videos || [];
  } catch (error) {
    console.error('Error fetching Pexels videos:', error);
    return [];
  }
}

import { useState, useEffect } from 'react';
import { galleryItems as staticCuratedItems, GalleryItem } from '../data/galleryData';

interface ApiMediaRecord {
  id: string;
  filename: string;
  storage_url: string;
  category: string;
  title?: string;
  caption?: string;
  alt_text?: string;
  created_at: string;
}

function mapCategoryToGalleryCategory(
  rawCat: string
): { category: 'STAGE' | 'BACKDROP' | 'ENTRANCE' | 'RECEPTION' | 'ARRANGEMENTS'; categoryLabel: string } {
  const normalized = (rawCat || '').toLowerCase().trim();

  if (normalized.includes('stage') || normalized.includes('mandap') || normalized.includes('curtain')) {
    return { category: 'STAGE', categoryLabel: 'Wedding Stage' };
  }
  if (normalized.includes('backdrop') || normalized.includes('wall') || normalized.includes('blind') || normalized.includes('wallpaper')) {
    return { category: 'BACKDROP', categoryLabel: 'Floral Backdrops' };
  }
  if (normalized.includes('entrance') || normalized.includes('arch') || normalized.includes('pathway') || normalized.includes('carpet')) {
    return { category: 'ENTRANCE', categoryLabel: 'Entrance Décor' };
  }
  if (normalized.includes('reception') || normalized.includes('engagement') || normalized.includes('furniture') || normalized.includes('sofa')) {
    return { category: 'RECEPTION', categoryLabel: 'Reception & Engagement' };
  }

  // Haldi, Mehendi, Car, Centerpiece, Decor fall under ARRANGEMENTS
  return { category: 'ARRANGEMENTS', categoryLabel: rawCat || 'Floral Arrangements' };
}

export function useGallery() {
  const [items, setItems] = useState<GalleryItem[]>(staticCuratedItems);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchDynamicGallery() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/gallery?_t=${Date.now()}`, {
          cache: 'no-store',
        });
        if (!response.ok) return;

        const data = await response.json();
        if (data.images && Array.isArray(data.images) && isMounted) {
          const dynamicItems: GalleryItem[] = data.images.map((img: ApiMediaRecord) => {
            const { category, categoryLabel } = mapCategoryToGalleryCategory(img.category);
            return {
              id: img.id,
              title: img.title || img.filename,
              category,
              categoryLabel,
              imageUrl: img.storage_url,
              caption: img.caption || img.alt_text || 'Custom event decoration by Siri Flower Decoration.',
              featured: true,
            };
          });

          // Prepend new admin uploads ahead of static curated items
          setItems([...dynamicItems, ...staticCuratedItems]);
        }
      } catch (err) {
        // Fall back gracefully to static items on network error
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchDynamicGallery();

    return () => {
      isMounted = false;
    };
  }, []);

  return { items, isLoading };
}

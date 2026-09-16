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
): { category: 'CURTAINS' | 'BLINDS' | 'FURNITURE' | 'CARPETS' | 'DECOR'; categoryLabel: string } {
  const normalized = (rawCat || '').toLowerCase().trim();

  if (normalized.includes('curtain')) {
    return { category: 'CURTAINS', categoryLabel: 'Custom Curtains' };
  }
  if (normalized.includes('blind')) {
    return { category: 'BLINDS', categoryLabel: 'Window Blinds' };
  }
  if (normalized.includes('furniture') || normalized.includes('sofa') || normalized.includes('chair')) {
    return { category: 'FURNITURE', categoryLabel: 'Custom Furniture' };
  }
  if (normalized.includes('carpet') || normalized.includes('mat')) {
    return { category: 'CARPETS', categoryLabel: 'Carpets & Mats' };
  }

  // Wallpapers, Mattresses, Home Decor, Showroom fall under DECOR
  return { category: 'DECOR', categoryLabel: rawCat || 'Home Décor' };
}

export function useGallery() {
  const [items, setItems] = useState<GalleryItem[]>(staticCuratedItems);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchDynamicGallery() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/gallery');
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
              caption: img.caption || img.alt_text || 'Custom client installation by D&D Home Decor.',
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

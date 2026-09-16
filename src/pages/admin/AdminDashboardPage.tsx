import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Upload,
  Images,
  LogOut,
  ExternalLink,
  Layers,
  Clock,
  Sparkles,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { businessConfig } from '../../data/config';

interface MediaRecord {
  id: string;
  filename: string;
  storage_url: string;
  category: string;
  title?: string;
  caption?: string;
  created_at: string;
}

export const AdminDashboardPage: React.FC = () => {
  const { username, logout } = useAdminAuth();
  const navigate = useNavigate();

  const [images, setImages] = useState<MediaRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery');
      const data = await response.json();
      if (data.images) {
        setImages(data.images);
      }
    } catch (err) {
      console.error('Failed to load gallery stats:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  // Group by category
  const categoriesMap: { [key: string]: number } = {
    Curtains: 0,
    Blinds: 0,
    Furniture: 0,
    'Carpets & Mats': 0,
    'Home Décor': 0,
    Mattresses: 0,
    Wallpapers: 0,
    Showroom: 0,
  };

  images.forEach((img) => {
    if (categoriesMap[img.category] !== undefined) {
      categoriesMap[img.category]++;
    } else {
      categoriesMap[img.category] = 1;
    }
  });

  const recentUploads = images.slice(0, 5);

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Top Admin Navigation Bar */}
      <header className="bg-espresso text-ivory border-b border-stone-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-serif text-xl tracking-[0.08em] font-normal text-ivory">
              {businessConfig.name}
            </span>
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-warm-gold/20 text-warm-gold-light border border-warm-gold/30">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <a
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 text-stone-300 hover:text-ivory transition-colors"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <div className="h-4 w-[1px] bg-stone-700 hidden sm:block" />

            <div className="flex items-center space-x-2 text-stone-300">
              <span className="text-[11px] text-stone-400">Signed in as:</span>
              <span className="font-medium text-ivory">{username || 'admin'}</span>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
              DASHBOARD OVERVIEW
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
              Media &amp; Gallery Management
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 font-light pt-1">
              Upload, organize, and manage authentic photos displayed on the D&amp;D Home Decor public website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/admin/gallery?tab=upload"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-warm-gold hover:bg-warm-gold-light text-espresso text-xs uppercase tracking-[0.14em] font-semibold rounded shadow-subtle transition-all"
            >
              <Upload className="w-4 h-4 text-espresso" />
              <span>Upload Photos</span>
            </Link>

            <Link
              to="/admin/gallery?tab=manage"
              className="inline-flex items-center space-x-2 px-5 py-3 bg-ivory hover:bg-cream border border-stone-300 hover:border-stone-400 text-espresso text-xs uppercase tracking-[0.14em] font-medium rounded shadow-subtle transition-all"
            >
              <Images className="w-4 h-4 text-stone-600" />
              <span>Manage Gallery</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Total Uploads</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Images className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading ? '...' : images.length}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Admin-managed custom photos
              </span>
            </div>
          </div>

          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Curtains</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading ? '...' : categoriesMap.Curtains || 0}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Custom curtain installations
              </span>
            </div>
          </div>

          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Blinds &amp; Windows</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading ? '...' : categoriesMap.Blinds || 0}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Zebra, roller &amp; roman blinds
              </span>
            </div>
          </div>

          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Furniture &amp; Décor</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading
                  ? '...'
                  : (categoriesMap.Furniture || 0) +
                    (categoriesMap['Home Décor'] || 0) +
                    (categoriesMap['Carpets & Mats'] || 0)}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Sofas, chairs, rugs &amp; accents
              </span>
            </div>
          </div>
        </div>

        {/* Categories Overview & Recent Uploads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Breakdown */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded bg-ivory border border-stone-200 shadow-subtle space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-4 h-4 text-warm-gold-dark" />
                <h3 className="font-serif text-xl text-espresso font-normal">
                  Category Breakdown
                </h3>
              </div>
              <span className="text-xs text-stone-400 font-light">
                Published to public gallery
              </span>
            </div>

            <div className="space-y-2.5">
              {Object.entries(categoriesMap).map(([category, count]) => (
                <div
                  key={category}
                  className="flex items-center justify-between py-2 px-3 rounded hover:bg-cream/40 transition-colors"
                >
                  <span className="text-xs font-medium text-stone-700">{category}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-cream text-espresso font-semibold">
                      {count}
                    </span>
                    <Link
                      to={`/admin/gallery?category=${encodeURIComponent(category)}`}
                      className="text-[11px] text-warm-gold-dark hover:underline font-light"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Uploads */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded bg-ivory border border-stone-200 shadow-subtle space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-warm-gold-dark" />
                <h3 className="font-serif text-xl text-espresso font-normal">
                  Recent Uploads
                </h3>
              </div>
              <Link
                to="/admin/gallery?tab=manage"
                className="text-xs text-warm-gold-dark hover:underline flex items-center space-x-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {isLoading ? (
              <div className="py-12 text-center text-xs text-stone-400">Loading recent items...</div>
            ) : recentUploads.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <p className="text-sm text-stone-500 font-light">No photos uploaded yet.</p>
                <Link
                  to="/admin/gallery?tab=upload"
                  className="inline-flex items-center space-x-1.5 text-xs text-warm-gold-dark font-medium hover:underline"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload your first photo</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentUploads.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center space-x-3.5 p-2 rounded hover:bg-cream/40 transition-colors"
                  >
                    <img
                      src={img.storage_url}
                      alt={img.title || img.filename}
                      className="w-12 h-12 rounded object-cover border border-stone-200 bg-stone-100 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-medium text-espresso truncate">
                        {img.title || img.filename}
                      </h4>
                      <p className="text-[11px] text-stone-400 font-light truncate">
                        {img.category} • {new Date(img.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

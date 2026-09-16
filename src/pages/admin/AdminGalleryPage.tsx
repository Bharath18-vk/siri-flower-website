import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Upload,
  Images,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowLeft,
  Filter,
  Plus,
  Eye,
} from 'lucide-react';

interface MediaRecord {
  id: string;
  filename: string;
  storage_url: string;
  storage_path: string;
  category: string;
  title?: string;
  caption?: string;
  alt_text?: string;
  file_size?: number;
  created_at: string;
}

const CATEGORIES = [
  'Curtains',
  'Blinds',
  'Furniture',
  'Carpets & Mats',
  'Home Décor',
  'Mattresses',
  'Wallpapers',
  'Showroom',
];

export const AdminGalleryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'manage' ? 'manage' : 'upload';
  const initialCatFilter = searchParams.get('category') || 'ALL';

  const [activeTab, setActiveTab] = useState<'upload' | 'manage'>(initialTab);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>(initialCatFilter);

  // Gallery state
  const [images, setImages] = useState<MediaRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Upload state
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadCategory, setUploadCategory] = useState<string>('Curtains');
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadCaption, setUploadCaption] = useState<string>('');
  const [uploadAltText, setUploadAltText] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit Modal State
  const [editingItem, setEditingItem] = useState<MediaRecord | null>(null);
  const [editCategory, setEditCategory] = useState<string>('');
  const [editTitle, setEditTitle] = useState<string>('');
  const [editCaption, setEditCaption] = useState<string>('');
  const [editAltText, setEditAltText] = useState<string>('');
  const [isSavingEdit, setIsSavingEdit] = useState<boolean>(false);

  // Delete Confirmation State
  const [deletingItem, setDeletingItem] = useState<MediaRecord | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (data.images) {
        setImages(data.images);
      }
    } catch (err) {
      console.error('Error fetching gallery:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleTabChange = (tab: 'upload' | 'manage') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArr = Array.from(e.target.files);
      // Validate types & sizes
      const validFiles: File[] = [];
      const invalidFiles: string[] = [];

      filesArr.forEach((file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type.toLowerCase())) {
          invalidFiles.push(`${file.name} (unsupported format)`);
        } else if (file.size > 10 * 1024 * 1024) {
          invalidFiles.push(`${file.name} (exceeds 10MB limit)`);
        } else {
          validFiles.push(file);
        }
      });

      if (invalidFiles.length > 0) {
        setNotification({
          type: 'error',
          message: `Some files could not be added: ${invalidFiles.join(', ')}`,
        });
      }

      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Upload Submission
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setNotification({ type: 'error', message: 'Please choose at least one photo to upload.' });
      return;
    }

    setIsUploading(true);
    setNotification(null);

    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('images', file);
      });
      formData.append('category', uploadCategory);
      formData.append('title', uploadTitle);
      formData.append('caption', uploadCaption);
      formData.append('altText', uploadAltText);

      const res = await fetch('/api/gallery', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: 'success',
          message: `Successfully uploaded ${data.count} photo(s) to ${uploadCategory}!`,
        });
        // Reset form
        setSelectedFiles([]);
        setUploadTitle('');
        setUploadCaption('');
        setUploadAltText('');
        if (fileInputRef.current) fileInputRef.current.value = '';
        await fetchImages();
      } else {
        setNotification({
          type: 'error',
          message: data.error || 'Upload failed. Please try again.',
        });
      }
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'Network error occurred during upload. Please check connection.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Open Edit Modal
  const openEditModal = (item: MediaRecord) => {
    setEditingItem(item);
    setEditCategory(item.category);
    setEditTitle(item.title || '');
    setEditCaption(item.caption || '');
    setEditAltText(item.alt_text || '');
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setIsSavingEdit(true);
    try {
      const res = await fetch(`/api/gallery/${editingItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          category: editCategory,
          title: editTitle,
          caption: editCaption,
          alt_text: editAltText,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: 'success',
          message: 'Photo details successfully updated!',
        });
        setEditingItem(null);
        await fetchImages();
      } else {
        alert(data.error || 'Failed to update photo');
      }
    } catch (err) {
      alert('Error updating photo');
    } finally {
      setIsSavingEdit(false);
    }
  };

  // Delete Item
  const handleConfirmDelete = async () => {
    if (!deletingItem) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/gallery/${deletingItem.id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNotification({
          type: 'success',
          message: 'Photo successfully removed from website.',
        });
        setDeletingItem(null);
        await fetchImages();
      } else {
        alert(data.error || 'Failed to delete photo');
      }
    } catch (err) {
      alert('Error deleting photo');
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredImages =
    selectedCategoryFilter === 'ALL'
      ? images
      : images.filter((img) => img.category.toLowerCase() === selectedCategoryFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Top Header */}
      <header className="bg-espresso text-ivory border-b border-stone-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center space-x-1.5 text-xs text-stone-300 hover:text-ivory transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </Link>
            <div className="h-4 w-[1px] bg-stone-700" />
            <span className="font-serif text-lg font-normal text-ivory">Gallery Manager</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-warm-gold-light hover:underline font-light"
            >
              <span>Live Gallery</span>
              <Eye className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-4 border-b border-stone-200 pb-4">
          <button
            onClick={() => handleTabChange('upload')}
            className={`inline-flex items-center space-x-2 pb-2 text-xs uppercase tracking-[0.14em] font-medium transition-colors relative ${
              activeTab === 'upload'
                ? 'text-espresso font-semibold'
                : 'text-stone-400 hover:text-espresso'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Upload Photos</span>
            {activeTab === 'upload' && (
              <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-warm-gold" />
            )}
          </button>

          <button
            onClick={() => handleTabChange('manage')}
            className={`inline-flex items-center space-x-2 pb-2 text-xs uppercase tracking-[0.14em] font-medium transition-colors relative ${
              activeTab === 'manage'
                ? 'text-espresso font-semibold'
                : 'text-stone-400 hover:text-espresso'
            }`}
          >
            <Images className="w-4 h-4" />
            <span>Manage All Photos ({images.length})</span>
            {activeTab === 'manage' && (
              <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-warm-gold" />
            )}
          </button>
        </div>

        {/* Global Notification Banner */}
        {notification && (
          <div
            className={`p-4 rounded text-xs flex items-center justify-between space-x-3 ${
              notification.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              {notification.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              )}
              <span>
                {notification.message}
                {notification.type === 'success' && (
                  <a
                    href="/gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold ml-2 hover:text-green-950"
                  >
                    View on Live Website ↗
                  </a>
                )}
              </span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 1: UPLOAD PHOTOS */}
        {/* ======================================================== */}
        {activeTab === 'upload' && (
          <div className="bg-ivory border border-stone-200 rounded p-6 sm:p-10 shadow-subtle space-y-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
                ADD TO SHOWCASE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                Upload Authentic Work Photos
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Uploaded images will be immediately formatted and published to the public gallery under the selected category.
              </p>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-6">
              {/* File Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-stone-300 hover:border-warm-gold rounded p-8 sm:p-12 text-center cursor-pointer bg-cream/20 hover:bg-cream/40 transition-colors space-y-3"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-full bg-cream text-warm-gold-dark flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">
                    Click to select photos from your device
                  </p>
                  <p className="text-xs text-stone-400 font-light pt-1">
                    Supports JPG, JPEG, PNG, WEBP (Max 10MB each)
                  </p>
                </div>
              </div>

              {/* Selected Files Preview */}
              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span>{selectedFiles.length} file(s) selected:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedFiles([])}
                      className="text-red-600 hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="relative group rounded border border-stone-200 overflow-hidden bg-cream/30 p-2 text-xs flex flex-col justify-between"
                      >
                        <p className="font-medium text-espresso truncate">{file.name}</p>
                        <p className="text-[10px] text-stone-400">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <button
                          type="button"
                          onClick={() => removeSelectedFile(idx)}
                          className="absolute top-1 right-1 p-1 bg-white/90 text-stone-600 hover:text-red-600 rounded-full shadow-sm"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Metadata Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                    Product Category *
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-stone-400 font-light block">
                    Determines which public gallery tab this appears under.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                    Photo Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Modern Villa Sheer Drapery"
                    className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                  />
                  <span className="text-[11px] text-stone-400 font-light block">
                    Displayed in the lightbox header.
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Caption / Description (Optional)
                </label>
                <textarea
                  rows={3}
                  value={uploadCaption}
                  onChange={(e) => setUploadCaption(e.target.value)}
                  placeholder="e.g. Floor-to-ceiling pleated drapes installed with recessed ceiling track."
                  className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Accessibility Alt Text (Optional)
                </label>
                <input
                  type="text"
                  value={uploadAltText}
                  onChange={(e) => setUploadAltText(e.target.value)}
                  placeholder="Describe image for screen readers"
                  className="w-full px-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold"
                />
              </div>

              <div className="pt-4 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isUploading || selectedFiles.length === 0}
                  className="px-8 py-3.5 bg-warm-gold hover:bg-warm-gold-light disabled:bg-stone-300 text-espresso text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-subtle transition-all flex items-center space-x-2"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-espresso border-t-transparent rounded-full animate-spin" />
                      <span>Uploading to Gallery...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 text-espresso" />
                      <span>Publish {selectedFiles.length > 0 ? `(${selectedFiles.length})` : ''} to Website</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: MANAGE GALLERY */}
        {/* ======================================================== */}
        {activeTab === 'manage' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-ivory border border-stone-200">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-stone-400" />
                <span className="text-xs uppercase tracking-widest font-semibold text-espresso">
                  Filter Category:
                </span>
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 bg-cream/40 border border-stone-200 rounded text-xs text-espresso focus:outline-none focus:border-warm-gold"
                >
                  <option value="ALL">All Categories ({images.length})</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => handleTabChange('upload')}
                className="inline-flex items-center space-x-1.5 text-xs text-warm-gold-dark font-medium hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Upload New Photos</span>
              </button>
            </div>

            {/* Images Grid */}
            {isLoading ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-8 h-8 border-2 border-warm-gold border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-stone-400">Loading gallery records...</p>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="py-20 text-center bg-ivory rounded border border-stone-200 p-8 space-y-4">
                <p className="text-sm text-stone-500 font-light">
                  No images found in this category.
                </p>
                <button
                  onClick={() => handleTabChange('upload')}
                  className="px-6 py-2.5 bg-warm-gold text-espresso text-xs uppercase tracking-wider font-semibold rounded"
                >
                  Upload First Photo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((img) => (
                  <div
                    key={img.id}
                    className="bg-ivory border border-stone-200 rounded overflow-hidden shadow-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                        <img
                          src={img.storage_url}
                          alt={img.alt_text || img.title || img.filename}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-ivory/95 text-espresso rounded shadow-sm">
                            {img.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-1.5">
                        <h4 className="text-sm font-serif font-normal text-espresso truncate">
                          {img.title || img.filename}
                        </h4>
                        <p className="text-xs text-stone-500 font-light line-clamp-2 leading-relaxed">
                          {img.caption || 'No caption provided.'}
                        </p>
                        <p className="text-[10px] text-stone-400 font-mono pt-1">
                          Uploaded: {new Date(img.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-cream/30 border-t border-stone-200 flex items-center justify-between text-xs">
                      <button
                        onClick={() => openEditModal(img)}
                        className="inline-flex items-center space-x-1 text-stone-600 hover:text-espresso font-medium py-1 px-2 rounded hover:bg-stone-100 transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => setDeletingItem(img)}
                        className="inline-flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium py-1 px-2 rounded hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ======================================================== */}
      {/* EDIT MODAL */}
      {/* ======================================================== */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-ivory rounded max-w-lg w-full p-6 sm:p-8 space-y-5 border border-stone-300 shadow-floating">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <h3 className="font-serif text-xl text-espresso">Edit Photo Information</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="text-stone-400 hover:text-espresso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Category
                </label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-cream/30 border border-stone-200 rounded text-sm text-espresso"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Title
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-cream/30 border border-stone-200 rounded text-sm text-espresso"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Caption / Description
                </label>
                <textarea
                  rows={3}
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  className="w-full px-3 py-2 bg-cream/30 border border-stone-200 rounded text-sm text-espresso"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={editAltText}
                  onChange={(e) => setEditAltText(e.target.value)}
                  className="w-full px-3 py-2 bg-cream/30 border border-stone-200 rounded text-sm text-espresso"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 border border-stone-300 rounded text-xs uppercase tracking-wider text-stone-600 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingEdit}
                  className="px-6 py-2 bg-espresso text-ivory rounded text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 disabled:bg-stone-400"
                >
                  {isSavingEdit ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* DELETE CONFIRMATION MODAL */}
      {/* ======================================================== */}
      {deletingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-ivory rounded max-w-md w-full p-6 space-y-4 border border-red-200 shadow-floating">
            <div className="flex items-center space-x-3 text-red-600">
              <AlertCircle className="w-6 h-6 shrink-0" />
              <h3 className="font-serif text-xl text-espresso">Confirm Deletion</h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Are you sure you want to permanently delete this photo ({deletingItem.title || deletingItem.filename})?
              It will be permanently removed from storage and will no longer appear on the public website.
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setDeletingItem(null)}
                className="px-4 py-2 border border-stone-300 rounded text-xs uppercase tracking-wider text-stone-600 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-5 py-2 bg-red-600 text-white rounded text-xs uppercase tracking-wider font-semibold hover:bg-red-700 disabled:bg-red-400"
              >
                {isDeleting ? 'Deleting...' : 'Yes, Delete Photo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

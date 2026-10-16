import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Upload,
  Images,
  LogOut,
  ExternalLink,
  Layers,
  Clock,
  Flower2,
  ArrowRight,
  FolderOpen,
  KeyRound,
  ShieldCheck,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  CheckCircle2,
  Lock,
  LayoutDashboard,
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
  const { username, logout, changePassword } = useAdminAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTab = searchParams.get('tab') === 'settings' ? 'settings' : 'overview';
  const [activeTab, setActiveTab] = useState<'overview' | 'settings'>(initialTab);

  const [images, setImages] = useState<MediaRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Password Management State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Sync tab with URL if searchParams change
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'settings' && activeTab !== 'settings') {
      setActiveTab('settings');
    } else if (tabParam !== 'settings' && activeTab === 'settings' && !tabParam) {
      setActiveTab('overview');
    }
  }, [searchParams]);

  const handleTabChange = (tab: 'overview' | 'settings') => {
    setActiveTab(tab);
    setSearchParams(tab === 'settings' ? { tab: 'settings' } : {});
  };

  // Password strength policy checks
  const hasMinLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(newPassword);

  const passedRulesCount = [hasMinLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  const isMatch = confirmPassword.length > 0 && newPassword === confirmPassword;
  const isStrong = passedRulesCount === 5;
  const canSubmit = currentPassword.length > 0 && isStrong && isMatch && !isChangingPassword;

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setPasswordError(null);
    setPasswordSuccess(null);
    setIsChangingPassword(true);

    const res = await changePassword(currentPassword, newPassword, confirmPassword);
    setIsChangingPassword(false);

    if (res.success) {
      setPasswordSuccess(
        'Password successfully updated! Your current session has been terminated for security. Redirecting to login...'
      );
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        navigate('/admin/login?message=password_changed');
      }, 1600);
    } else {
      setPasswordError(res.error || 'Failed to update password. Please check your credentials.');
    }
  };

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

          <div className="flex items-center space-x-3 sm:space-x-4 text-xs">
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
              onClick={() => handleTabChange('settings')}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs transition-colors ${
                activeTab === 'settings'
                  ? 'bg-warm-gold text-espresso font-semibold'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Settings</span>
            </button>

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
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 border-b border-stone-200 pb-4">
          <button
            onClick={() => handleTabChange('overview')}
            className={`inline-flex items-center space-x-2 pb-2 text-xs uppercase tracking-[0.14em] font-medium transition-colors relative ${
              activeTab === 'overview'
                ? 'text-espresso font-semibold'
                : 'text-stone-400 hover:text-espresso'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Overview</span>
            {activeTab === 'overview' && (
              <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-warm-gold" />
            )}
          </button>

          <button
            onClick={() => handleTabChange('settings')}
            className={`inline-flex items-center space-x-2 pb-2 text-xs uppercase tracking-[0.14em] font-medium transition-colors relative ${
              activeTab === 'settings'
                ? 'text-espresso font-semibold'
                : 'text-stone-400 hover:text-espresso'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Account &amp; Password Settings</span>
            {activeTab === 'settings' && (
              <span className="absolute -bottom-4 left-0 right-0 h-[2px] bg-warm-gold" />
            )}
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: OVERVIEW */}
        {/* ======================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
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
              <span className="text-xs uppercase tracking-widest font-semibold">Stage Decoration</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading ? '...' : categoriesMap['Stage Decoration'] || categoriesMap.Curtains || 0}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Mandaps &amp; ceremonial stages
              </span>
            </div>
          </div>

          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Floral Backdrops</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading ? '...' : categoriesMap['Floral Backdrops'] || categoriesMap.Blinds || 0}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Flower walls &amp; photo booths
              </span>
            </div>
          </div>

          <div className="p-6 rounded bg-ivory border border-stone-200 shadow-subtle flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs uppercase tracking-widest font-semibold">Entrance &amp; Reception</span>
              <div className="p-2 rounded-full bg-cream text-warm-gold-dark">
                <Flower2 className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-4xl text-espresso font-normal">
                {isLoading
                  ? '...'
                  : (categoriesMap['Entrance Decoration'] || 0) +
                    (categoriesMap['Reception & Engagement'] || 0) +
                    (categoriesMap['Floral Arrangements'] || 0) +
                    (categoriesMap.Furniture || 0)}
              </span>
              <span className="text-xs text-stone-400 block font-light">
                Welcome arches &amp; celebrations
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
      </div>
    )}

    {/* ======================================================== */}
    {/* TAB 2: ACCOUNT & SECURITY SETTINGS */}
    {/* ======================================================== */}
    {activeTab === 'settings' && (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-warm-gold-dark block">
            ACCOUNT &amp; SECURITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
            Administrator Password Management
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light pt-1">
            Update your administrative credentials. Passwords are encrypted with bcrypt (12 rounds) and persisted directly to the cloud database.
          </p>
        </div>

        {/* Success Alert */}
        {passwordSuccess && (
          <div className="p-4 rounded bg-green-50 border border-green-200 text-green-800 text-xs flex items-start space-x-3 shadow-subtle">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">{passwordSuccess}</p>
              <p className="text-[11px] text-green-700 pt-0.5 font-light">
                Redirecting to administrator login screen...
              </p>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {passwordError && (
          <div className="p-4 rounded bg-red-50 border border-red-200 text-red-800 text-xs flex items-start space-x-3 shadow-subtle">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{passwordError}</span>
          </div>
        )}

        {/* Settings Card */}
        <div className="bg-ivory border border-stone-200 rounded p-6 sm:p-10 shadow-luxury space-y-6">
          <div className="flex items-center space-x-3 pb-4 border-b border-stone-100">
            <div className="p-2.5 rounded-full bg-cream text-warm-gold-dark">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-espresso font-normal">
                Change Admin Password
              </h3>
              <p className="text-[11px] text-stone-400 font-light">
                Signed in as <span className="font-medium text-espresso">{username || 'admin'}</span>
              </p>
            </div>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            {/* 1. Current Password */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                Current Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showCurrent ? 'text' : 'password'}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full pl-10 pr-12 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label={showCurrent ? 'Hide current password' : 'Show current password'}
                >
                  {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 2. New Password */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                New Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showNew ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter strong new password"
                  className="w-full pl-10 pr-12 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label={showNew ? 'Hide new password' : 'Show new password'}
                >
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Meter */}
              {newPassword.length > 0 && (
                <div className="pt-2 space-y-3">
                  {/* Visual Strength Bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-500 font-light">Password Strength:</span>
                      <span
                        className={`font-semibold ${
                          passedRulesCount <= 2
                            ? 'text-red-600'
                            : passedRulesCount <= 4
                            ? 'text-amber-600'
                            : 'text-emerald-700'
                        }`}
                      >
                        {passedRulesCount <= 1
                          ? 'Very Weak'
                          : passedRulesCount === 2
                          ? 'Weak'
                          : passedRulesCount === 3
                          ? 'Moderate'
                          : passedRulesCount === 4
                          ? 'Good'
                          : 'Strong & Secure'}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 h-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-full rounded-full transition-colors ${
                            level <= passedRulesCount
                              ? passedRulesCount <= 2
                                ? 'bg-red-500'
                                : passedRulesCount <= 4
                                ? 'bg-amber-500'
                                : 'bg-emerald-600'
                              : 'bg-stone-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Policy Checklist */}
                  <div className="p-3 bg-cream/30 rounded border border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className={`flex items-center space-x-1.5 ${hasMinLength ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                      {hasMinLength ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 mr-1" />}
                      <span>At least 8 characters</span>
                    </div>
                    <div className={`flex items-center space-x-1.5 ${hasUpper ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                      {hasUpper ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 mr-1" />}
                      <span>Uppercase letter (A-Z)</span>
                    </div>
                    <div className={`flex items-center space-x-1.5 ${hasLower ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                      {hasLower ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 mr-1" />}
                      <span>Lowercase letter (a-z)</span>
                    </div>
                    <div className={`flex items-center space-x-1.5 ${hasNumber ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                      {hasNumber ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 mr-1" />}
                      <span>Number (0-9)</span>
                    </div>
                    <div className={`flex items-center space-x-1.5 sm:col-span-2 ${hasSpecial ? 'text-emerald-700 font-medium' : 'text-stone-400'}`}>
                      {hasSpecial ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <div className="w-1.5 h-1.5 rounded-full bg-stone-300 ml-1 mr-1" />}
                      <span>Special character (!@#$%^&amp;*...)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Confirm New Password */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                Confirm New Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="w-full pl-10 pr-12 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Match Feedback */}
              {confirmPassword.length > 0 && (
                <p
                  className={`text-[11px] pt-1 flex items-center space-x-1 ${
                    isMatch ? 'text-emerald-700 font-medium' : 'text-red-600'
                  }`}
                >
                  {isMatch ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Passwords match.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 text-red-600" />
                      <span>Passwords do not match.</span>
                    </>
                  )}
                </p>
              )}
            </div>

            {/* Security Notice */}
            <div className="p-4 rounded bg-stone-50 border border-stone-200 text-stone-600 text-xs space-y-1">
              <div className="flex items-center space-x-1.5 font-medium text-espresso">
                <ShieldCheck className="w-4 h-4 text-warm-gold-dark" />
                <span>Security &amp; Session Invalidation</span>
              </div>
              <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                Updating your password will immediately invalidate all active sessions across all devices. You will be redirected to log in with your new credentials.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex items-center justify-end">
              <button
                type="submit"
                disabled={!canSubmit}
                className="px-8 py-3.5 bg-espresso hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-subtle transition-all duration-200 flex items-center space-x-2"
              >
                {isChangingPassword ? (
                  <>
                    <div className="w-4 h-4 border-2 border-ivory border-t-transparent rounded-full animate-spin" />
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4 text-warm-gold-light" />
                    <span>Change Password</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </main>
</div>
);
};

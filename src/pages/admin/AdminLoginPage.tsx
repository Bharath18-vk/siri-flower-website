import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Lock, User, ArrowLeft, AlertCircle, ShieldCheck, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { businessConfig } from '../../data/config';

export const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [searchParams] = useSearchParams();
  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('message') === 'password_changed') {
      setSuccessMessage('Password successfully updated! Please log in with your new password.');
    }
  }, [searchParams]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await login(username, password);
    setIsSubmitting(false);

    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.error || 'Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      {/* Top Header */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-stone-500 hover:text-espresso transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Main Website</span>
        </Link>
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
          SECURE PORTAL
        </span>
      </div>

      {/* Login Box */}
      <div className="w-full max-w-md mx-auto my-12">
        <div className="bg-ivory border border-stone-200 rounded p-8 sm:p-10 shadow-luxury space-y-6">
          <div className="text-center space-y-2">
            <span className="font-serif text-2xl tracking-[0.08em] font-normal text-espresso block">
              {businessConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-warm-gold-dark block">
              ADMINISTRATOR LOGIN
            </span>
            <p className="text-xs text-stone-500 font-light pt-1">
              Sign in to manage website photos, galleries, and collections.
            </p>
          </div>

          {successMessage && (
            <div className="p-3.5 rounded bg-green-50 border border-green-200 text-green-800 text-xs flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{successMessage}</span>
            </div>
          )}

          {error && (
            <div className="p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest font-semibold text-espresso block">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-cream/30 border border-stone-200 rounded text-sm text-espresso focus:outline-none focus:border-warm-gold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-espresso hover:bg-stone-800 disabled:bg-stone-400 text-ivory text-xs uppercase tracking-[0.16em] font-semibold rounded shadow-subtle transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-ivory border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-warm-gold-light" />
                  <span>Access Dashboard</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl w-full mx-auto text-center">
        <p className="text-[11px] text-stone-400 font-light">
          © {new Date().getFullYear()} {businessConfig.name} • Internal Admin Portal
        </p>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';


const SocialRegistration = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);
  const navigate = useNavigate();

  const translations = {
    en: {
      orContinueWith: 'Or continue with',
      continueWithGoogle: 'Continue with Google',
      continueWithFacebook: 'Continue with Facebook'
    },
    es: {
      orContinueWith: 'O continúa con',
      continueWithGoogle: 'Continuar con Google',
      continueWithFacebook: 'Continuar con Facebook'
    },
    fr: {
      orContinueWith: 'Ou continuez avec',
      continueWithGoogle: 'Continuer avec Google',
      continueWithFacebook: 'Continuer avec Facebook'
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    
    try {
      // Mock Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Google registration
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({
        id: 2,
        fullName: 'John Smith',
        email: 'john.smith@gmail.com',
        provider: 'google',
        createdAt: new Date().toISOString()
      }));
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Google registration failed:', error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleFacebookSignUp = async () => {
    setIsFacebookLoading(true);
    
    try {
      // Mock Facebook OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Facebook registration
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({
        id: 3,
        fullName: 'Sarah Johnson',
        email: 'sarah.johnson@facebook.com',
        provider: 'facebook',
        createdAt: new Date().toISOString()
      }));
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Facebook registration failed:', error);
    } finally {
      setIsFacebookLoading(false);
    }
  };

  const t = translations[currentLanguage];

  return (
    <div className="space-y-4">
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-surface text-text-secondary font-caption">
            {t.orContinueWith}
          </span>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="space-y-3">
        {/* Google */}
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={handleGoogleSignUp}
          loading={isGoogleLoading}
          disabled={isGoogleLoading || isFacebookLoading}
          className="flex items-center justify-center space-x-3"
        >
          {!isGoogleLoading && (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          )}
          <span>{t.continueWithGoogle}</span>
        </Button>

        {/* Facebook */}
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={handleFacebookSignUp}
          loading={isFacebookLoading}
          disabled={isGoogleLoading || isFacebookLoading}
          className="flex items-center justify-center space-x-3"
        >
          {!isFacebookLoading && (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="#1877F2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          )}
          <span>{t.continueWithFacebook}</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialRegistration;
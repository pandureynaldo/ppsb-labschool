"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gen-search-widget': {
        configId: string;
        triggerId: string;
      };
    }
  }
}

interface CaptchaSearchProps {
  onVerified: (isVerified: boolean) => void;
}

export default function CaptchaSearch({ onVerified }: CaptchaSearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load Google AI search widget script only in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const script = document.createElement("script");
      script.src = "https://cloud.google.com/ai/gen-app-builder/client?hl=en_US";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(
          'script[src*="gen-app-builder"]'
        );
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fallback search for development when AI widget is not available
    if (process.env.NODE_ENV === 'development') {
      performFallbackSearch(searchValue);
    }
  };

  const performFallbackSearch = (query: string) => {
    if (!query.trim()) return;
    
    // Simple fallback search through FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')?.textContent?.toLowerCase() || '';
      const answer = item.querySelector('.faq-answer')?.textContent?.toLowerCase() || '';
      const searchQuery = query.toLowerCase();
      
      if (question.includes(searchQuery) || answer.includes(searchQuery)) {
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const el = item as HTMLElement;
        el.style.backgroundColor = '#fef3c7';
        el.style.border = '2px solid #f59e0b';
        setTimeout(() => {
          el.style.backgroundColor = '';
          el.style.border = '';
        }, 3000);
      }
    });
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Cari Pertanyaan Anda</h2>
      <p className="search-subtitle">
        Gunakan fitur pencarian cerdas untuk menemukan jawaban yang Anda
        butuhkan
      </p>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-input-container">
          <input
            ref={searchInputRef}
            placeholder="Ketik pertanyaan Anda di sini..."
            id="searchWidgetTrigger"
            className="search-input"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </form>

      {/* Google AI Search Widget - Only in production and when enabled */}
      {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH === 'true' && (
        <gen-search-widget
          configId={process.env.NEXT_PUBLIC_GOOGLE_AI_CONFIG_ID || "6bde4c36-4e03-4c72-9ab9-6cbe4366d3a7"}
          triggerId="searchWidgetTrigger">
        </gen-search-widget>
      )}
      
      {/* Development mode notice */}
      {process.env.NODE_ENV === 'development' && (
        <div className="dev-notice">
          <p>🔧 <strong>Development Mode:</strong> Menggunakan pencarian lokal. Tekan Enter untuk mencari di FAQ.</p>
        </div>
      )}
      
      {/* Production mode notice when AI Search is disabled */}
      {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_AI_SEARCH !== 'true' && (
        <div className="dev-notice">
          <p>🔧 <strong>Production Mode:</strong> Menggunakan pencarian lokal. Tekan Enter untuk mencari di FAQ.</p>
        </div>
      )}
      
      {/* Powered by Gemini AI */}
      <div className="powered-by">
        <p>
          Powered by 
          <span className="gemini-logo">
            <Image 
              src="/gemini-icon.png" 
              alt="Gemini AI" 
              width={20} 
              height={20}
              className="gemini-icon-img"
              priority={false}
            />
          </span>
          <strong>Gemini AI</strong>
        </p>
      </div>
    </div>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gen-search-widget": {
        configId: string;
        triggerId: string;
        className?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

interface SearchWidgetProps {
  onSearch?: (query: string) => void;
}

export default function SearchWidget({ onSearch }: SearchWidgetProps) {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load Google AI search widget script
  useEffect(() => {
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
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
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

      {/* Google AI Search Widget - Always visible */}
      <div
        style={{ padding: "4rem 0 0 0" }}  
      >
        <gen-search-widget
          configId="6bde4c36-4e03-4c72-9ab9-6cbe4366d3a7"
          triggerId="searchWidgetTrigger"
          style={{ margin: "4rem 0 0 0" }}
        ></gen-search-widget>
      </div>

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

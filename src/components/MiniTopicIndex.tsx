import React, { useState, useEffect } from 'react';
import { 
  List, 
  ArrowUpRight, 
  X, 
  Check, 
  Bookmark,
  Layers
} from 'lucide-react';
import { PageTopic } from '../types';

interface MiniTopicIndexProps {
  topics: PageTopic[];
  activeTopicId?: string;
  onTopicClick?: (topicId: string) => void;
  pageTitle?: string;
}

export const MiniTopicIndex: React.FC<MiniTopicIndexProps> = ({
  topics,
  activeTopicId,
  onTopicClick,
  pageTitle
}) => {
  const [currentActive, setCurrentActive] = useState<string>(activeTopicId || (topics[0]?.id || ''));
  // The square remains as a hidden button by default, expanding only when clicked
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState<boolean>(false);

  // If there are many topics (more than 5), "too many topics" mode is active
  const hasManyTopics = topics.length > 5;

  // Track active topic on scroll
  useEffect(() => {
    if (activeTopicId) {
      setCurrentActive(activeTopicId);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // offset for sticky header

      for (let i = topics.length - 1; i >= 0; i--) {
        const topic = topics[i];
        const el = document.getElementById(topic.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentActive(topic.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topics, activeTopicId]);

  // Escape key handler to collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
        setIsTopMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTopic = (topicId: string) => {
    setCurrentActive(topicId);
    setIsExpanded(false);
    setIsTopMenuOpen(false);

    if (onTopicClick) {
      onTopicClick(topicId);
    }

    const targetEl = document.getElementById(topicId);
    if (targetEl) {
      const headerOffset = 90;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!topics || topics.length === 0) return null;

  return (
    <>
      {/* ========================================================= */}
      {/* 1. TOP MENU DRAWER ("Open in the menu above if too many topics") */}
      {/* ========================================================= */}
      {isTopMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex flex-col justify-start animate-in fade-in duration-200">
          <div 
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsTopMenuOpen(false);
            }} 
            className="w-full flex-1"
          >
            <div className="bg-[#f2efeb] border-b-2 border-[#1a1a1c] shadow-2xl max-h-[85vh] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">
                
                {/* Header Bar of Top Menu */}
                <div className="flex items-center justify-between border-b border-[rgba(26,26,28,0.12)] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-[#1a1a1c] text-[#f2efeb] flex items-center justify-center border border-white">
                      <List className="w-5 h-5 text-[#c52222]" />
                    </div>
                    <div>
                      <div className="mono text-[10px] text-[#c52222] font-bold uppercase tracking-wider">
                        Page Topics Navigator &bull; {topics.length} Sections Available
                      </div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1a1a1c]">
                        {pageTitle || 'Page Topics Index'}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsTopMenuOpen(false)}
                    className="p-2 px-3 rounded-sm bg-white hover:bg-[#1a1a1c] text-[#1a1a1c] hover:text-[#f2efeb] border border-[rgba(26,26,28,0.15)] transition-colors cursor-pointer flex items-center gap-1.5 text-xs mono font-bold shadow-xs"
                  >
                    <span>Close Menu (Esc)</span>
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Topics Grid in Top Menu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-1">
                  {topics.map((t, idx) => {
                    const isActive = currentActive === t.id;
                    const indexNumber = String(idx + 1).padStart(2, '0');

                    return (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTopic(t.id)}
                        className={`p-3.5 rounded-sm text-left transition-all flex flex-col justify-between border cursor-pointer group ${
                          isActive
                            ? 'bg-[#1a1a1c] text-[#f2efeb] border-[#1a1a1c] shadow-md scale-[1.01]'
                            : 'bg-white text-[#1a1a1c] hover:border-[#1a1a1c] hover:bg-white border-[rgba(26,26,28,0.12)]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`mono text-xs font-bold ${isActive ? 'text-[#c52222]' : 'text-[#1a1a1c]/60'}`}>
                            #{indexNumber}
                          </span>
                          {t.badge && (
                            <span className={`text-[10px] mono px-2 py-0.5 rounded-xs font-bold ${
                              isActive ? 'bg-[#c52222] text-white' : 'bg-[#f2efeb] text-[#1a1a1c]/80 border border-[rgba(26,26,28,0.1)]'
                            }`}>
                              {t.badge}
                            </span>
                          )}
                        </div>

                        <div className="font-serif font-bold text-sm sm:text-base leading-snug">
                          {t.label}
                        </div>

                        {t.category && (
                          <div className={`text-[11px] font-sans mt-2 truncate ${
                            isActive ? 'text-[#f2efeb]/70' : 'text-[#1a1a1c]/60'
                          }`}>
                            {t.category}
                          </div>
                        )}

                        <div className="mt-3 pt-2 border-t border-[rgba(26,26,28,0.08)] flex items-center justify-between text-[11px] mono">
                          <span className={isActive ? 'text-[#c52222] font-bold' : 'text-[#1a1a1c]/60 group-hover:text-[#c52222]'}>
                            {isActive ? '● Currently Viewing' : 'Jump to section →'}
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-[#c52222]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Footer Note */}
                <div className="pt-2 text-center text-xs text-[#1a1a1c]/60 mono">
                  Click any topic above to smoothly scroll directly to that equipment section.
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. THE MINI MENU ON THE RIGHT SIDE: SMALL SQUARE SHAPE     */}
      {/*    POSITIONED AT THE TOP RIGHT (OUT OF THE WAY OF CONTENT) */}
      {/*    REMAINS AS A HIDDEN BUTTON BY DEFAULT, EXPANDS ON CLICK */}
      {/* ========================================================= */}
      <div 
        aria-label="Topics Navigator Mini Index"
        className="fixed right-3 sm:right-6 top-32 sm:top-36 z-40 flex flex-col items-end"
      >
        {/* Hidden / Default State: Small Square Shape Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            aria-expanded={false}
            aria-label="Open topic index menu"
            title="Page Topics - Click to expand"
            className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1a1a1c] hover:bg-[#c52222] text-[#f2efeb] border-2 border-white shadow-2xl rounded-sm flex flex-col items-center justify-center relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            {/* Architectural Square Icon */}
            <List className="w-5 h-5 text-white stroke-[2.5] transition-transform group-hover:scale-110" />

            {/* Subtle hover tooltip on the left without topic number */}
            <span className="absolute right-full mr-2.5 px-2 py-1 bg-[#1a1a1c] text-[#f2efeb] text-[10px] mono font-bold uppercase rounded-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md border border-[rgba(255,255,255,0.15)]">
              Topics
            </span>
          </button>
        )}

        {/* Expanded State: Smoothly expanded menu right from the square */}
        {isExpanded && (
          <>
            {/* Click-outside backdrop to collapse back to small square */}
            <div 
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-2xs z-40" 
            />

            {/* Expanded Menu Panel positioned at top-right */}
            <div 
              role="dialog"
              aria-label="Expanded Page Topics Index"
              className="relative z-50 bg-white border-2 border-[#1a1a1c] shadow-2xl rounded-sm overflow-hidden w-72 sm:w-80 text-[#1a1a1c] animate-in zoom-in-95 origin-top-right duration-200 max-h-[calc(100vh-170px)] flex flex-col"
            >
              {/* Header Bar */}
              <div className="bg-[#1a1a1c] text-[#f2efeb] p-3 px-3.5 flex items-center justify-between border-b border-[#1a1a1c]">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#c52222]" />
                  <span className="mono text-[11px] font-bold uppercase tracking-wider">
                    Topic Index
                  </span>
                  <span className="bg-[#c52222] text-white text-[9px] mono px-1.5 py-0.2 rounded-xs font-bold">
                    {topics.length} Topics
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Button to open in the menu above if there are many topics */}
                  <button
                    onClick={() => {
                      setIsExpanded(false);
                      setIsTopMenuOpen(true);
                    }}
                    title="Open topic menu above"
                    className="text-[#f2efeb]/80 hover:text-white p-1 rounded-xs hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-0.5 text-[10px] mono"
                  >
                    <span>Above</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c52222]" />
                  </button>

                  {/* Collapse back to small square */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    title="Collapse to small square (Esc)"
                    className="text-[#f2efeb]/80 hover:text-white p-1 rounded-xs hover:bg-white/10 transition-colors cursor-pointer ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-3 space-y-2">
                
                {/* Notice when there are many topics: "Open in menu above if too many topics" */}
                {hasManyTopics && (
                  <button
                    onClick={() => {
                      setIsExpanded(false);
                      setIsTopMenuOpen(true);
                    }}
                    className="w-full bg-[#f2efeb] hover:bg-[#c52222] hover:text-white border border-[rgba(26,26,28,0.15)] p-2 rounded-xs text-[10px] mono text-left flex items-center justify-between transition-colors cursor-pointer group mb-1.5 shadow-2xs"
                  >
                    <span className="font-bold flex items-center gap-1.5">
                      <List className="w-3.5 h-3.5 text-[#c52222] group-hover:text-white" />
                      <span>{topics.length} topics: Open in menu above</span>
                    </span>
                    <span className="text-[10px] text-[#c52222] group-hover:text-white font-bold">&uarr;</span>
                  </button>
                )}

                {/* List of Topic Buttons */}
                <div className="space-y-1 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
                  {topics.map((t, idx) => {
                    const isActive = currentActive === t.id;
                    const itemNumber = String(idx + 1).padStart(2, '0');

                    return (
                      <button
                        key={t.id}
                        onClick={() => handleSelectTopic(t.id)}
                        className={`w-full text-left p-2 px-2.5 rounded-xs text-xs font-sans transition-all flex items-center justify-between cursor-pointer group border ${
                          isActive
                            ? 'bg-[#1a1a1c] text-[#f2efeb] font-bold border-[#1a1a1c] shadow-xs'
                            : 'bg-white hover:bg-[#f2efeb] text-[#1a1a1c] border-transparent hover:border-[rgba(26,26,28,0.1)]'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`mono text-[10px] font-bold shrink-0 ${isActive ? 'text-[#c52222]' : 'text-[#1a1a1c]/50'}`}>
                            #{itemNumber}
                          </span>
                          <span className="truncate text-xs leading-tight">
                            {t.shortLabel || t.label}
                          </span>
                        </div>

                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-[#c52222] shrink-0 ml-1"></span>
                        ) : (
                          t.badge && (
                            <span className="mono text-[9px] text-[#1a1a1c]/60 group-hover:text-[#c52222] shrink-0 ml-1 bg-[#f2efeb] px-1.5 py-0.2 rounded-xs">
                              {t.badge}
                            </span>
                          )
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Footer Controls */}
                <div className="pt-2 border-t border-[rgba(26,26,28,0.1)] flex items-center justify-between text-[11px] mono text-[#1a1a1c]/60 px-0.5">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="hover:text-[#c52222] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>&larr; Collapse square</span>
                  </button>

                  {hasManyTopics && (
                    <button
                      onClick={() => {
                        setIsExpanded(false);
                        setIsTopMenuOpen(true);
                      }}
                      className="text-[#c52222] font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                    >
                      <span>Top Menu</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

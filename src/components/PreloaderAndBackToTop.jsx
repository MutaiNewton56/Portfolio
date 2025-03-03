import React, { useEffect, useState } from 'react';

const PreloaderAndBackToTop = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Preloader hides after loading
    const timer = setTimeout(() => setShowPreloader(false), 2000);

    // Back to top visibility on scroll
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showPreloader && <div id="preloader"></div>}

      {showBackToTop && (
        <button
          className="back-to-top d-flex align-items-center justify-content-center"
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </button>
      )}
    </>
  );
};

export default PreloaderAndBackToTop;

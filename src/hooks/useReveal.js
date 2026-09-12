import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-zoom';

    const checkAndReveal = () => {
      const elements = document.querySelectorAll(selector);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px' }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport or near it, mark active immediately
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('active');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    const observerInstance = checkAndReveal();

    // Fallback timers to ensure dynamic content is revealed even after render transitions
    const timer1 = setTimeout(checkAndReveal, 100);
    const timer2 = setTimeout(checkAndReveal, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (observerInstance && observerInstance.disconnect) {
        observerInstance.disconnect();
      }
    };
  }, [location.pathname]);
};

export default useReveal;
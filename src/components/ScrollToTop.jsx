import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, [pathname]);  // Executes every time route changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;

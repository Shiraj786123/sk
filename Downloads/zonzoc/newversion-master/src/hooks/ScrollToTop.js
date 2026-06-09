'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollToTop = () => {
  const pathname = usePathname();

  // 1. Prevent the browser's native scroll restoration from fighting with our custom scroll
  useEffect(() => {
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    
    // 2. Temporarily force scroll-behavior to 'auto' to bypass any smooth scroll animations
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    // 3. Instantly snap to the top of the page without any "shivering" or motion
    window.scrollTo(0, 0);

    // 4. Restore your smooth scrolling on the next render frame
    const timer = requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior;
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);
};

export default useScrollToTop;
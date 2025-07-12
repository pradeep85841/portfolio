import { useState, useEffect } from "react";

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('portfolio-visited');
    
    if (!hasVisited) {
      setIsFirstVisit(true);
    }
    
    setIsLoading(false);
  }, []);

  const markAsVisited = () => {
    localStorage.setItem('portfolio-visited', 'true');
    setIsFirstVisit(false);
  };

  return {
    isFirstVisit,
    isLoading,
    markAsVisited
  };
}
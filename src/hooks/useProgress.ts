// src/hooks/useProgress.ts
import { useState, useEffect } from 'react';
export const useProgress = (lessonId: string) => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem(lessonId);
    if (stored) setDone(JSON.parse(stored));
  }, [lessonId]);
  const toggle = () => {
    setDone(!done);
    localStorage.setItem(lessonId, JSON.stringify(!done));
  };
  return { done, toggle };
};
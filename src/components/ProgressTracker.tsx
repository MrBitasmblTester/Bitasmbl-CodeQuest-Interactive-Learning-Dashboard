// src/components/ProgressTracker.tsx
import React from 'react';
import { useProgress } from '../hooks/useProgress';
const ProgressTracker: React.FC<{lessonId:string}> = ({lessonId}) => {
  const { done, toggle } = useProgress(lessonId);
  return <button onClick={toggle}>{done ? 'Completed' : 'Mark Complete'}</button>;
};
export default ProgressTracker;
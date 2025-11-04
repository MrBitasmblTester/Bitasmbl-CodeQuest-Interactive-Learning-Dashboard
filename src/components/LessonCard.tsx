// src/components/LessonCard.tsx
import React from 'react';
interface Props { title: string; completed: boolean; }
const LessonCard: React.FC<Props> = ({ title, completed }) => (
  <div>
    <h2>{title}</h2>
    <button>{completed ? 'Locked' : 'Start'}</button>
  </div>
);
export default LessonCard;
// src/components/LessonList.tsx
import React from 'react';
import LessonCard from './LessonCard';
const lessons = [{ title: 'Intro', completed: false }];
const LessonList: React.FC = () => (
  <div>
    {lessons.map((l,i) => <LessonCard key={i} {...l} />)}
  </div>
);
export default LessonList;
// src/components/StreakChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
const data = { labels: ['Mon','Tue','Wed'], datasets:[{label:'Streak', data:[1,2,3]}] };
const StreakChart: React.FC = () => <Line data={data} />;
export default StreakChart;
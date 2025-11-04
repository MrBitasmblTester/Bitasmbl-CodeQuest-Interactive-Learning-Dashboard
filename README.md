# Bitasmbl-CodeQuest-Interactive-Learning-Dashboard

A front-end web application that simulates an interactive coding lesson platform. Users can view coding modules, track progress, unlock lessons, and visualize learning streaks with reusable components and modern UI design principles.

## Tech Stack
- React
- Chart.js

## Requirements
- Use component-based design with reusable logic and props
- Store progress or completion state in local storage
- Use a chart library for visualizing data

## Installation
1. Clone the repository:
bash
git clone https://github.com/yourusername/Bitasmbl-CodeQuest-Interactive-Learning-Dashboard.git
cd Bitasmbl-CodeQuest-Interactive-Learning-Dashboard

2. Install dependencies:
bash
npm install

3. (Optional) Environment Variables
- Create a `.env` file in the project root to configure chart options:
env
REACT_APP_DEFAULT_CHART_TYPE=bar


## Usage
1. Start the development server:
bash
npm start

2. Open your browser and navigate to `http://localhost:3000`.
3. Browse coding modules, unlock lessons, and view your learning streaks on the dashboard.

## Implementation Steps
1. Initialize the project using Create React App.
2. Structure the project with `src/components`, `src/hooks`, and `src/utils` directories.
3. Build `ModuleList` and `LessonCard` components to display and manage lessons.
4. Implement a custom hook (`useProgress`) to handle progress state and sync with `localStorage`.
5. Create a `StatsChart` component using Chart.js to visualize learning streaks.
6. Pass data and configuration to the chart component via props for reusability.
7. Apply modern UI design principles with CSS modules or styled-components.
8. Test components in isolation and ensure state persistence across sessions.

(Optional) ## API Endpoints
*No external API endpoints are required for this front-end only application.*
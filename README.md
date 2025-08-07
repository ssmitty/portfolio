# Sean Smith Portfolio

A modern React TypeScript portfolio showcasing academic achievements, athletic accomplishments, professional experience, and projects.

## Features

• **About Me**: Academic background, athletic achievements, and personal interests
• **Experience**: Professional experience with detailed achievements
• **Projects**: Visual project showcase with GIF demonstrations
• **Blue Hen Theme**: University of Delaware colors and branding
• **Responsive Design**: Works on all devices
• **Modern UI**: Clean, professional interface

## Tech Stack

• React 18
• TypeScript
• CSS3 with custom properties
• Modern ES6+ features

## Getting Started

### Prerequisites

• Node.js (version 14 or higher)
• npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # Academic and athletic information
│   ├── About.css
│   ├── Experience.tsx     # Professional experience
│   ├── Experience.css
│   ├── Projects.tsx       # Project showcase
│   └── Projects.css
├── App.tsx                # Main app component
├── App.css               # Main app styles
├── index.tsx             # React entry point
└── index.css             # Global styles
```

## Adding Images

Place your images in the `public/images/` folder:
• `headshot.jpg` • Profile picture
• `gpa_celebration.jpg` • GPA celebration image
• `soccer_action.jpg` • Soccer action shot
• `public-api-demo.gif` • Public Company API demo
• `pink-path-demo.gif` • The Pink Path demo

## Available Scripts

• `npm start` • Runs the app in development mode
• `npm run build` • Builds the app for production
• `npm test` • Launches the test runner
• `npm run eject` • Ejects from Create React App (one-way operation)

## Deployment

The app can be deployed to any static hosting service like:
• GitHub Pages
• Netlify
• Vercel
• AWS S3

Run `npm run build` to create a production build in the `build` folder. 
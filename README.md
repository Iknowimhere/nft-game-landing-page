# NFT Game Landing Page

A modern, cyberpunk-themed landing page for an NFT gaming platform built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173`

## 🏗️ Architecture & Design Approach

### Component-Driven Development

The project follows a modular component architecture with clear separation of concerns:

```
src/
├── components/          # Reusable UI components
│   ├── CornerBorder.jsx    # Reusable corner border wrapper
│   ├── TechnicalInfo.jsx   # HUD-style technical data display
│   ├── ImageGrid.jsx       # NFT gallery grid component
│   ├── ExploreSection.jsx  # Hero section with CTAs
│   ├── LeaderSection.jsx   # Leaderboard and NFT showcase
│   ├── Grid.jsx           # 3D cyberpunk floor grid
│   ├── Nav.jsx            # Navigation bar
│   └── Footer.jsx         # Footer component
├── constants/           # Data management
│   └── index.js            # Centralized constants and data
├── assets/             # Static assets
│   ├── fonts/             # Custom fonts (Atomos, etc.)
│   └── images/            # Images and icons
└── pages/              # Page components
    └── Landing.jsx        # Main landing page
```

### Key Design Principles

#### 1. **DRY (Don't Repeat Yourself)**

- Created reusable `CornerBorder` component to eliminate duplicate corner styling
- Abstracted `TechnicalInfo` components for consistent HUD displays
- Unified `ImageGrid` component for NFT showcases

#### 2. **Single Responsibility Principle**

- Each component has a focused, specific purpose
- Data and presentation logic are properly separated
- Reusable components accept props for configuration

#### 3. **Centralized Data Management**

- All static data moved to `constants/index.js`
- Leader information, grid configurations centralized
- Easy to modify and maintain game data

#### 4. **Performance Optimization**

- Efficient CSS-in-JS for 3D effects
- Optimized asset loading
- Minimal bundle size through code splitting

## 🎨 Visual Design System

### Color Palette

- **Primary Background**: `#00120A` (Deep dark green)
- **Accent Green**: `#21E786` (Cyberpunk green)
- **Accent Orange**: `#FF6348` (Warning/highlight color)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#D1D5DB` (Light gray)

### Typography

- **Atomos**: Primary display font for headers
- **Orbitron**: Secondary font for UI elements
- **Voltec**: Technical/futuristic text
- **Press Start 2P**: Retro gaming elements

### Visual Effects

- **3D Perspective Grid**: CSS transforms create depth
- **Corner Borders**: Cyberpunk-style UI elements
- **Hover Animations**: Smooth transitions and feedback
- **Glowing Elements**: CSS shadows for neon effects

## 🛠️ Technology Stack

- **React 19.1.1**: Component-based UI framework
- **Vite 7.1.2**: Fast build tool and dev server
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## 📱 Responsive Design

The layout adapts to different screen sizes using:

- Tailwind's responsive utilities
- Flexible grid systems
- Scalable typography
- Mobile-first approach


## 🔧 Code Quality Features

### Reusable Components

```jsx
// Corner borders used throughout the app
<CornerBorder className="custom-styles">
  <Content />
</CornerBorder>

// Technical info displays
<TechnicalInfo position="top-left">
  <TechnicalData label="FPS" value="67.90" />
</TechnicalInfo>
```

### Centralized Configuration

```javascript
// constants/index.js
export const LEADERS_DATA = [
  { image: leader1, name: 'REALTECH', skulls: 17, sol: 30 },
  // ... more leaders
];
```


## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel**: Zero-config deployments


## 🎯 Future Enhancements

- **Wallet Integration**: Connect with Web3 wallets
- **NFT Minting**: Direct minting functionality
- **Game Integration**: Link to actual game platform
- **User Profiles**: Player customization
- **Marketplace**: NFT trading features

## 📄 License

This project is for demonstration purposes. All rights reserved.


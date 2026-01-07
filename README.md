# PERPAHMIAN Game Station

A modern, futuristic web-based gaming platform featuring 10 fully playable browser games. Built with vanilla JavaScript, modern CSS, Web Audio API, and Tone.js for a premium gaming experience without any downloads required.

**Live Demo**: [Visit PERPAHMIAN Game Station](https://fahmibastari.github.io/perpahmian-gamestation)

## Overview

PERPAHMIAN Game Station is a comprehensive browser-based gaming platform that showcases modern web development capabilities. The platform features a curated collection of classic and original games, all implemented with pure vanilla JavaScript for optimal performance.

### Key Features

- **10 Polished Games** spanning multiple genres (puzzle, action, rhythm, arcade)
- **Professional Quality** with Tone.js music generation and Web Audio effects
- **Zero Dependencies** for core games (lightweight and fast)
- **Responsive Design** fully functional on desktop, tablet, and mobile devices
- **Futuristic UI** with glassmorphism, neon gradients, and smooth animations
- **Progressive Gameplay** featuring scoring systems, difficulty progression, and persistent high scores

## Technology Stack

### Frontend
- **HTML5 Canvas** for game rendering
- **Vanilla JavaScript** (ES6+) for game logic
- **CSS3** with custom properties and modern features (Grid, Flexbox, backdrop-filter)

### Audio
- **Tone.js** (v14.8.49) for procedural music generation
- **Web Audio API** for sound effects

### Fonts
- **Orbitron** for futuristic headings
- **Inter** for clean, readable body text

## Game Collection

### Puzzle Games
- **Tetris** - Complete rotation system (SRS), hold piece, ghost piece, and progressive difficulty
- **Color Match** - Match-3 puzzle with combo system and particle effects
- **Mystery** - Memory card game with flip animations and timer

### Action Games
- **Cosmic Quest** - Space shooter with wave-based progression and enemy bullets
- **Sky Runner** - Endless runner with collectibles and dynamic difficulty
- **Fire Battle** - Click-based defense game with enemy waves
- **Sniper Elite** - Target shooting with accuracy tracking and time limits

### Music & Rhythm Games
- **Music Beat** - Rhythm game with procedural music generation using Tone.js
- **Piano Tiles** - Classic tile-tapping with synthesized piano notes

### Casual Games
- **Sweet Baker** - Timing-based cooking game with progressive difficulty

## Project Structure

```
perpahmian-gamestation/
├── index.html              # Main landing page
├── index.css               # Futuristic design system
├── index.js                # Navigation and interactions
├── about.html              # About page with company info
├── profile.jpg             # Profile image
└── games/
    ├── shared-styles.css   # Shared game styling
    ├── tetris.html         # Tetris game
    ├── color-match.html    # Color Match game
    ├── cosmic-quest.html   # Space shooter game
    ├── sky-runner.html     # Endless runner game
    ├── mystery.html        # Memory card game
    ├── sniper-elite.html   # Target shooting game
    ├── fire-battle.html    # Defense game
    ├── music-beat.html     # Rhythm game
    ├── piano-tiles.html    # Piano tiles game
    ├── song-quiz.html      # Music trivia game
    └── sweet-baker.html    # Timing game
```

## Design Philosophy

### Visual Design
- **Cyber-Futuristic Theme** with animated grid backgrounds and neon accents
- **Glassmorphism UI** using backdrop-filter for depth and modern aesthetics
- **Dynamic Effects** including spotlight following cursor, 3D card tilts, and particle systems
- **Consistent Color Palette** featuring cyan (#00f0ff), magenta (#ff00aa), and purple (#7000ff)

### User Experience
- **Instant Play** - No downloads, installations, or sign-ups required
- **Intuitive Controls** - Keyboard and mouse/touch support across all games
- **Visual Feedback** - Particle effects, animations, and sound cues for all interactions
- **Accessibility** - Keyboard navigation, focus states, and reduced motion support

### Performance
- **60 FPS Target** with GPU-accelerated animations
- **Optimized Rendering** using requestAnimationFrame and efficient canvas drawing
- **Lazy Loading** for on-demand game initialization
- **Minimal Dependencies** to ensure fast load times

## Installation & Usage

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/fahmibastari/perpahmian-gamestation.git
cd perpahmian-gamestation
```

2. Serve the files using any local server:

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (http-server):
```bash
npx http-server
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

### Deployment

The project consists of static files and can be deployed to any static hosting service:

- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

No build process required - simply upload the files to your hosting provider.

## Game Controls

### General Controls
- **Mouse/Touch** - Navigate menus and interact with UI
- **Escape/Back Button** - Return to main menu from any game

### Game-Specific Controls

**Tetris**
- Arrow Keys: Move and rotate pieces
- Space: Hard drop
- C: Hold piece

**Cosmic Quest**
- WASD/Arrow Keys: Move spaceship
- Space: Shoot

**Sky Runner**
- Space/Up Arrow: Jump
- Down Arrow: Slide

**Music Beat**
- D, F, J, K: Hit corresponding notes

**Piano Tiles**
- Click: Tap tiles

(See individual game instructions for complete control details)

## Technical Highlights

### Audio System
- Procedural music generation using Tone.js synthesizers
- Dynamic sound effects through Web Audio API
- Real-time audio visualization with frequency analysis

### Canvas Rendering
- Efficient sprite rendering with minimal redraws
- Particle systems for visual effects
- Collision detection algorithms (AABB, circle-based)
- Layer-based rendering for complex scenes

### Responsive Implementation
- CSS Grid and Flexbox for adaptive layouts
- Breakpoint-based design (1400px, 1024px, 768px)
- Touch-optimized controls for mobile gameplay
- Viewport-based sizing for consistent experience

## Browser Compatibility

Tested and optimized for:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires:
- ES6 JavaScript support
- Canvas API
- Web Audio API
- CSS Grid and Flexbox

## Future Enhancements

Potential features for future development:
- Multiplayer functionality via WebSockets
- Backend integration for global leaderboards
- User accounts with game progress tracking
- Additional game modes and difficulty levels
- Achievement system
- Progressive Web App (PWA) support
- Social sharing capabilities

## Credits

**Development**: Fahmi Bastari  
**Company**: perpahmian.ltd  
**Repository**: [github.com/fahmibastari/perpahmian-gamestation](https://github.com/fahmibastari/perpahmian-gamestation)

### External Libraries
- [Tone.js](https://tonejs.github.io/) (v14.8.49) - Web Audio framework
- [Google Fonts](https://fonts.google.com/) - Orbitron & Inter typefaces

### Inspiration
Classic arcade games, modern web design trends, and retro-futuristic aesthetics.

## License

This project is available for portfolio demonstration purposes. All rights reserved by perpahmian.ltd.

---

**Built with passion for web gaming experiences.**  
For inquiries: [GitHub Profile](https://github.com/fahmibastari)

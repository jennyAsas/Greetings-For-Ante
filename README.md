# Purple Enchantment - Birthday Letter for Auntie 💜✨

An interactive digital birthday letter with purple enchanted visual effects, animations, and beautiful interactive elements.

## 🌟 Features

- ✨ **Purple Enchanted Theme** - Beautiful deep purple, lavender, and gold color palette
- 🎂 **Birthday Animations** - Soft animations, sparkles, and glow effects
- 💌 **Interactive Elements** - Hover effects, click reveals, and flip cards
- 📱 **Fully Responsive** - Works perfectly on both desktop and mobile devices
- 🎉 **Celebration Finale** - Confetti burst and floating hearts animation

## 🚀 Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/purple-birthday-letter.git

# Navigate to the project directory
cd purple-birthday-letter

# Install dependencies
npm install

# Start the development server
ng serve

# Open your browser and navigate to http://localhost:4200
```

## 📦 Build for Production

```bash
# Build the project for production
ng build --configuration production

# The build artifacts will be stored in the `dist/` directory
```

## 🌐 Deploy to GitHub Pages

### Method 1: Using angular-cli-ghpages

```bash
# Install angular-cli-ghpages globally
npm install -g angular-cli-ghpages

# Build the project with base href
ng build --configuration production --base-href "https://YOUR_USERNAME.github.io/purple-birthday-letter/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/purple-birthday-letter/browser
```

### Method 2: Manual GitHub Pages Setup

1. Build the project:

```bash
ng build --configuration production --base-href "https://YOUR_USERNAME.github.io/purple-birthday-letter/"
```

2. Copy the contents of `dist/purple-birthday-letter/browser/` to your GitHub Pages repository

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the branch where you pushed the built files
   - Save and wait for deployment

## 🎨 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── cover/         # Welcome screen with "Open Letter" button
│   │   ├── letter/        # Main birthday message with typewriter effect
│   │   ├── wishes/        # Interactive flip cards with special wishes
│   │   ├── finale/        # Celebration section with confetti
│   │   └── sparkles/      # Reusable sparkle particle effect
│   ├── app.component.*    # Root component
│   └── app.routes.ts      # Routing configuration
├── styles.scss            # Global styles and theme variables
└── index.html             # Main HTML file
```

## 🎭 Interactive Elements

1. **Cover Screen** - Animated title with floating sparkles
2. **Letter Section** - Click "Continue" to reveal each paragraph with typewriter effect
3. **Wishes Cards** - Click cards to flip and reveal special messages
4. **Finale Celebration** - Click "Celebrate!" for confetti burst and floating hearts

## 🎨 Color Palette

- Deep Purple: `#4b0082`
- Medium Purple: `#8b5dbf`
- Light Purple: `#b19cd9`
- Purple Glow: `#d8b4ff`
- Lavender: `#e6e6fa`
- Gold: `#ffd700`

## 🖼️ Fonts

- **Headings**: Dancing Script (cursive)
- **Body Text**: Poppins (sans-serif)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎉 Customization

To personalize the birthday letter:

1. Edit the letter content in `src/app/components/letter/letter.html`
2. Modify wish card messages in `src/app/components/wishes/wishes.html`
3. Update colors in `src/styles.scss` by changing the CSS variables
4. Adjust animations in component SCSS files

## 📄 License

This project is created with love for Auntie's birthday. Feel free to use and modify for personal birthday celebrations!

## 💜 Made with Love

Created with Angular, SCSS, and lots of purple magic! ✨

---

**Happy Birthday, Auntie!** 🎂💜🎉

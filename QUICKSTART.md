# 🎉 Quick Start Guide - Purple Birthday Letter

Welcome! This guide will help you get the birthday letter up and running quickly.

## ⚡ Quick Start (Development)

```bash
# Navigate to the project directory
cd purple-birthday-letter

# Install dependencies (if not already installed)
npm install

# Start the development server
ng serve

# Open your browser to http://localhost:4200
```

## 🎨 How to Use the Birthday Letter

### For the Recipient (Auntie)

1. **Cover Page**:
   - See the beautiful animated title "Happy Birthday, Auntie 💜"
   - Click "Open the Letter ✨" to begin

2. **Letter Section**:
   - Read the heartfelt message
   - Click "Continue ✨" to reveal each paragraph
   - After reading, click "See Your Wishes 💜"

3. **Wishes Cards**:
   - Three interactive cards with special messages
   - Click each card to flip and reveal the message
   - After viewing all, click "One More Surprise 🎉"

4. **Grand Finale**:
   - Click "Celebrate! 🎉" for a surprise
   - Watch the confetti and floating hearts!

## ✏️ How to Customize

### Change the Letter Content

Edit `src/app/components/letter/letter.html`:

```html
<p class="letter-line" [class.visible]="currentLine >= 1">YOUR CUSTOM MESSAGE HERE</p>
```

### Modify Wish Card Messages

Edit `src/app/components/wishes/wishes.html`:

```html
<div class="card-back">
  <p>YOUR CUSTOM WISH MESSAGE HERE</p>
</div>
```

### Update Colors

Edit `src/styles.scss` and change the CSS variables:

```scss
:root {
  --purple-dark: #4b0082; // Change this
  --purple-light: #b19cd9; // Change this
  --gold: #ffd700; // Change this
}
```

### Change Recipient Name

1. Edit `src/app/components/cover/cover.html` - change "Auntie 💜"
2. Edit `src/app/components/letter/letter.html` - change "Dearest Auntie,"
3. Edit `src/app/components/finale/finale.html` - change the final message

## 📦 Build for Production

```bash
# Build the production version
npm run build:prod

# Files will be in dist/purple-birthday-letter/browser/
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automated (Recommended)

Just push your code to GitHub - the GitHub Actions workflow will automatically deploy!

```bash
git add .
git commit -m "My customized birthday letter"
git push origin main
```

### Option 2: Manual Deploy

```bash
# Run the deploy script
npm run deploy
```

**Note:** Update the base-href in package.json if your repository name is different.

## 🎯 Testing Checklist

Before deploying, test these features:

- [ ] Cover page loads with animations
- [ ] "Open the Letter" button works
- [ ] Letter paragraphs appear when clicking "Continue"
- [ ] All three wish cards flip when clicked
- [ ] "Celebrate" button triggers confetti and hearts
- [ ] Works on mobile devices (use browser dev tools)
- [ ] All text is correct and personalized
- [ ] Animations run smoothly
- [ ] No console errors (F12 > Console)

## 🐛 Common Issues

### Animations Not Working

- Check browser console for errors
- Make sure all SCSS files compiled correctly
- Try clearing browser cache (Ctrl+Shift+R)

### Components Not Showing

- Verify all imports in component TypeScript files
- Check browser console for module errors
- Make sure Angular CLI is up to date

### Deployment Issues

- Verify base-href matches your repository name
- Check GitHub Pages is enabled in repository settings
- Wait 2-3 minutes after deployment for changes to appear

## 🎨 Design Tips

### Adding More Sparkles

In `sparkles.ts`, increase the number in the loop:

```typescript
for (let i = 0; i < 30; i++) {  // Change from 20 to 30
```

### Adjusting Animation Speed

In SCSS files, modify animation duration:

```scss
animation: float 3s ease-in-out infinite; // Change 3s to desired speed
```

### Adding More Confetti

In `finale.ts`, increase the confetti count:

```typescript
for (let i = 0; i < 100; i++) {  // Change from 50 to 100
```

## 📞 Need Help?

- Check the full README.md for detailed documentation
- Review DEPLOYMENT.md for deployment instructions
- Look at component files for implementation details

## 💜 Have Fun!

Remember, this is a labor of love. Take your time customizing it to make it perfect for your auntie (or any special person)!

**Happy Birthday to your loved one!** 🎂✨💜

# 🚀 Deployment Guide for GitHub Pages

This guide will help you deploy the Purple Birthday Letter to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it: `purple-birthday-letter` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. Click **Create repository**

### 2. Push Your Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Purple Birthday Letter"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/purple-birthday-letter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Install Deployment Tool

```bash
# Install angular-cli-ghpages globally
npm install -g angular-cli-ghpages
```

### 4. Build and Deploy

```bash
# Build the project for GitHub Pages
ng build --configuration production --base-href "https://YOUR_USERNAME.github.io/purple-birthday-letter/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/purple-birthday-letter/browser
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select the `gh-pages` branch
5. Click **Save**

### 6. Access Your Site

After a few minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/purple-birthday-letter/
```

## 🔄 Updating Your Deployment

When you make changes and want to update the deployed site:

```bash
# Make your changes to the code

# Build and deploy again
ng build --configuration production --base-href "https://YOUR_USERNAME.github.io/purple-birthday-letter/"
npx angular-cli-ghpages --dir=dist/purple-birthday-letter/browser
```

## 📝 Alternative: GitHub Actions (Automated Deployment)

You can set up automatic deployment whenever you push to the main branch.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --configuration production --base-href "https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}/"

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/purple-birthday-letter/browser
```

With this setup, every push to `main` will automatically build and deploy your site!

## ❗ Troubleshooting

### Site Not Loading Properly

1. Make sure the `--base-href` matches your repository name exactly
2. Check that you're using the `gh-pages` branch in repository settings
3. Wait a few minutes after deployment for changes to appear

### 404 Error

1. Verify that GitHub Pages is enabled in repository settings
2. Check that the `gh-pages` branch exists
3. Make sure your repository is public

### White Screen

1. Check browser console for errors
2. Verify the base href is correct
3. Rebuild with the correct base-href parameter

## 🎉 Success!

Once deployed, share the link with your auntie and watch her enjoy the magical birthday experience! 💜✨

---

Need help? Check the [Angular deployment documentation](https://angular.dev/tools/cli/deployment) or [GitHub Pages documentation](https://docs.github.com/en/pages).

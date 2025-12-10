# 🔧 Project Configuration Notes

## Server-Side Rendering (SSR)

This project was created with Angular's SSR (Server-Side Rendering) enabled by default. However, for GitHub Pages deployment, we're using **client-side rendering only**.

### Why Client-Side for GitHub Pages?

GitHub Pages serves static files only and doesn't support Node.js server processes required for SSR. The application works perfectly with client-side rendering for this use case.

### Build Configuration

When building for GitHub Pages, we use:

```bash
ng build --configuration production
```

This creates a static build in `dist/purple-birthday-letter/browser/` which is what gets deployed.

### If You Want to Use SSR

If you want to deploy this with SSR on a platform that supports it (like Vercel, Netlify, or your own server):

```bash
# Build with SSR
npm run build

# Serve
npm run serve:ssr:purple-birthday-letter
```

Supported SSR platforms:

- **Vercel** - Zero configuration, just connect your GitHub repo
- **Netlify** - Supports Angular SSR
- **Your own Node.js server** - Run the built server.mjs file

## Browser Build vs Server Build

- **Browser Build**: `dist/purple-birthday-letter/browser/`
  - Used for GitHub Pages
  - Pure client-side JavaScript
  - All animations and interactions work perfectly

- **Server Build**: `dist/purple-birthday-letter/server/`
  - Used for SSR deployments
  - Includes server-side rendering logic
  - Not needed for GitHub Pages

## Removing SSR (Optional)

If you want to completely remove SSR support to simplify the project:

1. Remove SSR dependencies from `package.json`:
   - `@angular/ssr`
   - `@angular/platform-server`
   - `express`
   - `@types/express`

2. Delete server files:
   - `src/main.server.ts`
   - `src/app/app.config.server.ts`
   - `src/server.ts`

3. Update `angular.json` to remove server configurations

However, **this is not necessary** for the current setup to work with GitHub Pages!

## Performance Optimizations

The production build includes:

- ✅ Minification
- ✅ Tree-shaking (removes unused code)
- ✅ Lazy loading (components load on demand)
- ✅ Optimized bundle sizes
- ✅ CSS optimization

## Bundle Analysis

To analyze your bundle size:

```bash
# Build with stats
ng build --configuration production --stats-json

# Install analyzer
npm install -g webpack-bundle-analyzer

# Analyze
webpack-bundle-analyzer dist/purple-birthday-letter/browser/stats.json
```

## Environment Configuration

For different environments (dev, staging, prod), you can create environment files:

```
src/environments/
  ├── environment.ts          # Development
  ├── environment.staging.ts  # Staging
  └── environment.prod.ts     # Production
```

Then use them in your build:

```bash
ng build --configuration staging
```

## GitHub Actions Workflow

The included `.github/workflows/deploy.yml` automatically:

1. Checks out your code
2. Installs dependencies
3. Builds the production bundle
4. Deploys to GitHub Pages

Triggers on:

- Every push to `main` branch
- Manual workflow dispatch

## Tips for Production

1. **Test locally before deploying**:

   ```bash
   ng build --configuration production
   npx http-server dist/purple-birthday-letter/browser
   ```

2. **Check bundle sizes**: Keep initial bundle under 500KB for fast loading

3. **Test on multiple devices**: Use Chrome DevTools device emulation

4. **Verify animations**: Some older browsers may need polyfills

5. **Check console**: Ensure no errors in production build

## Browser Compatibility

Targets modern browsers:

- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

To support older browsers, update `browserslist` in package.json.

## Development vs Production

| Feature       | Development | Production |
| ------------- | ----------- | ---------- |
| File size     | Larger      | Minified   |
| Source maps   | Yes         | Optional   |
| Hot reload    | Yes         | No         |
| Build time    | Fast        | Slower     |
| Optimizations | Minimal     | Maximum    |

---

This project is configured for optimal performance and ease of deployment while maintaining all the magical purple enchantment! 💜✨

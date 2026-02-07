# Deployment Guide for Vercel

Follow these steps to deploy your Pokemon Search application to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed on your machine

## Step 1: Prepare Your Repository

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pokemon Search FM Tech"
   ```

2. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name your repository: `search-pokemon-fm-tech`
   - Do NOT initialize with README (you already have one)
   - Create repository

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/search-pokemon-fm-tech.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Login" or "Sign Up"
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your `search-pokemon-fm-tech` repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (Optional)
   - No environment variables needed for basic deployment
   - The GraphQL endpoint is hardcoded in the app

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Your site will be live at: `https://search-pokemon-fm-tech.vercel.app`

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm project settings
   - Deploy

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Step 3: Test Your Deployment

1. **Open Your Deployment URL**
   - Vercel will provide a URL like: `https://search-pokemon-fm-tech.vercel.app`
   
2. **Test in Incognito/Private Mode**
   - Open the URL in incognito mode
   - This ensures no cached data affects your testing

3. **Test Key Features**
   - [ ] Search for a Pokemon (try "Pikachu")
   - [ ] Verify data displays correctly
   - [ ] Click on an evolution
   - [ ] Check that URL updates with ?search= parameter
   - [ ] Test on mobile device
   - [ ] Check browser back button works
   - [ ] Verify search history (suggestions)

## Step 4: Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## Common Issues & Solutions

### Issue: Build Fails

**Solution**: Check your build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check for TypeScript errors
- Verify all imports are correct

### Issue: API Not Working

**Solution**: 
- Check that the GraphQL endpoint is accessible
- Verify Apollo Client configuration
- Check browser console for errors

### Issue: Images Not Loading

**Solution**: 
- Ensure domains are whitelisted in next.config.js
- Check image URLs are valid

### Issue: Slow Performance

**Solution**:
- Check Vercel Analytics for bottlenecks
- Verify Apollo Client caching is working
- Use Chrome DevTools Performance tab

## Performance Optimization Tips

1. **Enable Vercel Analytics**
   - Free performance monitoring
   - Real user metrics
   - Helps identify issues

2. **Check Lighthouse Score**
   - Right-click → Inspect → Lighthouse
   - Run audit
   - Aim for 90+ scores

3. **Monitor Build Times**
   - Vercel shows build duration
   - Optimize if builds take >2 minutes

## Post-Deployment Checklist

- [ ] Application loads successfully
- [ ] Search functionality works
- [ ] Pokemon data displays correctly
- [ ] Evolutions are clickable
- [ ] URL parameters update correctly
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] Tested in incognito mode
- [ ] Fast page loads (< 3 seconds)
- [ ] Search history persists

## Submission

Once deployed and tested:

1. **Note Your URLs**
   - GitHub Repository: `https://github.com/YOUR_USERNAME/search-pokemon-fm-tech`
   - Vercel Deployment: `https://search-pokemon-fm-tech.vercel.app`

2. **Send Email to**: tanapruk@futuremakers.co.th
   - Subject: "FM Full Stack Developer Test Submission - [Your Name]"
   - Include both URLs
   - Brief description of your implementation

## Continuous Deployment

Vercel automatically deploys on every push to main:
- Push changes to GitHub
- Vercel detects changes
- Automatically builds and deploys
- Get deployment URL in GitHub commit status

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Apollo Client Documentation: https://www.apollographql.com/docs/react/

Good luck with your deployment! 🚀
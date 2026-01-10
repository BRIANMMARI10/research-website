# Migration Guide: From BRIANMMARI10.github.io to Research Website Template

This guide will help you migrate your content from your old website to this new Next.js-based research website template.

## Overview

The new template uses a data-driven approach where all content is stored in TypeScript files under `src/data/`. This makes it easy to maintain and update your website without editing HTML or complex templates.

## Step-by-Step Migration Process

### 1. Update Your Personal Information

Edit `src/data/aboutme.ts` to include:
- Your name
- Your title/position
- Your institution
- Your bio/description
- Email address
- Profile image URL
- Social media links (GitHub, LinkedIn, Twitter/X, Google Scholar, etc.)
- CV URL (if applicable)
- Blog URL (if applicable)

### 2. Migrate Your Publications

Edit `src/data/publication.ts` and add your publications. Each publication should include:
- Year
- Conference/journal name
- Title
- Authors (full list)
- Paper URL (arXiv, conference page, etc.)
- Code URL (if applicable)
- Optional: BibTeX, TLDR, image, award

Example:
```typescript
{
  year: "2024",
  conference: "NeurIPS",
  title: "Your Paper Title",
  authors: "Your Name, Co-author Name, ...",
  paperUrl: "https://arxiv.org/abs/...",
  codeUrl: "https://github.com/...",
}
```

### 3. Update Education Section

Edit `src/data/education.ts` with:
- Degree(s) you've earned
- Institution name(s)
- Year(s) of study
- Advisor name (if applicable)
- Thesis title and URL (if applicable)

### 4. Add Your Experience

Edit `src/data/experience.ts` with:
- Research positions
- Internships
- Jobs
- Include: date, title, company/institution, description, advisor/manager

### 5. Add News/Updates

Edit `src/data/news.ts` to include:
- Paper acceptances
- Awards
- Talks
- Other updates

### 6. Portfolio/Projects (Optional)

Edit `src/data/portfolio.ts` if you want to showcase projects:
- Project title
- Description
- Technologies used
- Project URL
- Code URL
- Image URL

### 7. Customize Section Order

Edit `src/data/section-order.ts` to reorder sections as you prefer. The default order is:
- News
- Education
- Publications
- Experience
- Portfolio

### 8. Customize Metadata (Optional)

Edit `src/data/title-description.ts` if you want custom SEO title and description.

## Deployment to GitHub Pages

### Initial Setup

1. **Create a new repository** (or rename this one) to `BRIANMMARI10.github.io`
   - This is important: GitHub Pages will automatically serve this repository at `https://BRIANMMARI10.github.io`

2. **Push this code** to the main branch of your repository

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages
   - Under "Source", select "GitHub Actions"
   - The workflow file (`.github/workflows/deploy.yml`) is already configured

4. **First deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - You can trigger it manually by going to Actions tab and running the workflow
   - Or simply push a commit to the main branch

### After Migration

1. **Test locally**:
   ```bash
   npm install
   npm run dev
   ```
   Visit `http://localhost:3000` to preview your site

2. **Build and test static export**:
   ```bash
   npm run build
   ```
   This creates an `out/` directory with static files (this is what gets deployed)

3. **Push changes**:
   - Make your content updates in the `src/data/` files
   - Commit and push to main branch
   - GitHub Actions will automatically deploy the updates

## Content Migration Tips

### Extracting Content from Your Old Site

If your old site is still live:
1. Visit `https://BRIANMMARI10.github.io` (or your old repository)
2. Copy the relevant information from each section
3. Format it according to the TypeScript interfaces in each data file

### Profile Image

- You can use an image URL (like from your institution or a CDN)
- Or add images to the `public/` folder and reference them as `/your-image.jpg`
- For example, if you put an image at `public/profile.jpg`, use `imageUrl: "/profile.jpg"`

### Links in Descriptions

- HTML links work in the description field in `aboutme.ts`
- Use format: `<a href='url'>link text</a>`

## Differences from Traditional Templates

- **No HTML editing required**: All content is in TypeScript data files
- **Type-safe**: TypeScript ensures you provide the right fields
- **Easy to maintain**: Add new publications/entries by just adding objects to arrays
- **Modern stack**: Next.js 15 with React 19 and Tailwind CSS

## Need Help?

- Check the existing example data in each file for formatting guidance
- All interfaces are defined in the same files as the data
- Optional fields are marked with `?` in the interfaces

## Next Steps

1. Fill in your information in `src/data/aboutme.ts`
2. Add at least one entry to each section you want to display
3. Test locally with `npm run dev`
4. Push to your GitHub repository
5. Enable GitHub Pages with GitHub Actions
6. Your new site will be live at `https://BRIANMMARI10.github.io`!

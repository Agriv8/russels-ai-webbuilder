// This script creates placeholder images and provides links to download tech company logos

const fs = require('fs');
const path = require('path');

// Ensure images directory exists
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create a simple SVG placeholder generator
function createPlaceholderSVG(width, height, text, bgColor = '#1a1a1a', textColor = '#00D9FF') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${bgColor}"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-family="Arial, sans-serif" font-size="20">${text}</text>
  </svg>`;
}

// Create placeholder images
const placeholders = [
  { name: 'hero-placeholder.svg', width: 1920, height: 1080, text: 'AI Hero Background' },
  { name: 'before-website.svg', width: 800, height: 600, text: 'Before Website', bgColor: '#2a2a2a' },
  { name: 'after-website.svg', width: 800, height: 600, text: 'After Website', bgColor: '#1a1a3a' },
  { name: 'dashboard-placeholder.svg', width: 1200, height: 800, text: 'Analytics Dashboard' },
  { name: 'ceo-placeholder.svg', width: 400, height: 400, text: 'CEO Photo' },
  { name: 'case-study-1.svg', width: 600, height: 400, text: 'Case Study 1' },
  { name: 'case-study-2.svg', width: 600, height: 400, text: 'Case Study 2' },
  { name: 'case-study-3.svg', width: 600, height: 400, text: 'Case Study 3' },
];

placeholders.forEach(({ name, width, height, text, bgColor }) => {
  const svg = createPlaceholderSVG(width, height, text, bgColor);
  fs.writeFileSync(path.join(imagesDir, name), svg);
  console.log(`Created: ${name}`);
});

// Create tech company logo placeholders
const techLogos = [
  { name: 'google-logo.svg', text: 'Google', color: '#4285F4' },
  { name: 'microsoft-logo.svg', text: 'Microsoft', color: '#0078D4' },
  { name: 'meta-logo.svg', text: 'Meta', color: '#0081FB' },
  { name: 'amazon-logo.svg', text: 'Amazon', color: '#FF9900' },
  { name: 'apple-logo.svg', text: 'Apple', color: '#000000' },
  { name: 'openai-logo.svg', text: 'OpenAI', color: '#412991' },
  { name: 'tesla-logo.svg', text: 'Tesla', color: '#CC0000' },
  { name: 'nvidia-logo.svg', text: 'NVIDIA', color: '#76B900' },
];

techLogos.forEach(({ name, text, color }) => {
  const svg = `<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="60" fill="#ffffff" stroke="${color}" stroke-width="2" rx="5"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${color}" font-family="Arial, sans-serif" font-size="18" font-weight="bold">${text}</text>
  </svg>`;
  fs.writeFileSync(path.join(imagesDir, name), svg);
  console.log(`Created tech logo placeholder: ${name}`);
});

// Create a README for the images directory
const imageReadme = `# AI Webbuilder Images

This directory contains images for the AI Webbuilder landing page.

## Image Sources

### Stock Photos
- Hero backgrounds and AI/tech images can be downloaded from:
  - Unsplash: https://unsplash.com/s/photos/artificial-intelligence
  - Pexels: https://www.pexels.com/search/ai/
  - Pixabay: https://pixabay.com/images/search/ai%20dark/

### Tech Company Logos
For official tech company logos, visit:
- Google: https://about.google/brand-resource-center/
- Microsoft: https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
- Meta: https://about.meta.com/brand/resources/
- Amazon: https://press.aboutamazon.com/logos-imagery
- Apple: https://www.apple.com/newsroom/
- OpenAI: https://openai.com/brand
- Or use SimpleIcons: https://simpleicons.org/

### Before/After Website Screenshots
- Take screenshots of actual client websites
- Use tools like:
  - Chrome DevTools for responsive screenshots
  - Screely (https://screely.com/) for beautiful mockups
  - Carbon (https://carbon.now.sh/) for code screenshots

### Dashboard/Analytics Images
- Google Analytics screenshots
- Custom dashboard mockups
- Chart/graph generators like Chart.js

## Image Optimization
Remember to optimize all images before deployment:
- Use WebP format for better compression
- Compress JPGs to ~80% quality
- Use lazy loading for below-fold images
- Consider using a CDN for production
`;

fs.writeFileSync(path.join(imagesDir, 'README.md'), imageReadme);
console.log('\nCreated README.md with image sourcing instructions');

console.log('\n✅ Placeholder images created successfully!');
console.log('📌 Run ./download-images.sh to download stock photos from Unsplash');
console.log('📌 Check public/images/README.md for detailed sourcing instructions');
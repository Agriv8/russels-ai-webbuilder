#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading images for AI Webbuilder landing page..."

# Hero background - AI technology dark theme with blue/purple neon
# Using Unsplash API (free, no key required for basic usage)
curl -L "https://source.unsplash.com/1920x1080/?artificial-intelligence,technology,dark,neon" -o public/images/hero-bg.jpg

# Alternative hero backgrounds
curl -L "https://source.unsplash.com/1920x1080/?cyberpunk,technology,dark" -o public/images/hero-alt-1.jpg
curl -L "https://source.unsplash.com/1920x1080/?data,visualization,dark,purple" -o public/images/hero-alt-2.jpg

# Tech/AI related images
curl -L "https://source.unsplash.com/800x600/?artificial-intelligence,robot" -o public/images/ai-robot.jpg
curl -L "https://source.unsplash.com/800x600/?machine-learning,technology" -o public/images/machine-learning.jpg
curl -L "https://source.unsplash.com/800x600/?neural-network,technology" -o public/images/neural-network.jpg

# Dashboard/Analytics screenshots
curl -L "https://source.unsplash.com/1200x800/?dashboard,analytics,dark" -o public/images/dashboard-1.jpg
curl -L "https://source.unsplash.com/1200x800/?data,analytics,chart" -o public/images/analytics-1.jpg
curl -L "https://source.unsplash.com/1200x800/?statistics,graph,business" -o public/images/statistics-1.jpg

# Website/Technology images
curl -L "https://source.unsplash.com/1200x800/?website,design,modern" -o public/images/website-modern.jpg
curl -L "https://source.unsplash.com/1200x800/?responsive,design,mobile" -o public/images/responsive-design.jpg
curl -L "https://source.unsplash.com/1200x800/?coding,programming,dark" -o public/images/coding-dark.jpg

# Business/Professional images
curl -L "https://source.unsplash.com/800x800/?businessman,professional,headshot" -o public/images/ceo-placeholder.jpg
curl -L "https://source.unsplash.com/800x600/?team,business,professional" -o public/images/team-photo.jpg
curl -L "https://source.unsplash.com/800x600/?office,modern,technology" -o public/images/office-tech.jpg

# Success/Growth images
curl -L "https://source.unsplash.com/800x600/?success,growth,business" -o public/images/success-growth.jpg
curl -L "https://source.unsplash.com/800x600/?rocket,launch,startup" -o public/images/rocket-launch.jpg

echo "Images downloaded successfully!"
echo ""
echo "Note: For tech company logos (Google, Microsoft, etc.), you'll need to:"
echo "1. Visit each company's brand/press page"
echo "2. Download their official logos"
echo "3. Or use a service like https://simpleicons.org/ for SVG icons"
echo ""
echo "Recommended logo sources:"
echo "- Google: https://about.google/brand-resource-center/"
echo "- Microsoft: https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks"
echo "- Meta: https://about.meta.com/brand/resources/facebookcompany/logo/"
echo "- Amazon: https://press.aboutamazon.com/logos-imagery"
echo "- Apple: https://www.apple.com/newsroom/"
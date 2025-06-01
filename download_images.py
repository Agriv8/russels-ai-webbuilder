#!/usr/bin/env python3
"""
AI Webbuilder Image Downloader
Downloads high-quality images for the landing page from various free sources
"""

import os
import requests
import json
from pathlib import Path

# Create images directory
images_dir = Path("public/images")
images_dir.mkdir(parents=True, exist_ok=True)

# Image sources configuration
IMAGES_TO_DOWNLOAD = {
    # Hero backgrounds
    "hero-bg-main.jpg": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=1080&fit=crop",  # AI/tech dark background
    "hero-bg-alt1.jpg": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop",  # Purple tech background
    "hero-bg-alt2.jpg": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&h=1080&fit=crop",  # Gradient tech background
    
    # AI/Technology images
    "ai-brain.jpg": "https://images.unsplash.com/photo-1680288135344-e5d65c4c0a48?w=800&h=600&fit=crop",  # AI brain visualization
    "ai-network.jpg": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",  # Neural network
    "ai-robot.jpg": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",  # Robot/AI assistant
    
    # Dashboard/Analytics
    "dashboard-dark.jpg": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",  # Dark dashboard
    "analytics-chart.jpg": "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1200&h=800&fit=crop",  # Analytics charts
    "data-visualization.jpg": "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=800&fit=crop",  # Data viz
    
    # Website/Design images
    "modern-website.jpg": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",  # Modern web design
    "responsive-design.jpg": "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=1200&h=800&fit=crop",  # Responsive devices
    "code-screen.jpg": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",  # Coding screen
    
    # Business/Professional
    "professional-headshot.jpg": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",  # Business professional
    "team-meeting.jpg": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",  # Team collaboration
    "success-growth.jpg": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",  # Business growth
}

# Pexels API configuration (if you have an API key)
PEXELS_API_KEY = ""  # Add your Pexels API key here if available

def download_image(url, filename):
    """Download an image from URL and save to file"""
    try:
        print(f"Downloading {filename}...")
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        filepath = images_dir / filename
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✅ Downloaded: {filename}")
        return True
    except Exception as e:
        print(f"❌ Failed to download {filename}: {str(e)}")
        return False

def create_image_manifest():
    """Create a JSON manifest of all images for the app"""
    manifest = {
        "hero": {
            "main": "hero-bg-main.jpg",
            "alternatives": ["hero-bg-alt1.jpg", "hero-bg-alt2.jpg"]
        },
        "ai_technology": {
            "brain": "ai-brain.jpg",
            "network": "ai-network.jpg",
            "robot": "ai-robot.jpg"
        },
        "dashboards": {
            "dark": "dashboard-dark.jpg",
            "analytics": "analytics-chart.jpg",
            "visualization": "data-visualization.jpg"
        },
        "websites": {
            "modern": "modern-website.jpg",
            "responsive": "responsive-design.jpg",
            "code": "code-screen.jpg"
        },
        "business": {
            "ceo": "professional-headshot.jpg",
            "team": "team-meeting.jpg",
            "growth": "success-growth.jpg"
        },
        "logos": {
            "note": "Tech company logos should be downloaded from official sources",
            "sources": {
                "google": "https://about.google/brand-resource-center/",
                "microsoft": "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks",
                "meta": "https://about.meta.com/brand/resources/",
                "amazon": "https://press.aboutamazon.com/logos-imagery",
                "simpleicons": "https://simpleicons.org/"
            }
        }
    }
    
    manifest_path = images_dir / "manifest.json"
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)
    
    print(f"✅ Created image manifest: {manifest_path}")

def main():
    print("🚀 Starting AI Webbuilder Image Download...")
    print(f"📁 Saving images to: {images_dir.absolute()}")
    print("-" * 50)
    
    # Download all images
    success_count = 0
    for filename, url in IMAGES_TO_DOWNLOAD.items():
        if download_image(url, filename):
            success_count += 1
    
    print("-" * 50)
    print(f"✅ Successfully downloaded {success_count}/{len(IMAGES_TO_DOWNLOAD)} images")
    
    # Create manifest
    create_image_manifest()
    
    print("\n📌 Next steps:")
    print("1. Download tech company logos from official sources (see manifest.json)")
    print("2. Create before/after website screenshots")
    print("3. Optimize images for web (WebP format, compression)")
    print("4. Consider using a CDN for production deployment")

if __name__ == "__main__":
    main()
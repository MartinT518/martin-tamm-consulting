#!/usr/bin/env python3
"""
Image Compression Script
Optimizes images in the src/assets directory for web use
Requires: Pillow library (pip3 install Pillow)
"""

from PIL import Image
import os
import sys

def compress_image(input_path, output_path=None, quality=85, max_width=1920):
    """
    Compress and optimize an image
    
    Args:
        input_path: Path to input image
        output_path: Path to save compressed image (optional, defaults to overwriting)
        quality: JPEG quality (1-100, default 85)
        max_width: Maximum width in pixels (default 1920)
    """
    try:
        # Open image
        img = Image.open(input_path)
        
        # Get original size
        original_size = os.path.getsize(input_path) / 1024  # KB
        
        # Convert RGBA to RGB if saving as JPEG
        if img.mode == 'RGBA' and (output_path and output_path.lower().endswith('.jpg')):
            # Create white background
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
            img = background
        
        # Resize if too large
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            print(f"  Resized to {max_width}x{new_height}")
        
        # Determine output path
        if output_path is None:
            output_path = input_path
        
        # Save with optimization
        if output_path.lower().endswith('.png'):
            img.save(output_path, 'PNG', optimize=True)
        elif output_path.lower().endswith(('.jpg', '.jpeg')):
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
        elif output_path.lower().endswith('.webp'):
            img.save(output_path, 'WEBP', quality=quality, method=6)
        else:
            img.save(output_path, optimize=True)
        
        # Get new size
        new_size = os.path.getsize(output_path) / 1024  # KB
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"  Original: {original_size:.1f} KB")
        print(f"  Compressed: {new_size:.1f} KB")
        print(f"  Reduction: {reduction:.1f}%")
        
        return True
        
    except Exception as e:
        print(f"  Error: {str(e)}")
        return False

def compress_directory(directory, quality=85, max_width=1920):
    """
    Compress all images in a directory
    
    Args:
        directory: Path to directory containing images
        quality: JPEG quality (1-100)
        max_width: Maximum width in pixels
    """
    supported_formats = ('.jpg', '.jpeg', '.png', '.webp')
    
    print(f"Compressing images in: {directory}")
    print(f"Quality: {quality}, Max width: {max_width}px\n")
    
    count = 0
    for filename in os.listdir(directory):
        if filename.lower().endswith(supported_formats):
            filepath = os.path.join(directory, filename)
            print(f"Processing: {filename}")
            
            if compress_image(filepath, quality=quality, max_width=max_width):
                count += 1
            
            print()
    
    print(f"Compressed {count} images successfully!")

def main():
    """Main function"""
    # Default directory
    assets_dir = "src/assets"
    
    if not os.path.exists(assets_dir):
        print(f"Error: Directory '{assets_dir}' not found!")
        print("Make sure you run this script from the project root directory.")
        sys.exit(1)
    
    # Compress all images
    compress_directory(assets_dir, quality=85, max_width=1920)
    
    print("\n✅ Image compression complete!")
    print("\nRecommendations:")
    print("1. Hero headshot: Consider reducing to 800x800px")
    print("2. Company logos: Should be < 50KB each")
    print("3. Running data visualization: Already optimized (WebP)")
    print("\nRun 'pnpm run build' to see the final bundle size.")

if __name__ == "__main__":
    main()

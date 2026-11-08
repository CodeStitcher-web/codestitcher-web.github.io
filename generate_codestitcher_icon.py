"""
CodeStitcher Official App Icon Generator (1:1 Aspect Ratio)
===========================================================
Generates ultra-high-resolution, pixel-perfect PNG icons of the official
CodeStitcher dual-capsule stitch logo with antialiased curves and modern squircle badge.

Requirements:
    pip install pillow

Usage:
    python generate_codestitcher_icon.py
"""

import os
from PIL import Image, ImageDraw

def generate_codestitcher_icon(size=1024, output_path="codestitcher_icon.png", with_squircle=True):
    """
    Renders the official CodeStitcher vector logo at any arbitrary resolution.
    Uses 4x supersampling + Lanczos downsampling for razor-sharp antialiasing.
    
    :param size: Target width and height in pixels (1:1 aspect ratio)
    :param output_path: Destination PNG file path
    :param with_squircle: True for black rounded squircle badge, False for transparent background mark
    """
    scale_factor = 4
    dim = size * scale_factor

    # 1. Base Canvas
    canvas = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    # 2. Black Squircle Badge (Standard modern app icon curvature: 23.33%)
    if with_squircle:
        radius = int(dim * (14.0 / 60.0))
        draw.rounded_rectangle([0, 0, dim, dim], radius=radius, fill="#000000")

    # 3. Vector Calculation
    # The SVG viewBox is 360x360. In the badge, it occupies (44/60) of the width.
    svg_box_size = dim * (44.0 / 60.0)
    svg_scale = svg_box_size / 360.0

    # Oversized scratch canvas for rotation
    scratch_dim = int(dim * 1.5)
    scratch = Image.new("RGBA", (scratch_dim, scratch_dim), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(scratch)
    cx, cy = scratch_dim // 2, scratch_dim // 2

    # Capsule dimensions from SVG
    capsule_w = 66 * svg_scale
    capsule_h = 150 * svg_scale
    capsule_r = 33 * svg_scale

    # Capsule 1 (Upper-left relative to center)
    c1_x = cx + (-72 * svg_scale)
    c1_y = cy + (-95 * svg_scale)
    sdraw.rounded_rectangle(
        [c1_x, c1_y, c1_x + capsule_w, c1_y + capsule_h],
        radius=int(capsule_r),
        fill="#FFFFFF"
    )

    # Capsule 2 (Lower-right relative to center)
    c2_x = cx + (6 * svg_scale)
    c2_y = cy + (-55 * svg_scale)
    sdraw.rounded_rectangle(
        [c2_x, c2_y, c2_x + capsule_w, c2_y + capsule_h],
        radius=int(capsule_r),
        fill="#FFFFFF"
    )

    # Cross Stitch Line (Black line cutting across intersection)
    line_w = 8 * svg_scale
    line_color = "#000000" if with_squircle else "#000000"
    lx1 = cx + (-22 * svg_scale)
    ly1 = cy
    lx2 = cx + (22 * svg_scale)
    ly2 = cy

    sdraw.line([lx1, ly1, lx2, ly2], fill=line_color, width=int(round(line_w)))

    # Rounded line caps
    rcap = line_w / 2.0
    sdraw.ellipse([lx1 - rcap, ly1 - rcap, lx1 + rcap, ly1 + rcap], fill=line_color)
    sdraw.ellipse([lx2 - rcap, ly2 - rcap, lx2 + rcap, ly2 + rcap], fill=line_color)

    # 4. Rotate 45 degrees
    rotated = scratch.rotate(45, resample=Image.BICUBIC)

    # 5. Composite centered onto the canvas
    px = (dim - scratch_dim) // 2
    py = (dim - scratch_dim) // 2
    canvas.alpha_composite(rotated, (px, py))

    # 6. Ultra-clean downsampling with Lanczos filter
    final_icon = canvas.resize((size, size), Image.Resampling.LANCZOS)
    
    # Ensure directory exists and save
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    final_icon.save(output_path, "PNG")
    print(f"Generated {size}x{size} icon -> {output_path}")
    return final_icon

if __name__ == "__main__":
    download_dir = r"C:\Users\Ratul\Downloads"
    
    # 1024x1024 Play Store / App Store Hero Icon
    generate_codestitcher_icon(1024, os.path.join(download_dir, "codestitcher_app_icon_1024.png"), with_squircle=True)
    
    # 512x512 Standard Store Icon
    generate_codestitcher_icon(512, os.path.join(download_dir, "codestitcher_app_icon_512.png"), with_squircle=True)
    
    # 192x192 xxxhdpi Launcher Icon
    generate_codestitcher_icon(192, os.path.join(download_dir, "codestitcher_app_icon_192.png"), with_squircle=True)

    # 1024x1024 Transparent Background Version (Vector Stitch Mark only)
    generate_codestitcher_icon(1024, os.path.join(download_dir, "codestitcher_logo_mark_transparent_1024.png"), with_squircle=False)

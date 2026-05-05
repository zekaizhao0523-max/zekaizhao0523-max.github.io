from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "desert-night-bg.png"
OUTPUT = ROOT / "assets" / "desert-night-bg-animated.gif"

WIDTH = 1280
HEIGHT = 720
FRAMES = 84
DURATION_MS = 80


def cover_crop(image: Image.Image, width: int, height: int) -> Image.Image:
    source_ratio = image.width / image.height
    target_ratio = width / height

    if source_ratio > target_ratio:
        new_height = height
        new_width = round(height * source_ratio)
    else:
        new_width = width
        new_height = round(width / source_ratio)

    resized = image.resize((new_width, new_height), Image.Resampling.LANCZOS)
    left = (new_width - width) // 2
    top = (new_height - height) // 2
    return resized.crop((left, top, left + width, top + height))


def wrapped_position(x: float, y: float, offset_x: float, offset_y: float) -> tuple[float, float]:
    return ((x + offset_x + 60) % (WIDTH + 120) - 60, y + offset_y)


def main() -> None:
    random.seed(523)
    base = cover_crop(Image.open(SOURCE).convert("RGB"), WIDTH, HEIGHT)

    stars = [
        {
            "x": random.uniform(-60, WIDTH + 60),
            "y": random.uniform(20, HEIGHT * 0.56),
            "alpha": random.randint(38, 118),
            "size": random.choice((1, 1, 1, 2)),
            "depth": random.uniform(0.55, 1.15),
            "twinkle": random.random() * math.tau,
        }
        for _ in range(185)
    ]
    frames: list[Image.Image] = []

    sand = [
        {
            "x": random.uniform(-80, WIDTH + 80),
            "y": random.uniform(HEIGHT * 0.58, HEIGHT * 0.82),
            "speed": random.uniform(1.4, 4.2),
            "lift": random.uniform(0.8, 6.5),
            "size": random.uniform(0.45, 1.65),
            "alpha": random.randint(14, 54),
            "phase": random.random() * math.tau,
            "streak": random.uniform(20, 58),
        }
        for _ in range(175)
    ]

    for frame_index in range(FRAMES):
        progress = frame_index / FRAMES
        frame = base.copy().convert("RGBA")

        star_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        star_draw = ImageDraw.Draw(star_layer)
        star_pan = progress * 70
        for star in stars:
            x, y = wrapped_position(star["x"], star["y"], star_pan * star["depth"], -star_pan * 0.08 * star["depth"])
            if -20 <= x <= WIDTH + 20 and 0 <= y <= HEIGHT * 0.64:
                twinkle = 0.8 + math.sin(progress * math.tau * 1.4 + star["twinkle"]) * 0.2
                alpha = max(0, min(180, round(star["alpha"] * twinkle)))
                star_draw.ellipse((x, y, x + star["size"], y + star["size"]), fill=(236, 246, 255, alpha))
                if star["size"] == 2:
                    star_draw.line((x - 2, y + 1, x + 4, y + 1), fill=(236, 246, 255, round(alpha * 0.25)), width=1)

        shade = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        shade_draw = ImageDraw.Draw(shade)
        shade_draw.rectangle((0, 0, WIDTH, HEIGHT), fill=(2, 7, 19, 16))
        shade_draw.rectangle((0, 0, round(WIDTH * 0.58), HEIGHT), fill=(2, 7, 19, 70))

        sand_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        sand_draw = ImageDraw.Draw(sand_layer)
        for grain in sand:
            x = (grain["x"] + frame_index * grain["speed"]) % (WIDTH + 90) - 45
            y = grain["y"] + math.sin(progress * math.tau * 2.2 + grain["phase"]) * grain["lift"]
            size = grain["size"]
            alpha = round(grain["alpha"] * (0.78 + math.sin(progress * math.tau * 1.6 + grain["phase"]) * 0.22))
            sand_draw.ellipse((x, y, x + size * 5.2, y + size * 1.4), fill=(238, 198, 139, alpha))
            sand_draw.line(
                (x - grain["streak"], y + 2, x + 16, y - 1),
                fill=(238, 198, 139, round(alpha * 0.28)),
                width=1,
            )
        sand_layer = sand_layer.filter(ImageFilter.GaussianBlur(0.35))

        frame.alpha_composite(star_layer)
        frame.alpha_composite(sand_layer)
        frame.alpha_composite(shade)
        frames.append(frame.convert("P", palette=Image.Palette.ADAPTIVE, colors=192))

    frames[0].save(
        OUTPUT,
        save_all=True,
        append_images=frames[1:],
        duration=DURATION_MS,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(OUTPUT)


if __name__ == "__main__":
    main()

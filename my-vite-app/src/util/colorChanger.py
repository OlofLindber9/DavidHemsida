from PIL import Image

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def replace_color(image_path, old_hex, new_hex, output_path):
    old_rgb = hex_to_rgb(old_hex)
    new_rgb = hex_to_rgb(new_hex)

    img = Image.open(image_path).convert("RGB")
    pixels = img.load()

    width, height = img.size
    for y in range(height):
        for x in range(width):
            if pixels[x, y] == old_rgb:
                pixels[x, y] = new_rgb

    img.save(output_path)
    print(f"Saved new image to {output_path}")

# Example usage:
replace_color(
    image_path="../assets/blackandWhite_2.jpg",         # path to your original image
    old_hex="#000000",              # hex color to replace
    new_hex="#cab4a2",              # new hex color
    output_path="output.jpg"        # path to save result
)

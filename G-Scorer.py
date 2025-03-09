from transformers import AutoModelForImageClassification, AutoImageProcessor
import torch
from PIL import Image

# Load the preprocessor and model
preprocessor = AutoImageProcessor.from_pretrained("./artwork-scorer/")
model = AutoModelForImageClassification.from_pretrained("./artwork-scorer/")

# Function to score an image
def score_artwork(image_path):
    # Load and preprocess the image
    image = Image.open(image_path)
    inputs = preprocessor(images=image, return_tensors="pt")

    # Run inference
    with torch.no_grad():
        outputs = model(**inputs)

    # Get scores from the model outputx
    scores = outputs.logits.squeeze()

    # Process scores according to model design
    # This might need adjustment based on the model's specific output format
    return scores.numpy()

# Example usage
if __name__ == "__main__":
    image_path = r"C:\Users\G\Desktop\G-Netron\cat.png"
    scores = score_artwork(image_path)
    print(f"Artwork score: {scores}")

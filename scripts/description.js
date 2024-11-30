const info = {
  0: "Labrador Retriever",
  1: "Golden Retriever",
  2: "Shih Tzu",
  3: "Papillon",
  4: "Australian Shepherd",
  5: "Cockapoo",
  6: "Golden Retriever",
  7: "Sighthound",
  8: "American Pitbull Terrier",
  9: "Beagle",
  10: "Golden Retriever",
  11: "Poodle",
  12: "Golden Retriever",
  13: "Bulldog",
  14: "Siberian Husky",
  15: "Labrador Retriever",
};

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      const description = info[index];
      showDescription(description);
    });
  });
});

function showDescription(description) {
  const descriptionDiv = document.getElementById("description");
  const descriptionText = document.getElementById("description-text");

  descriptionText.textContent = description;
  descriptionDiv.style.display = "block";
}

function closeDescription() {
  const descriptionDiv = document.getElementById("description");
  descriptionDiv.style.display = "none";
}

const parameters = new URLSearchParams(window.location.search);
const product = products.find((item) => item.id === parameters.get("product"));
const rating = parameters.get("rating");
const installationDate = parameters.get("installation-date");
const title = document.querySelector("#confirmation-title");
const message = document.querySelector("#confirmation-message");

// A direct visit without the required form values must not count as a review.
function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

if (product && /^[1-5]$/.test(rating || "") && isValidDate(installationDate)) {
  title.textContent = "Thank you for your review!";
  message.textContent = "Your product review has been submitted successfully.";
  document.querySelector("#review-details").hidden = false;
  document.querySelector("#submitted-product").textContent = product.name;
  document.querySelector("#submitted-rating").textContent = `${rating} out of 5 stars`;
  document.querySelector("#submitted-date").textContent = installationDate;

  const featureLabels = {
    "durability": "Durability",
    "ease-of-use": "Ease of Use",
    "performance": "Performance",
    "design": "Design"
  };
  const selectedFeatures = parameters.getAll("features")
    .filter((feature) => Object.hasOwn(featureLabels, feature))
    .map((feature) => featureLabels[feature]);
  document.querySelector("#submitted-features").textContent = selectedFeatures.join(", ") || "None selected";

  const writtenReview = (parameters.get("review") || "").trim();
  const userName = (parameters.get("user-name") || "").trim();
  if (writtenReview) {
    document.querySelector("#written-summary").hidden = false;
    document.querySelector("#submitted-review").textContent = writtenReview;
  }
  if (userName) {
    document.querySelector("#name-summary").hidden = false;
    document.querySelector("#submitted-name").textContent = userName;
  }

  // Increment on each successful confirmation-page load, as requested.
  // localStorage persists across visits in the same browser and origin.
  let reviewCount = 1;
  try {
    const savedCount = Number(localStorage.getItem("reviewCount"));
    const previousCount = Number.isSafeInteger(savedCount) && savedCount >= 0 ? savedCount : 0;
    reviewCount = previousCount + 1;
    localStorage.setItem("reviewCount", String(reviewCount));
  } catch {
    // Keep the confirmation usable when browser storage is unavailable.
    const storageMessage = document.querySelector("#storage-message");
    storageMessage.textContent = "Browser storage is unavailable. This review is confirmed, but the count cannot be saved.";
    storageMessage.hidden = false;
  }
  document.querySelector("#review-count").textContent = reviewCount;
} else {
  title.textContent = "Start with the review form";
  message.textContent = "Choose a product, rating, and installation date to submit a review.";
  document.querySelector(".confirmation-icon").textContent = "☆";
}

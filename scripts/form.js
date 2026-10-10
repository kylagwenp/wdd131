const productSelect = document.querySelector("#product-name");

// The assignment's JavaScript instructions specify product IDs as values.
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

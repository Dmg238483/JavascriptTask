const root = document.getElementById("root");
root.style.backgroundColor = "#f9f9f9";
root.style.fontFamily = "'Arial', sans-serif";
root.style.padding = "20px";
root.style.background = "linear-gradient(to right, #f9f9f9, #ececec)";

// local storage
document.addEventListener("click", function () {
  localStorage.setItem("username", "Danish");
  console.log(localStorage.getItem("username"));
});
//  Doubt in session storage
document.addEventListener("click", function () {
  sessionStorage.setItem("username", "Sheikh");

  console.log(sessionStorage.getItem("username"));
});


document.cookie = "username=sem";
alert(document.cookie);

//
const rightButton = document.createElement("button");
rightButton.textContent = "Add Product";
rightButton.style.position = "absolute";
rightButton.style.top = "10px";
rightButton.style.right = "20px";
rightButton.style.padding = "10px 15px";
rightButton.style.backgroundColor = "#007BFF";
rightButton.style.color = "#fff";

rightButton.addEventListener("mouseover", () => {
  rightButton.style.backgroundColor = "#E74C3C";
});

rightButton.addEventListener("mouseout", () => {
  rightButton.style.backgroundColor = "#007BFF";
});

root.appendChild(rightButton);

// Create the Modal for Input Form
const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.5)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.transition = "opacity 0.3s ease";

// Modal Content (Form)
const modalContent = document.createElement("div");
modalContent.style.background = "#fff";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "12px";
modalContent.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
modalContent.style.textAlign = "center";
modalContent.style.width = "40%";

// Create Form Fields
const formTitle = document.createElement("h2");
formTitle.textContent = "Add a New Product";
formTitle.style.color = "#333";
formTitle.style.marginBottom = "10px";

const nameInput = document.createElement("input");
nameInput.placeholder = "Product Name";
nameInput.style.width = "90%";
nameInput.style.padding = "8px";
nameInput.style.margin = "8px 0";
nameInput.style.border = "1px solid #ccc";
nameInput.style.borderRadius = "5px";

const descriptionInput = document.createElement("textarea");
descriptionInput.placeholder = "Product Description";
descriptionInput.style.width = "90%";
descriptionInput.style.padding = "8px";
descriptionInput.style.margin = "8px 0";
descriptionInput.style.border = "1px solid #ccc";
descriptionInput.style.borderRadius = "5px";
descriptionInput.style.resize = "none";

const priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.placeholder = "Product Price";
priceInput.style.width = "90%";
priceInput.style.padding = "8px";
priceInput.style.margin = "8px 0";
priceInput.style.border = "1px solid #ccc";
priceInput.style.borderRadius = "5px";

const imageInput = document.createElement("input");
imageInput.placeholder = "Image URL";
imageInput.style.width = "90%";
imageInput.style.padding = "8px";
imageInput.style.margin = "8px 0";
imageInput.style.border = "1px solid #ccc";
imageInput.style.borderRadius = "5px";

// Submit Button
const submitButton = document.createElement("button");
submitButton.textContent = "Add Product";
submitButton.style.marginTop = "10px";
submitButton.style.padding = "8px 15px";
submitButton.style.backgroundColor = "#007BFF";
submitButton.style.color = "#fff";
submitButton.style.border = "none";
submitButton.style.borderRadius = "5px";
submitButton.style.cursor = "pointer";

submitButton.addEventListener("mouseover", () => {
  submitButton.style.backgroundColor = "#0056b3";
});

submitButton.addEventListener("mouseout", () => {
  submitButton.style.backgroundColor = "#007BFF";
});
submitButton.addEventListener("click", () => {
  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: parseFloat(priceInput.value),
    image: imageInput.value,
  };

  if (!newProduct.name || !newProduct.price || !newProduct.image) {
    alert("Please fill in all required fields.");
    return;
  }

  allProducts.unshift(newProduct);
  renderCurrentPage();
});

// Close Button
const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.style.marginTop = "10px";
closeButton.style.marginLeft = "10px";
closeButton.style.padding = "8px 15px";
closeButton.style.backgroundColor = "#E74C3C";
closeButton.style.color = "#fff";
closeButton.style.border = "none";
closeButton.style.borderRadius = "5px";
closeButton.style.cursor = "pointer";

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Append Form Elements to Modal Content
modalContent.appendChild(formTitle);
modalContent.appendChild(nameInput);
modalContent.appendChild(descriptionInput);
modalContent.appendChild(priceInput);
modalContent.appendChild(imageInput);
modalContent.appendChild(submitButton);
modalContent.appendChild(closeButton);
modal.appendChild(modalContent);

// Append Modal to Body
document.body.appendChild(modal);

// Show Modal on Button Click
rightButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Heading
const h1 = document.createElement("h1");
h1.textContent = "Your Ultimate Shopping Destination";
h1.style.color = "#333";
h1.style.textAlign = "center";
h1.style.fontSize = "35px";
h1.style.marginBottom = "20px";
root.appendChild(h1);

// Search Bar
const searchBar = document.createElement("input");
searchBar.style.width = "50%";
searchBar.style.height = "40px";
searchBar.style.padding = "10px 15px";
searchBar.style.margin = "20px auto";
searchBar.style.display = "block";
searchBar.style.fontSize = "16px";
searchBar.style.border = "1px solid #ddd";
searchBar.style.borderRadius = "25px"; // Round waley corner
searchBar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
searchBar.style.outline = "none";
searchBar.style.transition = "all 0.3s ease";
searchBar.placeholder = "Search for products...";

searchBar.addEventListener("focus", () => {
  searchBar.style.borderColor = "#4CAF50";
  searchBar.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
});

searchBar.addEventListener("blur", () => {
  searchBar.style.borderColor = "#ddd";
  searchBar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
});

searchBar.addEventListener("input", (event) => {
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().startsWith(event.target.value.toLowerCase())
  );
  currentPage = 1;
  allProducts = filteredProducts;
  renderCurrentPage();
});

root.appendChild(searchBar);
//

// Sorting Buttons Container
const sortingDiv = document.createElement("div");
sortingDiv.style.textAlign = "center";
sortingDiv.style.margin = "20px";
root.appendChild(sortingDiv);

// Create Sorting Buttons
const sortByNameButton = document.createElement("button");
sortByNameButton.textContent = "Sort by Names";
sortByNameButton.style.margin = "0 10px";
sortByNameButton.style.padding = "8px 12px";
sortByNameButton.style.backgroundColor = "#007BFF";
sortByNameButton.style.color = "#fff";
sortByNameButton.style.border = "none";
sortByNameButton.style.borderRadius = "5px";
sortByNameButton.style.cursor = "pointer";

const sortByPriceButton = document.createElement("button");
sortByPriceButton.textContent = "Sort by Prize";
sortByPriceButton.style.margin = "0 10px";
sortByPriceButton.style.padding = "8px 12px";
sortByPriceButton.style.backgroundColor = "#007BFF";
sortByPriceButton.style.color = "#fff";
sortByPriceButton.style.border = "none";
sortByPriceButton.style.borderRadius = "5px";
sortByPriceButton.style.cursor = "pointer";

sortByNameButton.addEventListener("click", () => {
  allProducts.sort((a, b) => a.name.localeCompare(b.name));
  currentPage = 1;
  renderCurrentPage();
});

sortByPriceButton.addEventListener("click", () => {
  allProducts.sort((a, b) => a.price - b.price);
  currentPage = 1;
  renderCurrentPage();
});

sortingDiv.appendChild(sortByNameButton);
sortingDiv.appendChild(sortByPriceButton);
// Pagination
const paginationDiv = document.createElement("div");
paginationDiv.style.textAlign = "center";
paginationDiv.style.margin = "20px";
root.appendChild(paginationDiv);

let allProducts = [];
let currentPage = 1;
const pageSize = 5;

function createProductCards(products) {
  const existingContainer = document.querySelector(".product-container");
  if (existingContainer) existingContainer.remove();

  const container = document.createElement("div");
  container.className = "product-container";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "space-around";
  container.style.gap = "20px";
  products.forEach((item) => {
    const card = document.createElement("div");
    card.style.width = "18%";
    card.style.backgroundColor = "#fff";
    card.style.border = "1px solid #ddd";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    card.style.overflow = "hidden";
    card.style.textAlign = "center";
    card.style.transition = "all 0.3s ease";

    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
    });

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderBottom = "1px solid #ddd";

    const title = document.createElement("h3");
    title.textContent = item.name;
    title.style.fontSize = "18px";
    title.style.margin = "10px";

    const description = document.createElement("p");
    description.textContent = item.description;
    description.style.display = "none";
    description.style.fontSize = "14px";
    description.style.color = "#555";
    description.style.margin = "10px 15px";

    const price = document.createElement("p");
    price.textContent = `$${item.price}`;
    price.style.fontWeight = "bold";
    price.style.color = "#4CAF50";
    price.style.marginBottom = "10px";

    const button = document.createElement("button");
    button.textContent = "Description";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "8px 15px";
    button.style.borderRadius = "8px";
    button.style.cursor = "pointer";
    button.style.marginBottom = "10px";
    button.style.transition = "background-color 0.3s ease";

    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#45A049";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#4CAF50";
    });

    button.addEventListener("click", () => {
      if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "Hide Description";
      } else {
        description.style.display = "none";
        button.textContent = "Description";
      }
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);
    container.appendChild(card);
  });
  root.appendChild(container);
}

function updatePagination() {
  paginationDiv.innerHTML = "";

  const totalPages = Math.ceil(allProducts.length / pageSize);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.style.margin = "0 10px";
  prevButton.style.padding = "8px 12px";
  prevButton.style.backgroundColor = "#4CAF50";
  prevButton.style.color = "#fff";
  prevButton.style.border = "none";
  prevButton.style.borderRadius = "5px";
  prevButton.style.cursor = "pointer";

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCurrentPage();
    }
  });

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.style.margin = "0 10px";
  nextButton.style.padding = "8px 12px";
  nextButton.style.backgroundColor = "#4CAF50";
  nextButton.style.color = "#fff";
  nextButton.style.border = "none";
  nextButton.style.borderRadius = "5px";
  nextButton.style.cursor = "pointer";

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCurrentPage();
    }
  });

  paginationDiv.appendChild(prevButton);
  paginationDiv.appendChild(nextButton);
}

function renderCurrentPage() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentProducts = allProducts.slice(start, end);
  createProductCards(currentProducts);
  updatePagination();
}

function fetchData() {
  fetch("./products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      allProducts = data.products;
      renderCurrentPage();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

fetchData();

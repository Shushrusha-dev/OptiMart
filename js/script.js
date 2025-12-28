 document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "R1", price: 1500, type: "Full Rim",shape:"Round", Fcolor: "Grey",fsize: "Medium",Gender:"Unisex",Width:"Medium",Gcolor:"Blue",Ptype:"Progressive",Weight:"Light",image: "img/template/R1.webp" },
    { id: 2, name: "Product 2", price: 70, type: "Full Rim",shape:"Round", brand: "Brand B", color: "Blue", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 90, type: "Half Rim",shape:"Cat Eye", brand: "Brand A", color: "Red", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 120, type: "Full Rim",shape:"Round", brand: "Brand C", color: "Green", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 150, type: "Rimless",shape:"Cat Eye", brand: "Brand D", color: "Black", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: 180, type: "Rimless",shape:"Round", brand: "Brand E", color: "Blue", image: "https://via.placeholder.com/150" },
	{ id: 7, name: "Product 6", price: 180, type: "Rimless",shape:"Round", brand: "Brand E", color: "Blue", image: "https://via.placeholder.com/150" },
  ];

  const productGrid = document.querySelector(".product-grid");

  function renderProducts(productsToRender) {
    productGrid.innerHTML = productsToRender
      .map(
        (product) => `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Price: Rs${product.price}</p>
            
          </div>
        `
      )
      .join("");
  }

  renderProducts(products); // Display all products by default

  const checkboxes = document.querySelectorAll(".filter-section input");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Collect selected filters grouped by category
      const selectedFilters = Array.from(checkboxes).reduce((filters, checkbox) => {
        if (checkbox.checked) {
          const filterType = checkbox.dataset.filter; // e.g., "type", "brand", "color"
          if (!filters[filterType]) {
            filters[filterType] = [];
          }
          filters[filterType].push(checkbox.value.toLowerCase());
        }
        return filters;
      }, {});

      // Filter products
      const filteredProducts = products.filter((product) => {
        // Check that the product matches all selected filters in every category
        return Object.keys(selectedFilters).every((filterType) => {
          return selectedFilters[filterType].includes(product[filterType].toLowerCase());
        });
      });

      // If no filters are selected, display all products
      renderProducts(Object.keys(selectedFilters).length > 0 ? filteredProducts : products);
    });
  });
});

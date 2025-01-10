// Fetch and render featured collection
fetch("/data/featured-collection.json")
  .then((response) => response.json())
  .then((products) => {
    const productsContainer = document.getElementById(
      "featured-collection-container"
    );

    // Loop through the products array and render each product card
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-3">
          <div class="card product-card">
            <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }" />
            <div class="card-body d-flex justify-content-between">
              <div class="d-flex flex-column left-section">
                <h5 class="card-title" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.name}</h5>
                <p class="card-text" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.price}</p>
              </div>
              <div class="right-section">
                <img src="${
                  product.wishlistIcon
                }" alt="Add to Wishlist" class="px-2" role="button">
                <img src="${product.bagIcon}" alt="Add to Bag" role="button">
              </div>
            </div>
          </div>
        </div>
      `;

      // Append the product card to the container
      productsContainer.innerHTML += productCard;
    });
  })
  .catch((error) =>
    console.error("Error loading featured collection: ", error)
  );

// Fetch and render new arrivals for women
fetch("/data/new-arrivals-women-collection.json")
  .then((response) => response.json())
  .then((products) => {
    const productsContainer = document.getElementById(
      "new-arrivals-women-container"
    );

    // Loop through the products array and render each product card
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-3">
          <div class="card product-card">
            <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }" />
            <div class="card-body d-flex justify-content-between">
              <div class="d-flex flex-column left-section">
                <h5 class="card-title" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.name}</h5>
                <p class="card-text" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.price}</p>
              </div>
              <div class="right-section">
                <img src="${
                  product.wishlistIcon
                }" alt="Add to Wishlist" class="px-2" role="button">
                <img src="${product.bagIcon}" alt="Add to Bag" role="button">
              </div>
            </div>
          </div>
        </div>
      `;

      // Append the product card to the container
      productsContainer.innerHTML += productCard;
    });
  })
  .catch((error) =>
    console.error("Error loading new arrivals for women: ", error)
  );

// Fetch and render new arrivals for men
fetch("/data/new-arrivals-men-collection.json")
  .then((response) => response.json())
  .then((products) => {
    const productsContainer = document.getElementById(
      "new-arrivals-men-container"
    );

    // Loop through the products array and render each product card
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-3">
          <div class="card product-card">
            <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }" />
            <div class="card-body d-flex justify-content-between">
              <div class="d-flex flex-column left-section">
                <h5 class="card-title" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.name}</h5>
                <p class="card-text" style="${
                  product.isAdded && "color: #6E1719;"
                }">${product.price}</p>
              </div>
              <div class="right-section">
                <img src="${
                  product.wishlistIcon
                }" alt="Add to Wishlist" class="px-2" role="button">
                <img src="${product.bagIcon}" alt="Add to Bag" role="button">
              </div>
            </div>
          </div>
        </div>
      `;

      // Append the product card to the container
      productsContainer.innerHTML += productCard;
    });
  })
  .catch((error) =>
    console.error("Error loading new arrivals for men: ", error)
  );

// Fetch and render product categories
fetch("/data/categories.json")
  .then((response) => response.json())
  .then((products) => {
    const categoriesContainer = document.getElementById("categories-container");

    // Loop through the products array and render each category card
    products.forEach((product) => {
      const productCard = `
        <div class="col-md-3">
          <div class="card product-card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}" />
            <div class="card-body d-flex justify-content-center">
              <h5 class="card-title">${product.name}</h5>
            </div>
          </div>
        </div>
      `;

      // Append the category card to the container
      categoriesContainer.innerHTML += productCard;
    });
  })
  .catch((error) => console.error("Error loading categories: ", error));

// Fetch and render blogs
fetch("/data/blogs-data.json")
  .then((response) => response.json())
  .then((blogs) => {
    const blogsContainer = document.getElementById("blogs-container");

    // Loop through the blogs array and render each blog card
    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card blog-card">
          <img src="${blog.image}" class="card-img-top" alt="${blog.title}" />
          <div class="card-body">
            <h5 class="blog-title fw-bold">${blog.title}</h5>
            <p class="blog-subtext fw-normal my-4">${blog.subtext}</p>
            <span class="read-more fw-bold text-uppercase">Read More</span>
          </div>
        </div>
      `;

      blogsContainer.appendChild(card);
    });

    // Add toggle functionality for "Read More / Read Less" in blog cards
    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach((card) => {
      const subtext = card.querySelector(".blog-subtext");
      const readMore = card.querySelector(".read-more");

      // Toggle text content and expanded state
      readMore.addEventListener("click", () => {
        subtext.classList.toggle("expanded");
        readMore.classList.toggle("less");
        readMore.textContent =
          readMore.textContent === "Read More" ? "Read Less" : "Read More";
      });
    });
  })
  .catch((error) => console.error("Error loading blogs: ", error));

// Fetch and render testimonials
fetch("/data/testimonials-data.json")
  .then((response) => response.json())
  .then((testimonials) => {
    const testimonialContainer = document.getElementById(
      "testimonials-container"
    );

    // Loop through the testimonials array and render each testimonial card
    testimonials.forEach((testimonial) => {
      const testimonialCard = `
        <div class="col-md-3">
          <div class="testimonial-card p-4" role="article">
            <div class="mb-3">
              <span class="stars d-flex align-items-center" aria-label="5 out of 5 stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
              <div class="testimonial-content my-5">
                <p class="mb-3" title="${testimonial.review}">${testimonial.review}</p>
              </div>
              <div class="testimonial-footer">
                <p class="fw-bold mb-1 user-name">${testimonial.name}</p>
                <p class="text-muted user-designation">${testimonial.designation}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      // Append the testimonial card to the container
      testimonialContainer.innerHTML += testimonialCard;
    });
  })
  .catch((error) => console.error("Error loading testimonials: ", error));

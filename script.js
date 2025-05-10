let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let cartItemsContainer = document.querySelector(".cart-items-container");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  cartItemsContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};

// Remove cart item when clicking the close icon
document.querySelectorAll(".cart-item .fa-times").forEach((closeBtn) => {
  closeBtn.onclick = () => {
    closeBtn.parentElement.remove(); // Remove the cart-item div
  };
});

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};
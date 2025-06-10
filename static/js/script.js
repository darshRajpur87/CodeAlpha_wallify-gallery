// ======= Modal for Image Upload ======= //
const modal = document.getElementById("uploadModal");
const addImageBtn = document.querySelector(".join-btn");
const closeModalBtn = document.querySelector(".close-modal");

addImageBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// ======= Add Uploaded Image to Gallery ======= //
const imageInput = document.getElementById("imageUpload");
const categorySelect = document.getElementById("imageCategory");
const addImagesBtn = document.getElementById("addImages");
const gallery = document.querySelector(".gallery");

addImagesBtn.addEventListener("click", () => {
  const file = imageInput.files[0];
  const category = categorySelect.value;

  if (!file || !category) {
    alert("Please choose an image and a category.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery-item");
    newItem.setAttribute("data-category", category.toLowerCase());
    newItem.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" />`;
    gallery.appendChild(newItem);
    modal.style.display = "none";
  };
  reader.readAsDataURL(file);
});

// ======= Filter Tags ======= //
const filterButtons = document.querySelectorAll(".filter-tags button");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.innerText.toLowerCase().replace(" ", "");
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
      if (
        filter === "8kwallpaper" ||
        filter === "desktopbackgrounds" ||
        filter === "desktopwallpaper"
      ) {
        item.style.display = "block";
      } else if (item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// ======= Lightbox Viewer ======= //
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".lightbox .close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function openLightbox(index) {
  const images = document.querySelectorAll(".gallery-item img");
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

function updateLightbox(indexChange) {
  const images = document.querySelectorAll(".gallery-item img");
  currentIndex = (currentIndex + indexChange + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const images = [...document.querySelectorAll(".gallery-item img")];
    const index = images.indexOf(e.target);
    openLightbox(index);
  }
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => updateLightbox(1));
prevBtn.addEventListener("click", () => updateLightbox(-1));

// ======= Search Functionality ======= //
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".gallery-item");

  items.forEach((item) => {
    const altText = item.querySelector("img").alt.toLowerCase();
    item.style.display = altText.includes(term) ? "block" : "none";
  });
});

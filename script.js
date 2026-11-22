
function showImage(imageSrc) {
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;
    lightbox.classList.add("active");
}

function closeImage() {
    const lightbox = document.getElementById("imageLightbox");

    lightbox.classList.remove("active");
}
